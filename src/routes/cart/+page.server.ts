import { ActiveOrderStore, AddItemToOrderStore, OrderDetailStore, RemoveOrderLineStore, UpdateOrderLineStore } from '$houdini'
import { error } from '@sveltejs/kit'
import { get } from 'svelte/store'
import type { Actions, PageServerLoad } from './$types'

export const actions: Actions = {
    addItem: async (event) => {
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

    updateItem: async (event) => {
        const id = event.url.searchParams.get("id") as string
        const quantity = Number(event.url.searchParams.get("qty"))

        const store = new UpdateOrderLineStore()
        const order = await store.mutate({ orderLineId: id, quantity }, { event })
        const adjustOrderLine = order.data?.adjustOrderLine
        if (adjustOrderLine && "errorCode" in adjustOrderLine) {
            throw error(500, { message: adjustOrderLine.message, code: adjustOrderLine.errorCode })
        }

        if (!adjustOrderLine) {
            throw error(500, { message: 'Failed to add item to order', code: 'INTERNAL_SERVER_ERROR' });
        }

        const detailStore = new OrderDetailStore().get(adjustOrderLine)
        const activeOrder = get(detailStore)

        return { activeOrder }
    },

    removeItem: async (event) => {
        const id = event.url.searchParams.get("id") as string

        const store = new RemoveOrderLineStore()
        const order = await store.mutate({ orderLineId: id }, { event })
        const removeOrderLine = order.data?.removeOrderLine
        if (removeOrderLine && "errorCode" in removeOrderLine) {
            throw error(500, { message: removeOrderLine.message, code: removeOrderLine.errorCode })
        }

        if (!removeOrderLine) {
            throw error(500, { message: 'Failed to add item to order', code: 'INTERNAL_SERVER_ERROR' });
        }

        const detailStore = new OrderDetailStore().get(removeOrderLine)
        const activeOrder = get(detailStore)

        return { activeOrder }
    },

    calculateShipping: async (event) => {
        const id = event.url.searchParams.get("id") as string

        const store = new RemoveOrderLineStore()
        const order = await store.mutate({ orderLineId: id }, { event })
        const removeOrderLine = order.data?.removeOrderLine
        if (removeOrderLine && "errorCode" in removeOrderLine) {
            throw error(500, { message: removeOrderLine.message, code: removeOrderLine.errorCode })
        }

        if (!removeOrderLine) {
            throw error(500, { message: 'Failed to add item to order', code: 'INTERNAL_SERVER_ERROR' });
        }

        const detailStore = new OrderDetailStore().get(removeOrderLine)
        const activeOrder = get(detailStore)

        return { activeOrder }
    },
    
    applyCoupon: async (event) => {
        const id = event.url.searchParams.get("id") as string

        const store = new RemoveOrderLineStore()
        const order = await store.mutate({ orderLineId: id }, { event })
        const removeOrderLine = order.data?.removeOrderLine
        if (removeOrderLine && "errorCode" in removeOrderLine) {
            throw error(500, { message: removeOrderLine.message, code: removeOrderLine.errorCode })
        }

        if (!removeOrderLine) {
            throw error(500, { message: 'Failed to add item to order', code: 'INTERNAL_SERVER_ERROR' });
        }

        const detailStore = new OrderDetailStore().get(removeOrderLine)
        const activeOrder = get(detailStore)

        return { activeOrder }
    }
}