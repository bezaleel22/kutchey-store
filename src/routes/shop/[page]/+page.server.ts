import type { Product } from '$lib/types'
import { getProducts } from '$lib/server/provider/shop'
import { ProductsStore } from '$houdini'
import type { PageServerLoad } from './$types'



export const load = (async function (event) {
    const store = new ProductsStore()
    const take = 12;
    const skip = Number(event.params.page) - 1
    const result = await getProducts({ take, skip }, store, event)

    return {
        products: result.products,
        totalItems: result.totalItems
    }
}) satisfies PageServerLoad

