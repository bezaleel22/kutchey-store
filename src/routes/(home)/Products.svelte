<script lang="ts">
  import ProductCard from "$lib/components/ProductCard.svelte";
  import { products } from "$lib/data/products";
  import type { Product } from "$lib/types";

  export let result: { totalItems?: number; products: Product[] | null };
</script>

{#if result.products}
  <div class="products__container grid">
    {#each result.products as product}
      <ProductCard {product} />
    {/each}
  </div>
{/if}
