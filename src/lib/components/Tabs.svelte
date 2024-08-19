<script lang="ts">
  import { browser } from "$app/environment";
  import { getContext } from "svelte";

  export let active: number;
  export let items: {
    slug?: string;
    name: string;
  }[];

  // $: active = getContext("active");
  // $: if (browser) console.log({ active });
</script>

<div class="tab__btns">
  {#each items as item, i}
    <button
      class:active-tab={active === i}
      class="tab__btn"
      on:click={() => (active = i)}
    >
      {item.name}
    </button>
  {/each}
</div>

<div class="tab__items">
  <div class:active-tab={active === 0} class="tab__item">
    <slot name="on-sale" />
  </div>
  <div class:active-tab={active === 1} class="tab__item">
    <slot name="featured" />
  </div>
  <div class:active-tab={active === 2} class="tab__item">
    <slot name="new-products" />
  </div>
</div>
