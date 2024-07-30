import artifact from '$houdini/artifacts/UpdateCustomerPasswordMutation'
import { MutationStore } from '../runtime/stores/mutation'

export class UpdateCustomerPasswordMutationStore extends MutationStore {
	constructor() {
		super({
			artifact,
		})
	}
}
