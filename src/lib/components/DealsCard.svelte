<script lang="ts">
  import { state } from "$lib/store";
  import type { Product } from "$lib/types";
  import { formatPrice } from "$lib/utils";
  import Asset from "./Asset.svelte";

  export let product: Product;
  let days: number = 0;
  let hours: number = 0;
  let minutes: number = 0;
  let seconds: number = 0;

  const countDown = (_: any, endDate: string | undefined) => {
    if (!endDate) return;
    let end = new Date(endDate).getTime();
    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;
    let timer: NodeJS.Timeout;

    function remainder() {
      let now = new Date().getTime();
      let distance = end - now;
      if (distance < 0) {
        clearInterval(timer);
        // document.getElementById("countdown").innerHTML = "EXPIRED!";
        return;
      }
      days = Math.floor(distance / _day);
      hours = Math.floor((distance % _day) / _hour);
      minutes = Math.floor((distance % _hour) / _minute);
      seconds = Math.floor((distance % _minute) / _second);
    }

    timer = setInterval(remainder, 1000);
  };
</script>

<div class="deals__bg flex">
  <div class="deals__item">
    <div class="deals__group">
      <h3 class="deals__brand">{product.collections[0].name}</h3>
      <span class="deals__category">Limited quantities.</span>
    </div>

    <h4 class="deals__title">Try something new on vacation</h4>

    <div class="deals__price flex">
      <span class="new__price">{formatPrice(product.price.min)}</span>
      <del class="old__price"
        >{formatPrice(product.price.min, product.discountedPercent)}
      </del>
    </div>

    <div class="deals__group">
      <p class="deals__countdown-text">Hurry Up! Offer End In:</p>

      <div class="countdown">
        <div class="countdown__amount">
          <p class="countdown__period">02</p>
          <span class="unit">Days</span>
        </div>
        <div class="countdown__amount">
          <p class="countdown__period">22</p>
          <span class="unit">Hours</span>
        </div>
        <div class="countdown__amount">
          <p class="countdown__period">57</p>
          <span class="unit">Mins</span>
        </div>
        <div class="countdown__amount">
          <p class="countdown__period">24</p>
          <span class="unit">Sec</span>
        </div>
      </div>
    </div>

    <div class="deals__btn">
      <a href="details.html" class="btn btn--md">Shop Now</a>
    </div>
  </div>

  <Asset
    preview={product?.featuredAsset?.preview}
    alt={product.name}
    class=" mr-10"
    preset="medium"
  />
</div>
