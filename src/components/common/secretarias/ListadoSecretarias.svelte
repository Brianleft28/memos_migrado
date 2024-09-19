<script lang="ts">
  import type {
    Dependencia,
    Secretaria,
    SecretariaWithDependencias
  } from '../../../types/secretaria';
  import InputWrapper from '../InputWrapper.svelte';
  import Accordion from './Accordion.svelte';
  import { onMount } from 'svelte';

  export let loadSecretarias: () => Promise<Secretaria[]>;
  export let loadDependencias: () => Promise<Dependencia[]>;

  let secretarias: SecretariaWithDependencias[] = [];

  const transformToSecretariaWithDependencias = (
    secretarias: Secretaria[],
    dependencias: Dependencia[]
  ): SecretariaWithDependencias[] => {
    const dependenciasMap = dependencias.reduce((acc: any, dep: any) => {
      if (!acc[dep.secretaria_id]) {
        acc[dep.secretaria_id] = [];
      }
      acc[dep.secretaria_id].push(dep);
      return acc;
    }, {});

    return secretarias.map((sec) => {
      const id = sec.id;
      return {
        ...sec,
        dependencias: id !== undefined ? dependenciasMap[id] || [] : []
      };
    });
  };

  onMount(async () => {
    const secretariasData = await loadSecretarias();
    const dependenciasData = await loadDependencias();
    secretarias = transformToSecretariaWithDependencias(
      secretariasData,
      dependenciasData
    );
    console.log('Secretarias:', secretarias);
    console.log('Dependencias:', dependenciasData);
  });
</script>

<div class="col-md-6 my-2 p-1 shadow-md rounded-2">
  <!-- Listado de secretarias -->
  <InputWrapper name="Listado de secretarias">
    <!-- Acordion -->
    <div class="scroll-container">
      <div class="accordion" id="listadoSecretarias">
        <Accordion {secretarias} />
      </div>
    </div>
  </InputWrapper>
</div>

<style>
  .scroll-container {
    max-height: 550px;
    min-height: 560px;
    overflow-y: auto;
  }
</style>
