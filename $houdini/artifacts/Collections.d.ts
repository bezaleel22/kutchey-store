import type { SortOrder } from "$houdini/graphql/enums";
import type { ValueOf } from "$houdini/runtime/lib/types";
import type { LogicalOperator } from "$houdini/graphql/enums";

export type Collections = {
    readonly "input": Collections$input;
    readonly "result": Collections$result | undefined;
};

export type Collections$result = {
    /**
     * A list of Collections available to the shop
    */
    readonly collections: {
        readonly totalItems: number;
        readonly items: ({
            readonly id: string;
            readonly name: string;
            readonly slug: string;
            readonly parent: {
                readonly name: string;
            } | null;
            readonly featuredAsset: {
                readonly id: string;
                readonly preview: string;
            } | null;
            readonly productVariants: {
                readonly totalItems: number;
            };
        })[];
    };
};

type DateRange = {
    end: string;
    start: string;
};

type DateOperators = {
    after?: string | null | undefined;
    before?: string | null | undefined;
    between?: DateRange | null | undefined;
    eq?: string | null | undefined;
    isNull?: boolean | null | undefined;
};

type StringOperators = {
    contains?: string | null | undefined;
    eq?: string | null | undefined;
    in?: (string)[] | null | undefined;
    isNull?: boolean | null | undefined;
    notContains?: string | null | undefined;
    notEq?: string | null | undefined;
    notIn?: (string)[] | null | undefined;
    regex?: string | null | undefined;
};

type IDOperators = {
    eq?: string | null | undefined;
    in?: (string)[] | null | undefined;
    isNull?: boolean | null | undefined;
    notEq?: string | null | undefined;
    notIn?: (string)[] | null | undefined;
};

type NumberRange = {
    end: number;
    start: number;
};

type NumberOperators = {
    between?: NumberRange | null | undefined;
    eq?: number | null | undefined;
    gt?: number | null | undefined;
    gte?: number | null | undefined;
    isNull?: boolean | null | undefined;
    lt?: number | null | undefined;
    lte?: number | null | undefined;
};

type CollectionFilterParameter = {
    _and?: (CollectionFilterParameter)[] | null | undefined;
    _or?: (CollectionFilterParameter)[] | null | undefined;
    createdAt?: DateOperators | null | undefined;
    description?: StringOperators | null | undefined;
    id?: IDOperators | null | undefined;
    languageCode?: StringOperators | null | undefined;
    name?: StringOperators | null | undefined;
    parentId?: IDOperators | null | undefined;
    position?: NumberOperators | null | undefined;
    slug?: StringOperators | null | undefined;
    updatedAt?: DateOperators | null | undefined;
};

type CollectionSortParameter = {
    createdAt?: ValueOf<typeof SortOrder> | null | undefined;
    description?: ValueOf<typeof SortOrder> | null | undefined;
    id?: ValueOf<typeof SortOrder> | null | undefined;
    name?: ValueOf<typeof SortOrder> | null | undefined;
    parentId?: ValueOf<typeof SortOrder> | null | undefined;
    position?: ValueOf<typeof SortOrder> | null | undefined;
    slug?: ValueOf<typeof SortOrder> | null | undefined;
    updatedAt?: ValueOf<typeof SortOrder> | null | undefined;
};

type CollectionListOptions = {
    filter?: CollectionFilterParameter | null | undefined;
    filterOperator?: ValueOf<typeof LogicalOperator> | null | undefined;
    skip?: number | null | undefined;
    sort?: CollectionSortParameter | null | undefined;
    take?: number | null | undefined;
    topLevelOnly?: boolean | null | undefined;
};

export type Collections$input = {
    options?: CollectionListOptions | null | undefined;
};

export type Collections$artifact = {
    "name": "Collections";
    "kind": "HoudiniQuery";
    "hash": "4fd3ccae6fa4ca7ef08ca6dd40332bd961ee62e1de880ffd17931644825d9e69";
    "raw": `query Collections($options: CollectionListOptions) {
  collections(options: $options) {
    totalItems
    items {
      id
      name
      slug
      parent {
        name
        id
      }
      featuredAsset {
        id
        preview
      }
      productVariants {
        totalItems
      }
    }
  }
}
`;
    "rootType": "Query";
    "selection": {
        "fields": {
            "collections": {
                "type": "CollectionList";
                "keyRaw": "collections(options: $options)";
                "selection": {
                    "fields": {
                        "totalItems": {
                            "type": "Int";
                            "keyRaw": "totalItems";
                            "visible": true;
                        };
                        "items": {
                            "type": "Collection";
                            "keyRaw": "items";
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
                                    "parent": {
                                        "type": "Collection";
                                        "keyRaw": "parent";
                                        "nullable": true;
                                        "selection": {
                                            "fields": {
                                                "name": {
                                                    "type": "String";
                                                    "keyRaw": "name";
                                                    "visible": true;
                                                };
                                                "id": {
                                                    "type": "ID";
                                                    "keyRaw": "id";
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
            "options": "CollectionListOptions";
        };
        "types": {
            "DateRange": {
                "end": "DateTime";
                "start": "DateTime";
            };
            "DateOperators": {
                "after": "DateTime";
                "before": "DateTime";
                "between": "DateRange";
                "eq": "DateTime";
                "isNull": "Boolean";
            };
            "StringOperators": {
                "contains": "String";
                "eq": "String";
                "in": "String";
                "isNull": "Boolean";
                "notContains": "String";
                "notEq": "String";
                "notIn": "String";
                "regex": "String";
            };
            "IDOperators": {
                "eq": "String";
                "in": "String";
                "isNull": "Boolean";
                "notEq": "String";
                "notIn": "String";
            };
            "NumberRange": {
                "end": "Float";
                "start": "Float";
            };
            "NumberOperators": {
                "between": "NumberRange";
                "eq": "Float";
                "gt": "Float";
                "gte": "Float";
                "isNull": "Boolean";
                "lt": "Float";
                "lte": "Float";
            };
            "CollectionFilterParameter": {
                "_and": "CollectionFilterParameter";
                "_or": "CollectionFilterParameter";
                "createdAt": "DateOperators";
                "description": "StringOperators";
                "id": "IDOperators";
                "languageCode": "StringOperators";
                "name": "StringOperators";
                "parentId": "IDOperators";
                "position": "NumberOperators";
                "slug": "StringOperators";
                "updatedAt": "DateOperators";
            };
            "CollectionSortParameter": {
                "createdAt": "SortOrder";
                "description": "SortOrder";
                "id": "SortOrder";
                "name": "SortOrder";
                "parentId": "SortOrder";
                "position": "SortOrder";
                "slug": "SortOrder";
                "updatedAt": "SortOrder";
            };
            "CollectionListOptions": {
                "filter": "CollectionFilterParameter";
                "filterOperator": "LogicalOperator";
                "skip": "Int";
                "sort": "CollectionSortParameter";
                "take": "Int";
                "topLevelOnly": "Boolean";
            };
        };
        "defaults": {};
        "runtimeScalars": {};
    };
    "policy": "CacheOrNetwork";
    "partial": false;
};