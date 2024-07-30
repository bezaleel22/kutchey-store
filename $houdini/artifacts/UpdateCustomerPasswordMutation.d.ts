export type UpdateCustomerPasswordMutation = {
    readonly "input": UpdateCustomerPasswordMutation$input;
    readonly "result": UpdateCustomerPasswordMutation$result;
};

export type UpdateCustomerPasswordMutation$result = {
    /**
     * Update the password of the active Customer
    */
    readonly updateCustomerPassword: {
        readonly __typename: string | null;
        readonly " $fragments": {
            ErrorResult: {};
        };
    } & (({
        readonly success: boolean;
        readonly __typename: "Success";
    }) | ({
        readonly __typename: "non-exhaustive; don't match this";
    }));
};

export type UpdateCustomerPasswordMutation$input = {
    currentPassword: string;
    newPassword: string;
};

export type UpdateCustomerPasswordMutation$optimistic = {
    /**
     * Update the password of the active Customer
    */
    readonly updateCustomerPassword?: {
        readonly __typename?: string | null;
    } & (({
        readonly success?: boolean;
        readonly __typename: "Success";
    }) | ({
        readonly __typename: "non-exhaustive; don't match this";
    }));
};

export type UpdateCustomerPasswordMutation$artifact = {
    "name": "UpdateCustomerPasswordMutation";
    "kind": "HoudiniMutation";
    "hash": "557047af3c65e57763698e199dfc8cbf5613393509b4980034811594634652da";
    "raw": `mutation UpdateCustomerPasswordMutation($currentPassword: String!, $newPassword: String!) {
  updateCustomerPassword(
    currentPassword: $currentPassword
    newPassword: $newPassword
  ) {
    ... on Success {
      success
      __typename
    }
    ...ErrorResult
    __typename
    __typename
  }
}

fragment ErrorResult on ErrorResult {
  errorCode
  message
  __typename
  __typename
}
`;
    "rootType": "Mutation";
    "selection": {
        "fields": {
            "updateCustomerPassword": {
                "type": "UpdateCustomerPasswordResult";
                "keyRaw": "updateCustomerPassword(currentPassword: $currentPassword, newPassword: $newPassword)";
                "selection": {
                    "abstractFields": {
                        "fields": {
                            "Success": {
                                "success": {
                                    "type": "Boolean";
                                    "keyRaw": "success";
                                    "visible": true;
                                };
                                "__typename": {
                                    "type": "String";
                                    "keyRaw": "__typename";
                                    "visible": true;
                                };
                            };
                            "ErrorResult": {
                                "errorCode": {
                                    "type": "ErrorCode";
                                    "keyRaw": "errorCode";
                                };
                                "message": {
                                    "type": "String";
                                    "keyRaw": "message";
                                };
                                "__typename": {
                                    "type": "String";
                                    "keyRaw": "__typename";
                                    "visible": true;
                                };
                            };
                        };
                        "typeMap": {
                            "InvalidCredentialsError": "ErrorResult";
                            "NativeAuthStrategyError": "ErrorResult";
                            "PasswordValidationError": "ErrorResult";
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
                        "ErrorResult": {
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
            "currentPassword": "String";
            "newPassword": "String";
        };
        "types": {};
        "defaults": {};
        "runtimeScalars": {};
    };
};