export type CreateCustomerAddressMutation = {
    readonly "input": CreateCustomerAddressMutation$input;
    readonly "result": CreateCustomerAddressMutation$result;
};

export type CreateCustomerAddressMutation$result = {
    /**
     * Create a new Customer Address
    */
    readonly createCustomerAddress: {
        readonly __typename: string | null;
        readonly " $fragments": {
            Address: {};
        };
    };
};

type CreateAddressInput = {
    city?: string | null | undefined;
    company?: string | null | undefined;
    countryCode: string;
    customFields?: Object | null | undefined;
    defaultBillingAddress?: boolean | null | undefined;
    defaultShippingAddress?: boolean | null | undefined;
    fullName?: string | null | undefined;
    phoneNumber?: string | null | undefined;
    postalCode?: string | null | undefined;
    province?: string | null | undefined;
    streetLine1: string;
    streetLine2?: string | null | undefined;
};

export type CreateCustomerAddressMutation$input = {
    input: CreateAddressInput;
};

export type CreateCustomerAddressMutation$optimistic = {
    /**
     * Create a new Customer Address
    */
    readonly createCustomerAddress?: {
        readonly __typename?: string | null;
    };
};

export type CreateCustomerAddressMutation$artifact = {
    "name": "CreateCustomerAddressMutation";
    "kind": "HoudiniMutation";
    "hash": "aa2ce2b0824587e58dd0af512f75b52bbcc2fb6f5c6f09b5a5cf3281924611d3";
    "raw": `mutation CreateCustomerAddressMutation($input: CreateAddressInput!) {
  createCustomerAddress(input: $input) {
    ...Address
    __typename
    id
  }
}

fragment Address on Address {
  id
  fullName
  company
  streetLine1
  streetLine2
  city
  province
  postalCode
  country {
    id
    code
    name
    __typename
  }
  phoneNumber
  defaultShippingAddress
  defaultBillingAddress
  __typename
  __typename
}
`;
    "rootType": "Mutation";
    "selection": {
        "fields": {
            "createCustomerAddress": {
                "type": "Address";
                "keyRaw": "createCustomerAddress(input: $input)";
                "selection": {
                    "fields": {
                        "id": {
                            "type": "ID";
                            "keyRaw": "id";
                            "visible": true;
                        };
                        "fullName": {
                            "type": "String";
                            "keyRaw": "fullName";
                            "nullable": true;
                        };
                        "company": {
                            "type": "String";
                            "keyRaw": "company";
                            "nullable": true;
                        };
                        "streetLine1": {
                            "type": "String";
                            "keyRaw": "streetLine1";
                        };
                        "streetLine2": {
                            "type": "String";
                            "keyRaw": "streetLine2";
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
                        "country": {
                            "type": "Country";
                            "keyRaw": "country";
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
                                    };
                                    "name": {
                                        "type": "String";
                                        "keyRaw": "name";
                                    };
                                    "__typename": {
                                        "type": "String";
                                        "keyRaw": "__typename";
                                    };
                                };
                            };
                        };
                        "phoneNumber": {
                            "type": "String";
                            "keyRaw": "phoneNumber";
                            "nullable": true;
                        };
                        "defaultShippingAddress": {
                            "type": "Boolean";
                            "keyRaw": "defaultShippingAddress";
                            "nullable": true;
                        };
                        "defaultBillingAddress": {
                            "type": "Boolean";
                            "keyRaw": "defaultBillingAddress";
                            "nullable": true;
                        };
                        "__typename": {
                            "type": "String";
                            "keyRaw": "__typename";
                            "visible": true;
                        };
                    };
                    "fragments": {
                        "Address": {
                            "arguments": {};
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
            "input": "CreateAddressInput";
        };
        "types": {
            "CreateAddressInput": {
                "city": "String";
                "company": "String";
                "countryCode": "String";
                "customFields": "JSON";
                "defaultBillingAddress": "Boolean";
                "defaultShippingAddress": "Boolean";
                "fullName": "String";
                "phoneNumber": "String";
                "postalCode": "String";
                "province": "String";
                "streetLine1": "String";
                "streetLine2": "String";
            };
        };
        "defaults": {};
        "runtimeScalars": {};
    };
};