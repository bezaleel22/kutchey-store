import { ErrorCode } from "$houdini/graphql/enums";
import type { ValueOf } from "$houdini/runtime/lib/types";

export type VerifyCustomerAccount = {
    readonly "input": VerifyCustomerAccount$input;
    readonly "result": VerifyCustomerAccount$result;
};

export type VerifyCustomerAccount$result = {
    /**
     * Verify a Customer email address with the token sent to that address. Only applicable if `authOptions.requireVerification` is set to true.

    If the Customer was not registered with a password in the `registerCustomerAccount` mutation, the password _must_ be
    provided here.
    */
    readonly verifyCustomerAccount: {
        readonly __typename: string | null;
    } & (({
        readonly id: string;
        readonly identifier: string;
        readonly __typename: "CurrentUser";
    }) | ({
        readonly errorCode: ValueOf<typeof ErrorCode>;
        readonly message: string;
        readonly __typename: "MissingPasswordError";
    }) | ({
        readonly errorCode: ValueOf<typeof ErrorCode>;
        readonly message: string;
        readonly __typename: "NativeAuthStrategyError";
    }) | ({
        readonly errorCode: ValueOf<typeof ErrorCode>;
        readonly message: string;
        readonly __typename: "PasswordAlreadySetError";
    }) | ({
        readonly errorCode: ValueOf<typeof ErrorCode>;
        readonly message: string;
        readonly __typename: "PasswordValidationError";
    }) | ({
        readonly errorCode: ValueOf<typeof ErrorCode>;
        readonly message: string;
        readonly __typename: "VerificationTokenExpiredError";
    }) | ({
        readonly errorCode: ValueOf<typeof ErrorCode>;
        readonly message: string;
        readonly __typename: "VerificationTokenInvalidError";
    }));
};

export type VerifyCustomerAccount$input = {
    token: string;
    password?: string | null | undefined;
};

export type VerifyCustomerAccount$optimistic = {
    /**
     * Verify a Customer email address with the token sent to that address. Only applicable if `authOptions.requireVerification` is set to true.

    If the Customer was not registered with a password in the `registerCustomerAccount` mutation, the password _must_ be
    provided here.
    */
    readonly verifyCustomerAccount?: {
        readonly __typename?: string | null;
    } & (({
        readonly id?: string;
        readonly identifier?: string;
        readonly __typename: "CurrentUser";
    }) | ({
        readonly errorCode?: ValueOf<typeof ErrorCode>;
        readonly message?: string;
        readonly __typename: "MissingPasswordError";
    }) | ({
        readonly errorCode?: ValueOf<typeof ErrorCode>;
        readonly message?: string;
        readonly __typename: "NativeAuthStrategyError";
    }) | ({
        readonly errorCode?: ValueOf<typeof ErrorCode>;
        readonly message?: string;
        readonly __typename: "PasswordAlreadySetError";
    }) | ({
        readonly errorCode?: ValueOf<typeof ErrorCode>;
        readonly message?: string;
        readonly __typename: "PasswordValidationError";
    }) | ({
        readonly errorCode?: ValueOf<typeof ErrorCode>;
        readonly message?: string;
        readonly __typename: "VerificationTokenExpiredError";
    }) | ({
        readonly errorCode?: ValueOf<typeof ErrorCode>;
        readonly message?: string;
        readonly __typename: "VerificationTokenInvalidError";
    }));
};

export type VerifyCustomerAccount$artifact = {
    "name": "VerifyCustomerAccount";
    "kind": "HoudiniMutation";
    "hash": "e586c2d83308baab84c645b6e782d460ba74dcfd83a28167640d6e867f49e781";
    "raw": `mutation VerifyCustomerAccount($token: String!, $password: String) {
  verifyCustomerAccount(token: $token, password: $password) {
    __typename
    ... on CurrentUser {
      id
      identifier
    }
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
            "verifyCustomerAccount": {
                "type": "VerifyCustomerAccountResult";
                "keyRaw": "verifyCustomerAccount(password: $password, token: $token)";
                "selection": {
                    "abstractFields": {
                        "fields": {
                            "CurrentUser": {
                                "id": {
                                    "type": "ID";
                                    "keyRaw": "id";
                                    "visible": true;
                                };
                                "identifier": {
                                    "type": "String";
                                    "keyRaw": "identifier";
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
                            "MissingPasswordError": "ErrorResult";
                            "NativeAuthStrategyError": "ErrorResult";
                            "PasswordAlreadySetError": "ErrorResult";
                            "PasswordValidationError": "ErrorResult";
                            "VerificationTokenExpiredError": "ErrorResult";
                            "VerificationTokenInvalidError": "ErrorResult";
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
            "token": "String";
            "password": "String";
        };
        "types": {};
        "defaults": {};
        "runtimeScalars": {};
    };
};