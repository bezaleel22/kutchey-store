import { ActiveCustomerAddressesStore, EligiblePaymentMethodsStore } from "$houdini";
import type { ShippingAddress } from "$lib/types";
import { error, json, type RequestEvent, type RequestHandler } from "@sveltejs/kit";

export const POST = (async (event: RequestEvent) => {
	const { id } = await event.request.json()
	if (!id) { throw error(400, 'bad format') }

	const addresStore = new ActiveCustomerAddressesStore()
	const paymentStore = new EligiblePaymentMethodsStore()
	const promises = Promise.all([
		addresStore.fetch({ event }),
		paymentStore.fetch({ event })
	])


	const [addresses, paymentOptions] = await promises
	if (!addresses.data?.activeCustomer && !paymentOptions) {
		throw error(500, { message: `Failed to adresses and paymetOptions`, code: 'INTERNAL_SERVER_ERROR' });
	}
	const addressBook = addresses.data?.activeCustomer?.addresses as ShippingAddress
	return json({ addressBook, paymentOptions: paymentOptions.data })

}) satisfies RequestHandler;


