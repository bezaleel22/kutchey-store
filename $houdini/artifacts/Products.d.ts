import { CurrencyCode } from "$houdini/graphql/enums";
import type { ValueOf } from "$houdini/runtime/lib/types";

export type Products = {
    readonly "input": Products$input;
    readonly "result": Products$result | undefined;
};

export type Products$result = {
    /**
     * Search Products based on the criteria set by the `SearchInput`
    */
    readonly search: {
        readonly totalItems: number;
        readonly items: ({
            readonly sku: string;
            readonly productVariantId: string;
            readonly productName: string;
            readonly slug: string;
            readonly description: string;
            readonly productAsset: {
                readonly id: string;
                readonly preview: string;
            } | null;
            readonly priceWithTax: {} & (({
                readonly value: string;
                readonly __typename: "SinglePrice";
            }) | ({
                readonly min: string;
                readonly max: string;
                readonly __typename: "PriceRange";
            }));
            readonly currencyCode: ValueOf<typeof CurrencyCode>;
            /**
             * An array of ids of the Collections in which this result appears
            */
            readonly collectionIds: (string)[];
        })[];
        readonly collections: ({
            readonly collection: {
                readonly id: string;
                readonly name: string;
                readonly slug: string;
                readonly parentId: string;
                readonly position: number;
            };
        })[];
        readonly facetValues: ({
            readonly facetValue: {
                readonly id: string;
                readonly name: string;
                readonly code: string;
                readonly facet: {
                    readonly id: string;
                    readonly name: string;
                    readonly code: string;
                };
            };
        })[];
    };
};

export type Products$input = {
    slug?: string | null | undefined;
    skip?: number | null | undefined;
    take?: number | null | undefined;
};

export type Products$artifact = {
    "name": "Products";
    "kind": "HoudiniQuery";
    "hash": "b9ef925841e2b859fbdb8a2d1fc0a714a2755d6fa3daee4496198f321ec39c43";
    "raw": `query Products($slug: String, $skip: Int, $take: Int) {
  search(
    input: {collectionSlug: $slug, groupByProduct: true, skip: $skip, take: $take}
  ) {
    totalItems
    items {
      sku
      productVariantId
      productName
      slug
      description
      productAsset {
        id
        preview
      }
      priceWithTax {
        ... on SinglePrice {
          value
        }
        ... on PriceRange {
          min
          max
        }
        __typename
      }
      currencyCode
      collectionIds
    }
    collections {
      collection {
        id
        name
        slug
        parentId
        position
      }
    }
    facetValues {
      facetValue {
        id
        name
        code
        facet {
          id
          name
          code
        }
      }
    }
  }
}
`;
    "rootType": "Query";
    "selection": {
        "fields": {
            "search": {
                "type": "SearchResponse";
                "keyRaw": "search(input: {collectionSlug: $slug, groupByProduct: true, skip: $skip, take: $take})";
                "selection": {
                    "fields": {
                        "totalItems": {
                            "type": "Int";
                            "keyRaw": "totalItems";
                            "visible": true;
                        };
                        "items": {
                            "type": "SearchResult";
                            "keyRaw": "items";
                            "selection": {
                                "fields": {
                                    "sku": {
                                        "type": "String";
                                        "keyRaw": "sku";
                                        "visible": true;
                                    };
                                    "productVariantId": {
                                        "type": "ID";
                                        "keyRaw": "productVariantId";
                                        "visible": true;
                                    };
                                    "productName": {
                                        "type": "String";
                                        "keyRaw": "productName";
                                        "visible": true;
                                    };
                                    "slug": {
                                        "type": "String";
                                        "keyRaw": "slug";
                                        "visible": true;
                                    };
                                    "description": {
                                        "type": "String";
                                        "keyRaw": "description";
                                        "visible": true;
                                    };
                                    "productAsset": {
                                        "type": "SearchResultAsset";
                                        "keyRaw": "productAsset";
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
                                    "priceWithTax": {
                                        "type": "SearchResultPrice";
                                        "keyRaw": "priceWithTax";
                                        "selection": {
                                            "abstractFields": {
                                                "fields": {
                                                    "SinglePrice": {
                                                        "value": {
                                                            "type": "Money";
                                                            "keyRaw": "value";
                                                            "visible": true;
                                                        };
                                                        "__typename": {
                                                            "type": "String";
                                                            "keyRaw": "__typename";
                                                            "visible": true;
                                                        };
                                                    };
                                                    "PriceRange": {
                                                        "min": {
                                                            "type": "Money";
                                                            "keyRaw": "min";
                                                            "visible": true;
                                                        };
                                                        "max": {
                                                            "type": "Money";
                                                            "keyRaw": "max";
                                                            "visible": true;
                                                        };
                                                        "__typename": {
                                                            "type": "String";
                                                            "keyRaw": "__typename";
                                                            "visible": true;
                                                        };
                                                    };
                                                };
                                                "typeMap": {};
                                            };
                                            "fields": {
                                                "__typename": {
                                                    "type": "String";
                                                    "keyRaw": "__typename";
                                                    "visible": true;
                                                };
                                            };
                                        };
                                        "abstract": true;
                                        "visible": true;
                                    };
                                    "currencyCode": {
                                        "type": "CurrencyCode";
                                        "keyRaw": "currencyCode";
                                        "visible": true;
                                    };
                                    "collectionIds": {
                                        "type": "ID";
                                        "keyRaw": "collectionIds";
                                        "visible": true;
                                    };
                                };
                            };
                            "visible": true;
                        };
                        "collections": {
                            "type": "CollectionResult";
                            "keyRaw": "collections";
                            "selection": {
                                "fields": {
                                    "collection": {
                                        "type": "Collection";
                                        "keyRaw": "collection";
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
                                                "parentId": {
                                                    "type": "ID";
                                                    "keyRaw": "parentId";
                                                    "visible": true;
                                                };
                                                "position": {
                                                    "type": "Int";
                                                    "keyRaw": "position";
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
                        "facetValues": {
                            "type": "FacetValueResult";
                            "keyRaw": "facetValues";
                            "selection": {
                                "fields": {
                                    "facetValue": {
                                        "type": "FacetValue";
                                        "keyRaw": "facetValue";
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
                                                "code": {
                                                    "type": "String";
                                                    "keyRaw": "code";
                                                    "visible": true;
                                                };
                                                "facet": {
                                                    "type": "Facet";
                                                    "keyRaw": "facet";
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
                                                            "code": {
                                                                "type": "String";
                                                                "keyRaw": "code";
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
            "skip": "Int";
            "take": "Int";
        };
        "types": {};
        "defaults": {};
        "runtimeScalars": {};
    };
    "policy": "CacheOrNetwork";
    "partial": false;
};