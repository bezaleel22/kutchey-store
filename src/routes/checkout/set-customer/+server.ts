import { SetCustomerForOrderStore, type CreateCustomerInput } from "$houdini";
import { error, type RequestEvent, type RequestHandler } from "@sveltejs/kit";

export const POST = (async (event: RequestEvent) => {
	const customer: CreateCustomerInput = await event.request.json()
	const store = new SetCustomerForOrderStore()
	const order = await store.mutate({ input: customer }, { event })
	const setCustomerForOrder = order.data?.setCustomerForOrder

	if (!setCustomerForOrder) {
		throw error(500, { message: 'Failed to get shipping methods ', code: 'INTERNAL_SERVER_ERROR' });
	}

	return new Response(JSON.stringify(setCustomerForOrder), { status: 200 });

}) satisfies RequestHandler;