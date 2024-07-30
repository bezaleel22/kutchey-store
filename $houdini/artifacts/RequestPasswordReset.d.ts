import { ErrorCode } from "$houdini/graphql/enums";
import type { ValueOf } from "$houdini/runtime/lib/types";

export type RequestPasswordReset = {
    readonly "input": RequestPasswordReset$input;
    readonly "result": RequestPasswordReset$result;
};

export type RequestPasswordReset$result = {
    /**
     * Requests a password reset email to be sent
    */
    readonly requestPasswordReset: {
        readonly __typename: string | null;
    } & (({
        readonly success: boolean;
        readonly __typename: "Success";
    }) | ({
        readonly errorCode: ValueOf<typeof ErrorCode>;
        readonly message: string;
        readonly __typename: "NativeAuthStrategyError";
    })) | null;
};

export type RequestPasswordReset$input = {
    emailAddress: string;
};

export type RequestPasswordReset$optimistic = {
    /**
     * Requests a password reset email to be sent
    */
    readonly requestPasswordReset?: {
        readonly __typename?: string | null;
    } & (({
        readonly success?: boolean;
        readonly __typename: "Success";
    }) | ({
        readonly errorCode?: ValueOf<typeof ErrorCode>;
        readonly message?: string;
        readonly __typename: "NativeAuthStrategyError";
    })) | null;
};

export type RequestPasswordReset$artifact = {
    "name": "RequestPasswordReset";
    "kind": "HoudiniMutation";
    "hash": "f2cd9626955882e554b27543d788bbdbb5cccc05c979a1007c3de47309f42cfd";
    "raw": `mutation RequestPasswordReset($emailAddress: String!) {
  requestPasswordReset(emailAddress: $emailAddress) {
    __typename
    ... on Success {
      success
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
            "requestPasswordReset": {
                "type": "RequestPasswordResetResult";
                "keyRaw": "requestPasswordReset(emailAddress: $emailAddress)";
                "nullable": true;
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
            "emailAddress": "String";
        };
        "types": {};
        "defaults": {};
        "runtimeScalars": {};
    };
};