import artifact from '$houdini/artifacts/SetCustomerForOrder'
import { MutationStore } from '../runtime/stores/mutation'

export class SetCustomerForOrderStore extends MutationStore {
	constructor() {
		super({
			artifact,
		})
	}
}
