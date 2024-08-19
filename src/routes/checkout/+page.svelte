<script lang="ts">
  import { getOptions, processCheckout } from "$lib/checkout";
  import { Paystack } from "$lib/paystack";
  import { state } from "$lib/store";
  import { formatPrice } from "$lib/utils";
  import { onMount } from "svelte";
  import type { PageData } from "./$types";
  import Shipping from "./Shipping.svelte";

  export let data: PageData;
  let paymentMethod = data.paymentOptions[0].id;
  let shippingMethod = data.shippingMethods[0].id;
  let paystack: Paystack;

  $: orderLines = $state.activeOrder?.lines;
  $: paymentMethodCode = data.paymentOptions.find(
    (opt) => opt.id == paymentMethod
  )?.code;

  // $: if (browser) console.log({ ...$state.activeOrder });

  onMount(async () => {
    if ($state.activeOrder) {
      paystack = new Paystack();
      await paystack.init();
    }
  });

  const checkout = async (e: Event) => {
    const error = await processCheckout(shippingMethod);
    if (error) {
      console.log(error);
      return;
    }

    const options = getOptions(
      $state.customer.emailAddress,
      data.activeOrder.totalWithTax,
      paymentMethodCode
    );

    paystack.start(options);
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
  <div class="checkout__container container grid">
    <div class="checkout__group">
      <div class="cart__shipping">
        <h3 class="section__title">Shipping Details</h3>
        <Shipping />
      </div>

      <!-- <div class="divider">
          <i class="fi fi-rs-fingerprint"></i>
        </div>
        <h3 class="section__title">Billing Details</h3>
        <Billing /> -->
    </div>

    <div class="checkout__group">
      <h3 class="section__title">Cart Totals</h3>

      <table class="order__table">
        <tr>
          <th colspan="2">Products</th>
          <th>Total</th>
        </tr>
        {#if orderLines}
          {#each orderLines as line}
            <tr>
              <td>
                <img
                  src={line.featuredAsset?.preview}
                  alt=""
                  class="order__img rounded-lg"
                />
              </td>

              <td>
                <h3 class="table__title">{line.productVariant.name}</h3>
                <p class="table__quantity">{line.quantity}</p>
              </td>

              <td>
                <span class="table__price">
                  {formatPrice(Number(line.linePriceWithTax))}
                </span>
              </td>
            </tr>
          {/each}
        {/if}

        <tr>
          <td><span class="order__subtitle">Total</span></td>
          <td colspan="2">
            <span class="order__grand-total">
              {formatPrice(Number($state.activeOrder?.totalWithTax))}
            </span>
          </td>
        </tr>
      </table>
      <div class="flex justify-evenly">
        <div class="payment__methods">
          <h3 class="checkout__title payment__title">Payment Method</h3>
          {#each data.paymentOptions as method}
            <div class="payment__option flex">
              <input
                type="radio"
                name="paymentMethod"
                value={method.id}
                bind:group={paymentMethod}
                class="payment__input"
              />
              <label for="" class="payment__label">{method.name}</label>
            </div>
          {/each}
        </div>

        <div class="payment__methods">
          <h3 class="checkout__title payment__title">Shipping Method</h3>
          {#each data.shippingMethods as method}
            <div class="payment__option flex">
              <input
                type="radio"
                name="shippingMethod"
                value={method.id}
                bind:group={shippingMethod}
                class="payment__input"
              />
              <label for="" class="payment__label">{method.name}</label>
            </div>
          {/each}
        </div>
      </div>

      <button on:click={checkout} class="btn btn--md">Place Order</button>
    </div>
  </div>
</section>
