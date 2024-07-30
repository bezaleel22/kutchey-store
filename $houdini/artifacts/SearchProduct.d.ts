import type { ValueOf } from "$houdini/runtime/lib/types";
import type { SortOrder } from "$houdini/graphql/enums";

export type SearchProduct = {
    readonly "input": SearchProduct$input;
    readonly "result": SearchProduct$result | undefined;
};

export type SearchProduct$result = {
    /**
     * Search Products based on the criteria set by the `SearchInput`
    */
    readonly search: {
        readonly totalItems: number;
        readonly items: ({
            readonly " $fragments": {
                ListedProduct: {};
            };
        })[];
        readonly facetValues: ({
            readonly count: number;
            readonly facetValue: {
                readonly id: string;
                readonly name: string;
                readonly facet: {
                    readonly id: string;
                    readonly name: string;
                };
            };
        })[];
    };
};

type FacetValueFilterInput = {
    and?: string | null | undefined;
    or?: (string)[] | null | undefined;
};

type SearchResultSortParameter = {
    name?: ValueOf<typeof SortOrder> | null | undefined;
    price?: ValueOf<typeof SortOrder> | null | undefined;
};

type SearchInput = {
    collectionId?: string | null | undefined;
    collectionSlug?: string | null | undefined;
    facetValueFilters?: (FacetValueFilterInput)[] | null | undefined;
    groupByProduct?: boolean | null | undefined;
    inStock?: boolean | null | undefined;
    skip?: number | null | undefined;
    sort?: SearchResultSortParameter | null | undefined;
    take?: number | null | undefined;
    term?: string | null | undefined;
};

export type SearchProduct$input = {
    input: SearchInput;
};

export type SearchProduct$artifact = {
    "name": "SearchProduct";
    "kind": "HoudiniQuery";
    "hash": "e420ef8f381ee2a5713db9556685e692bc6075db6b33a894fcade501297bb93d";
    "raw": `query SearchProduct($input: SearchInput!) {
  search(input: $input) {
    totalItems
    items {
      ...ListedProduct
    }
    facetValues {
      count
      facetValue {
        id
        name
        facet {
          id
          name
        }
      }
    }
  }
}

fragment ListedProduct on SearchResult {
  productId
  productName
  slug
  productAsset {
    id
    preview
  }
  currencyCode
  priceWithTax {
    ... on PriceRange {
      min
      max
    }
    ... on SinglePrice {
      value
    }
    __typename
  }
  __typename
}
`;
    "rootType": "Query";
    "selection": {
        "fields": {
            "search": {
                "type": "SearchResponse";
                "keyRaw": "search(input: $input)";
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
                                    "productId": {
                                        "type": "ID";
                                        "keyRaw": "productId";
                                    };
                                    "productName": {
                                        "type": "String";
                                        "keyRaw": "productName";
                                    };
                                    "slug": {
                                        "type": "String";
                                        "keyRaw": "slug";
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
                                                };
                                            };
                                        };
                                    };
                                    "currencyCode": {
                                        "type": "CurrencyCode";
                                        "keyRaw": "currencyCode";
                                    };
                                    "priceWithTax": {
                                        "type": "SearchResultPrice";
                                        "keyRaw": "priceWithTax";
                                        "selection": {
                                            "abstractFields": {
                                                "fields": {
                                                    "PriceRange": {
                                                        "min": {
                                                            "type": "Money";
                                                            "keyRaw": "min";
                                                        };
                                                        "max": {
                                                            "type": "Money";
                                                            "keyRaw": "max";
                                                        };
                                                        "__typename": {
                                                            "type": "String";
                                                            "keyRaw": "__typename";
                                                        };
                                                    };
                                                    "SinglePrice": {
                                                        "value": {
                                                            "type": "Money";
                                                            "keyRaw": "value";
                                                        };
                                                        "__typename": {
                                                            "type": "String";
                                                            "keyRaw": "__typename";
                                                        };
                                                    };
                                                };
                                                "typeMap": {};
                                            };
                                            "fields": {
                                                "__typename": {
                                                    "type": "String";
                                                    "keyRaw": "__typename";
                                                };
                                            };
                                        };
                                        "abstract": true;
                                    };
                                    "__typename": {
                                        "type": "String";
                                        "keyRaw": "__typename";
                                    };
                                };
                                "fragments": {
                                    "ListedProduct": {
                                        "arguments": {};
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
                                    "count": {
                                        "type": "Int";
                                        "keyRaw": "count";
                                        "visible": true;
                                    };
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
            "input": "SearchInput";
        };
        "types": {
            "FacetValueFilterInput": {
                "and": "ID";
                "or": "ID";
            };
            "SearchResultSortParameter": {
                "name": "SortOrder";
                "price": "SortOrder";
            };
            "SearchInput": {
                "collectionId": "ID";
                "collectionSlug": "String";
                "facetValueFilters": "FacetValueFilterInput";
                "groupByProduct": "Boolean";
                "inStock": "Boolean";
                "skip": "Int";
                "sort": "SearchResultSortParameter";
                "take": "Int";
                "term": "String";
            };
        };
        "defaults": {};
        "runtimeScalars": {};
    };
    "policy": "CacheOrNetwork";
    "partial": false;
};