<script lang="ts">
  import type { OrderDetail$data } from "$houdini";
  import ProductCard from "$lib/components/ProductCard.svelte";
  import { order } from "$lib/store";
  import type { ActionData, PageData } from "./$types";
  import ProductDetail from "./ProductDetail.svelte";
  import Reviews from "./Reviews.svelte";
  import Spec from "./Spec.svelte";

  export let data: PageData;
  $: ({ product, related } = data);
  $: productId = product?.id;

  export let form: ActionData;
  $: $order = form?.activeOrder || ({} as OrderDetail$data);

  // $: if(browser) console.log({$order})
</script>

<section class="breadcrumb">
  <ul class="breadcrumb__list flex container">
    <li><a href="index.html" class="breadcrumb__link">Home</a></li>
    <li><span class="breadcrumb__link">></span></li>
    <li><span class="breadcrumb__link">Fashion</span></li>
    <li><span class="breadcrumb__link">></span></li>
    <li><span class="breadcrumb__link">Henley Shirt</span></li>
  </ul>
</section>

<section class="details section--lg">
  <ProductDetail {product} />
</section>

<!-- <section class="details__tab container">
  <div class="detail__tabs">
    <span class="detail__tab active-tab" data-target="#info">
      Spacification
    </span>
    <span class="detail__tab" data-target="#reviews">Reviews(3)</span>
  </div>

  <div class="details__tabs-content">
    <div class="details__tab-content active-tab" id="info">
      <Spec />
    </div>

    <div class="details__tab-content" id="reviews">
      <Reviews />
    </div>
  </div>
</section> -->

<section class="products container section--lg">
  <h3 class="section__title"><span>Related</span> Products</h3>

  {#if related.products}
    <div class="products__container grid">
      {#each related.products as product}
        {#if product.id !== productId}
          <ProductCard {product} />
        {/if}
      {/each}
    </div>
  {/if}
</section>
