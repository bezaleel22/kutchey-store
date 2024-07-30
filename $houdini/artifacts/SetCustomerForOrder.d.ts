import { ErrorCode } from "$houdini/graphql/enums";
import type { ValueOf } from "$houdini/runtime/lib/types";

export type SetCustomerForOrder = {
    readonly "input": SetCustomerForOrder$input;
    readonly "result": SetCustomerForOrder$result;
};

export type SetCustomerForOrder$result = {
    /**
     * Set the Customer for the Order. Required only if the Customer is not currently logged in
    */
    readonly setCustomerForOrder: {
        readonly " $fragments": {
            OrderDetail: {};
        };
    } & (({
        readonly errorCode: ValueOf<typeof ErrorCode>;
        readonly message: string;
        readonly __typename: "AlreadyLoggedInError";
    }) | ({
        readonly errorCode: ValueOf<typeof ErrorCode>;
        readonly message: string;
        readonly __typename: "EmailAddressConflictError";
    }) | ({
        readonly errorCode: ValueOf<typeof ErrorCode>;
        readonly message: string;
        readonly __typename: "GuestCheckoutError";
    }) | ({
        readonly errorCode: ValueOf<typeof ErrorCode>;
        readonly message: string;
        readonly __typename: "NoActiveOrderError";
    }) | ({
        readonly __typename: "non-exhaustive; don't match this";
    }));
};

type CreateCustomerCustomFieldsInput = {
    avatarId?: string | null | undefined;
};

type CreateCustomerInput = {
    customFields?: CreateCustomerCustomFieldsInput | null | undefined;
    emailAddress: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string | null | undefined;
    title?: string | null | undefined;
};

export type SetCustomerForOrder$input = {
    input: CreateCustomerInput;
};

export type SetCustomerForOrder$optimistic = {
    /**
     * Set the Customer for the Order. Required only if the Customer is not currently logged in
    */
    readonly setCustomerForOrder?: {} & (({
        readonly errorCode?: ValueOf<typeof ErrorCode>;
        readonly message?: string;
        readonly __typename: "AlreadyLoggedInError";
    }) | ({
        readonly errorCode?: ValueOf<typeof ErrorCode>;
        readonly message?: string;
        readonly __typename: "EmailAddressConflictError";
    }) | ({
        readonly errorCode?: ValueOf<typeof ErrorCode>;
        readonly message?: string;
        readonly __typename: "GuestCheckoutError";
    }) | ({
        readonly errorCode?: ValueOf<typeof ErrorCode>;
        readonly message?: string;
        readonly __typename: "NoActiveOrderError";
    }) | ({
        readonly __typename: "non-exhaustive; don't match this";
    }));
};

export type SetCustomerForOrder$artifact = {
    "name": "SetCustomerForOrder";
    "kind": "HoudiniMutation";
    "hash": "eee152b046287dd5a779f981575e2a3550dcdc5bd706690f908623beed328e2d";
    "raw": `mutation SetCustomerForOrder($input: CreateCustomerInput!) {
  setCustomerForOrder(input: $input) {
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
            "setCustomerForOrder": {
                "type": "SetCustomerForOrderResult";
                "keyRaw": "setCustomerForOrder(input: $input)";
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
                            "AlreadyLoggedInError": "ErrorResult";
                            "EmailAddressConflictError": "ErrorResult";
                            "GuestCheckoutError": "ErrorResult";
                            "NoActiveOrderError": "ErrorResult";
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
            "input": "CreateCustomerInput";
        };
        "types": {
            "CreateCustomerCustomFieldsInput": {
                "avatarId": "ID";
            };
            "CreateCustomerInput": {
                "customFields": "CreateCustomerCustomFieldsInput";
                "emailAddress": "String";
                "firstName": "String";
                "lastName": "String";
                "phoneNumber": "String";
                "title": "String";
            };
        };
        "defaults": {};
        "runtimeScalars": {};
    };
};