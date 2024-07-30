import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/Collections'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class CollectionsStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "CollectionsStore",
			variables: false,
		})
	}
}

export async function load_Collections(params) {
	await initClient()

	const store = new CollectionsStore()

	await store.fetch(params)

	return {
		Collections: store,
	}
}
