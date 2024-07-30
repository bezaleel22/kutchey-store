import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/ActiveCustomerOrders'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class ActiveCustomerOrdersStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "ActiveCustomerOrdersStore",
			variables: false,
		})
	}
}

export async function load_ActiveCustomerOrders(params) {
	await initClient()

	const store = new ActiveCustomerOrdersStore()

	await store.fetch(params)

	return {
		ActiveCustomerOrders: store,
	}
}
