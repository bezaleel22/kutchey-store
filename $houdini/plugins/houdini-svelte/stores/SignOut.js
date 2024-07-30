import artifact from '$houdini/artifacts/SignOut'
import { MutationStore } from '../runtime/stores/mutation'

export class SignOutStore extends MutationStore {
	constructor() {
		super({
			artifact,
		})
	}
}
