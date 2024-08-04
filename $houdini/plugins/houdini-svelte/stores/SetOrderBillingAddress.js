import artifact from '$houdini/artifacts/SetOrderBillingAddress'
import { MutationStore } from '../runtime/stores/mutation'

export class SetOrderBillingAddressStore extends MutationStore {
	constructor() {
		super({
			artifact,
		})
	}
}
