<script lang="ts">
  import "swiper/css";
  import "swiper/css/navigation";

  import Tabs from "$lib/components/Tabs.svelte";
  import Categories from "./Categories.svelte";
  import NewArival from "./NewArival.svelte";
  import type { PageData } from "./$types";
  import Products from "./Products.svelte";
  import Showcase from "$lib/components/Showcase.svelte";
  import FlashSale from "./FlashSale.svelte";
  import { browser } from "$app/environment";
  import Deals from "./Deals.svelte";

  let active = 0;
  let items = [
    { name: "On Sale", slug: "on-sale" },
    { name: "Featured", slug: "featured" },
    { name: "New Products", slug: "new-products" },
  ];

  export let data: PageData;
  // $: if (browser) console.log({ flashSale: data.flashSale });
</script>

<section class="home section--lg">
  <div class="home__container container grid">
    <div class="home__content">
      <span class="home__subtitle">Hot promotions</span>
      <h1 class="home__title">
        Home Trending <span>Appliance Collection</span>
      </h1>
      <p class="home__description">Save more with coupons & up to 20% off</p>
      <a href="/shop" class="btn">Shop Now</a>
    </div>

    <img src="/assets/img/category-13.png" alt="" class="home__img" />
  </div>
</section>

<section class="categories container section">
  <h3 class="section__title"><span>Popular</span> Categories</h3>
  <Categories />
</section>

<section class="products section container">
  <Deals result={data.flashSale} />
</section>

<section class="products section container">
  <Tabs bind:active {items}>
    <div slot="on-sale">
      <Products result={data.onSale} />
    </div>
    <div slot="featured">
      <Products result={data.featured} />
    </div>
    <div slot="new-products">
      <Products result={data.newProduct} />
    </div>
  </Tabs>
</section>



<section class="new__arrivals container section">
  <NewArival result={data.newArrivals} />
</section>

<section class="showcase section">
  <div class="showcase__container container grid">
    <Showcase title="Best Sellers" result={data.bestSellers} />
    <Showcase title="Top Deals" result={data.topDeals} />
    <Showcase title="Trending" result={data.trending} />
    <Showcase title="Top Rated" result={data.topRated} />
  </div>
</section>
