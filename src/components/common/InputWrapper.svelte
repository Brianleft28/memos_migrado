<script lang="ts">
  export let name: string;

  const id = name.replace(/\s/g, '-').toLowerCase();
</script>

<div class="">
  <h2 {id} class="card-title text-md-start text-center">{name}</h2>
</div>
<div class="table-group-divider"></div>
<div
  class="card-body bg-body-tertiary shadow-lg row mt-2 pb-4 py-3 px-2 justify-content-center"
>
  <slot />
</div>

<style>
</style>
