import artifact from '$houdini/artifacts/UpdateCustomer'
import { MutationStore } from '../runtime/stores/mutation'

export class UpdateCustomerStore extends MutationStore {
	constructor() {
		super({
			artifact,
		})
	}
}
