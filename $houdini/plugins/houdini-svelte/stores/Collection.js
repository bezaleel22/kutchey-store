import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/Collection'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class CollectionStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "CollectionStore",
			variables: false,
		})
	}
}

export async function load_Collection(params) {
	await initClient()

	const store = new CollectionStore()

	await store.fetch(params)

	return {
		Collection: store,
	}
}
