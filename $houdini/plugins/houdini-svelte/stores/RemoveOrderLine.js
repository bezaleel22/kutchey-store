import artifact from '$houdini/artifacts/RemoveOrderLine'
import { MutationStore } from '../runtime/stores/mutation'

export class RemoveOrderLineStore extends MutationStore {
	constructor() {
		super({
			artifact,
		})
	}
}
