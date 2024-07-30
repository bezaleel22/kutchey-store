<script lang="ts">
  export let isBilling;
  $: input = {
    fullName: "John Doe",
    company: "joe@email.com",
    streetLine1: "123 Main St",
    streetLine2: "Apt 4B",
    city: "New York",
    province: "NY",
    postalCode: "10001",
    countryCode: "US",
    phoneNumber: "123-456-7890",
    defaultShippingAddress: true,
    defaultBillingAddress: false,
  };

  $: isBilling = input.defaultBillingAddress;
</script>

<form action="?/updateShipping" method="post" class="form grid">
  <input
    type="text"
    placeholder="Full Name"
    class="form__input"
    bind:value={input.fullName}
  />
  <input
    type="email"
    placeholder="Email"
    class="form__input"
    bind:value={input.company}
  />

  <input
    type="text"
    placeholder="Street Line 1"
    class="form__input"
    bind:value={input.streetLine1}
  />
  <input
    type="text"
    placeholder="Street Line 2"
    class="form__input"
    bind:value={input.streetLine2}
  />

  <div class="form__group grid">
    <input
      type="text"
      placeholder="City"
      class="form__input"
      bind:value={input.city}
    />
    <input
      type="text"
      placeholder="Province"
      class="form__input"
      bind:value={input.province}
    />
    <input
      type="text"
      placeholder="PostCode / ZIP"
      class="form__input"
      bind:value={input.postalCode}
    />
    <input
      type="text"
      placeholder="Country Code"
      class="form__input"
      bind:value={input.countryCode}
    />
  </div>

  <input
    type="text"
    placeholder="Phone Number"
    class="form__input"
    bind:value={input.phoneNumber}
  />

  <div class="form__group grid">
    <label>
      <input
        bind:checked={input.defaultShippingAddress}
        type="checkbox"
        name="radio"
        class="payment__input"
      /> Default Shipping Address
    </label>
    <label>
      <input
        bind:checked={input.defaultBillingAddress}
        type="checkbox"
        name="radio"
        class="payment__input"
      /> Default Billing Address
    </label>
  </div>
</form>
