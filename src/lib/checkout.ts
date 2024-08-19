import type { OrderDetail$data } from "$houdini";
import { get } from "svelte/store";
import { CUSTOMER_NOT_DEFINED_ID, DEFAULT_CURRENCY, PAYSTACK_PUBLIC_KEY } from "./constants";
import { state } from "./store";
import type { ShippingAddress, Transaction, TransactionResponse } from "./types";
import { generateRef } from "./utils";
import { goto } from "$app/navigation";

export const getOptions = (email: string, amount: string, methodCode?: string) => {
    return {
        key: PAYSTACK_PUBLIC_KEY,
        email,
        amount: Number(amount),
        reference: generateRef(),
        currency: DEFAULT_CURRENCY,
        container: "paystackEmbedContainer",
        onLoad: async (response: TransactionResponse) => {
            console.log("Payment link loaded:", response);
            await state.setOrderState("PaymentAuthorized");
        },
        onSuccess: async (response: Transaction) => {
            console.log("Payment succeeded:", response);
            const $state = get(state)
            const order = await state.addPaymentToOrder(response, Number(amount), methodCode as string)

            $state.activeOrder = null
            goto(`/checkout/success/${order.code}`)
        },
        onCancel: async () => {
            console.log("Payment was canceled");
            await state.setOrderState("AddingItems");
        },
        onError: async (error: Error) => {
            console.error("Payment error:", error);
            await state.setOrderState("AddingItems");
        }
    }
};

export const processCheckout = async (shippingMethodId: string) => {
    let order: OrderDetail$data | null;
    const $state = get(state)
    const { emailAddress, firstName, lastName } = $state.customer
    if (!$state.shippingAddress) return ""

    // delete $state.shippingAddress.defaultShippingAddress;
    // delete $state.shippingAddress.defaultBillingAddress;

    const setOrderShippingAddress = async (
        shippingAddress: ShippingAddress,
    ) => {
        const order = await state.setAddress(shippingAddress);
        if (!order) return false
        await state.setShippingOption(shippingMethodId);
    };

    if ($state.customer.id == CUSTOMER_NOT_DEFINED_ID) {
        if (!emailAddress || !firstName || !lastName)
            return "Please complete all fields.";
        order = await state.setCustomer({
            emailAddress,
            firstName,
            lastName,
        });
        if (!order) return "Something went wrong while setting the customer.";
        setOrderShippingAddress($state.shippingAddress);

    } else {
        setOrderShippingAddress($state.shippingAddress);
    }

    // transition to ArrangingPayment state
    if ($state.activeOrder?.state !== "ArrangingPayment") {
        order = await state.setOrderState("ArrangingPayment");
        if (order.state !== "ArrangingPayment") {
            return "Something went wrong while transitioning to ArrangingPayment state.";
        }
    }
}