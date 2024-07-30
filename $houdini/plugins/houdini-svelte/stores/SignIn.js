import artifact from '$houdini/artifacts/SignIn'
import { MutationStore } from '../runtime/stores/mutation'

export class SignInStore extends MutationStore {
	constructor() {
		super({
			artifact,
		})
	}
}
