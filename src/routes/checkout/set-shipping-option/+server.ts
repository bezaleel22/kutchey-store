import { OrderDetailStore, SetOrderShippingMethodStore } from "$houdini";
import { error, json, type RequestEvent, type RequestHandler } from "@sveltejs/kit";
import { get } from "svelte/store";

export const POST = (async (event: RequestEvent) => {
	const { id } = await event.request.json()
	if (!id) { throw error(400, 'bad format') }

	const shippingStore = new SetOrderShippingMethodStore()
	const result = await shippingStore.mutate(id, { event })
	if (!result.data) {
		throw error(500, { message: `Failed to set shipping method`, code: 'INTERNAL_SERVER_ERROR' });
	}
	const orderStore = new OrderDetailStore().get(result.data.setOrderShippingMethod)
	const setOrderShippingMethod = get(orderStore)

	if (!setOrderShippingMethod) {
		throw error(500, { message: `Failed to get order details`, code: 'INTERNAL_SERVER_ERROR' });
	}

	return json(setOrderShippingMethod);

}) satisfies RequestHandler;