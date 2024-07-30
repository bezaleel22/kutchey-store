import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/Product'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class ProductStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "ProductStore",
			variables: false,
		})
	}
}

export async function load_Product(params) {
	await initClient()

	const store = new ProductStore()

	await store.fetch(params)

	return {
		Product: store,
	}
}
