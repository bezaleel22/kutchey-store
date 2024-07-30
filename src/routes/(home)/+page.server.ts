import { ProductsStore } from '$houdini'
import { getProducts } from '$lib/server/provider/shop'
import { fail, type Actions, type RequestEvent } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import type { message } from 'sveltekit-superforms'

export const load: PageServerLoad = async function (event) {
    const store = new ProductsStore()
    return {
        onSale: await getProducts({ slug: "on-sale", take: 12 }, store, event),
        featured: await getProducts({ slug: "featured", take: 12 }, store, event),
        newProduct: await getProducts({ slug: "new-products", take: 12 }, store, event),
        flashSale: await getProducts({ slug: "promotion", take: 2 }, store, event),
        newArrivals: await getProducts({ slug: "new-arrivals", take: 12 }, store, event),

        topDeals: await getProducts({ slug: "promotion", take: 3 }, store, event),
        trending: await getProducts({ slug: "trending", take: 3 }, store, event),
        topRated: await getProducts({ slug: "top-rated", take: 3 }, store, event),
        bestSellers: await getProducts({ slug: "best-sellers", take: 3 }, store, event),
    }
}