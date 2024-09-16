<script lang="ts">
  export let name: string;
  export let cols: number;
  export let placeholder: string;
  export let valor: string | number;
  export let error: string;
  const id = name.replace(/\s/g, '-').toLowerCase();
</script>

<div class="col-md-{cols} mb-3">
  {#if name === 'Fecha del memo'}
    <label for={name} class="form-label">{name}</label>
    <input
      type="date"
      bind:value={valor}
      class="form-control shadow-md border-primary-subtle border-bottom custom-focus
        {error ? 'is-invalid' : ''}
        "
      {placeholder}
      {id}
    />
  {:else}
    <label for={name} class="form-label text-md-start">{name}</label>
    <input
      type="text"
      bind:value={valor}
      class="form-control shadow-md border-primary-subtle border-bottom custom-focus
        {error ? 'is-invalid' : ''}
        "
      {placeholder}
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

  input {
    background-color: var(--bs-body-bg) !important;
  }
</style>
