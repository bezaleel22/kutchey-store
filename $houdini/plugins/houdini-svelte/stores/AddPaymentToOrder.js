import artifact from '$houdini/artifacts/AddPaymentToOrder'
import { MutationStore } from '../runtime/stores/mutation'

export class AddPaymentToOrderStore extends MutationStore {
	constructor() {
		super({
			artifact,
		})
	}
}
