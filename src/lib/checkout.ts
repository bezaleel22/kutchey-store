import { get } from "svelte/store";
import { state } from "./store";
import type { OrderDetail$data } from "$houdini";
import type { ActiveCustomer, ShippingAddress } from "./types";
import { CUSTOMER_NOT_DEFINED_ID } from "./constants";

export const processChechout = async (input: ActiveCustomer) => {
    let order: OrderDetail$data | null;
    const $state = get(state)
    const { emailAddress, firstName, lastName } = input
    if (!$state.shippingAddress) return false


    delete $state.shippingAddress.defaultShippingAddress;
    delete $state.shippingAddress.defaultBillingAddress;

    const setOrderShippingAddress = async (
        shippingAddress: ShippingAddress,
    ) => {
        const order = await state.setAddress(shippingAddress);
        if (!order) return false
    };

    if ($state.customer.id == CUSTOMER_NOT_DEFINED_ID) {
        if (!emailAddress || !firstName || !lastName)
            return "Please complete all fields.";
        order = await state.setCustomer({
            emailAddress,
            firstName,
            lastName,
        });
        if (!order) return ""
        setOrderShippingAddress($state.shippingAddress);

    } else {
        setOrderShippingAddress($state.shippingAddress);
    }

    // transition to ArrangingPayment state
    if ($state.orderState !== "ArrangingPayment") {
        await state.setOrderState("ArrangingPayment");
        await state.addPaymentToOrder()
        if ($state.orderState !== "ArrangingPayment") {
            return "Something went wrong while transitioning to ArrangingPayment state.";
        }
    }
    
    return true
}