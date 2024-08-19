import { ErrorCode } from "$houdini/graphql/enums";
import type { ValueOf } from "$houdini/runtime/lib/types";

export type SignUp = {
    readonly "input": SignUp$input;
    readonly "result": SignUp$result;
};

export type SignUp$result = {
    /**
     * Register a Customer account with the given credentials. There are three possible registration flows:

    _If `authOptions.requireVerification` is set to `true`:_

    1. **The Customer is registered _with_ a password**. A verificationToken will be created (and typically emailed to the Customer). That
       verificationToken would then be passed to the `verifyCustomerAccount` mutation _without_ a password. The Customer is then
       verified and authenticated in one step.
    2. **The Customer is registered _without_ a password**. A verificationToken will be created (and typically emailed to the Customer). That
       verificationToken would then be passed to the `verifyCustomerAccount` mutation _with_ the chosen password of the Customer. The Customer is then
       verified and authenticated in one step.

    _If `authOptions.requireVerification` is set to `false`:_

    3. The Customer _must_ be registered _with_ a password. No further action is needed - the Customer is able to authenticate immediately.
    */
    readonly registerCustomerAccount: {
        readonly __typename: string | null;
    } & (({
        readonly success: boolean;
        readonly __typename: "Success";
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
        readonly __typename: "PasswordValidationError";
    }));
};

type RegisterCustomerInput = {
    emailAddress: string;
    firstName?: string | null | undefined;
    lastName?: string | null | undefined;
    password?: string | null | undefined;
    phoneNumber?: string | null | undefined;
    title?: string | null | undefined;
};

export type SignUp$input = {
    input: RegisterCustomerInput;
};

export type SignUp$optimistic = {
    /**
     * Register a Customer account with the given credentials. There are three possible registration flows:

    _If `authOptions.requireVerification` is set to `true`:_

    1. **The Customer is registered _with_ a password**. A verificationToken will be created (and typically emailed to the Customer). That
       verificationToken would then be passed to the `verifyCustomerAccount` mutation _without_ a password. The Customer is then
       verified and authenticated in one step.
    2. **The Customer is registered _without_ a password**. A verificationToken will be created (and typically emailed to the Customer). That
       verificationToken would then be passed to the `verifyCustomerAccount` mutation _with_ the chosen password of the Customer. The Customer is then
       verified and authenticated in one step.

    _If `authOptions.requireVerification` is set to `false`:_

    3. The Customer _must_ be registered _with_ a password. No further action is needed - the Customer is able to authenticate immediately.
    */
    readonly registerCustomerAccount?: {
        readonly __typename?: string | null;
    } & (({
        readonly success?: boolean;
        readonly __typename: "Success";
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
        readonly __typename: "PasswordValidationError";
    }));
};

export type SignUp$artifact = {
    "name": "SignUp";
    "kind": "HoudiniMutation";
    "hash": "7f149b7d1ece9a0fb2d73cbbcc39e4aebc6c97e949c250665c9403f7ec6f1e78";
    "raw": `mutation SignUp($input: RegisterCustomerInput!) {
  registerCustomerAccount(input: $input) {
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
            "registerCustomerAccount": {
                "type": "RegisterCustomerAccountResult";
                "keyRaw": "registerCustomerAccount(input: $input)";
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
                            "MissingPasswordError": "ErrorResult";
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
            "input": "RegisterCustomerInput";
        };
        "types": {
            "RegisterCustomerInput": {
                "emailAddress": "String";
                "firstName": "String";
                "lastName": "String";
                "password": "String";
                "phoneNumber": "String";
                "title": "String";
            };
        };
        "defaults": {};
        "runtimeScalars": {};
    };
};