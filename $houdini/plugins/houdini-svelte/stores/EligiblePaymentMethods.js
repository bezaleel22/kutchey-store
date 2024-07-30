import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/EligiblePaymentMethods'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class EligiblePaymentMethodsStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "EligiblePaymentMethodsStore",
			variables: false,
		})
	}
}

export async function load_EligiblePaymentMethods(params) {
	await initClient()

	const store = new EligiblePaymentMethodsStore()

	await store.fetch(params)

	return {
		EligiblePaymentMethods: store,
	}
}
