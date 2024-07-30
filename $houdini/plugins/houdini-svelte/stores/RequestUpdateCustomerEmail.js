import artifact from '$houdini/artifacts/RequestUpdateCustomerEmail'
import { MutationStore } from '../runtime/stores/mutation'

export class RequestUpdateCustomerEmailStore extends MutationStore {
	constructor() {
		super({
			artifact,
		})
	}
}
