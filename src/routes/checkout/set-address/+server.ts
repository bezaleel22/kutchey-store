import { OrderDetailStore, SetOrderShippingAddressStore, type CreateAddressInput } from "$houdini";
import { error, json, type RequestEvent, type RequestHandler } from "@sveltejs/kit";
import { get } from "svelte/store";

export const POST = (async (event: RequestEvent) => {
	const address = await event.request.json() as CreateAddressInput
	const store = new SetOrderShippingAddressStore()
	const order = await store.mutate({ input: address }, { event })

	if (!order.data?.setOrderShippingAddress) {
		throw error(500, { message: 'Failed to create customer ', code: 'INTERNAL_SERVER_ERROR' });
	}
	const detailStore = new OrderDetailStore().get(order.data.setOrderShippingAddress)
	const shippingMethods = get(detailStore)

	if (!shippingMethods) {
		throw error(500, { message: 'Failed to create customer ', code: 'INTERNAL_SERVER_ERROR' });
	}

	return json(shippingMethods)

}) satisfies RequestHandler;