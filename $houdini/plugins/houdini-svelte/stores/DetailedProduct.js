import { FragmentStore } from '../runtime/stores/fragment'
import artifact from '$houdini/artifacts/DetailedProduct'


// create the fragment store

export class DetailedProductStore extends FragmentStore {
	constructor() {
		super({
			artifact,
			storeName: "DetailedProductStore",
			variables: true,
			
		})
	}
}
