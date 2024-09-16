<script lang="ts">
  export let name: string;

  const id = name.replace(/\s/g, '-').toLowerCase();
</script>

<h2 {id} class="card-title text-md-start text-center">{name}</h2>
<div class="table-group-divider"></div>
<div
  class="mx-auto card-body bg-body-tertiary justify-content-center shadow-lg container row mt-2 pb-4 py-3 px-3 entonces align-items-start"
>
  <slot />
</div>

<style>
</style>
