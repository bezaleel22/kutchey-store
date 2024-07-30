import type { SortOrder } from "$houdini/graphql/enums";
import type { LogicalOperator } from "$houdini/graphql/enums";
import { CurrencyCode } from "$houdini/graphql/enums";
import type { ValueOf } from "$houdini/runtime/lib/types";

export type ActiveCustomerOrders = {
    readonly "input": ActiveCustomerOrders$input;
    readonly "result": ActiveCustomerOrders$result | undefined;
};

export type ActiveCustomerOrders$result = {
    /**
     * The active Customer
    */
    readonly activeCustomer: {
        readonly id: string;
        readonly orders: {
            readonly items: ({
                readonly id: string;
                /**
                 * A unique code for the Order
                */
                readonly code: string;
                readonly state: string;
                /**
                 * The final payable amount. Equal to subTotalWithTax plus shippingWithTax
                */
                readonly totalWithTax: string;
                readonly currencyCode: ValueOf<typeof CurrencyCode>;
                readonly lines: ({
                    readonly featuredAsset: {
                        readonly preview: string;
                    } | null;
                    readonly productVariant: {
                        readonly name: string;
                    };
                })[];
            })[];
            readonly totalItems: number;
        };
    } | null;
};

type BooleanOperators = {
    eq?: boolean | null | undefined;
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

type OrderFilterParameter = {
    _and?: (OrderFilterParameter)[] | null | undefined;
    _or?: (OrderFilterParameter)[] | null | undefined;
    active?: BooleanOperators | null | undefined;
    code?: StringOperators | null | undefined;
    createdAt?: DateOperators | null | undefined;
    currencyCode?: StringOperators | null | undefined;
    id?: IDOperators | null | undefined;
    orderPlacedAt?: DateOperators | null | undefined;
    shipping?: NumberOperators | null | undefined;
    shippingWithTax?: NumberOperators | null | undefined;
    state?: StringOperators | null | undefined;
    subTotal?: NumberOperators | null | undefined;
    subTotalWithTax?: NumberOperators | null | undefined;
    total?: NumberOperators | null | undefined;
    totalQuantity?: NumberOperators | null | undefined;
    totalWithTax?: NumberOperators | null | undefined;
    type?: StringOperators | null | undefined;
    updatedAt?: DateOperators | null | undefined;
};

type OrderSortParameter = {
    code?: ValueOf<typeof SortOrder> | null | undefined;
    createdAt?: ValueOf<typeof SortOrder> | null | undefined;
    id?: ValueOf<typeof SortOrder> | null | undefined;
    orderPlacedAt?: ValueOf<typeof SortOrder> | null | undefined;
    shipping?: ValueOf<typeof SortOrder> | null | undefined;
    shippingWithTax?: ValueOf<typeof SortOrder> | null | undefined;
    state?: ValueOf<typeof SortOrder> | null | undefined;
    subTotal?: ValueOf<typeof SortOrder> | null | undefined;
    subTotalWithTax?: ValueOf<typeof SortOrder> | null | undefined;
    total?: ValueOf<typeof SortOrder> | null | undefined;
    totalQuantity?: ValueOf<typeof SortOrder> | null | undefined;
    totalWithTax?: ValueOf<typeof SortOrder> | null | undefined;
    updatedAt?: ValueOf<typeof SortOrder> | null | undefined;
};

type OrderListOptions = {
    filter?: OrderFilterParameter | null | undefined;
    filterOperator?: ValueOf<typeof LogicalOperator> | null | undefined;
    skip?: number | null | undefined;
    sort?: OrderSortParameter | null | undefined;
    take?: number | null | undefined;
};

export type ActiveCustomerOrders$input = {
    options?: OrderListOptions | null | undefined;
};

export type ActiveCustomerOrders$artifact = {
    "name": "ActiveCustomerOrders";
    "kind": "HoudiniQuery";
    "hash": "d38703a039ad4ad6523df68d85a35071feb8344a067d7b4da4bbc55bc1eb073b";
    "raw": `query ActiveCustomerOrders($options: OrderListOptions) {
  activeCustomer {
    id
    orders(options: $options) {
      items {
        id
        code
        state
        totalWithTax
        currencyCode
        lines {
          featuredAsset {
            preview
            id
          }
          productVariant {
            name
            id
          }
          id
        }
      }
      totalItems
    }
  }
}
`;
    "rootType": "Query";
    "selection": {
        "fields": {
            "activeCustomer": {
                "type": "Customer";
                "keyRaw": "activeCustomer";
                "nullable": true;
                "selection": {
                    "fields": {
                        "id": {
                            "type": "ID";
                            "keyRaw": "id";
                            "visible": true;
                        };
                        "orders": {
                            "type": "OrderList";
                            "keyRaw": "orders(options: $options)";
                            "selection": {
                                "fields": {
                                    "items": {
                                        "type": "Order";
                                        "keyRaw": "items";
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
                                                "state": {
                                                    "type": "String";
                                                    "keyRaw": "state";
                                                    "visible": true;
                                                };
                                                "totalWithTax": {
                                                    "type": "Money";
                                                    "keyRaw": "totalWithTax";
                                                    "visible": true;
                                                };
                                                "currencyCode": {
                                                    "type": "CurrencyCode";
                                                    "keyRaw": "currencyCode";
                                                    "visible": true;
                                                };
                                                "lines": {
                                                    "type": "OrderLine";
                                                    "keyRaw": "lines";
                                                    "selection": {
                                                        "fields": {
                                                            "featuredAsset": {
                                                                "type": "Asset";
                                                                "keyRaw": "featuredAsset";
                                                                "nullable": true;
                                                                "selection": {
                                                                    "fields": {
                                                                        "preview": {
                                                                            "type": "String";
                                                                            "keyRaw": "preview";
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
                                                            "productVariant": {
                                                                "type": "ProductVariant";
                                                                "keyRaw": "productVariant";
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
                                                            "id": {
                                                                "type": "ID";
                                                                "keyRaw": "id";
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
    "pluginData": {
        "houdini-svelte": {};
    };
    "input": {
        "fields": {
            "options": "OrderListOptions";
        };
        "types": {
            "BooleanOperators": {
                "eq": "Boolean";
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
            "OrderFilterParameter": {
                "_and": "OrderFilterParameter";
                "_or": "OrderFilterParameter";
                "active": "BooleanOperators";
                "code": "StringOperators";
                "createdAt": "DateOperators";
                "currencyCode": "StringOperators";
                "id": "IDOperators";
                "orderPlacedAt": "DateOperators";
                "shipping": "NumberOperators";
                "shippingWithTax": "NumberOperators";
                "state": "StringOperators";
                "subTotal": "NumberOperators";
                "subTotalWithTax": "NumberOperators";
                "total": "NumberOperators";
                "totalQuantity": "NumberOperators";
                "totalWithTax": "NumberOperators";
                "type": "StringOperators";
                "updatedAt": "DateOperators";
            };
            "OrderSortParameter": {
                "code": "SortOrder";
                "createdAt": "SortOrder";
                "id": "SortOrder";
                "orderPlacedAt": "SortOrder";
                "shipping": "SortOrder";
                "shippingWithTax": "SortOrder";
                "state": "SortOrder";
                "subTotal": "SortOrder";
                "subTotalWithTax": "SortOrder";
                "total": "SortOrder";
                "totalQuantity": "SortOrder";
                "totalWithTax": "SortOrder";
                "updatedAt": "SortOrder";
            };
            "OrderListOptions": {
                "filter": "OrderFilterParameter";
                "filterOperator": "LogicalOperator";
                "skip": "Int";
                "sort": "OrderSortParameter";
                "take": "Int";
            };
        };
        "defaults": {};
        "runtimeScalars": {};
    };
    "policy": "CacheOrNetwork";
    "partial": false;
};