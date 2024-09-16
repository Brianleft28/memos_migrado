<script lang="ts">
  export let name: string;

  const id = name.replace(/\s/g, '-').toLowerCase();
</script>

<div class="p-2">
  <h2 {id} class="card-title text-center">{name}</h2>
</div>
<div class="divider"></div>
<div class="card-body row m-3 justify-content-center">
  <slot />
</div>

<style>
  .divider {
    margin-bottom: 5px;
    margin-top: 2px;
    width: 100%;
    height: 1.5px;
    background-color: var(--bs-dark);
  }
</style>
