<script lang="ts">
  import { browser } from "$app/environment";
  import { order, state, user } from "$lib/store";
  import VendureAsset from "$lib/components/Asset.svelte";
  import type { ActionData } from "./$types";
  import Quantity from "$lib/components/Quantity.svelte";
  import { CUSTOMER_NOT_DEFINED_ID } from "$lib/constants";
  import { formatPrice } from "$lib/utils";

  $: orderLines = $state.activeOrder?.lines;

  export let form: ActionData;
  $: if (form) $state.activeOrder = form.activeOrder || null;
  $: if (browser) console.log({ orderLines });
</script>

<section class="breadcrumb">
  <ul class="breadcrumb__list flex container">
    <li><a href="index.html" class="breadcrumb__link">Home</a></li>
    <li><span class="breadcrumb__link">></span></li>
    <li><span class="breadcrumb__link">Shop</span></li>
    <li><span class="breadcrumb__link">></span></li>
    <li><span class="breadcrumb__link">Cart</span></li>
  </ul>
</section>

<section class="cart section--lg container">
  <div class="table__container">
    {#if orderLines?.length}
      <table class="table">
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th>Remove</th>
        </tr>

        {#each orderLines as line, i}
          <tr>
            <td>
              {#if line.featuredAsset?.preview}
                <VendureAsset
                  preview={line.featuredAsset.preview}
                  alt={line.productVariant.name}
                  preset="thumb"
                  class="table__img rounded-lg"
                />
              {:else}
                <img
                  src={line.featuredAsset?.preview}
                  alt=""
                  class="table__img rounded-lg"
                />
              {/if}
            </td>

            <td>
              <a href="/product/{line.productVariant?.product?.slug}">
                <h3 class="table__title">{line.productVariant.name}</h3>
              </a>
            </td>

            <td>
              <span class="table__price">
                {formatPrice(Number(line.unitPriceWithTax))}
              </span>
            </td>

            <td>
              <Quantity index={i} />
            </td>

            <td>
              <span class="table__subtotal">
                {formatPrice(Number(line.linePriceWithTax))}
              </span>
            </td>

            <form action="?/removeItem&id={line.id}">
              <td>
                <button>
                  <i class="fi fi-rs-trash table__trash"></i>
                </button>
              </td>
            </form>
          </tr>
        {/each}
      </table>
    {:else}
      <div class="w-full text-center">
        <p class="text-text">Your Cart is Empty</p>
      </div>
    {/if}
  </div>
  {#if $state.activeOrder}
    <div class="cart__actions">
      <a href="/shop" class="btn flex btn--md">
        <i class="fi-rs-shopping-bag"></i> Continue Shopping
      </a>
    </div>
  {/if}

  <div class="divider">
    <i class="fi fi-rs-fingerprint"></i>
  </div>

  {#if $state.activeOrder}
    <div class="cart__group grid">
      <div>
        <div class="cart__coupon">
          <h3 class="section__title">Apply Coupon</h3>

          <form action="?/applyCoupon" class="coupon__form form grid">
            <div class="form__group grid">
              <input
                type="text"
                class="form__input"
                placeholder="Enter Your Coupon"
              />

              <div class="form__btn">
                <button class="btn flex btn--sm">
                  <i class="fi-rs-label"></i> Apply
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="cart__total">
        <h3 class="section__title">Cart Totals</h3>

        <table class="cart__total-table">
          <tr>
            <td><span class="cart__total-title">Cart Subtotal</span></td>
            <td
              ><span class="cart__total-price">
                {formatPrice(Number($state.activeOrder.subTotalWithTax))}
              </span></td
            >
          </tr>

          <tr>
            <td><span class="cart__total-title">Shipping</span></td>
            <td>
              <span class=" text-red-400 text-small">
                Shipping and taxes will be calculated at checkout!.
              </span></td
            >
          </tr>

          <tr>
            <td><span class="cart__total-title">Total</span></td>
            <td
              ><span class="cart__total-price">
                {formatPrice(Number($state.activeOrder.totalWithTax))}
              </span></td
            >
          </tr>
        </table>

        <a href="/checkout" class="btn flex btn--md">
          <i class="fi fi-rs-box-alt"></i> Proceed To Checkout
        </a>
      </div>
    </div>
  {/if}
</section>
