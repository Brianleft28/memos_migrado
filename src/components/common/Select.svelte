<script lang="ts">
  export let cols: number;
  export let valor: number | string;
  export let label: string;
  export let options: { id: number; value: string }[];
  export let error: string;

  const id = label.replace(/\s/g, '-').toLowerCase();
</script>

<div class="col-md-{cols} mb-3">
  <label class="form-label" for={id}>{label}</label>
  <select
    bind:value={valor}
    class="form-select bg-body-secondary shadow-sm border-primary-subtle border-bottom
      {error ? 'is-invalid' : ''}
      "
    {id}
  >
    <option value="" disabled selected hidden>{label}</option>
    {#each options as option}
      <option class="custom-option" value={option.id}>{option.value}</option>
    {/each}
  </select>
  {#if error}
    <div class="invalid-feedback">{error}</div>
  {/if}
</div>

<style>
  select:focus {
    outline: none;
    box-shadow: none;
  }

  select {
    background-color: var(--bs-body-bg) !important;
  }
</style>
