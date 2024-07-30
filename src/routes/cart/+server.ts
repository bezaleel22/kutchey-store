import { AddItemToOrderStore, OrderDetailStore } from "$houdini";
import { error, type RequestEvent, type RequestHandler } from "@sveltejs/kit";
import { get } from "svelte/store";

export const GET = (async (event: RequestEvent) => {
    try {
        const id = event.url.searchParams.get("id") as string
        const quantity = Number(event.url.searchParams.get("quantity"))

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


        return new Response(JSON.stringify(activeOrder), { status: 200 });
    } catch (err: any) {
        return new Response(JSON.stringify({ message: err.message, code: err.code }), {
            status: 500,
        });
    }
}) satisfies RequestHandler;