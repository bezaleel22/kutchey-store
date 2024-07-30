export type UpdateCustomer = {
    readonly "input": UpdateCustomer$input;
    readonly "result": UpdateCustomer$result;
};

export type UpdateCustomer$result = {
    /**
     * Update an existing Customer
    */
    readonly updateCustomer: {
        readonly __typename: string | null;
    };
};

type UpdateCustomerCustomFieldsInput = {
    avatarId?: string | null | undefined;
};

type UpdateCustomerInput = {
    customFields?: UpdateCustomerCustomFieldsInput | null | undefined;
    firstName?: string | null | undefined;
    lastName?: string | null | undefined;
    phoneNumber?: string | null | undefined;
    title?: string | null | undefined;
};

export type UpdateCustomer$input = {
    input: UpdateCustomerInput;
};

export type UpdateCustomer$optimistic = {
    /**
     * Update an existing Customer
    */
    readonly updateCustomer?: {
        readonly __typename?: string | null;
    };
};

export type UpdateCustomer$artifact = {
    "name": "UpdateCustomer";
    "kind": "HoudiniMutation";
    "hash": "a9475b3962d76519f6e76c29d9d6152745d1eb0f11cc41c71b98c4f3ece1ba33";
    "raw": `mutation UpdateCustomer($input: UpdateCustomerInput!) {
  updateCustomer(input: $input) {
    __typename
    id
  }
}
`;
    "rootType": "Mutation";
    "selection": {
        "fields": {
            "updateCustomer": {
                "type": "Customer";
                "keyRaw": "updateCustomer(input: $input)";
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
            "input": "UpdateCustomerInput";
        };
        "types": {
            "UpdateCustomerCustomFieldsInput": {
                "avatarId": "ID";
            };
            "UpdateCustomerInput": {
                "customFields": "UpdateCustomerCustomFieldsInput";
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