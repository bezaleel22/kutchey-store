import artifact from '$houdini/artifacts/ResetPassword'
import { MutationStore } from '../runtime/stores/mutation'

export class ResetPasswordStore extends MutationStore {
	constructor() {
		super({
			artifact,
		})
	}
}
