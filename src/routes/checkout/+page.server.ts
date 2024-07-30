// import type { Actions } from './$types'
// import { TransitionOrderToStateStore } from '$houdini'
// import { fail } from '@sveltejs/kit'

// export const actions: Actions = {
//     default: async (event) => {
//         // if we get here, there was an error with the payment
//         // set state back to 'AddingItems'
//         const state = new TransitionOrderToStateStore()
//         const result = await state.mutate({ state: "AddingItems" }, { event })
//         if (result.data?.transitionOrderToState) {
//             return { success: true }
//         } else {
//             fail(400, { success: false })
//         }
//     }
// }
