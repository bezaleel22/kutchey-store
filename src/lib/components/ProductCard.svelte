<script lang="ts">
  import { state } from "$lib/store";
  import type { Product } from "$lib/types";
  import { formatPrice } from "$lib/utiles";

  export let product: Product;
</script>

{#if product}
  <div class="product__item">
    <div class="product__banner">
      <a href="/product/{product.slug}" class="product__images h-64">
        <img
          src={product.featuredAsset?.preview}
          alt=""
          class="product__img default h-full w-full object-cover"
        />

        <img
          src={product.featuredAsset?.preview}
          alt=""
          class="product__img hover h-full w-full object-cover"
        />
      </a>

      <div class="product__actions">
        <a href=" " class="action__btn" aria-label="Quick View">
          <i class="fi fi-rs-eye"></i>
        </a>

        <a href=" " class="action__btn" aria-label="Add To Wishlist">
          <i class="fi fi-rs-heart"></i>
        </a>

        <a href=" " class="action__btn" aria-label="Compare">
          <i class="fi fi-rs-shuffle"></i>
        </a>
      </div>

      <div class="product__badge light-pink">Hot</div>
    </div>

    <div class="product__content">
      <span class="product__category">{product.collections[0].name}</span>
      <a href="/product/{product.slug}">
        <h3 class="product__title">{product.name}</h3>
      </a>
      <div class="product__rating">
        <i class="fi fi-rs-star"></i>
        <i class="fi fi-rs-star"></i>
        <i class="fi fi-rs-star"></i>
        <i class="fi fi-rs-star"></i>
        <i class="fi fi-rs-star"></i>
      </div>
      <div class="product__price flex">
        <span class="new__price">
          {formatPrice(product.price.min, product.currencyCode)}
        </span>
        <del class="old__price">
          {formatPrice(
            product.price.min,
            product.currencyCode,
            product.discountedPercent
          )}
        </del>
      </div>
      <button
        class="action__btn cart__btn"
        aria-label="Add To Cart"
      >
        <i class="fi fi-rs-shopping-bag-add"></i>
      </button>
    </div>
  </div>
{/if}
