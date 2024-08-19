import { CollectionsStore } from '$houdini'
import type { Collection } from '$lib/types'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async function (event) {
    const store = new CollectionsStore()
    const result = (await store.fetch({ variables: { options: { filter: { parentId: { notEq: "2" } }, sort: { id: 'DESC' } } }, event }))

    // console.log(event.locals.cart)

    return {
        collections: result.data?.collections.items as Collection[],
        customer: event.locals.user,
        activeOrder: event.locals.cart,
    }
}