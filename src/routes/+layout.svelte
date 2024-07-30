<script lang="ts">
  import "../style.css";

  import "swiper/css";
  import "swiper/css/navigation";

  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import type { LayoutData } from "./$types";
  import { order, state, user } from "$lib/store";
  import { browser } from "$app/environment";
  import { register } from "swiper/element";
  import { SITE_TITLE } from "$lib/constants";
  import NewsLetter from "$lib/components/NewsLetter.svelte";

  export let data: LayoutData;
  register();

  $: ({ collections, activeOrder, customer } = data);
  $: if (browser) {
    $user = customer ?? $user;;
    $order = activeOrder;
    $state.collections = collections;
    // console.log({ activeOrder });
  }
</script>

<svelte:head>
  <title>{SITE_TITLE}</title>
</svelte:head>

<div id="page" class="site">
  <div class="overlay" data-overlay></div>
  <Header />

  <main class="main">
    <slot />
  </main>

  <NewsLetter />
  <Footer />

  <div class="overlay"></div>
</div>
