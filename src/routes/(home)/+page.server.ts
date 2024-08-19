import { ProductsStore } from '$houdini'
import { getProducts } from '$lib/server/provider/shop'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async function (event) {
    const store = new ProductsStore()
    return {
        onSale: await getProducts({ slug: "on-sale", take: 10}, store, event),
        featured: await getProducts({ slug: "featured", take: 10 }, store, event),
        newProduct: await getProducts({ slug: "new-products", take: 10}, store, event),
        flashSale: await getProducts({ slug: "top-deals", take: 2 }, store, event),
        newArrivals: await getProducts({ slug: "new-arrivals", take: 10 }, store, event),

        topDeals: await getProducts({ slug: "top-deals", take: 3 }, store, event),
        trending: await getProducts({ slug: "trending", take: 3 }, store, event),
        topRated: await getProducts({ slug: "top-rated", take: 3 }, store, event),
        bestSellers: await getProducts({ slug: "best-sellers", take: 3 }, store, event),
    }
}