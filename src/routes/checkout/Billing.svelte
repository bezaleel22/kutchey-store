<script lang="ts">
  let formData = {
    name: "John Doe",
    address: "123 Main St, Apt 4B",
    city: "New York",
    country: "United States",
    postalCode: "10001",
    phone: "123-456-7890",
    email: "john.doe@example.com",
    orderNote: "Please leave the package at the front door.",
  };
</script>

<form action="" class="form grid">
  <input
    type="text"
    placeholder="Name"
    class="form__input"
    bind:value={formData.name}
  />

  <input
    type="text"
    placeholder="Address"
    class="form__input"
    bind:value={formData.address}
  />

  <input
    type="text"
    placeholder="City"
    class="form__input"
    bind:value={formData.city}
  />

  <input
    type="text"
    placeholder="Country"
    class="form__input"
    bind:value={formData.country}
  />

  <input
    type="text"
    placeholder="Postcode"
    class="form__input"
    bind:value={formData.postalCode}
  />

  <input
    type="text"
    placeholder="Phone"
    class="form__input"
    bind:value={formData.phone}
  />

  <input
    type="email"
    placeholder="Email"
    class="form__input"
    bind:value={formData.email}
  />

  <h3 class="checkout__title">Additional Information</h3>

  <textarea
    name=""
    placeholder="Order note"
    id=""
    cols="30"
    rows="10"
    class="form__input textarea"
    bind:value={formData.orderNote}
  ></textarea>
</form>
