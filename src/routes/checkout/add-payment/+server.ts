import { AddPaymentToOrderStore, OrderDetailStore } from "$houdini";
import { error, json, type RequestEvent, type RequestHandler } from "@sveltejs/kit";
import { get } from "svelte/store";

export const POST = (async (event: RequestEvent) => {
	const store = new AddPaymentToOrderStore()
	const result = await store.mutate({ input: { method: "standard-payment", metadata: {} } }, { event })
	if (!result.data) {
		throw error(500, { message: `Failed to set shipping method`, code: 'INTERNAL_SERVER_ERROR' });
	}
	const detailStore = new OrderDetailStore().get(result.data.addPaymentToOrder)
	const addPaymentToOrder = get(detailStore)

	if (!addPaymentToOrder) {
		throw error(500, { message: `Failed to get order details`, code: 'INTERNAL_SERVER_ERROR' });
	}

	return json(addPaymentToOrder);

}) satisfies RequestHandler;