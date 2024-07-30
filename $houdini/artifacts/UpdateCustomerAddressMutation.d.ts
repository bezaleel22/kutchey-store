export type UpdateCustomerAddressMutation = {
    readonly "input": UpdateCustomerAddressMutation$input;
    readonly "result": UpdateCustomerAddressMutation$result;
};

export type UpdateCustomerAddressMutation$result = {
    /**
     * Update an existing Address
    */
    readonly updateCustomerAddress: {
        readonly __typename: string | null;
        readonly " $fragments": {
            Address: {};
        };
    };
};

type UpdateAddressInput = {
    city?: string | null | undefined;
    company?: string | null | undefined;
    countryCode?: string | null | undefined;
    customFields?: Object | null | undefined;
    defaultBillingAddress?: boolean | null | undefined;
    defaultShippingAddress?: boolean | null | undefined;
    fullName?: string | null | undefined;
    id: string;
    phoneNumber?: string | null | undefined;
    postalCode?: string | null | undefined;
    province?: string | null | undefined;
    streetLine1?: string | null | undefined;
    streetLine2?: string | null | undefined;
};

export type UpdateCustomerAddressMutation$input = {
    input: UpdateAddressInput;
};

export type UpdateCustomerAddressMutation$optimistic = {
    /**
     * Update an existing Address
    */
    readonly updateCustomerAddress?: {
        readonly __typename?: string | null;
    };
};

export type UpdateCustomerAddressMutation$artifact = {
    "name": "UpdateCustomerAddressMutation";
    "kind": "HoudiniMutation";
    "hash": "881ef93e7fb206e99827f57247cafd22d8f28e7ac214a90dd50b617e0af3abb6";
    "raw": `mutation UpdateCustomerAddressMutation($input: UpdateAddressInput!) {
  updateCustomerAddress(input: $input) {
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
            "updateCustomerAddress": {
                "type": "Address";
                "keyRaw": "updateCustomerAddress(input: $input)";
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
            "input": "UpdateAddressInput";
        };
        "types": {
            "UpdateAddressInput": {
                "city": "String";
                "company": "String";
                "countryCode": "String";
                "customFields": "JSON";
                "defaultBillingAddress": "Boolean";
                "defaultShippingAddress": "Boolean";
                "fullName": "String";
                "id": "ID";
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