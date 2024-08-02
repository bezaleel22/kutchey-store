import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/GetOrderShippingMethods'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class GetOrderShippingMethodsStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "GetOrderShippingMethodsStore",
			variables: false,
		})
	}
}

export async function load_GetOrderShippingMethods(params) {
	await initClient()

	const store = new GetOrderShippingMethodsStore()

	await store.fetch(params)

	return {
		GetOrderShippingMethods: store,
	}
}
