import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/Products'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class ProductsStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "ProductsStore",
			variables: false,
		})
	}
}

export async function load_Products(params) {
	await initClient()

	const store = new ProductsStore()

	await store.fetch(params)

	return {
		Products: store,
	}
}
