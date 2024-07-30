// @ts-nocheck
import { AddItemToOrderStore, DetailedProductStore, OrderDetailStore, ProductStore } from '$houdini'
import { error } from '@sveltejs/kit'
import { get } from 'svelte/store'
import type { Actions, PageServerLoad } from './$types'

export const load = (async function (event) {
    const prod = new ProductStore()
    const result = (await prod.fetch({ variables: { slug: event.params.slug }, event })).data
    const product = result ? result.product : null

    const detailStore = new DetailedProductStore().get(product);
    const detail = get(detailStore)
    return {
        product: detail,
    }
}) satisfies PageServerLoad

export const actions = {
    addItem: async (event: import('./$types').RequestEvent) => {
        const id = event.url.searchParams.get("id") as string
        const quantity = Number(event.url.searchParams.get("qty"))
    
        const store = new AddItemToOrderStore()
        const order = await store.mutate({ productVariantId: id, quantity }, { event })
        const addItemToOrder = order.data?.addItemToOrder
        if (addItemToOrder && "errorCode" in addItemToOrder) {
            throw error(500, { message: addItemToOrder.message, code: addItemToOrder.errorCode })
        }

        if (!addItemToOrder) {
            throw error(500, { message: 'Failed to add item to order', code: 'INTERNAL_SERVER_ERROR' });
        }
    
        const detailStore = new OrderDetailStore().get(addItemToOrder)
        const activeOrder = get(detailStore)
    
        return { success: true, activeOrder }
    },

    // addReview: async ({ request, locals }) => {
    //     const form = await superValidate(request, zod(addReviewReq), { id: 'review' })
    //     if (!locals.user) return message(form, 'You must be signed in to add a review', { status: 401 })
    //     if (!form.valid) return message(form, 'Something went wrong', { status: 500 })

    //     const review = {
    //         product_id: form.data.productId,
    //         display_name: form.data.displayName,
    //         content: form.data.content,
    //         rating: form.data.rating
    //     }
    //     // const success = await medusa.addReview(locals, review)
    //     const success = true
    //     if (success) return message(form, 'Thank you for your review.')
    //     else return message(form, 'Something went wrong', { status: 500 })
    // }
};null as any as Actions;