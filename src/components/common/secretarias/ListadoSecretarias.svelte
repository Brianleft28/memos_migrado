<script lang="ts">
  import InputWrapper from '../InputWrapper.svelte';
  import Accordion from './Accordion.svelte';

  let secretarias = [
    {
      secretaria: 'Innovacion',
      id: 'innovacion',
      dependencias: ['Desarrollo', 'Tecnologia', 'Innovacion']
    },
    {
      secretaria: 'Hacienda',
      id: 'hacienda',
      dependencias: ['Contaduria', 'Tesoreria', 'Presupuesto']
    },
    {
      secretaria: 'Gobierno',
      id: 'gobierno',
      dependencias: ['Legales', 'Cultura', 'Deportes']
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
    max-height: 400px;
    min-height: 400px;
    overflow-y: auto;
  }
</style>
