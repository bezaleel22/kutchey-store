import { CurrencyCode } from "$houdini/graphql/enums";
import type { ValueOf } from "$houdini/runtime/lib/types";
export type DetailedProduct$input = {};

export type DetailedProduct = {
    readonly "shape"?: DetailedProduct$data;
    readonly " $fragments": {
        "DetailedProduct": any;
    };
};

export type DetailedProduct$data = {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly optionGroups: ({
        readonly id: string;
        readonly code: string;
        readonly name: string;
        readonly options: ({
            readonly id: string;
            readonly code: string;
            readonly name: string;
        })[];
    })[];
    readonly collections: ({
        readonly id: string;
        readonly slug: string;
        readonly name: string;
        readonly breadcrumbs: ({
            readonly id: string;
            readonly name: string;
            readonly slug: string;
        })[];
    })[];
    readonly facetValues: ({
        readonly facet: {
            readonly id: string;
            readonly code: string;
            readonly name: string;
        };
        readonly id: string;
        readonly code: string;
        readonly name: string;
    })[];
    readonly featuredAsset: {
        readonly id: string;
        readonly preview: string;
    } | null;
    readonly assets: ({
        readonly id: string;
        readonly preview: string;
    })[];
    /**
     * Returns all ProductVariants
    */
    readonly variants: ({
        readonly id: string;
        readonly name: string;
        readonly sku: string;
        readonly stockLevel: string;
        readonly currencyCode: ValueOf<typeof CurrencyCode>;
        readonly price: string;
        readonly priceWithTax: string;
        readonly options: ({
            readonly id: string;
            readonly code: string;
            readonly name: string;
        })[];
        readonly facetValues: ({
            readonly id: string;
            readonly name: string;
            readonly facet: {
                readonly id: string;
                readonly name: string;
            };
        })[];
        readonly featuredAsset: {
            readonly id: string;
            readonly preview: string;
        } | null;
        readonly assets: ({
            readonly id: string;
            readonly preview: string;
        })[];
    })[];
};

export type DetailedProduct$artifact = {
    "name": "DetailedProduct";
    "kind": "HoudiniFragment";
    "hash": "d9faa640386fe82faaad21b5fa18e66eb0768e864797a6221be4297dd98ffbc0";
    "raw": `fragment DetailedProduct on Product {
  id
  name
  description
  optionGroups {
    id
    code
    name
    options {
      id
      code
      name
    }
  }
  collections {
    id
    slug
    name
    breadcrumbs {
      id
      name
      slug
    }
  }
  facetValues {
    facet {
      id
      code
      name
    }
    id
    code
    name
  }
  featuredAsset {
    id
    preview
  }
  assets {
    id
    preview
  }
  variants {
    id
    name
    sku
    stockLevel
    currencyCode
    price
    priceWithTax
    options {
      id
      code
      name
    }
    facetValues {
      id
      name
      facet {
        id
        name
      }
    }
    featuredAsset {
      id
      preview
    }
    assets {
      id
      preview
    }
  }
  __typename
}
`;
    "rootType": "Product";
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
            "description": {
                "type": "String";
                "keyRaw": "description";
                "visible": true;
            };
            "optionGroups": {
                "type": "ProductOptionGroup";
                "keyRaw": "optionGroups";
                "selection": {
                    "fields": {
                        "id": {
                            "type": "ID";
                            "keyRaw": "id";
                            "visible": true;
                        };
                        "code": {
                            "type": "String";
                            "keyRaw": "code";
                            "visible": true;
                        };
                        "name": {
                            "type": "String";
                            "keyRaw": "name";
                            "visible": true;
                        };
                        "options": {
                            "type": "ProductOption";
                            "keyRaw": "options";
                            "selection": {
                                "fields": {
                                    "id": {
                                        "type": "ID";
                                        "keyRaw": "id";
                                        "visible": true;
                                    };
                                    "code": {
                                        "type": "String";
                                        "keyRaw": "code";
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
            "collections": {
                "type": "Collection";
                "keyRaw": "collections";
                "selection": {
                    "fields": {
                        "id": {
                            "type": "ID";
                            "keyRaw": "id";
                            "visible": true;
                        };
                        "slug": {
                            "type": "String";
                            "keyRaw": "slug";
                            "visible": true;
                        };
                        "name": {
                            "type": "String";
                            "keyRaw": "name";
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
                    };
                };
                "visible": true;
            };
            "facetValues": {
                "type": "FacetValue";
                "keyRaw": "facetValues";
                "selection": {
                    "fields": {
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
                                    "code": {
                                        "type": "String";
                                        "keyRaw": "code";
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
                        "id": {
                            "type": "ID";
                            "keyRaw": "id";
                            "visible": true;
                        };
                        "code": {
                            "type": "String";
                            "keyRaw": "code";
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
            "assets": {
                "type": "Asset";
                "keyRaw": "assets";
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
            "variants": {
                "type": "ProductVariant";
                "keyRaw": "variants";
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
                        "sku": {
                            "type": "String";
                            "keyRaw": "sku";
                            "visible": true;
                        };
                        "stockLevel": {
                            "type": "String";
                            "keyRaw": "stockLevel";
                            "visible": true;
                        };
                        "currencyCode": {
                            "type": "CurrencyCode";
                            "keyRaw": "currencyCode";
                            "visible": true;
                        };
                        "price": {
                            "type": "Money";
                            "keyRaw": "price";
                            "visible": true;
                        };
                        "priceWithTax": {
                            "type": "Money";
                            "keyRaw": "priceWithTax";
                            "visible": true;
                        };
                        "options": {
                            "type": "ProductOption";
                            "keyRaw": "options";
                            "selection": {
                                "fields": {
                                    "id": {
                                        "type": "ID";
                                        "keyRaw": "id";
                                        "visible": true;
                                    };
                                    "code": {
                                        "type": "String";
                                        "keyRaw": "code";
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
                        "facetValues": {
                            "type": "FacetValue";
                            "keyRaw": "facetValues";
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
                        "assets": {
                            "type": "Asset";
                            "keyRaw": "assets";
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
                    };
                };
                "visible": true;
            };
            "__typename": {
                "type": "String";
                "keyRaw": "__typename";
                "visible": true;
            };
        };
    };
    "pluginData": {
        "houdini-svelte": {};
    };
};