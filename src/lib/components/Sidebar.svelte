<script lang="ts">
  import { browser } from "$app/environment";
  import { state } from "$lib/store";
  import type { Product } from "$lib/types";
  export let result: Product[] | null = null;

  const formatPrice = (product: Product, discount = false) => {
    let price =
      Number(product.price.value) / 100 || Number(product.price.min) / 100;

    if (product.discountedPercent && discount)
      price = price * (product.discountedPercent / 100) + price;

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: product.currencyCode,
    }).format(price);
  };

  $: if (browser) console.log({ categories: $state.categories });
</script>

<div class="sidebar has-scrollbar" data-mobile-menu>
  <div class="sidebar-category">
    <div class="sidebar-top">
      <h2 class="sidebar-title">Category</h2>

      <button class="sidebar-close-btn" data-mobile-menu-close-btn>
        <span class="i-ion-close-outline"></span>
      </button>
    </div>

    <ul class="sidebar-menu-category-list">
      <li class="sidebar-menu-category">
        <button class="sidebar-accordion-menu" data-accordion-btn>
          <div class="menu-title-flex">
            <img
              src="assets/images/icons/dress.svg"
              alt="clothes"
              width="20"
              height="20"
              class="menu-title-img"
            />

            <p class="menu-title">Clothes</p>
          </div>

          <div>
            <span class="i-ion-add-outline add-icon"></span>
            <span class="i-ion-remove-outline remove-icon"></span>
          </div>
        </button>

        <ul class="sidebar-submenu-category-list" data-accordion>
          <li class="sidebar-submenu-category">
            <a href=" " class="sidebar-submenu-title">
              <p class="product-name">Shirt</p>
              <data value="300" class="stock" title="Available Stock">300</data>
            </a>
          </li>

          <li class="sidebar-submenu-category">
            <a href=" " class="sidebar-submenu-title">
              <p class="product-name">shorts & jeans</p>
              <data value="60" class="stock" title="Available Stock">60</data>
            </a>
          </li>

          <li class="sidebar-submenu-category">
            <a href=" " class="sidebar-submenu-title">
              <p class="product-name">jacket</p>
              <data value="50" class="stock" title="Available Stock">50</data>
            </a>
          </li>

          <li class="sidebar-submenu-category">
            <a href=" " class="sidebar-submenu-title">
              <p class="product-name">dress & frock</p>
              <data value="87" class="stock" title="Available Stock">87</data>
            </a>
          </li>
        </ul>
      </li>

      <li class="sidebar-menu-category">
        <button class="sidebar-accordion-menu" data-accordion-btn>
          <div class="menu-title-flex">
            <img
              src="assets/images/icons/shoes.svg"
              alt="footwear"
              class="menu-title-img"
              width="20"
              height="20"
            />

            <p class="menu-title">Footwear</p>
          </div>

          <div>
            <span class="i-ion-add-outline add-icon"></span>
            <span class="i-ion-remove-outline remove-icon"></span>
          </div>
        </button>

        <ul class="sidebar-submenu-category-list" data-accordion>
          <li class="sidebar-submenu-category">
            <a href=" " class="sidebar-submenu-title">
              <p class="product-name">Sports</p>
              <data value="45" class="stock" title="Available Stock">45</data>
            </a>
          </li>

          <li class="sidebar-submenu-category">
            <a href=" " class="sidebar-submenu-title">
              <p class="product-name">Formal</p>
              <data value="75" class="stock" title="Available Stock">75</data>
            </a>
          </li>

          <li class="sidebar-submenu-category">
            <a href=" " class="sidebar-submenu-title">
              <p class="product-name">Casual</p>
              <data value="35" class="stock" title="Available Stock">35</data>
            </a>
          </li>

          <li class="sidebar-submenu-category">
            <a href=" " class="sidebar-submenu-title">
              <p class="product-name">Safety Shoes</p>
              <data value="26" class="stock" title="Available Stock">26</data>
            </a>
          </li>
        </ul>
      </li>

      <li class="sidebar-menu-category">
        <button class="sidebar-accordion-menu" data-accordion-btn>
          <div class="menu-title-flex">
            <img
              src="assets/images/icons/jewelry.svg"
              alt="clothes"
              class="menu-title-img"
              width="20"
              height="20"
            />

            <p class="menu-title">Jewelry</p>
          </div>

          <div>
            <span class="i-ion-add-outline add-icon"></span>
            <span class="i-ion-remove-outline remove-icon"></span>
          </div>
        </button>

        <ul class="sidebar-submenu-category-list" data-accordion>
          <li class="sidebar-submenu-category">
            <a href=" " class="sidebar-submenu-title">
              <p class="product-name">Earrings</p>
              <data value="46" class="stock" title="Available Stock">46</data>
            </a>
          </li>

          <li class="sidebar-submenu-category">
            <a href=" " class="sidebar-submenu-title">
              <p class="product-name">Couple Rings</p>
              <data value="73" class="stock" title="Available Stock">73</data>
            </a>
          </li>

          <li class="sidebar-submenu-category">
            <a href=" " class="sidebar-submenu-title">
              <p class="product-name">Necklace</p>
              <data value="61" class="stock" title="Available Stock">61</data>
            </a>
          </li>
        </ul>
      </li>

      <li class="sidebar-menu-category">
        <button class="sidebar-accordion-menu" data-accordion-btn>
          <div class="menu-title-flex">
            <img
              src="assets/images/icons/perfume.svg"
              alt="perfume"
              class="menu-title-img"
              width="20"
              height="20"
            />

            <p class="menu-title">Perfume</p>
          </div>

          <div>
            <span class="i-ion-add-outline add-icon"></span>
            <span class="i-ion-remove-outline remove-icon"></span>
          </div>
        </button>

        <ul class="sidebar-submenu-category-list" data-accordion>
          <li class="sidebar-submenu-category">
            <a href=" " class="sidebar-submenu-title">
              <p class="product-name">Clothes Perfume</p>
              <data value="12" class="stock" title="Available Stock"
                >12 pcs</data
              >
            </a>
          </li>

          <li class="sidebar-submenu-category">
            <a href=" " class="sidebar-submenu-title">
              <p class="product-name">Deodorant</p>
              <data value="60" class="stock" title="Available Stock"
                >60 pcs</data
              >
            </a>
          </li>

          <li class="sidebar-submenu-category">
            <a href=" " class="sidebar-submenu-title">
              <p class="product-name">jacket</p>
              <data value="50" class="stock" title="Available Stock"
                >50 pcs</data
              >
            </a>
          </li>

          <li class="sidebar-submenu-category">
            <a href=" " class="sidebar-submenu-title">
              <p class="product-name">dress & frock</p>
              <data value="87" class="stock" title="Available Stock"
                >87 pcs</data
              >
            </a>
          </li>
        </ul>
      </li>

      <li class="sidebar-menu-category">
        <button class="sidebar-accordion-menu" data-accordion-btn>
          <div class="menu-title-flex">
            <img
              src="assets/images/icons/cosmetics.svg"
              alt="cosmetics"
              class="menu-title-img"
              width="20"
              height="20"
            />

            <p class="menu-title">Cosmetics</p>
          </div>

          <div>
            <span class="i-ion-add-outline add-icon"></span>
            <span class="i-ion-remove-outline remove-icon"></span>
          </div>
        </button>

        <ul class="sidebar-submenu-category-list" data-accordion>
          <li class="sidebar-submenu-category">
            <a href=" " class="sidebar-submenu-title">
              <p class="product-name">Shampoo</p>
              <data value="68" class="stock" title="Available Stock">68</data>
            </a>
          </li>

          <li class="sidebar-submenu-category">
            <a href=" " class="sidebar-submenu-title">
              <p class="product-name">Sunscreen</p>
              <data value="46" class="stock" title="Available Stock">46</data>
            </a>
          </li>

          <li class="sidebar-submenu-category">
            <a href=" " class="sidebar-submenu-title">
              <p class="product-name">Body Wash</p>
              <data value="79" class="stock" title="Available Stock">79</data>
            </a>
          </li>

          <li class="sidebar-submenu-category">
            <a href=" " class="sidebar-submenu-title">
              <p class="product-name">Makeup Kit</p>
              <data value="23" class="stock" title="Available Stock">23</data>
            </a>
          </li>
        </ul>
      </li>

      <li class="sidebar-menu-category">
        <button class="sidebar-accordion-menu" data-accordion-btn>
          <div class="menu-title-flex">
            <img
              src="assets/images/icons/glasses.svg"
              alt="glasses"
              class="menu-title-img"
              width="20"
              height="20"
            />

            <p class="menu-title">Glasses</p>
          </div>

          <div>
            <span class="i-ion-add-outline add-icon"></span>
            <span class="i-ion-remove-outline remove-icon"></span>
          </div>
        </button>

        <ul class="sidebar-submenu-category-list" data-accordion>
          <li class="sidebar-submenu-category">
            <a href=" " class="sidebar-submenu-title">
              <p class="product-name">Sunglasses</p>
              <data value="50" class="stock" title="Available Stock">50</data>
            </a>
          </li>

          <li class="sidebar-submenu-category">
            <a href=" " class="sidebar-submenu-title">
              <p class="product-name">Lenses</p>
              <data value="48" class="stock" title="Available Stock">48</data>
            </a>
          </li>
        </ul>
      </li>

      <li class="sidebar-menu-category">
        <button class="sidebar-accordion-menu" data-accordion-btn>
          <div class="menu-title-flex">
            <img
              src="assets/images/icons/bag.svg"
              alt="bags"
              class="menu-title-img"
              width="20"
              height="20"
            />

            <p class="menu-title">Bags</p>
          </div>

          <div>
            <span class="i-ion-add-outline add-icon"></span>
            <span class="i-ion-remove-outline remove-icon"></span>
          </div>
        </button>

        <ul class="sidebar-submenu-category-list" data-accordion>
          <li class="sidebar-submenu-category">
            <a href=" " class="sidebar-submenu-title">
              <p class="product-name">Shopping Bag</p>
              <data value="62" class="stock" title="Available Stock">62</data>
            </a>
          </li>

          <li class="sidebar-submenu-category">
            <a href=" " class="sidebar-submenu-title">
              <p class="product-name">Gym Backpack</p>
              <data value="35" class="stock" title="Available Stock">35</data>
            </a>
          </li>

          <li class="sidebar-submenu-category">
            <a href=" " class="sidebar-submenu-title">
              <p class="product-name">Purse</p>
              <data value="80" class="stock" title="Available Stock">80</data>
            </a>
          </li>

          <li class="sidebar-submenu-category">
            <a href=" " class="sidebar-submenu-title">
              <p class="product-name">Wallet</p>
              <data value="75" class="stock" title="Available Stock">75</data>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="product-showcase">
    <h3 class="showcase-heading">best sellers</h3>
    {#if result}
      <div class="showcase-wrapper">
        <div class="showcase-container">
          {#each result as product}
            <div class="showcase">
              <a href=" " class="showcase-img-box">
                <img
                  src={product.featuredAsset?.preview}
                  alt="baby fabric shoes"
                  width="75"
                  height="75"
                  class="showcase-img"
                />
              </a>

              <div class="showcase-content">
                <a href=" ">
                  <h4 class="showcase-title">{product.name}</h4>
                </a>

                <div class="showcase-rating">
                  <span class="i-ion-star"></span>
                  <span class="i-ion-star"></span>
                  <span class="i-ion-star"></span>
                  <span class="i-ion-star"></span>
                  <span class="i-ion-star"></span>
                </div>

                <div class="price-box">
                  <del>{formatPrice(product, true)}</del>
                  <p class="price">{formatPrice(product)}</p>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</div>
