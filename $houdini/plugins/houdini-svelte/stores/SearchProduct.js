import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/SearchProduct'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class SearchProductStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "SearchProductStore",
			variables: true,
		})
	}
}

export async function load_SearchProduct(params) {
	await initClient()

	const store = new SearchProductStore()

	await store.fetch(params)

	return {
		SearchProduct: store,
	}
}
