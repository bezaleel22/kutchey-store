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
  import ProgressBar from "$lib/components/ProgressBar.svelte";

  export let data: LayoutData;
  register();

  $: ({ collections, activeOrder, customer } = data);
  $: if (browser) {
    $state.customer = customer ?? $user;;
    $state.activeOrder = activeOrder;
    $state.collections = collections;
    // $currencyCode = $LayoutQuery.data.activeChannel.currencyCode
    // console.log({ activeOrder });
  }
</script>

<svelte:head>
  <title>{SITE_TITLE}</title>
</svelte:head>

<ProgressBar class="text-first" zIndex={9999}/>
<div id="page" class="site">
  <Header />

  <main class="main">
    <slot />
  </main>

  <NewsLetter />
  <Footer />

  <div class="overlay"></div>
</div>
