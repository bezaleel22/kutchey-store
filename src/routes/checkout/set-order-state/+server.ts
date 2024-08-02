import { TransitionOrderToStateStore } from "$houdini";
import { error, type RequestEvent, type RequestHandler } from "@sveltejs/kit";

export const POST = (async (event: RequestEvent) => {
	const { state } = await event.request.json()
	
	const store = new TransitionOrderToStateStore()
	const order = await store.mutate(state, { event })
	const transitionOrderToState = order.data?.transitionOrderToState

	if (!transitionOrderToState) {
		throw error(500, { message: `Failed to transition order to ${state} state`, code: 'INTERNAL_SERVER_ERROR' });
	}

	return new Response(JSON.stringify(transitionOrderToState), { status: 200 });

}) satisfies RequestHandler;