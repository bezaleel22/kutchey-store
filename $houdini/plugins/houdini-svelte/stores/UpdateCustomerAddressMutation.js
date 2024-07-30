import artifact from '$houdini/artifacts/UpdateCustomerAddressMutation'
import { MutationStore } from '../runtime/stores/mutation'

export class UpdateCustomerAddressMutationStore extends MutationStore {
	constructor() {
		super({
			artifact,
		})
	}
}
