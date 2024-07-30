import artifact from '$houdini/artifacts/DeleteCustomerAddress'
import { MutationStore } from '../runtime/stores/mutation'

export class DeleteCustomerAddressStore extends MutationStore {
	constructor() {
		super({
			artifact,
		})
	}
}
