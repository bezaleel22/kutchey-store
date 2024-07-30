import { CurrencyCode } from "$houdini/graphql/enums";
import type { ValueOf } from "$houdini/runtime/lib/types";

export type Collection = {
    readonly "input": Collection$input;
    readonly "result": Collection$result | undefined;
};

export type Collection$result = {
    /**
     * Returns a Collection either by its id or slug. If neither 'id' nor 'slug' is specified, an error will result.
    */
    readonly collection: {
        readonly id: string;
        readonly name: string;
        readonly slug: string;
        readonly breadcrumbs: ({
            readonly id: string;
            readonly name: string;
            readonly slug: string;
        })[];
        readonly productVariants: {
            readonly totalItems: number;
            readonly items: ({
                readonly id: string;
                readonly sku: string;
                readonly name: string;
                readonly currencyCode: ValueOf<typeof CurrencyCode>;
                readonly featuredAsset: {
                    readonly id: string;
                    readonly preview: string;
                } | null;
                readonly price: string;
            })[];
        };
    } | null;
};

export type Collection$input = {
    slug?: string | null | undefined;
    id?: string | null | undefined;
};

export type Collection$artifact = {
    "name": "Collection";
    "kind": "HoudiniQuery";
    "hash": "4c1c9e6c2f15258d20eb3a38ff42c7ef7f2f4cc6aab8743b60cadefe3e6d0252";
    "raw": `query Collection($slug: String, $id: ID) {
  collection(slug: $slug, id: $id) {
    id
    name
    slug
    breadcrumbs {
      id
      name
      slug
    }
    productVariants {
      totalItems
      items {
        id
        sku
        name
        currencyCode
        featuredAsset {
          id
          preview
        }
        price
      }
    }
  }
}
`;
    "rootType": "Query";
    "selection": {
        "fields": {
            "collection": {
                "type": "Collection";
                "keyRaw": "collection(id: $id, slug: $slug)";
                "nullable": true;
                "selection": {
                    "fields": {
                        "id": {
                            "type": "ID";
                            "keyRaw": "id";
                            "visible": true;
                        };
                        "name": {
                            "type": "String";
                            "keyRaw": "name";
                            "visible": true;
                        };
                        "slug": {
                            "type": "String";
                            "keyRaw": "slug";
                            "visible": true;
                        };
                        "breadcrumbs": {
                            "type": "CollectionBreadcrumb";
                            "keyRaw": "breadcrumbs";
                            "selection": {
                                "fields": {
                                    "id": {
                                        "type": "ID";
                                        "keyRaw": "id";
                                        "visible": true;
                                    };
                                    "name": {
                                        "type": "String";
                                        "keyRaw": "name";
                                        "visible": true;
                                    };
                                    "slug": {
                                        "type": "String";
                                        "keyRaw": "slug";
                                        "visible": true;
                                    };
                                };
                            };
                            "visible": true;
                        };
                        "productVariants": {
                            "type": "ProductVariantList";
                            "keyRaw": "productVariants";
                            "selection": {
                                "fields": {
                                    "totalItems": {
                                        "type": "Int";
                                        "keyRaw": "totalItems";
                                        "visible": true;
                                    };
                                    "items": {
                                        "type": "ProductVariant";
                                        "keyRaw": "items";
                                        "selection": {
                                            "fields": {
                                                "id": {
                                                    "type": "ID";
                                                    "keyRaw": "id";
                                                    "visible": true;
                                                };
                                                "sku": {
                                                    "type": "String";
                                                    "keyRaw": "sku";
                                                    "visible": true;
                                                };
                                                "name": {
                                                    "type": "String";
                                                    "keyRaw": "name";
                                                    "visible": true;
                                                };
                                                "currencyCode": {
                                                    "type": "CurrencyCode";
                                                    "keyRaw": "currencyCode";
                                                    "visible": true;
                                                };
                                                "featuredAsset": {
                                                    "type": "Asset";
                                                    "keyRaw": "featuredAsset";
                                                    "nullable": true;
                                                    "selection": {
                                                        "fields": {
                                                            "id": {
                                                                "type": "ID";
                                                                "keyRaw": "id";
                                                                "visible": true;
                                                            };
                                                            "preview": {
                                                                "type": "String";
                                                                "keyRaw": "preview";
                                                                "visible": true;
                                                            };
                                                        };
                                                    };
                                                    "visible": true;
                                                };
                                                "price": {
                                                    "type": "Money";
                                                    "keyRaw": "price";
                                                    "visible": true;
                                                };
                                            };
                                        };
                                        "visible": true;
                                    };
                                };
                            };
                            "visible": true;
                        };
                    };
                };
                "visible": true;
            };
        };
    };
    "pluginData": {
        "houdini-svelte": {};
    };
    "input": {
        "fields": {
            "slug": "String";
            "id": "ID";
        };
        "types": {};
        "defaults": {};
        "runtimeScalars": {};
    };
    "policy": "CacheOrNetwork";
    "partial": false;
};