<script lang="ts">
  import { browser } from "$app/environment";
  import type { OrderDetail$data } from "$houdini";
  import NewsLetter from "$lib/components/NewsLetter.svelte";
  import { order, state } from "$lib/store";
  import type { ActionData, PageData } from "./$types";
  import ProductDetail from "./ProductDetail.svelte";

  export let data: PageData;
  $: ({ product } = data);

  export let form: ActionData;
  $: $order = form?.activeOrder || {} as OrderDetail$data;

  // $: if(browser) console.log({$order})
</script>

<section class="breadcrumb">
  <ul class="breadcrumb__list flex container">
    <li><a href="index.html" class="breadcrumb__link">Home</a></li>
    <li><span class="breadcrumb__link">></span></li>
    <li><span class="breadcrumb__link">Fashion</span></li>
    <li><span class="breadcrumb__link">></span></li>
    <li><span class="breadcrumb__link">Henley Shirt</span></li>
  </ul>
</section>

<section class="details section--lg">
  <ProductDetail {product} />
</section>

<section class="details__tab container">
  <div class="detail__tabs">
    <span class="detail__tab active-tab" data-target="#info">
      Additional Info
    </span>
    <span class="detail__tab" data-target="#reviews">Reviews(3)</span>
  </div>

  <div class="details__tabs-content">
    <div class="details__tab-content active-tab" id="info">
      <table class="info__table">
        <tr>
          <th>Stand Up</th>
          <td>35″L x 24″W x 37-45″H(front to back wheel)</td>
        </tr>

        <tr>
          <th>Folded (w/o wheels)</th>
          <td>32.5″L x 18.5″W x 16.5″H</td>
        </tr>

        <tr>
          <th>Folded (w/ wheels)</th>
          <td>32.5″L x 24″W x 18.5″H</td>
        </tr>

        <tr>
          <th>Door Pass Through</th>
          <td>24</td>
        </tr>

        <tr>
          <th>Frame</th>
          <td>Aluminum</td>
        </tr>

        <tr>
          <th>Weight (w/o wheels)</th>
          <td>20 LBS</td>
        </tr>

        <tr>
          <th>Weight Capacity</th>
          <td>60 LBS</td>
        </tr>

        <tr>
          <th>Width</th>
          <td>24″</td>
        </tr>

        <tr>
          <th>Handle height (ground to handle)</th>
          <td>37-45″</td>
        </tr>

        <tr>
          <th>Wheels</th>
          <td>12″ air / wide track slick tread</td>
        </tr>

        <tr>
          <th>Seat back height</th>
          <td>21.5″</td>
        </tr>

        <tr>
          <th>Head room (inside canopy)</th>
          <td>25″</td>
        </tr>

        <tr>
          <th>Color</th>
          <td>Black, Blue, Red, White</td>
        </tr>

        <tr>
          <th>Size</th>
          <td>M, S</td>
        </tr>
      </table>
    </div>

    <div class="details__tab-content" id="reviews">
      <div class="reviews__container grid">
        <div class="review__single">
          <div>
            <img src="/assets/img/avatar-1.jpg" alt="" class="review__img" />
            <h4 class="review__title">Jacky Chan</h4>
          </div>

          <div class="review__data">
            <div class="review__rating">
              <i class="fi fi-rs-star"></i>
              <i class="fi fi-rs-star"></i>
              <i class="fi fi-rs-star"></i>
              <i class="fi fi-rs-star"></i>
              <i class="fi fi-rs-star"></i>
            </div>

            <p class="review__description">
              Thank you very fast shipping from Poland only 3days.
            </p>

            <span class="review__date">December 4, 2020 at 3:12 pm</span>
          </div>
        </div>

        <div class="review__single">
          <div>
            <img src="/assets/img/avatar-2.jpg" alt="" class="review__img" />
            <h4 class="review__title">Jacky Chan</h4>
          </div>

          <div class="review__data">
            <div class="review__rating">
              <i class="fi fi-rs-star"></i>
              <i class="fi fi-rs-star"></i>
              <i class="fi fi-rs-star"></i>
              <i class="fi fi-rs-star"></i>
              <i class="fi fi-rs-star"></i>
            </div>

            <p class="review__description">Great low price and works well.</p>

            <span class="review__date">December 4, 2020 at 3:12 pm</span>
          </div>
        </div>

        <div class="review__single">
          <div>
            <img src="/assets/img/avatar-2.jpg" alt="" class="review__img" />
            <h4 class="review__title">Jacky Chan</h4>
          </div>

          <div class="review__data">
            <div class="review__rating">
              <i class="fi fi-rs-star"></i>
              <i class="fi fi-rs-star"></i>
              <i class="fi fi-rs-star"></i>
              <i class="fi fi-rs-star"></i>
              <i class="fi fi-rs-star"></i>
            </div>

            <p class="review__description">
              Authentic and Beautiful, Love these way more than ever expected
              They are Great earphones
            </p>

            <span class="review__date">December 4, 2020 at 3:12 pm</span>
          </div>
        </div>
      </div>

      <div class="review__form">
        <h4 class="review__form-title">Add a review</h4>

        <div class="rate__product">
          <i class="fi fi-rs-star"></i>
          <i class="fi fi-rs-star"></i>
          <i class="fi fi-rs-star"></i>
          <i class="fi fi-rs-star"></i>
          <i class="fi fi-rs-star"></i>
        </div>

        <form action="" class="form grid">
          <textarea class="form__input textarea" placeholder="Write Comment"
          ></textarea>

          <div class="form__group grid">
            <input type="text" placeholder="Name" class="form__input" />

            <input type="email" placeholder="Email" class="form__input" />
          </div>

          <div class="form__btn">
            <button class="btn">Submit Review</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<section class="products container section--lg">
  <h3 class="section__title"><span>Related</span> Products</h3>

  <div class="products__container grid">
    <div class="product__item">
      <div class="product__banner">
        <a href="details.html" class="product__images">
          <img
            src="/assets/img/product-12-1.jpg"
            alt=""
            class="product__img default"
          />

          <img
            src="/assets/img/product-12-2.jpg"
            alt=""
            class="product__img hover"
          />
        </a>

        <div class="product__actions">
          <a href=" " class="action__btn" aria-label="Quick View">
            <i class="fi fi-rs-eye"></i>
          </a>

          <a href=" " class="action__btn" aria-label="Add To Wishlist">
            <i class="fi fi-rs-heart"></i>
          </a>

          <a href=" " class="action__btn" aria-label="Compare">
            <i class="fi fi-rs-shuffle"></i>
          </a>
        </div>

        <div class="product__badge light-green">Hot</div>
      </div>

      <div class="product__content">
        <span class="product__category">Clothing</span>
        <a href="details.html">
          <h3 class="product__title">Colorful Pattern Shirts</h3>
        </a>
        <div class="product__rating">
          <i class="fi fi-rs-star"></i>
          <i class="fi fi-rs-star"></i>
          <i class="fi fi-rs-star"></i>
          <i class="fi fi-rs-star"></i>
          <i class="fi fi-rs-star"></i>
        </div>
        <div class="product__price flex">
          <span class="new__price">$238.85</span>
          <span class="old__price">$245.8</span>
        </div>

        <a href=" " class="action__btn cart__btn" aria-label="Add To Cart">
          <i class="fi fi-rs-shopping-bag-add"></i>
        </a>
      </div>
    </div>

    <div class="product__item">
      <div class="product__banner">
        <a href="details.html" class="product__images">
          <img
            src="/assets/img/product-3-1.jpg"
            alt=""
            class="product__img default"
          />

          <img
            src="/assets/img/product-3-2.jpg"
            alt=""
            class="product__img hover"
          />
        </a>

        <div class="product__actions">
          <a href=" " class="action__btn" aria-label="Quick View">
            <i class="fi fi-rs-eye"></i>
          </a>

          <a href=" " class="action__btn" aria-label="Add To Wishlist">
            <i class="fi fi-rs-heart"></i>
          </a>

          <a href=" " class="action__btn" aria-label="Compare">
            <i class="fi fi-rs-shuffle"></i>
          </a>
        </div>

        <div class="product__badge light-orange">Hot</div>
      </div>

      <div class="product__content">
        <span class="product__category">Clothing</span>
        <a href="details.html">
          <h3 class="product__title">Colorful Pattern Shirts</h3>
        </a>
        <div class="product__rating">
          <i class="fi fi-rs-star"></i>
          <i class="fi fi-rs-star"></i>
          <i class="fi fi-rs-star"></i>
          <i class="fi fi-rs-star"></i>
          <i class="fi fi-rs-star"></i>
        </div>
        <div class="product__price flex">
          <span class="new__price">$238.85</span>
          <span class="old__price">$245.8</span>
        </div>

        <a href=" " class="action__btn cart__btn" aria-label="Add To Cart">
          <i class="fi fi-rs-shopping-bag-add"></i>
        </a>
      </div>
    </div>

    <div class="product__item">
      <div class="product__banner">
        <a href="details.html" class="product__images">
          <img
            src="/assets/img/product-10-1.jpg"
            alt=""
            class="product__img default"
          />

          <img
            src="/assets/img/product-10-2.jpg"
            alt=""
            class="product__img hover"
          />
        </a>

        <div class="product__actions">
          <a href=" " class="action__btn" aria-label="Quick View">
            <i class="fi fi-rs-eye"></i>
          </a>

          <a href=" " class="action__btn" aria-label="Add To Wishlist">
            <i class="fi fi-rs-heart"></i>
          </a>

          <a href=" " class="action__btn" aria-label="Compare">
            <i class="fi fi-rs-shuffle"></i>
          </a>
        </div>

        <div class="product__badge light-pink">-30%</div>
      </div>

      <div class="product__content">
        <span class="product__category">Clothing</span>
        <a href="details.html">
          <h3 class="product__title">Colorful Pattern Shirts</h3>
        </a>
        <div class="product__rating">
          <i class="fi fi-rs-star"></i>
          <i class="fi fi-rs-star"></i>
          <i class="fi fi-rs-star"></i>
          <i class="fi fi-rs-star"></i>
          <i class="fi fi-rs-star"></i>
        </div>
        <div class="product__price flex">
          <span class="new__price">$238.85</span>
          <span class="old__price">$245.8</span>
        </div>

        <a href=" " class="action__btn cart__btn" aria-label="Add To Cart">
          <i class="fi fi-rs-shopping-bag-add"></i>
        </a>
      </div>
    </div>

    <div class="product__item">
      <div class="product__banner">
        <a href="details.html" class="product__images">
          <img
            src="/assets/img/product-6-1.jpg"
            alt=""
            class="product__img default"
          />

          <img
            src="/assets/img/product-6-2.jpg"
            alt=""
            class="product__img hover"
          />
        </a>

        <div class="product__actions">
          <a href=" " class="action__btn" aria-label="Quick View">
            <i class="fi fi-rs-eye"></i>
          </a>

          <a href=" " class="action__btn" aria-label="Add To Wishlist">
            <i class="fi fi-rs-heart"></i>
          </a>

          <a href=" " class="action__btn" aria-label="Compare">
            <i class="fi fi-rs-shuffle"></i>
          </a>
        </div>

        <div class="product__badge light-pink">-22%</div>
      </div>

      <div class="product__content">
        <span class="product__category">Clothing</span>
        <a href="details.html">
          <h3 class="product__title">Colorful Pattern Shirts</h3>
        </a>
        <div class="product__rating">
          <i class="fi fi-rs-star"></i>
          <i class="fi fi-rs-star"></i>
          <i class="fi fi-rs-star"></i>
          <i class="fi fi-rs-star"></i>
          <i class="fi fi-rs-star"></i>
        </div>
        <div class="product__price flex">
          <span class="new__price">$238.85</span>
          <span class="old__price">$245.8</span>
        </div>

        <a href=" " class="action__btn cart__btn" aria-label="Add To Cart">
          <i class="fi fi-rs-shopping-bag-add"></i>
        </a>
      </div>
    </div>
  </div>
</section>
