import { CreateCustomerAddressMutationStore } from "$houdini";
import { error, type RequestEvent, type RequestHandler } from "@sveltejs/kit";

export const POST = (async (event: RequestEvent) => {
	const address = await event.request.json()
	const store = new CreateCustomerAddressMutationStore()
	const order = await store.mutate({ input: address }, { event })
	const createCustomerAddress = order.data?.createCustomerAddress

	if (!createCustomerAddress) {
		throw error(500, { message: 'Failed to create customer addres ', code: 'INTERNAL_SERVER_ERROR' });
	}

	return new Response(JSON.stringify(createCustomerAddress), { status: 200 });
}) satisfies RequestHandler;