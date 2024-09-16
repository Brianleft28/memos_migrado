<script lang="ts">
  export let secretarias: {
    secretaria: string;
    id: string;
    dependencias: string[];
  }[];
</script>

{#each secretarias as { secretaria, id, dependencias }}
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${id}`}
        aria-expanded="false"
        aria-controls={id}
      >
        {secretaria}
      </button>
    </h2>
    <div
      {id}
      class="accordion-collapse collapse"
      aria-labelledby="headingOne"
      data-bs-parent="#listadoSecretarias"
    >
      <div class="accordion-body">
        <ul class="d-flex">
          {#each dependencias as dependencia}
            <li class="list-group-item">{dependencia}</li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
{/each}

<style>
  .accordion-button:not(.collapsed) {
    color: var(--bs-primary);
    background-color: var(--bs-tertiary-bg);
  }
  .accordion-button:focus {
    box-shadow: none;
  }
</style>
