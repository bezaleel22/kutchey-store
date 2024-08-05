<script lang="ts">
  import { browser } from "$app/environment";
  import { state } from "$lib/store";

  let showmenu: boolean = false;

  // $: if (browser) console.log({ ...$state.activeOrder });
</script>

<header class="header">
  <div class="header__top">
    <div class="header__container container">
      <div class="header__contact">
        <span>(+01) - 2345 - 6789</span>

        <span> Our location</span>
      </div>

      <p class="header__alert-news">
        Super Value Deals - Save more with coupons
      </p>

      <a href="login-register.html" class="header__top-action">
        Log In / Sign Up
      </a>
    </div>
  </div>

  <nav class="nav container">
    <a href="index.html" class="nav__logo">
      <img src="/assets/img/logo.svg" alt="" class="nav__logo-img" />
    </a>

    <div class:show-menu={showmenu} class="nav__menu" id="nav-menu">
      <div class="nav__menu-top">
        <a href="index.html" class="nav__menu-logo">
          <img src="/assets/img/logo.svg" alt="" />
        </a>

        <div class="nav__close" id="nav-close">
          <i class="fi fi-rs-cross-small"></i>
        </div>
      </div>

      <ul class="nav__list">
        <li class="nav__item">
          <a href="/" class="nav__link active-link">Home</a>
        </li>

        <li class="nav__item">
          <a href="/shop" class="nav__link">Shop</a>
        </li>

        <li class="nav__item">
          <a href="/account" class="nav__link">My Account</a>
        </li>

        <li class="nav__item">
          <a href="compare.html" class="nav__link">Compare</a>
        </li>

        <li class="nav__item">
          <a href="/auth" class="nav__link">Login</a>
        </li>
      </ul>

      <div class="header__search">
        <input
          type="text"
          placeholder="Search for items..."
          class="form__input"
        />

        <button class="search__btn">
          <img src="/assets/img/search.png" alt="" />
        </button>
      </div>
    </div>

    <div class="header__user-actions">
      <a href="wishlist.html" class="header__action-btn">
        <img src="/assets/img/icon-heart.svg" alt="" />
        <span class="count">3</span>
      </a>

      <a href="/cart" class="header__action-btn">
        <img src="/assets/img/icon-cart.svg" alt="" />
        <span class="count">{$state?.activeOrder?.totalQuantity || 0}</span>
      </a>

      <button
        type="button"
        on:click={() => {
          showmenu != showmenu;
        }}
        class="header__action-btn nav__toggle"
        id="nav-toggle"
      >
        <img src="/assets/img/menu-burger.svg" alt="" />
      </button>
    </div>
  </nav>
</header>
