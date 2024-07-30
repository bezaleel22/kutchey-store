import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/ArderByCode'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class ArderByCodeStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "ArderByCodeStore",
			variables: true,
		})
	}
}

export async function load_ArderByCode(params) {
	await initClient()

	const store = new ArderByCodeStore()

	await store.fetch(params)

	return {
		ArderByCode: store,
	}
}
