import { CurrencyCode } from "$houdini/graphql/enums";
import type { ValueOf } from "$houdini/runtime/lib/types";
export type OrderDetail$input = {};

export type OrderDetail = {
    readonly "shape"?: OrderDetail$data;
    readonly " $fragments": {
        "OrderDetail": any;
    };
};

export type OrderDetail$data = {
    readonly __typename: string | null;
    readonly id: string;
    /**
     * A unique code for the Order
    */
    readonly code: string;
    /**
     * An order is active as long as the payment process has not been completed
    */
    readonly active: boolean;
    readonly createdAt: string;
    readonly state: string;
    readonly currencyCode: ValueOf<typeof CurrencyCode>;
    readonly totalQuantity: number;
    /**
     * The subTotal is the total of all OrderLines in the Order. This figure also includes any Order-level
    discounts which have been prorated (proportionally distributed) amongst the items of each OrderLine.
    To get a total of all OrderLines which does not account for prorated discounts, use the
    sum of `OrderLine.discountedLinePrice` values.
    */
    readonly subTotal: string;
    /**
     * Same as subTotal, but inclusive of tax
    */
    readonly subTotalWithTax: string;
    /**
     * A summary of the taxes being applied to this Order
    */
    readonly taxSummary: ({
        /**
         * A description of this tax
        */
        readonly description: string;
        /**
         * The taxRate as a percentage
        */
        readonly taxRate: number;
        /**
         * The total tax being applied to the Order at this taxRate
        */
        readonly taxTotal: string;
    })[];
    readonly shippingWithTax: string;
    /**
     * The final payable amount. Equal to subTotalWithTax plus shippingWithTax
    */
    readonly totalWithTax: string;
    readonly customer: {
        readonly id: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly emailAddress: string;
    } | null;
    readonly shippingAddress: {
        readonly fullName: string | null;
        readonly streetLine1: string | null;
        readonly streetLine2: string | null;
        readonly company: string | null;
        readonly city: string | null;
        readonly province: string | null;
        readonly postalCode: string | null;
        readonly countryCode: string | null;
        readonly phoneNumber: string | null;
    } | null;
    readonly shippingLines: ({
        readonly shippingMethod: {
            readonly id: string;
            readonly name: string;
        };
        readonly priceWithTax: string;
    })[];
    readonly lines: ({
        readonly id: string;
        /**
         * The price of a single unit, including tax but excluding discounts
        */
        readonly unitPriceWithTax: string;
        /**
         * The total price of the line including tax but excluding discounts.
        */
        readonly linePriceWithTax: string;
        /**
         * The quantity of items purchased
        */
        readonly quantity: number;
        readonly featuredAsset: {
            readonly id: string;
            readonly preview: string;
        } | null;
        readonly productVariant: {
            readonly id: string;
            readonly name: string;
            readonly price: string;
            readonly currencyCode: ValueOf<typeof CurrencyCode>;
            readonly product: {
                readonly id: string;
                readonly slug: string;
                readonly description: string;
            };
        };
    })[];
};

export type OrderDetail$artifact = {
    "name": "OrderDetail";
    "kind": "HoudiniFragment";
    "hash": "36ef83308a2846c0c1c3f68147038156278e0c24d18dacccde850cca66029777";
    "raw": `fragment OrderDetail on Order {
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
    "rootType": "Order";
    "selection": {
        "fields": {
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
                "visible": true;
            };
            "active": {
                "type": "Boolean";
                "keyRaw": "active";
                "visible": true;
            };
            "createdAt": {
                "type": "DateTime";
                "keyRaw": "createdAt";
                "visible": true;
            };
            "state": {
                "type": "String";
                "keyRaw": "state";
                "visible": true;
            };
            "currencyCode": {
                "type": "CurrencyCode";
                "keyRaw": "currencyCode";
                "visible": true;
            };
            "totalQuantity": {
                "type": "Int";
                "keyRaw": "totalQuantity";
                "visible": true;
            };
            "subTotal": {
                "type": "Money";
                "keyRaw": "subTotal";
                "visible": true;
            };
            "subTotalWithTax": {
                "type": "Money";
                "keyRaw": "subTotalWithTax";
                "visible": true;
            };
            "taxSummary": {
                "type": "OrderTaxSummary";
                "keyRaw": "taxSummary";
                "selection": {
                    "fields": {
                        "description": {
                            "type": "String";
                            "keyRaw": "description";
                            "visible": true;
                        };
                        "taxRate": {
                            "type": "Float";
                            "keyRaw": "taxRate";
                            "visible": true;
                        };
                        "taxTotal": {
                            "type": "Money";
                            "keyRaw": "taxTotal";
                            "visible": true;
                        };
                    };
                };
                "visible": true;
            };
            "shippingWithTax": {
                "type": "Money";
                "keyRaw": "shippingWithTax";
                "visible": true;
            };
            "totalWithTax": {
                "type": "Money";
                "keyRaw": "totalWithTax";
                "visible": true;
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
                            "visible": true;
                        };
                        "lastName": {
                            "type": "String";
                            "keyRaw": "lastName";
                            "visible": true;
                        };
                        "emailAddress": {
                            "type": "String";
                            "keyRaw": "emailAddress";
                            "visible": true;
                        };
                    };
                };
                "visible": true;
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
                            "visible": true;
                        };
                        "streetLine1": {
                            "type": "String";
                            "keyRaw": "streetLine1";
                            "nullable": true;
                            "visible": true;
                        };
                        "streetLine2": {
                            "type": "String";
                            "keyRaw": "streetLine2";
                            "nullable": true;
                            "visible": true;
                        };
                        "company": {
                            "type": "String";
                            "keyRaw": "company";
                            "nullable": true;
                            "visible": true;
                        };
                        "city": {
                            "type": "String";
                            "keyRaw": "city";
                            "nullable": true;
                            "visible": true;
                        };
                        "province": {
                            "type": "String";
                            "keyRaw": "province";
                            "nullable": true;
                            "visible": true;
                        };
                        "postalCode": {
                            "type": "String";
                            "keyRaw": "postalCode";
                            "nullable": true;
                            "visible": true;
                        };
                        "countryCode": {
                            "type": "String";
                            "keyRaw": "countryCode";
                            "nullable": true;
                            "visible": true;
                        };
                        "phoneNumber": {
                            "type": "String";
                            "keyRaw": "phoneNumber";
                            "nullable": true;
                            "visible": true;
                        };
                    };
                };
                "visible": true;
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
                                        "visible": true;
                                    };
                                };
                            };
                            "visible": true;
                        };
                        "priceWithTax": {
                            "type": "Money";
                            "keyRaw": "priceWithTax";
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
                            "visible": true;
                        };
                        "linePriceWithTax": {
                            "type": "Money";
                            "keyRaw": "linePriceWithTax";
                            "visible": true;
                        };
                        "quantity": {
                            "type": "Int";
                            "keyRaw": "quantity";
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
                                        "visible": true;
                                    };
                                    "price": {
                                        "type": "Money";
                                        "keyRaw": "price";
                                        "visible": true;
                                    };
                                    "currencyCode": {
                                        "type": "CurrencyCode";
                                        "keyRaw": "currencyCode";
                                        "visible": true;
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
                                                    "visible": true;
                                                };
                                                "description": {
                                                    "type": "String";
                                                    "keyRaw": "description";
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
};