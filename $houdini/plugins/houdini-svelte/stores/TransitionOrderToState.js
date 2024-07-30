import artifact from '$houdini/artifacts/TransitionOrderToState'
import { MutationStore } from '../runtime/stores/mutation'

export class TransitionOrderToStateStore extends MutationStore {
	constructor() {
		super({
			artifact,
		})
	}
}
