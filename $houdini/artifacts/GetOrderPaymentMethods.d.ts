export type GetOrderPaymentMethods = {
    readonly "input": GetOrderPaymentMethods$input;
    readonly "result": GetOrderPaymentMethods$result | undefined;
};

export type GetOrderPaymentMethods$result = {
    /**
     * Returns a list of payment methods and their eligibility based on the current active Order
    */
    readonly eligiblePaymentMethods: ({
        readonly id: string;
        readonly name: string;
        readonly code: string;
        readonly isEligible: boolean;
    })[];
};

export type GetOrderPaymentMethods$input = null;

export type GetOrderPaymentMethods$artifact = {
    "name": "GetOrderPaymentMethods";
    "kind": "HoudiniQuery";
    "hash": "e88ef5542c01f85b4ae72aaaf58f5421a20cc805c6f59ce349c7dcf15b68ef29";
    "raw": `query GetOrderPaymentMethods {
  eligiblePaymentMethods {
    id
    name
    code
    isEligible
  }
}
`;
    "rootType": "Query";
    "selection": {
        "fields": {
            "eligiblePaymentMethods": {
                "type": "PaymentMethodQuote";
                "keyRaw": "eligiblePaymentMethods";
                "selection": {
                    "fields": {
                        "id": {
                            "type": "ID";
                            "keyRaw": "id";
                            "visible": true;
                        };
                        "name": {
                            "type": "String";
                            "keyRaw": "name";
                            "visible": true;
                        };
                        "code": {
                            "type": "String";
                            "keyRaw": "code";
                            "visible": true;
                        };
                        "isEligible": {
                            "type": "Boolean";
                            "keyRaw": "isEligible";
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
    "policy": "CacheOrNetwork";
    "partial": false;
};