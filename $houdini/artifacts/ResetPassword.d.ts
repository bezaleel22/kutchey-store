import { ErrorCode } from "$houdini/graphql/enums";
import type { ValueOf } from "$houdini/runtime/lib/types";

export type ResetPassword = {
    readonly "input": ResetPassword$input;
    readonly "result": ResetPassword$result;
};

export type ResetPassword$result = {
    /**
     * Resets a Customer's password based on the provided token
    */
    readonly resetPassword: {
        readonly __typename: string | null;
    } & (({
        readonly id: string;
        readonly identifier: string;
        readonly __typename: "CurrentUser";
    }) | ({
        readonly errorCode: ValueOf<typeof ErrorCode>;
        readonly message: string;
        readonly __typename: "NativeAuthStrategyError";
    }) | ({
        readonly errorCode: ValueOf<typeof ErrorCode>;
        readonly message: string;
        readonly __typename: "NotVerifiedError";
    }) | ({
        readonly errorCode: ValueOf<typeof ErrorCode>;
        readonly message: string;
        readonly __typename: "PasswordResetTokenExpiredError";
    }) | ({
        readonly errorCode: ValueOf<typeof ErrorCode>;
        readonly message: string;
        readonly __typename: "PasswordResetTokenInvalidError";
    }) | ({
        readonly errorCode: ValueOf<typeof ErrorCode>;
        readonly message: string;
        readonly __typename: "PasswordValidationError";
    }));
};

export type ResetPassword$input = {
    token: string;
    password: string;
};

export type ResetPassword$optimistic = {
    /**
     * Resets a Customer's password based on the provided token
    */
    readonly resetPassword?: {
        readonly __typename?: string | null;
    } & (({
        readonly id?: string;
        readonly identifier?: string;
        readonly __typename: "CurrentUser";
    }) | ({
        readonly errorCode?: ValueOf<typeof ErrorCode>;
        readonly message?: string;
        readonly __typename: "NativeAuthStrategyError";
    }) | ({
        readonly errorCode?: ValueOf<typeof ErrorCode>;
        readonly message?: string;
        readonly __typename: "NotVerifiedError";
    }) | ({
        readonly errorCode?: ValueOf<typeof ErrorCode>;
        readonly message?: string;
        readonly __typename: "PasswordResetTokenExpiredError";
    }) | ({
        readonly errorCode?: ValueOf<typeof ErrorCode>;
        readonly message?: string;
        readonly __typename: "PasswordResetTokenInvalidError";
    }) | ({
        readonly errorCode?: ValueOf<typeof ErrorCode>;
        readonly message?: string;
        readonly __typename: "PasswordValidationError";
    }));
};

export type ResetPassword$artifact = {
    "name": "ResetPassword";
    "kind": "HoudiniMutation";
    "hash": "acfda5ed5be1f22e78a3f8b5b903fc4aab61564166ca833518fa8e20c3477256";
    "raw": `mutation ResetPassword($token: String!, $password: String!) {
  resetPassword(token: $token, password: $password) {
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
            "resetPassword": {
                "type": "ResetPasswordResult";
                "keyRaw": "resetPassword(password: $password, token: $token)";
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
                            "NativeAuthStrategyError": "ErrorResult";
                            "NotVerifiedError": "ErrorResult";
                            "PasswordResetTokenExpiredError": "ErrorResult";
                            "PasswordResetTokenInvalidError": "ErrorResult";
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