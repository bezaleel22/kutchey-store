import artifact from '$houdini/artifacts/UpdateOrderLine'
import { MutationStore } from '../runtime/stores/mutation'

export class UpdateOrderLineStore extends MutationStore {
	constructor() {
		super({
			artifact,
		})
	}
}
