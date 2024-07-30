import { ErrorCode } from "$houdini/graphql/enums";
import type { ValueOf } from "$houdini/runtime/lib/types";

export type SignIn = {
    readonly "input": SignIn$input;
    readonly "result": SignIn$result;
};

export type SignIn$result = {
    /**
     * Authenticates the user using the native authentication strategy. This mutation is an alias for `authenticate({ native: { ... }})`
    */
    readonly login: {
        readonly __typename: string | null;
    } & (({
        readonly id: string;
        readonly identifier: string;
        readonly __typename: "CurrentUser";
    }) | ({
        readonly errorCode: ValueOf<typeof ErrorCode>;
        readonly message: string;
        readonly __typename: "InvalidCredentialsError";
    }) | ({
        readonly errorCode: ValueOf<typeof ErrorCode>;
        readonly message: string;
        readonly __typename: "NativeAuthStrategyError";
    }) | ({
        readonly errorCode: ValueOf<typeof ErrorCode>;
        readonly message: string;
        readonly __typename: "NotVerifiedError";
    }));
};

export type SignIn$input = {
    email: string;
    password: string;
    rememberMe?: boolean | null | undefined;
};

export type SignIn$optimistic = {
    /**
     * Authenticates the user using the native authentication strategy. This mutation is an alias for `authenticate({ native: { ... }})`
    */
    readonly login?: {
        readonly __typename?: string | null;
    } & (({
        readonly id?: string;
        readonly identifier?: string;
        readonly __typename: "CurrentUser";
    }) | ({
        readonly errorCode?: ValueOf<typeof ErrorCode>;
        readonly message?: string;
        readonly __typename: "InvalidCredentialsError";
    }) | ({
        readonly errorCode?: ValueOf<typeof ErrorCode>;
        readonly message?: string;
        readonly __typename: "NativeAuthStrategyError";
    }) | ({
        readonly errorCode?: ValueOf<typeof ErrorCode>;
        readonly message?: string;
        readonly __typename: "NotVerifiedError";
    }));
};

export type SignIn$artifact = {
    "name": "SignIn";
    "kind": "HoudiniMutation";
    "hash": "95dafa90e572575a7edd2b8e033f6095f6e1d856dc11f8fe378847c4e64318ff";
    "raw": `mutation SignIn($email: String!, $password: String!, $rememberMe: Boolean) {
  login(username: $email, password: $password, rememberMe: $rememberMe) {
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
            "login": {
                "type": "NativeAuthenticationResult";
                "keyRaw": "login(password: $password, rememberMe: $rememberMe, username: $email)";
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
                            "InvalidCredentialsError": "ErrorResult";
                            "NativeAuthStrategyError": "ErrorResult";
                            "NotVerifiedError": "ErrorResult";
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
            "email": "String";
            "password": "String";
            "rememberMe": "Boolean";
        };
        "types": {};
        "defaults": {};
        "runtimeScalars": {};
    };
};