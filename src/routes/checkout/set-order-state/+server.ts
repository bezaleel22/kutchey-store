import { OrderDetailStore, TransitionOrderToStateStore } from "$houdini";
import { error, json, type RequestEvent, type RequestHandler } from "@sveltejs/kit";
import { get } from "svelte/store";

export const POST = (async (event: RequestEvent) => {
	const { state } = await event.request.json()

	const store = new TransitionOrderToStateStore()
	const result = await store.mutate({ state }, { event })

	if (!result.data) {
		throw error(500, { message: `Failed to transition order to ${state} state`, code: 'INTERNAL_SERVER_ERROR' });
	}

	const detailStore = new OrderDetailStore().get(result.data.transitionOrderToState)
	const transitionOrderToState = get(detailStore)

	if (!transitionOrderToState) {
		throw error(500, { message: `Failed to get order details`, code: 'INTERNAL_SERVER_ERROR' });
	}

	return json(transitionOrderToState);

}) satisfies RequestHandler;