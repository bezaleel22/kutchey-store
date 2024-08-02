import { SetOrderShippingAddressStore } from "$houdini";
import { error, type RequestEvent, type RequestHandler } from "@sveltejs/kit";

export const POST = (async (event: RequestEvent) => {
	const address = await event.request.json()
	const store = new SetOrderShippingAddressStore()
	const order = await store.mutate({ input: address }, { event })
	const shippingMethods = order.data?.setOrderShippingAddress

	if (!shippingMethods) {
		throw error(500, { message: 'Failed to get shipping methods ', code: 'INTERNAL_SERVER_ERROR' });
	}

	return new Response(JSON.stringify(shippingMethods), { status: 200 });

}) satisfies RequestHandler;