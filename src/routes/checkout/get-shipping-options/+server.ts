import { EligibleShippingMethodsStore } from "$houdini";
import type { ShippingMethod } from "$lib/types";
import { error, json, type RequestEvent, type RequestHandler } from "@sveltejs/kit";

export const GET = (async (event: RequestEvent) => {

	const store = new EligibleShippingMethodsStore()
	const order = await store.fetch({ event })
	const shippingMethods = order.data?.eligibleShippingMethods

	if (!shippingMethods) {
		throw error(500, { message: 'Failed to get shipping methods ', code: 'INTERNAL_SERVER_ERROR' });
	}

	return json(shippingMethods as ShippingMethod[])

}) satisfies RequestHandler;