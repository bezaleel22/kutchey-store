import artifact from '$houdini/artifacts/CreateCustomerAddress'
import { MutationStore } from '../runtime/stores/mutation'

export class CreateCustomerAddressStore extends MutationStore {
	constructor() {
		super({
			artifact,
		})
	}
}
