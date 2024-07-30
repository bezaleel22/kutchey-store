import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/Promotions'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class PromotionsStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "PromotionsStore",
			variables: false,
		})
	}
}

export async function load_Promotions(params) {
	await initClient()

	const store = new PromotionsStore()

	await store.fetch(params)

	return {
		Promotions: store,
	}
}
