<script lang="ts">
  import type { Secretaria } from '../../../types/secretaria';

  export let secretarias: Secretaria[] = [];
</script>

{#each secretarias as { nombre, correo, telefono, dependencias }}
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${nombre}`}
        aria-expanded="false"
        aria-controls={nombre}
      >
        {nombre}
      </button>
    </h2>
    <div
      id={nombre}
      class="accordion-collapse collapse"
      aria-labelledby="headingOne"
      data-bs-parent="#listadoSecretarias"
    >
      <div class="accordion-body">
        <div class="table-group-divider"></div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item p-2">
            <div>
              <span class="fw-bold">Secretaria: </span>
              {nombre}
            </div>
            <div>
              <span class="fw-bold">Correo: </span>
              {correo}
            </div>
            <div>
              <span class="fw-bold">Telefono: </span>
              {telefono}
            </div>
          </li>
        </ul>
        <div class="table-group-divider"></div>
        <ul class="list-group list-group-flush">
          <!-- Dependencias -->
          {#if dependencias.length > 0}
            {#each dependencias as dependencia}
              <li class="list-group-item p-2">
                <div>
                  <span class="fw-bold">Dependencia: </span>
                  {dependencia.nombre}
                </div>
                <div>
                  <span class="fw-bold">Correo: </span>
                  {dependencia.correo}
                </div>
                <div>
                  <span class="fw-bold">Telefono: </span>
                  {dependencia.telefono}
                </div>
              </li>
            {/each}
          {:else}
            <li class="list-group-item p-2">No hay dependencias</li>
          {/if}
          <button class="btn btn-outline-dark w-full mt-2">
            Añadir dependencia
          </button>
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
