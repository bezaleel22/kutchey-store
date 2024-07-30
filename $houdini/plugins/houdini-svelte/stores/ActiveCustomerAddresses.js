import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/ActiveCustomerAddresses'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class ActiveCustomerAddressesStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "ActiveCustomerAddressesStore",
			variables: false,
		})
	}
}

export async function load_ActiveCustomerAddresses(params) {
	await initClient()

	const store = new ActiveCustomerAddressesStore()

	await store.fetch(params)

	return {
		ActiveCustomerAddresses: store,
	}
}
