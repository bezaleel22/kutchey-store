import artifact from '$houdini/artifacts/VerifyCustomerAccount'
import { MutationStore } from '../runtime/stores/mutation'

export class VerifyCustomerAccountStore extends MutationStore {
	constructor() {
		super({
			artifact,
		})
	}
}
