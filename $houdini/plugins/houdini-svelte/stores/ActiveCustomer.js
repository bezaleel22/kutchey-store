import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/ActiveCustomer'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class ActiveCustomerStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "ActiveCustomerStore",
			variables: false,
		})
	}
}

export async function load_ActiveCustomer(params) {
	await initClient()

	const store = new ActiveCustomerStore()

	await store.fetch(params)

	return {
		ActiveCustomer: store,
	}
}
