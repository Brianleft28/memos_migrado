<script lang="ts">
  import { onMount } from 'svelte';
  import type { SecretariaWithDependencias } from '../../../types/secretaria';

  export let secretarias: SecretariaWithDependencias[] = [];

  onMount(() => {
    console.log('Secretarias:', secretarias);
    setTimeout(() => {
      console.log('Secretarias:', secretarias);
    }, 1000);
  });

  const id = (name: string) => name.replace(/\s/g, '-').toLowerCase();
</script>

{#if secretarias.length === 0}
  <div class="alert alert-info">No hay secretarias registradas</div>
{/if}
{#if secretarias.length > 0}
  {#each secretarias as { nombre, correo, telefono, dependencias }}
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id(nombre)}`}
          aria-expanded="false"
          aria-controls={nombre}
        >
          {nombre}
        </button>
      </h2>
      <div
        id={id(nombre)}
        class="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#listadoSecretarias"
      >
        <div class="accordion-body">
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
              <div class="mt-2 row">
                <div class="col-md-6">
                  <button class="btn btn-primary btn-sm col-md-12">
                    <span>
                      <i class="bi bi-pencil-square fs-5"></i>
                    </span>
                  </button>
                </div>
                <div class="col-md-6">
                  <button class="btn col-md-12 btn-danger btn-sm">
                    <span>
                      <i class="bi bi-trash fs-5"></i>
                    </span>
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <div class="table-group-divider"></div>
          <ul class="list-group list-group-flush">
            <!-- Dependencias -->
            {#if dependencias.length > 0}
              {#each dependencias as dependencia}
                <li class="list-group-item p-2">
                  <span class="fw-bold">Dependencias:</span>
                  <div>
                    <span class="fw-bold">Tipo: </span>
                    {dependencia.tipo}
                  </div>
                  <div>
                    <span class="fw-bold">Nombre: </span>
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
{/if}

<style>
  .accordion-button:not(.collapsed) {
    color: var(--bs-primary);
    background-color: var(--bs-tertiary-bg);
  }
  .accordion-button:focus {
    box-shadow: none;
  }
</style>
