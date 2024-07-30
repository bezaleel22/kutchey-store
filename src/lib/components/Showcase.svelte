<script lang="ts">
  import type { Product } from "$lib/types";
  import { formatPrice } from "$lib/utiles";

  export let result: { totalItems?: number; products: Product[] | null };
  export let title: string;
</script>

{#if result.products}
  <div class="showcase__wrapper">
    <h3 class="section__title">{title}</h3>
    {#each result.products as product}
      <div class="showcase__item">
        <a href="details.html" class="showcase__img-box h-14">
          <img
            src={product.featuredAsset?.preview}
            alt=""
            class="showcase__img w-full h-full object-cover"
          />
        </a>

        <div class="showcase__content">
          <a href="details.html">
            <h4 class="showcase__title">{product.name}</h4>
          </a>

          <div class="deals__price flex">
            <span class="new__price"
              >{formatPrice(product.price.min, product.currencyCode)}</span
            >
            <del class="old__price"
              >{formatPrice(
                product.price.min,
                product.currencyCode,
                product.discountedPercent
              )}</del
            >
          </div>
        </div>
      </div>
    {/each}
  </div>
{/if}
