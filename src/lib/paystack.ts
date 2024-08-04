// PaystackSdk.ts

import { browser } from '$app/environment';
import type { PaystackOptions, Transaction, TransactionResponse } from './types';

class PaystackSdk {
    private options: PaystackOptions;
    private scriptUrl: string = 'https://js.paystack.co/v2/inline.js';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public popup: any = null;

    constructor(options: PaystackOptions) {
        this.options = options;
        this.loadScript();
    }

    private async loadScript() {
        try {
            if (browser) {
                // Dynamically import the Paystack script
                const module = await import(/* @vite-ignore */ this.scriptUrl);
                const PaystackPop = module.default;
                this.popup = new PaystackPop();
            }
        } catch (error) {
            console.error("Failed to load Paystack script:", error);
            if (this.options.onError) this.options.onError(error);
        }
    }

    public preload() {
        if (this.popup) {
           return this.popup.preloadTransaction({
                key: this.options.key,
                email: this.options.email,
                amount: this.options.amount,
                currency: this.options.currency,
                reference: this.options.reference,
                container: this.options.container,
                onSuccess: (response: Transaction) => {
                    if (this.options.onSuccess) this.options.onSuccess(response);
                },
                onLoad: (response: TransactionResponse) => {
                    if (this.options.onLoad) this.options.onLoad(response);
                },
                onCancel: () => {
                    if (this.options.onCancel) this.options.onCancel();
                },
                onError: (error: Error) => {
                    if (this.options.onError) this.options.onError(error);
                }
            });
        } else {
            console.error("Paystack script is not loaded.");
            if (this.options.onError) this.options.onError(new Error("Paystack script is not loaded."));
        }
    }
}

export default PaystackSdk;
