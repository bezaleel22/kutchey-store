// PaystackSdk.ts

import type { PaystackOptions, Transaction, TransactionResponse } from './types';

export class Paystack {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public popup: any = null;
    constructor() {}

    public async init() {
        try {
            // Dynamically import the Paystack script
            const module = await import(/* @vite-ignore */ "@paystack/inline-js");
            const PaystackPop = module.default;
            this.popup = new PaystackPop();
        } catch (error) {
            console.error("Failed to load Paystack script:", error);
        }
    }

    public start(options: PaystackOptions) {
        if (this.popup) {
            return this.popup.newTransaction({
                key: options.key,
                email: options.email,
                amount: options.amount,
                currency: options.currency,
                reference: options.reference,
                container: options.container,
                onSuccess: (response: Transaction) => {
                    if (options.onSuccess) options.onSuccess(response);
                },
                onLoad: (response: TransactionResponse) => {
                    if (options.onLoad) options.onLoad(response);
                },
                onCancel: () => {
                    if (options.onCancel) options.onCancel();
                },
                onError: (error: Error) => {
                    if (options.onError) options.onError(error);
                }
            });
        } else {
            console.error("Paystack script is not loaded.");
            if (options.onError) options.onError(new Error("Paystack script is not loaded."));
        }
    }
}
