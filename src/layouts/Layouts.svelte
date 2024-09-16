<script>
</script>

<div class="container-fluid px-md-5 px-2 py-2">
  <slot />
</div>

<style>
  .container-fluid {
    overflow-y: auto; /* Evita el scroll */
    height: calc(100vh - 87px); /* Altura máxima menos el navbar */
    margin-top: 87px; /* Altura del navbar */
  }

  .container-fluid::-webkit-scrollbar {
    width: 0px;
  }
</style>
