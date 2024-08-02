import { SetOrderShippingMethodStore } from "$houdini";
import { error, type RequestEvent, type RequestHandler } from "@sveltejs/kit";

export const POST = (async (event: RequestEvent) => {
	const { id } = await event.request.json()
	if (!id) { throw error(400, 'bad format') }
	
	const store = new SetOrderShippingMethodStore()
	const order = await store.mutate(id, { event })
	const setOrderShippingMethod = order.data?.setOrderShippingMethod

	if (!setOrderShippingMethod) {
		throw error(500, { message: `Failed to set shipping method`, code: 'INTERNAL_SERVER_ERROR' });
	}

	return new Response(JSON.stringify(setOrderShippingMethod), { status: 200 });

}) satisfies RequestHandler;