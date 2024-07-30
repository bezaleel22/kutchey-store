import artifact from '$houdini/artifacts/UpdateCustomerEmail'
import { MutationStore } from '../runtime/stores/mutation'

export class UpdateCustomerEmailStore extends MutationStore {
	constructor() {
		super({
			artifact,
		})
	}
}
