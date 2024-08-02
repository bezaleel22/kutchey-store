import { GetOrderShippingMethodsStore } from "$houdini";
import { error, type RequestEvent, type RequestHandler } from "@sveltejs/kit";

export const GET = (async (event: RequestEvent) => {

	const store = new GetOrderShippingMethodsStore()
	const order = await store.fetch({ event })
	const shippingMethods = order.data?.eligibleShippingMethods

	if (!shippingMethods) {
		throw error(500, { message: 'Failed to get shipping methods ', code: 'INTERNAL_SERVER_ERROR' });
	}

	return new Response(JSON.stringify(shippingMethods), { status: 200 });

}) satisfies RequestHandler;