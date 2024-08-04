import { OrderDetailStore, SetCustomerForOrderStore, type CreateCustomerInput } from "$houdini";
import { error, json, type RequestEvent, type RequestHandler } from "@sveltejs/kit";
import { get } from "svelte/store";

export const POST = (async (event: RequestEvent) => {
	const customer: CreateCustomerInput = await event.request.json()
	const store = new SetCustomerForOrderStore()
	const order = await store.mutate({ input: customer }, { event })

	if (!order.data?.setCustomerForOrder) {
		throw error(500, { message: 'Failed to create customer ', code: 'INTERNAL_SERVER_ERROR' });
	}
	const detailStore = new OrderDetailStore().get(order.data.setCustomerForOrder)
	const setCustomerForOrder = get(detailStore)

	if (!setCustomerForOrder) {
		throw error(500, { message: 'Failed to create customer ', code: 'INTERNAL_SERVER_ERROR' });
	}

	return json(setCustomerForOrder);

}) satisfies RequestHandler;