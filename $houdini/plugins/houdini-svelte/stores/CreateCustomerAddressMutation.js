import artifact from '$houdini/artifacts/CreateCustomerAddressMutation'
import { MutationStore } from '../runtime/stores/mutation'

export class CreateCustomerAddressMutationStore extends MutationStore {
	constructor() {
		super({
			artifact,
		})
	}
}
