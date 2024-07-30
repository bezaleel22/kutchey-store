import { FragmentStore } from '../runtime/stores/fragment'
import artifact from '$houdini/artifacts/ErrorResult'


// create the fragment store

export class ErrorResultStore extends FragmentStore {
	constructor() {
		super({
			artifact,
			storeName: "ErrorResultStore",
			variables: true,
			
		})
	}
}
