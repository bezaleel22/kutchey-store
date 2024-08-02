import { ActiveCustomerAddressesStore, GetOrderPaymentMethodsStore, type ActiveCustomerAddresses$result } from "$houdini";
import { error, json, type RequestEvent, type RequestHandler } from "@sveltejs/kit";

export const POST = (async (event: RequestEvent) => {
	const { id } = await event.request.json()
	if (!id) { throw error(400, 'bad format') }

	const addresStore = new ActiveCustomerAddressesStore()
	const paymentStore = new GetOrderPaymentMethodsStore()
	const promises = Promise.all([
		addresStore.fetch({ event }),
		paymentStore.fetch({ event })
	])

	const [addresses, paymentOptions] = await promises
	if (!addresses && !paymentOptions) {
		throw error(500, { message: `Failed to adresses and paymetOptions`, code: 'INTERNAL_SERVER_ERROR' });
	}

	const contacts = getContacts(addresses.data)
	return json({ contacts, paymentOptions })

}) satisfies RequestHandler;


function getContacts(result: ActiveCustomerAddresses$result | null) {
	const addresses = result?.activeCustomer?.addresses
	const contacts = []
	if (addresses) {
		for (const address of addresses) {
			contacts.push({
				name: address.fullName,
				address: {
					line1: address.streetLine1,
					line2: address.streetLine2,
					city: address.city,
					state: address.province,
					postal_code: address.postalCode,
					country: address.country.code.toUpperCase(),
				}
			})
		}
		return contacts
	}


}