import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/GetOrderPaymentMethods'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class GetOrderPaymentMethodsStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "GetOrderPaymentMethodsStore",
			variables: false,
		})
	}
}

export async function load_GetOrderPaymentMethods(params) {
	await initClient()

	const store = new GetOrderPaymentMethodsStore()

	await store.fetch(params)

	return {
		GetOrderPaymentMethods: store,
	}
}
