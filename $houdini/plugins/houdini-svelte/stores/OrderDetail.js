import { FragmentStore } from '../runtime/stores/fragment'
import artifact from '$houdini/artifacts/OrderDetail'


// create the fragment store

export class OrderDetailStore extends FragmentStore {
	constructor() {
		super({
			artifact,
			storeName: "OrderDetailStore",
			variables: true,
			
		})
	}
}
