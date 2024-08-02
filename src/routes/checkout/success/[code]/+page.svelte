<script lang="ts">
  import type { PaymentMethodQuote, ShippingMethodQuote } from "$lib/types";

  export let data: PageData;


  let token: string;
  let contacts: any[];
  let emailAddress: string;
  let firstName: string;
  let lastName: string;
  let shippingOptions: ShippingMethodQuote[];
  let selectedShippingOption: string;
  let paymentOptions: PaymentMethodQuote[];
  let delivery: "ship" | "pickup" = "ship";
  let processing = false;
  let errorMessage: string | undefined;

  $: {
    if (browser && shippingOptions) setShippingOption(selectedShippingOption);
  }

  const startCheckout = async (token: string) => {
    const { paymentOptions, contacts } = await fetch(
      "/checkout/start-checkout",
      {
        method: "POST",
        body: JSON.stringify({ token }),
      }
    )
      .then((res) => res.json())
      .catch((e) => {
        if (dev) console.log(e);
      });
    addressElementOptions.contacts = contacts;
  };

  const setCustomer = async (customer: CreateCustomerInput) => {
    const response = await fetch("/checkout/set-customer", {
      method: "POST",
      body: JSON.stringify(customer),
    }).catch((e) => {
      if (dev) console.log(e);
    });
    if (response?.status === 409) {
      errorMessage =
        "An account with that email address already exists.  Please sign in.";
    }
  };

  const setAddress = async (address: CreateAddressInput) => {
    return await fetch("/checkout/set-address", {
      method: "POST",
      body: JSON.stringify(address),
    }).catch((e) => {
      if (dev) console.log(e);
    });
  };

  const getShippingOptions = async () => {
    return await fetch("/checkout/get-shipping-options")
      .then((res) => res.json())
      .catch((e) => {
        if (dev) console.log(e);
      });
  };

  const setShippingOption = async (id: string) => {
    $order = await fetch("/checkout/set-shipping-option", {
      method: "POST",
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .catch((e) => {
        if (dev) console.log(e);
      });
  };

  const selectCheapestShippingOption = async () => {
    // set cheapest shipping option as default, but make sure it is not local pickup
    if (shippingOptions) {
      let index = 0;
      if (PUBLIC_LOCAL_PICKUP_CODE) {
        let pickupIndex = shippingOptions.findIndex(
          (v) => v.code === PUBLIC_LOCAL_PICKUP_CODE
        );
        if (pickupIndex === index) index += 1;
      }
      if (index === shippingOptions.length) {
        errorMessage = "There are no shipping options available.";
      } else {
        selectedShippingOption = shippingOptions[index].id;
      }
    }
  };

  const selectPickupOption = async () => {
    if (shippingOptions) {
      let pickupIndex = shippingOptions.findIndex(
        (v) => v.code === PUBLIC_LOCAL_PICKUP_CODE
      );
      if (pickupIndex === -1) {
        errorMessage =
          "Something went wrong while setting the shipping option to local pickup.";
      } else {
        selectedShippingOption = shippingOptions[pickupIndex].id;
      }
    }
  };

  const setOrderState = async (state: string) => {
    return await fetch("/checkout/set-order-state", {
      method: "POST",
      body: JSON.stringify({ state }),
    })
      .then((res) => res.json())
      .catch((e) => {
        if (dev) console.log(e);
      });
  };

  const saveNewAddress = async (address: CreateAddressInput) => {
    if ($customer.addresses?.length) {
      const existingAddress = $customer.addresses.find(
        (v) =>
          v.streetLine1 === address.streetLine1 &&
          v.streetLine2 === address.streetLine2 &&
          v.city === address.city &&
          v.province === address.province &&
          v.postalCode === address.postalCode
      );
      if (existingAddress) return;
    }
    return await fetch("/checkout/save-new-address", {
      method: "POST",
      body: JSON.stringify(address),
    }).catch((e) => {
      if (dev) console.log(e);
    });
  };
</script>

{#if data.code}
  <CheckoutSuccess code={data.code} />
{:else}
  <p>Order not found</p>
{/if}
