import { ErrorCode } from "$houdini/graphql/enums";
import type { ValueOf } from "$houdini/runtime/lib/types";

export type SetOrderShippingMethod = {
    readonly "input": SetOrderShippingMethod$input;
    readonly "result": SetOrderShippingMethod$result;
};

export type SetOrderShippingMethod$result = {
    /**
     * Sets the shipping method by id, which can be obtained with the `eligibleShippingMethods` query.
    An Order can have multiple shipping methods, in which case you can pass an array of ids. In this case,
    you should configure a custom ShippingLineAssignmentStrategy in order to know which OrderLines each
    shipping method will apply to.
    */
    readonly setOrderShippingMethod: {
        readonly " $fragments": {
            OrderDetail: {};
        };
    } & (({
        readonly errorCode: ValueOf<typeof ErrorCode>;
        readonly message: string;
        readonly __typename: "IneligibleShippingMethodError";
    }) | ({
        readonly errorCode: ValueOf<typeof ErrorCode>;
        readonly message: string;
        readonly __typename: "NoActiveOrderError";
    }) | ({
        readonly errorCode: ValueOf<typeof ErrorCode>;
        readonly message: string;
        readonly __typename: "OrderModificationError";
    }) | ({
        readonly __typename: "non-exhaustive; don't match this";
    }));
};

export type SetOrderShippingMethod$input = {
    shippingMethodId: (string)[];
};

export type SetOrderShippingMethod$optimistic = {
    /**
     * Sets the shipping method by id, which can be obtained with the `eligibleShippingMethods` query.
    An Order can have multiple shipping methods, in which case you can pass an array of ids. In this case,
    you should configure a custom ShippingLineAssignmentStrategy in order to know which OrderLines each
    shipping method will apply to.
    */
    readonly setOrderShippingMethod?: {} & (({
        readonly errorCode?: ValueOf<typeof ErrorCode>;
        readonly message?: string;
        readonly __typename: "IneligibleShippingMethodError";
    }) | ({
        readonly errorCode?: ValueOf<typeof ErrorCode>;
        readonly message?: string;
        readonly __typename: "NoActiveOrderError";
    }) | ({
        readonly errorCode?: ValueOf<typeof ErrorCode>;
        readonly message?: string;
        readonly __typename: "OrderModificationError";
    }) | ({
        readonly __typename: "non-exhaustive; don't match this";
    }));
};

export type SetOrderShippingMethod$artifact = {
    "name": "SetOrderShippingMethod";
    "kind": "HoudiniMutation";
    "hash": "9a65a69429cf62d3e63ea5389af3a179955c79a94a0338c6f1cf2bb571ad0b75";
    "raw": `mutation SetOrderShippingMethod($shippingMethodId: [ID!]!) {
  setOrderShippingMethod(shippingMethodId: $shippingMethodId) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
    __typename
  }
}

fragment OrderDetail on Order {
  __typename
  id
  code
  active
  createdAt
  state
  currencyCode
  totalQuantity
  subTotal
  subTotalWithTax
  taxSummary {
    description
    taxRate
    taxTotal
  }
  shippingWithTax
  totalWithTax
  customer {
    id
    firstName
    lastName
    emailAddress
  }
  shippingAddress {
    fullName
    streetLine1
    streetLine2
    company
    city
    province
    postalCode
    countryCode
    phoneNumber
  }
  shippingLines {
    shippingMethod {
      id
      name
    }
    priceWithTax
    id
  }
  lines {
    id
    unitPriceWithTax
    linePriceWithTax
    quantity
    featuredAsset {
      id
      preview
    }
    productVariant {
      id
      name
      price
      currencyCode
      product {
        id
        slug
        description
      }
    }
  }
  __typename
}
`;
    "rootType": "Mutation";
    "selection": {
        "fields": {
            "setOrderShippingMethod": {
                "type": "SetOrderShippingMethodResult";
                "keyRaw": "setOrderShippingMethod(shippingMethodId: $shippingMethodId)";
                "selection": {
                    "abstractFields": {
                        "fields": {
                            "Order": {
                                "__typename": {
                                    "type": "String";
                                    "keyRaw": "__typename";
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
                                };
                                "active": {
                                    "type": "Boolean";
                                    "keyRaw": "active";
                                };
                                "createdAt": {
                                    "type": "DateTime";
                                    "keyRaw": "createdAt";
                                };
                                "state": {
                                    "type": "String";
                                    "keyRaw": "state";
                                };
                                "currencyCode": {
                                    "type": "CurrencyCode";
                                    "keyRaw": "currencyCode";
                                };
                                "totalQuantity": {
                                    "type": "Int";
                                    "keyRaw": "totalQuantity";
                                };
                                "subTotal": {
                                    "type": "Money";
                                    "keyRaw": "subTotal";
                                };
                                "subTotalWithTax": {
                                    "type": "Money";
                                    "keyRaw": "subTotalWithTax";
                                };
                                "taxSummary": {
                                    "type": "OrderTaxSummary";
                                    "keyRaw": "taxSummary";
                                    "selection": {
                                        "fields": {
                                            "description": {
                                                "type": "String";
                                                "keyRaw": "description";
                                            };
                                            "taxRate": {
                                                "type": "Float";
                                                "keyRaw": "taxRate";
                                            };
                                            "taxTotal": {
                                                "type": "Money";
                                                "keyRaw": "taxTotal";
                                            };
                                        };
                                    };
                                };
                                "shippingWithTax": {
                                    "type": "Money";
                                    "keyRaw": "shippingWithTax";
                                };
                                "totalWithTax": {
                                    "type": "Money";
                                    "keyRaw": "totalWithTax";
                                };
                                "customer": {
                                    "type": "Customer";
                                    "keyRaw": "customer";
                                    "nullable": true;
                                    "selection": {
                                        "fields": {
                                            "id": {
                                                "type": "ID";
                                                "keyRaw": "id";
                                                "visible": true;
                                            };
                                            "firstName": {
                                                "type": "String";
                                                "keyRaw": "firstName";
                                            };
                                            "lastName": {
                                                "type": "String";
                                                "keyRaw": "lastName";
                                            };
                                            "emailAddress": {
                                                "type": "String";
                                                "keyRaw": "emailAddress";
                                            };
                                        };
                                    };
                                };
                                "shippingAddress": {
                                    "type": "OrderAddress";
                                    "keyRaw": "shippingAddress";
                                    "nullable": true;
                                    "selection": {
                                        "fields": {
                                            "fullName": {
                                                "type": "String";
                                                "keyRaw": "fullName";
                                                "nullable": true;
                                            };
                                            "streetLine1": {
                                                "type": "String";
                                                "keyRaw": "streetLine1";
                                                "nullable": true;
                                            };
                                            "streetLine2": {
                                                "type": "String";
                                                "keyRaw": "streetLine2";
                                                "nullable": true;
                                            };
                                            "company": {
                                                "type": "String";
                                                "keyRaw": "company";
                                                "nullable": true;
                                            };
                                            "city": {
                                                "type": "String";
                                                "keyRaw": "city";
                                                "nullable": true;
                                            };
                                            "province": {
                                                "type": "String";
                                                "keyRaw": "province";
                                                "nullable": true;
                                            };
                                            "postalCode": {
                                                "type": "String";
                                                "keyRaw": "postalCode";
                                                "nullable": true;
                                            };
                                            "countryCode": {
                                                "type": "String";
                                                "keyRaw": "countryCode";
                                                "nullable": true;
                                            };
                                            "phoneNumber": {
                                                "type": "String";
                                                "keyRaw": "phoneNumber";
                                                "nullable": true;
                                            };
                                        };
                                    };
                                };
                                "shippingLines": {
                                    "type": "ShippingLine";
                                    "keyRaw": "shippingLines";
                                    "selection": {
                                        "fields": {
                                            "shippingMethod": {
                                                "type": "ShippingMethod";
                                                "keyRaw": "shippingMethod";
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
                                                        };
                                                    };
                                                };
                                            };
                                            "priceWithTax": {
                                                "type": "Money";
                                                "keyRaw": "priceWithTax";
                                            };
                                            "id": {
                                                "type": "ID";
                                                "keyRaw": "id";
                                                "visible": true;
                                            };
                                        };
                                    };
                                };
                                "lines": {
                                    "type": "OrderLine";
                                    "keyRaw": "lines";
                                    "selection": {
                                        "fields": {
                                            "id": {
                                                "type": "ID";
                                                "keyRaw": "id";
                                                "visible": true;
                                            };
                                            "unitPriceWithTax": {
                                                "type": "Money";
                                                "keyRaw": "unitPriceWithTax";
                                            };
                                            "linePriceWithTax": {
                                                "type": "Money";
                                                "keyRaw": "linePriceWithTax";
                                            };
                                            "quantity": {
                                                "type": "Int";
                                                "keyRaw": "quantity";
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
                                                        };
                                                    };
                                                };
                                            };
                                            "productVariant": {
                                                "type": "ProductVariant";
                                                "keyRaw": "productVariant";
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
                                                        };
                                                        "price": {
                                                            "type": "Money";
                                                            "keyRaw": "price";
                                                        };
                                                        "currencyCode": {
                                                            "type": "CurrencyCode";
                                                            "keyRaw": "currencyCode";
                                                        };
                                                        "product": {
                                                            "type": "Product";
                                                            "keyRaw": "product";
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
                                                                    };
                                                                    "description": {
                                                                        "type": "String";
                                                                        "keyRaw": "description";
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            "ErrorResult": {
                                "errorCode": {
                                    "type": "ErrorCode";
                                    "keyRaw": "errorCode";
                                    "visible": true;
                                };
                                "message": {
                                    "type": "String";
                                    "keyRaw": "message";
                                    "visible": true;
                                };
                                "__typename": {
                                    "type": "String";
                                    "keyRaw": "__typename";
                                    "visible": true;
                                };
                            };
                        };
                        "typeMap": {
                            "IneligibleShippingMethodError": "ErrorResult";
                            "NoActiveOrderError": "ErrorResult";
                            "OrderModificationError": "ErrorResult";
                        };
                    };
                    "fields": {
                        "__typename": {
                            "type": "String";
                            "keyRaw": "__typename";
                            "visible": true;
                        };
                    };
                    "fragments": {
                        "OrderDetail": {
                            "arguments": {};
                        };
                    };
                };
                "abstract": true;
                "visible": true;
            };
        };
    };
    "pluginData": {
        "houdini-svelte": {};
    };
    "input": {
        "fields": {
            "shippingMethodId": "ID";
        };
        "types": {};
        "defaults": {};
        "runtimeScalars": {};
    };
};