<script lang="ts">
  import type { PageData } from "./$types";
  import ProductCard from "$lib/components/ProductCard.svelte";
  import NewsLetter from "$lib/components/NewsLetter.svelte";
  import { page } from "$app/stores";
  import { browser } from "$app/environment";

  export let data: PageData;
  $: ({ products, totalItems } = data);

  let pageSize = 12;
  
  $: total = totalItems ? totalItems : 0;
  $: totalPages = Math.ceil(total / pageSize);
  $: currentPage = Number($page.params.page);
  // $: if (browser) console.log({ totalPages, currentPage });
</script>

<section class="breadcrumb">
  <ul class="breadcrumb__list flex container">
    <li><a href="index.html" class="breadcrumb__link">Home</a></li>
    <li><span class="breadcrumb__link">></span></li>
    <li><span class="breadcrumb__link">Shop</span></li>
  </ul>
</section>

<section class="products section--lg container">
  <p class="total__products">
    We found <span>{totalItems||0}</span> items for you!
  </p>

  {#if products}
    <div class="products__container grid">
      {#each products as product}
        <ProductCard {product} />
      {/each}
    </div>
  {/if}

  <ul class="pagination">
    {#each Array(totalPages) as _, idx}
      <li>
        <a
          href="/shop/{idx + 1}"
          class="pagination__link active"
          class:active={currentPage === idx + 1}
        >
          {idx + 1}
        </a>
      </li>
    {/each}
    {#if currentPage < totalPages}
      <li>
        <a href="/shop/{currentPage + 2}" class="pagination__link icon">
          <i class="fi-rs-angle-double-small-right"></i>
        </a>
      </li>
    {/if}
  </ul>
</section>
