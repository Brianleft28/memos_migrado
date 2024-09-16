<script lang="ts">
  export let name: string;
  export let cols: number;
  export let valor: string | number;
  export let disabled: boolean;
  export let error: string;

  const id = name.replace(/\s/g, '-').toLowerCase();
</script>

<div class="col-md-{cols} mb-3">
  {#if name === 'Fecha del memo'}
    <label for={name} class="form-label">{name}</label>
    <input
      type="date"
      {disabled}
      bind:value={valor}
      class="form-control bg-body-tertiary shadow-sm border-primary-subtle border-bottom custom-focus {disabled
        ? 'disabled-input'
        : ''}
        {error ? 'is-invalid' : ''}
        "
      placeholder={name}
      {id}
    />
  {:else}
    <input
      type="text"
      {disabled}
      bind:value={valor}
      class="form-control bg-body-tertiary shadow-sm border-primary-subtle border-bottom custom-focus {disabled
        ? 'disabled-input'
        : ''}
        {error ? 'is-invalid' : ''}
        "
      placeholder={name}
      {id}
    />
  {/if}
  {#if error}
    <div class="invalid-feedback">{error}</div>
  {/if}
</div>

<style>
  .disabled-input {
    border: none !important;
    outline: none !important;
    background-color: var(--bs-dark-border-subtle) !important;
    color: var(--bs-secondary-color) !important;
    cursor: not-allowed;
    opacity: 0.65;
  }
</style>
