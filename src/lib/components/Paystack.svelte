<script lang="ts">
    import { DEFAULT_CURRENCY } from "$lib/constants";
    import type {
        PaystackOptions,
        Transaction,
        TransactionResponse,
    } from "$lib/types";
    import { onMount } from "svelte";

    export let processing: boolean;
    export let key: string;
    export let email: string;
    export let amount: number;
    export let currency: string = DEFAULT_CURRENCY;
    export let onSuccess: (trx: Transaction) => void = () => null;
    export let onCancel: () => void = () => null;
    export let onError: () => void = () => null;
    export let onLoad: (trx: TransactionResponse) => void = () => null;

    export let options: PaystackOptions = {
        key,
        email,
        amount,
        currency,
        container: "paystackEmbedContainer",
    };

    let mounted = false;
    let packageUrl = "https://js.paystack.co/v2/inline.js";
    let popup: any = null;
    let preloader: any;

    onMount(async () => {
        mounted = true;
        try {
            processing = true;
            const module = await import(/* @vite-ignore */ packageUrl);
            const PaystackPop = module.default;
            popup = new PaystackPop();
            const { key, email, amount, currency, ...restOptions } = options;
            preloader = popup.preloadTransaction({
                key,
                email,
                amount,
                currency,
                ...restOptions,
                onSuccess: (response: Transaction) => {
                    if (onSuccess) onSuccess(response);
                },
                onCancel: () => {
                    if (onCancel) onCancel();
                },
                onError: () => {
                    if (onError) onError();
                },
                onLoad: (response: TransactionResponse) => {
                    if (onLoad) onLoad(response);
                },
            });
        } catch (error) {
            console.error("Failed to load Paystack script:", error);
        }
    });

    $: if (!processing && popup) popup.cancelTransaction(preloader.id);
</script>

<div id="paystackEmbedContainer" />
<slot {preloader} />
