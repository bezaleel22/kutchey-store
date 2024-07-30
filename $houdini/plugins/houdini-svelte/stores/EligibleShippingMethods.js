import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/EligibleShippingMethods'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class EligibleShippingMethodsStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "EligibleShippingMethodsStore",
			variables: false,
		})
	}
}

export async function load_EligibleShippingMethods(params) {
	await initClient()

	const store = new EligibleShippingMethodsStore()

	await store.fetch(params)

	return {
		EligibleShippingMethods: store,
	}
}
