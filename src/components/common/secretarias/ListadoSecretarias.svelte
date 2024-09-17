<script lang="ts">
  import type { Secretaria } from '../../../types/secretaria';
  import InputWrapper from '../InputWrapper.svelte';
  import Accordion from './Accordion.svelte';
  import SecretariaService from '../../../services/api/SecretariaService';
  import DependenciaService from '../../../services/api/DependenciasService';
  import { onMount } from 'svelte';
  const secretariaServices = new SecretariaService();
  const dependenciaServices = new DependenciaService();

  let secretarias_: Secretaria[] = [];
  let dependencias_: any[] = [];

  async function loadSecretarias() {
    try {
      let secretarias_ = await secretariaServices.getAll();
      return secretarias_;
    } catch (error) {
      console.error('Error al cargar secretarias:', error);
    }
  }

  async function loadDependencias() {
    try {
      dependencias_ = await dependenciaServices.getAll();
      return dependencias_;
    } catch (error) {
      console.error('Error al cargar dependencias:', error);
    }
  }

  loadDependencias();
  loadSecretarias();

  onMount(async () => {
    secretarias_ = await loadSecretarias();
    dependencias_ = await loadDependencias();
    console.log('Secretarias:', secretarias_);
    console.log('Dependencias:', dependencias_);
  });

  let secretarias: Secretaria[] = [
    {
      nombre: 'Innovacion',
      correo: 'innovacion@test.com',
      telefono: 1144812673,
      dependencias: [
        {
          secretaria_id: 1,
          nombre: 'Desarrollo',
          correo: 'desarrollo@test.com',
          telefono: 1144812673
        },
        {
          secretaria_id: 1,
          nombre: 'Informatica',
          correo: 'informatica@test.com',
          telefono: 1144812673
        }
      ]
    },
    {
      nombre: 'Educacion',
      correo: 'educacion@test.com',
      telefono: 1144812673,
      dependencias: [
        {
          secretaria_id: 2,
          nombre: 'Primaria',
          correo: 'primaria@test.com',
          telefono: 1144812673
        },
        {
          secretaria_id: 2,
          nombre: 'Secundaria',
          correo: 'secundaria@test.com',
          telefono: 1144812673
        }
      ]
    }
  ];
</script>

<div class="col-md-6 my-2 p-3 shadow-md rounded-2">
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
    min-height: 400px;
    overflow-y: auto;
  }
</style>
