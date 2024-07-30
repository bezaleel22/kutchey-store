import { ErrorCode } from "$houdini/graphql/enums";
import type { ValueOf } from "$houdini/runtime/lib/types";

export type RequestUpdateCustomerEmail = {
    readonly "input": RequestUpdateCustomerEmail$input;
    readonly "result": RequestUpdateCustomerEmail$result;
};

export type RequestUpdateCustomerEmail$result = {
    /**
     * Request to update the emailAddress of the active Customer. If `authOptions.requireVerification` is enabled
    (as is the default), then the `identifierChangeToken` will be assigned to the current User and
    a IdentifierChangeRequestEvent will be raised. This can then be used e.g. by the EmailPlugin to email
    that verification token to the Customer, which is then used to verify the change of email address.
    */
    readonly requestUpdateCustomerEmailAddress: {
        readonly __typename: string | null;
    } & (({
        readonly errorCode: ValueOf<typeof ErrorCode>;
        readonly message: string;
        readonly __typename: "EmailAddressConflictError";
    }) | ({
        readonly errorCode: ValueOf<typeof ErrorCode>;
        readonly message: string;
        readonly __typename: "InvalidCredentialsError";
    }) | ({
        readonly errorCode: ValueOf<typeof ErrorCode>;
        readonly message: string;
        readonly __typename: "NativeAuthStrategyError";
    }) | ({
        readonly __typename: "non-exhaustive; don't match this";
    }));
};

export type RequestUpdateCustomerEmail$input = {
    password: string;
    newEmailAddress: string;
};

export type RequestUpdateCustomerEmail$optimistic = {
    /**
     * Request to update the emailAddress of the active Customer. If `authOptions.requireVerification` is enabled
    (as is the default), then the `identifierChangeToken` will be assigned to the current User and
    a IdentifierChangeRequestEvent will be raised. This can then be used e.g. by the EmailPlugin to email
    that verification token to the Customer, which is then used to verify the change of email address.
    */
    readonly requestUpdateCustomerEmailAddress?: {
        readonly __typename?: string | null;
    } & (({
        readonly errorCode?: ValueOf<typeof ErrorCode>;
        readonly message?: string;
        readonly __typename: "EmailAddressConflictError";
    }) | ({
        readonly errorCode?: ValueOf<typeof ErrorCode>;
        readonly message?: string;
        readonly __typename: "InvalidCredentialsError";
    }) | ({
        readonly errorCode?: ValueOf<typeof ErrorCode>;
        readonly message?: string;
        readonly __typename: "NativeAuthStrategyError";
    }) | ({
        readonly __typename: "non-exhaustive; don't match this";
    }));
};

export type RequestUpdateCustomerEmail$artifact = {
    "name": "RequestUpdateCustomerEmail";
    "kind": "HoudiniMutation";
    "hash": "5fbc26987959c6034a576a7a2c31394eab3c9c608285e0f104ec1dae17482aef";
    "raw": `mutation RequestUpdateCustomerEmail($password: String!, $newEmailAddress: String!) {
  requestUpdateCustomerEmailAddress(
    password: $password
    newEmailAddress: $newEmailAddress
  ) {
    __typename
    ... on ErrorResult {
      errorCode
      message
    }
    __typename
  }
}
`;
    "rootType": "Mutation";
    "selection": {
        "fields": {
            "requestUpdateCustomerEmailAddress": {
                "type": "RequestUpdateCustomerEmailAddressResult";
                "keyRaw": "requestUpdateCustomerEmailAddress(newEmailAddress: $newEmailAddress, password: $password)";
                "selection": {
                    "abstractFields": {
                        "fields": {
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
                            "EmailAddressConflictError": "ErrorResult";
                            "InvalidCredentialsError": "ErrorResult";
                            "NativeAuthStrategyError": "ErrorResult";
                        };
                    };
                    "fields": {
                        "__typename": {
                            "type": "String";
                            "keyRaw": "__typename";
                            "visible": true;
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
            "password": "String";
            "newEmailAddress": "String";
        };
        "types": {};
        "defaults": {};
        "runtimeScalars": {};
    };
};