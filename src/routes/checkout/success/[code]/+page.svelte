<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  $: ({ code, status } = data);
</script>

<section class="breadcrumb">
  <ul class="breadcrumb__list flex container">
    <li><a href="index.html" class="breadcrumb__link">Home</a></li>
    <li><span class="breadcrumb__link">></span></li>
    <li><span class="breadcrumb__link">Shop</span></li>
    <li><span class="breadcrumb__link">></span></li>
    <li><span class="breadcrumb__link">Checkout</span></li>
    <li><span class="breadcrumb__link">Confirmation</span></li>
  </ul>
</section>

<div
  class="flex min-h-[50dvh] flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
>
  <div class="mx-auto max-w-md text-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="mx-auto h-16 w-16 text-first"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="m9 12 2 2 4-4"></path>
    </svg>
    <h1
      class="mt-6 text-3xl text-teal-800 font-bold tracking-tight sm:text-4xl"
    >
      Payment Successful
    </h1>
    <p class="mt-4 text-muted-foreground text-text">
      Your payment was processed successfully. You can now view the details of
      your order in your account.
    </p>
    <div class="mt-6">
      <a class="btn btn--md" href="/account" rel="ugc"> Go to Account </a>
    </div>
  </div>
</div>
