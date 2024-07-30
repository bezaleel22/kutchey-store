import { FragmentStore } from '../runtime/stores/fragment'
import artifact from '$houdini/artifacts/Address'


// create the fragment store

export class AddressStore extends FragmentStore {
	constructor() {
		super({
			artifact,
			storeName: "AddressStore",
			variables: true,
			
		})
	}
}
