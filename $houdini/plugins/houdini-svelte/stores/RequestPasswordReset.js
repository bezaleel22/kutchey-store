import artifact from '$houdini/artifacts/RequestPasswordReset'
import { MutationStore } from '../runtime/stores/mutation'

export class RequestPasswordResetStore extends MutationStore {
	constructor() {
		super({
			artifact,
		})
	}
}
