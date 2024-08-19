import type { ProductsStore } from "$houdini"
import type { Product } from "$lib/types"
import type { RequestEvent } from "@sveltejs/kit"

type inputProps = { slug?: string, take?: number, skip?: number }

export const getProducts = async (input: inputProps, store: ProductsStore, event: RequestEvent) => {
    const { slug, take, skip } = input
    const result = (await store.fetch({ variables: { slug, skip, take: take || 10 }, event })).data?.search
    const discountFacet = result?.facetValues?.find(value => value.facetValue.name == "discount")
    const dealsFacet = result?.facetValues?.find(value => value.facetValue.name == "deals")
    const prodColls = result?.collections?.filter(coll => coll.collection.parentId != "1" && coll.collection.slug != input.slug)
    const totalItems = result?.totalItems
    const products = result?.items?.map(prod => {
        const target = prodColls?.find(coll => prod.collectionIds?.includes(coll.collection.id))
        return {
            id: prod.productVariantId,
            name: prod.productName,
            slug: prod.slug,
            sku: prod.sku,
            description: prod.description,
            offerEndDate: dealsFacet?.facetValue.code,
            price: {
                value: "value" in prod.priceWithTax ? prod.priceWithTax.value : 0,
                min: "min" in prod.priceWithTax ? prod.priceWithTax.min : 0,
                max: "max" in prod.priceWithTax ? prod.priceWithTax.max : 0,
            },
            discountedPercent: Number(discountFacet?.facetValue.code || ''),
            currencyCode: prod.currencyCode,
            featuredAsset: prod.productAsset,
            facetValues: {},
            collections: [{
                id: target?.collection.id,
                name: target?.collection.name,
                slug: target?.collection.slug,
            }],

        } as Product
    }) || null

    return { totalItems, products }
}