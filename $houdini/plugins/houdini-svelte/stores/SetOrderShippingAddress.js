import artifact from '$houdini/artifacts/SetOrderShippingAddress'
import { MutationStore } from '../runtime/stores/mutation'

export class SetOrderShippingAddressStore extends MutationStore {
	constructor() {
		super({
			artifact,
		})
	}
}
