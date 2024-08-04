<script lang="ts">
  import { enhance } from "$app/forms";
  import { browser } from "$app/environment";
  import { CUSTOMER_NOT_DEFINED_ID } from "$lib/constants";
  import { state } from "$lib/store";
  import type {
    PaymentMethod,
    PaystackOptions,
    ShippingMethod,
    TransactionResponse,
  } from "$lib/types";
  import Shipping from "./Shipping.svelte";
  import type { SubmitFunction } from "@sveltejs/kit";
  import { PUBLIC_PAYSTACK_KEY } from "$env/static/public";
  import PaystackSdk from "$lib/paystack";

  let paymentMethod = "directBankTransfer";
  let shippingMethod = "gigl";
  let shippingOptions: ShippingMethod[];
  let paymentOptions: PaymentMethod[];

  let token: string;
  let contacts: any[];
  let emailAddress: string;
  let firstName: string;
  let lastName: string;
  let delivery: "ship" | "pickup" = "ship";
  let processing = false;
  let selectedShippingOption: string;
  let errorMessage: string;
  let prelooder: any;

  $: {
    if (browser && shippingOptions)
      state.setShippingOption(selectedShippingOption);
  }

  const checkout: SubmitFunction = async ({ cancel }) => {
    const options: PaystackOptions = {
      key: PUBLIC_PAYSTACK_KEY,
      email: "customer@example.com",
      amount: 5000,
      currency: "NGN",
      reference: $state.activeOrder.code,
      container: "paystackEmbedContainer",
      onLoad: (response: TransactionResponse) => {
        console.log("Payment link loaded:", response);
        // Handle preloader load
      },
      onSuccess: (response) => {
        console.log("Payment was successful:", response);
        // Handle successful payment response
      },
      onCancel: () => {
        console.log("Payment was canceled");
        // Handle payment cancellation
      },
      onError: (error: Error) => {
        console.error("Payment error:", error);
        // Handle payment error
      },
    };

    const paystack = new PaystackSdk(options);
    prelooder = paystack.preload();

    return async () => {
      processing = false;
    };
  };
</script>

<div id="paystackEmbedContainer" />

<section class="breadcrumb">
  <ul class="breadcrumb__list flex container">
    <li><a href="index.html" class="breadcrumb__link">Home</a></li>
    <li><span class="breadcrumb__link">></span></li>
    <li><span class="breadcrumb__link">Shop</span></li>
    <li><span class="breadcrumb__link">></span></li>
    <li><span class="breadcrumb__link">Checkout</span></li>
  </ul>
</section>

<section class="checkout section--lg">
  <form action="?/checkout" use:enhance={checkout}>
    <div class="checkout__container container grid">
      <div class="checkout__group">
        <div class="cart__shipping">
          <h3 class="section__title">Shipping Details</h3>
          <Shipping />
        </div>
        <!-- {#if !isBilling}
        <div class="divider">
          <i class="fi fi-rs-fingerprint"></i>
        </div>
        <h3 class="section__title">Billing Details</h3>
        <Billing />
      {/if} -->
      </div>

      <div class="checkout__group">
        <h3 class="section__title">Cart Totals</h3>

        <table class="order__table">
          <tr>
            <th colspan="2">Products</th>
            <th>Total</th>
          </tr>

          <tr>
            <td>
              <img
                src="/assets/img/product-1-2.jpg"
                alt=""
                class="order__img"
              />
            </td>

            <td>
              <h3 class="table__title">Yidarton Women Summer Blue</h3>
              <p class="table__quantity">x 2</p>
            </td>

            <td><span class="table__price">$180.00</span></td>
          </tr>

          <tr>
            <td>
              <img
                src="/assets/img/product-2-1.jpg"
                alt=""
                class="order__img"
              />
            </td>

            <td>
              <h3 class="table__title">LDB MOON Women Summe</h3>
              <p class="table__quantity">x 1</p>
            </td>

            <td><span class="table__price">$65.00</span></td>
          </tr>

          <tr>
            <td>
              <img
                src="/assets/img/product-7-1.jpg"
                alt=""
                class="order__img"
              />
            </td>

            <td>
              <h3 class="table__title">Women's Short Sleeve Loose</h3>
              <p class="table__quantity">x 2</p>
            </td>

            <td><span class="table__price">$35.00</span></td>
          </tr>

          <tr>
            <td><span class="order__subtitle">SubTotal</span></td>
            <td colspan="2"><span class="table__price">$280.00</span></td>
          </tr>

          <tr>
            <td><span class="order__subtitle">Shipping</span></td>
            <td colspan="2">
              <span class="table__price">Free Shipping</span>
            </td>
          </tr>

          <tr>
            <td><span class="order__subtitle">Total</span></td>
            <td colspan="2">
              <span class="order__grand-total">$280.00</span>
            </td>
          </tr>
        </table>

        <div class="payment__methods">
          <h3 class="checkout__title payment__title">Payment Method</h3>

          <div class="payment__option flex">
            <input
              type="radio"
              name="paymentMethod"
              value="directBankTransfer"
              bind:group={paymentMethod}
              class="payment__input"
            />
            <label for="" class="payment__label">Direct Bank Transfer</label>
          </div>

          <div class="payment__option flex">
            <input
              type="radio"
              name="paymentMethod"
              value="checkPayment"
              bind:group={paymentMethod}
              class="payment__input"
            />
            <label for="" class="payment__label">Check Payment</label>
          </div>

          <div class="payment__option flex">
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              bind:group={paymentMethod}
              class="payment__input"
            />
            <label for="" class="payment__label">Paypal</label>
          </div>
        </div>

        <div class="payment__methods">
          <h3 class="checkout__title payment__title">Shipping Method</h3>
          <div class="payment__option flex">
            <input
              type="radio"
              name="shippingMethod"
              value="gigl"
              bind:group={shippingMethod}
              class="payment__input"
            />
            <label for="" class="payment__label">GIGL</label>
          </div>
        </div>
        <div class="payment__option flex">
          <input
            type="radio"
            name="shippingMethod"
            value="uber"
            bind:group={shippingMethod}
            class="payment__input"
          />
          <label for="" class="payment__label">Uber</label>
        </div>
        <div class="payment__option flex">
          <input
            type="radio"
            name="shippingMethod"
            value="pickup"
            bind:group={shippingMethod}
            class="payment__input"
          />
          <label for="" class="payment__label">Pickup</label>
        </div>
        <button on:click={prelooder} class="btn btn--md">Place Order</button>
      </div>
    </div>
  </form>
</section>
