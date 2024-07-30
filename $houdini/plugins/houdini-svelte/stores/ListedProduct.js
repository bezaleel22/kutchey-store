import { FragmentStore } from '../runtime/stores/fragment'
import artifact from '$houdini/artifacts/ListedProduct'


// create the fragment store

export class ListedProductStore extends FragmentStore {
	constructor() {
		super({
			artifact,
			storeName: "ListedProductStore",
			variables: true,
			
		})
	}
}
