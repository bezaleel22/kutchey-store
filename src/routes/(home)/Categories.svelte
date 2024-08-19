<script lang="ts">
  import type { SwiperContainer } from "swiper/element";
  import { state } from "$lib/store";
  import { Autoplay, Navigation } from "swiper/modules";
  import type { SwiperOptions } from "swiper/types";
  import { onMount } from "svelte";
  import Asset from "$lib/components/Asset.svelte";

  let el: HTMLElement, next: HTMLElement, prev: HTMLElement;
  let init: boolean = false;

  onMount(() => {
    const container = el as SwiperContainer;
    const opts: SwiperOptions = {
      spaceBetween: 24,
      loop: true,

      modules: [Autoplay, Navigation],
      navigation: {
        nextEl: next,
        prevEl: prev,
      },

      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      breakpoints: {
        350: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      },
      on: {
        init: function () {
          init = true;
          console.log("Swiper Initialized");
        },
      },
    };

    Object.assign(container, opts);
    container.initialize();
    const swiper = container.swiper;

    return {
      destroy() {
        swiper.destroy();
      },
    };
  });
</script>

{#if $state.collections}
  <div class="swiper">
    <swiper-container bind:this={el} init={false}>
      {#each $state.collections as category}
        <swiper-slide>
          <a
            href={`/shop/${category.slug}`}
            class="inline-block border rounded-2xl text-center border-first p-3"
          >
            <div class="aspect-video mb-5">
              <Asset
                preview={category.featuredAsset?.preview}
                preset="small"
                alt=""
                class="h-full w-full object-cover rounded-lg"
              />
            </div>
            <h3 class="text-text text-sm">{category.name}</h3>
            <h3 class="text-text text-xs">
              ({category.productVariants?.totalItems})
            </h3>
          </a>
        </swiper-slide>
      {/each}
    </swiper-container>

    <div class="swiper-button-next" bind:this={next}>
      <i class="fi fi-rs-angle-right"></i>
    </div>
    <div class="swiper-button-prev" bind:this={prev}>
      <i class="fi fi-rs-angle-left"></i>
    </div>
  </div>
{/if}

<style lang="[postcss]">
  /* Swiper class */
  .swiper {
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
  }
</style>
