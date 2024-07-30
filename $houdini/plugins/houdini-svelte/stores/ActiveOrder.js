import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/ActiveOrder'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class ActiveOrderStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "ActiveOrderStore",
			variables: false,
		})
	}
}

export async function load_ActiveOrder(params) {
	await initClient()

	const store = new ActiveOrderStore()

	await store.fetch(params)

	return {
		ActiveOrder: store,
	}
}
