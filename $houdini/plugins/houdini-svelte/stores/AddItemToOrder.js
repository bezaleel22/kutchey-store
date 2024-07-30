import artifact from '$houdini/artifacts/AddItemToOrder'
import { MutationStore } from '../runtime/stores/mutation'

export class AddItemToOrderStore extends MutationStore {
	constructor() {
		super({
			artifact,
		})
	}
}
