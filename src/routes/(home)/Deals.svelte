<script lang="ts">
  import ProductCard from "$lib/components/ProductCard.svelte";
  import { products } from "$lib/data/products";
  import type { Product } from "$lib/types";
  import { onMount } from "svelte";

  export let result: { totalItems?: number; products: Product[] | null };
  let d = 0;
  let h = 0;
  let m = 0;
  let s = 0;
  let dealend = false;

  onMount(() => {
    // if (!endDate) {
    let future = new Date("sept 2, 2024 11:30:00").getTime();
    let secs = 1000;
    let mins = secs * 60;
    let hours = mins * 60;
    let days = hours * 24;
    let timer: NodeJS.Timeout;

    function remainder() {
      let now = new Date().getTime();
      let distance = future - now;
      if (distance < 0) {
        clearInterval(timer);
        dealend = true;
        console.log("done");
        return;
      }
      d = Math.floor(distance / days);
      h = Math.floor((distance % days) / hours);
      m = Math.floor((distance % hours) / mins);
      s = Math.floor((distance % mins) / secs);
    }

    timer = setInterval(remainder, 1000);
    // }
  });
</script>

{#if !dealend}
  <div class="flex justify-between mb-10">
    <div class="ti">
      <h3 class="!mb-0 section__title"><span>Deal of the</span> Day</h3>
      <span class="leading-3">
        Don't wait. The time will never be just right.
      </span>
    </div>

    <div class="countdown">
      <div class="countdown__amount">
        <p class="countdown__period">{d}</p>
        <span class="unit">Days</span>
      </div>
      <div class="countdown__amount">
        <p class="countdown__period">{h}</p>
        <span class="unit">Hours</span>
      </div>
      <div class="countdown__amount">
        <p class="countdown__period">{m}</p>
        <span class="unit">Mins</span>
      </div>
      <div class="countdown__amount">
        <p class="countdown__period">{s}</p>
        <span class="unit">Sec</span>
      </div>
    </div>
  </div>

  {#if result.products}
    <div class="products__container grid">
      {#each result.products as product}
        <ProductCard {product} />
      {/each}
    </div>
  {/if}
{/if}
