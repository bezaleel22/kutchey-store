<script lang="ts">
  import { enhance } from "$app/forms";
  import { order } from "$lib/store";

  export let index: number;

  let form: HTMLFormElement;
  let mutate: boolean = false;  
  $: line = $order?.lines[index];
  $: quantity = line?.quantity ?? 0;

  const update = (sum: number) => {
    if (!$order || !line) return;
    const lines = $order.lines.filter((l) => l.id != line.id);

    if (sum < 0 && mutate) quantity = Number(line?.quantity) + sum;
    quantity = mutate ? Number(line?.quantity) : quantity + sum;
    lines.push({ ...line, quantity });
    $order = { ...$order, lines };

    form.action = `?/updateItem&id=${line.id}&qty=${quantity}`;
    form.requestSubmit();

    mutate = false;
  };
</script>

{#if line}
  <form
    bind:this={form}
    use:enhance
    method="POST"
    on:submit|preventDefault={() => {}}
  >
    <div class="flex">
      <button on:click={() => update(-1)} type="button" class="btn btn--sm">
        <i class="fi fi-rs-minus-small"></i>
      </button>
      <input
        on:change={() => (mutate = true)}
        bind:value={line.quantity}
        class="quantity"
      />
      <button on:click={() => update(+1)} type="button" class="btn btn--sm">
        <i class="fi fi-rs-plus"></i>
      </button>
    </div>
  </form>
{/if}
