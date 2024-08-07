// @ts-nocheck
import { CollectionsStore } from '$houdini'
import type { Collection } from '$lib/types'
import type { LayoutServerLoad } from './$types'

export const load = async function (event: Parameters<LayoutServerLoad>[0]) {
    const store = new CollectionsStore()
    const result = (await store.fetch({ variables: { options: { filter: { parentId: { notEq: "11" } } } }, event }))

    // console.log(event.locals.cart)

    return {
        collections: result.data?.collections.items as Collection[],
        customer: event.locals.user,
        activeOrder: event.locals.cart,
    }
}