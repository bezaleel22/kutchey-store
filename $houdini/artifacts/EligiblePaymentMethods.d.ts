export type EligiblePaymentMethods = {
    readonly "input": EligiblePaymentMethods$input;
    readonly "result": EligiblePaymentMethods$result | undefined;
};

export type EligiblePaymentMethods$result = {
    /**
     * Returns a list of payment methods and their eligibility based on the current active Order
    */
    readonly eligiblePaymentMethods: ({
        readonly id: string;
        readonly code: string;
        readonly name: string;
        readonly description: string;
        readonly eligibilityMessage: string | null;
        readonly isEligible: boolean;
    })[];
};

export type EligiblePaymentMethods$input = null;

export type EligiblePaymentMethods$artifact = {
    "name": "EligiblePaymentMethods";
    "kind": "HoudiniQuery";
    "hash": "60b004d09ac1a43dffb49d93839bbde0161663cd9339d462fbdd64bb33fc7271";
    "raw": `query EligiblePaymentMethods {
  eligiblePaymentMethods {
    id
    code
    name
    description
    eligibilityMessage
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
                        "code": {
                            "type": "String";
                            "keyRaw": "code";
                            "visible": true;
                        };
                        "name": {
                            "type": "String";
                            "keyRaw": "name";
                            "visible": true;
                        };
                        "description": {
                            "type": "String";
                            "keyRaw": "description";
                            "visible": true;
                        };
                        "eligibilityMessage": {
                            "type": "String";
                            "keyRaw": "eligibilityMessage";
                            "nullable": true;
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