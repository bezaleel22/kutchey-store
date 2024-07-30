<script lang="ts">
  import { enhance } from "$app/forms";
  import type { DetailedProduct$data } from "$houdini";
  import { formatPrice } from "$lib/utiles";

  export let product: DetailedProduct$data | null;
  $: variant = product?.variants[0];
  $: optionId = variant?.options[0]?.id;

  let mainImg: HTMLImageElement;
  let quantity: number = 1;

  const filter = (optId: string) => {
    variant = product?.variants.find((variant) =>
      variant.options.find((opt) => opt.id === optId)
    );
    optionId = optId;
    console.log({ variant });
  };

</script>

{#if product && variant}
  <div class="details__container container grid">
    <div class="details__group">
      <div class="rounded-lg mb-3 h-5/6 max-[20px]: border border-first p-5">
        <img
          bind:this={mainImg}
          src={variant.featuredAsset?.preview}
          alt=""
          class="rounded-lg w-full h-full object-cover"
        />
      </div>

      <div class="flex">
        {#each variant.assets as asset}
          <button
            on:click={() => (mainImg.src = asset.preview)}
            class="p-2 h-24 w-24"
          >
            <img
              src={asset.preview}
              alt=""
              class="rounded-lg h-full w-full object-cover"
            />
          </button>
        {/each}
      </div>
    </div>

    <div class="details__group">
      <h3 class="details__title">{variant.name}</h3>
      <p class="details__brand">Brands: <span>adidas</span></p>

      <div class="details__price flex">
        <span class="new__price">
          {formatPrice(Number(variant.priceWithTax), variant.currencyCode)}
        </span>
        <span class="old__price">$200.00</span>
        <span class="save__price">25% Off</span>
      </div>

      <p class="short__description">
        {product.description}
      </p>

      <ul class="product__list mb-10">
        <li class="list__item flex">
          <i class="fi-rs-crown"></i> 1 Year AL Jazeera Brand Warranty
        </li>

        <li class="list__item flex">
          <i class="fi-rs-refresh"></i> 30 Day Return Policy
        </li>

        <li class="list__item flex">
          <i class="fi-rs-credit-card"></i> Cash on Delivery available
        </li>
      </ul>

      {#each product.optionGroups as group}
        {#if group.code == "color"}
          <div class="details__color flex">
            <span class="details__color-title">{group.name}</span>

            <ul class="color__list">
              <li>
                <a
                  href=" "
                  class="color__link"
                  style="background-color: hsl(37, 100%, 65%)"
                >
                </a>
              </li>

              <li>
                <a
                  href=" "
                  class="color__link"
                  style="background-color: hsl(353, 100%, 67%)"
                >
                </a>
              </li>

              <li>
                <a
                  href=" "
                  class="color__link"
                  style="background-color: hsl(49, 100%, 60%)"
                >
                </a>
              </li>

              <li>
                <a
                  href=" "
                  class="color__link"
                  style="background-color: hsl(304, 100%, 78%)"
                >
                </a>
              </li>

              <li>
                <a
                  href=" "
                  class="color__link"
                  style="background-color: hsl(126, 61%, 52%)"
                >
                </a>
              </li>
            </ul>
          </div>
        {/if}
        {#if group.code == "size"}
          <div class="details__size flex">
            <span class="details__size-title">{group.name}</span>

            <ul class="size__list">
              {#each group.options as option}
                <li>
                  <button
                    on:click={() => filter(option.id)}
                    class:size-active={optionId === option.id}
                    class="size__link"
                    type="button"
                  >
                    {option.name}
                  </button>
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      {/each}
      <div class="details__action">
        <form
          use:enhance
          method="POST"
          action="?/addItem&id={variant.id}&qty={quantity}"
        >
          <input bind:value={quantity} type="number" class="quantity" />

          <button class="btn btn--sm"> Add to Cart </button>
        </form>

        <button class="details__action-btn">
          <i class="fi fi-rs-heart"></i>
        </button>
      </div>
      <ul class="details__meta">
        <li class="meta__list flex"><span>SKU:</span> FWM15VKT</li>
        <li class="meta__list flex">
          <span>Tags:</span> Cloth, Women, Dress
        </li>
        <li class="meta__list flex">
          <span>Availability:</span> 8 Items In Stock
        </li>
      </ul>
    </div>
  </div>
{/if}
