import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/AvailableCountries'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class AvailableCountriesStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "AvailableCountriesStore",
			variables: false,
		})
	}
}

export async function load_AvailableCountries(params) {
	await initClient()

	const store = new AvailableCountriesStore()

	await store.fetch(params)

	return {
		AvailableCountries: store,
	}
}
