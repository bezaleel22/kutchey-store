import artifact from '$houdini/artifacts/SetOrderShippingMethod'
import { MutationStore } from '../runtime/stores/mutation'

export class SetOrderShippingMethodStore extends MutationStore {
	constructor() {
		super({
			artifact,
		})
	}
}
