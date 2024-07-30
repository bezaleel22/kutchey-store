import { ErrorCode } from "$houdini/graphql/enums";
import type { ValueOf } from "$houdini/runtime/lib/types";
export type ErrorResult$input = {};

export type ErrorResult = {
    readonly "shape"?: ErrorResult$data;
    readonly " $fragments": {
        "ErrorResult": any;
    };
};

export type ErrorResult$data = {
    readonly errorCode: ValueOf<typeof ErrorCode>;
    readonly message: string;
    readonly __typename: string | null;
};

export type ErrorResult$artifact = {
    "name": "ErrorResult";
    "kind": "HoudiniFragment";
    "hash": "4ea53808f248a7d0082ff307508f65ffef9da6fdfad9d5d440f6344b0d0d115c";
    "raw": `fragment ErrorResult on ErrorResult {
  errorCode
  message
  __typename
  __typename
}
`;
    "rootType": "ErrorResult";
    "selection": {
        "fields": {
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
    "pluginData": {
        "houdini-svelte": {};
    };
};