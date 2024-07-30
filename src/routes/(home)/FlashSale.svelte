<script lang="ts">
  import { browser } from "$app/environment";
  import DealsCard from "$lib/components/DealsCard.svelte";
  import { products } from "$lib/data/products";
  import type { Product } from "$lib/types";
  import { onMount } from "svelte";
  import type { SwiperContainer } from "swiper/element";
  import { Navigation } from "swiper/modules";
  import type { SwiperOptions } from "swiper/types";

  export let result: { totalItems?: number; products: Product[] | null };
  let el: HTMLElement, next: HTMLElement, prev: HTMLElement;

  $: if (browser) {
    console.log(result);
  }

  // onMount(() => {
  //   const container = el as SwiperContainer;
  //   const opts: SwiperOptions = {
  //     spaceBetween: 24,
  //     loop: true,

  //     modules: [Navigation],
  //     navigation: {
  //       nextEl: next,
  //       prevEl: prev,
  //     },

  //     breakpoints: {
  //       768: {
  //         slidesPerView: 2,
  //         spaceBetween: 24,
  //       },
  //       992: {
  //         slidesPerView: 3,
  //         spaceBetween: 24,
  //       },
  //       1400: {
  //         slidesPerView: 4,
  //         spaceBetween: 24,
  //       },
  //     },
  //   };

  //   Object.assign(container, opts);
  //   container.initialize();
  //   const swiper = container.swiper;

  //   return {
  //     destroy() {
  //       swiper.destroy();
  //     },
  //   };
  // });
</script>

<div class="deals__container container grid">
  {#if result.products}
    <!-- <div class=" swiper"> -->
    <!-- <swiper-container bind:this={el} init={false}> -->
    {#each result.products as product}
      <!-- <swiper-slide> -->
      <DealsCard {product} />
      <!-- </swiper-slide> -->
    {/each}
    <!-- </swiper-container> -->
    <!-- <div class="swiper-button-next" bind:this={next}>
        <i class="fi fi-rs-angle-right"></i>
      </div>
      <div class="swiper-button-prev" bind:this={prev}>
        <i class="fi fi-rs-angle-left"></i>
      </div> -->
    <!-- </div> -->
  {/if}
</div>

<style lang="[postcss]">
  /* Swiper class */
  /* .swiper {
    overflow: initial;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    content: "";
  }

  .swiper-button-next,
  .swiper-button-prev {
    top: -1.875rem;
    background-color: var(--first-color-alt);
    border: 1px solid var(--border-color);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: var(--first-color);
    font-size: var(--tiny-font-size);
  }

  .swiper-button-prev {
    left: initial;
    right: 2.5rem;
  }

  .swiper-button-next {
    right: 0;
  } */
</style>
