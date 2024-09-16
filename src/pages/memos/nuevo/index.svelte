<script lang="ts">
  /* Import de componentes */
  import Input from '../../../components/common/Input.svelte';
  import InputWrapper from '../../../components/common/InputWrapper.svelte';
  import Select from '../../../components/common/Select.svelte';
  import type { Memo } from '../../../types/memo';
  import { MemoService } from '../../../services/storage/MemoServices';
  /* Declaración de variables */
  let detalle: string = '';
  let fechaDelMemo: string = '';
  let estado_id: number;
  let secretaria_id: number;
  let disabled = false;
  let errors: Record<string, string> = {};

  /* Instancia de Memo Service */
  const memoService = new MemoService();
  /* Opciones del select */
  const optionsEstado = [
    { id: 1, value: 'Completo' },
    { id: 2, value: 'Pendiente' },
    { id: 3, value: 'Derivado' }
  ];

  const optionsSecretaria = [{ id: 1, value: 'Innovación' }];

  const handleSubmit = (): void => {
    const data: Memo = {
      secretaria_id: secretaria_id,
      estado_id: estado_id,
      detalle: detalle,
      fecha: fechaDelMemo
    };
    try {
      const validation = memoService.validate(data);
      if (validation.isValid === true) {
        // Agregar memo a la base de datos
        memoService.add(data);
        errors = {};
        alert('Memo agregado correctamente');
      } else {
        errors = validation.errors;
        console.log(errors);
      }
    } catch (err) {
      console.error(err);
    }
    memoService.clear();
  };
</script>

<div class="row justify-content-center">
  <div class="col-md-9 my-2 border rounded-2 px-4 py-2">
    <InputWrapper name="Nuevo memo">
      <!-- Input's -->
      <Input
        error={errors.detalle}
        name={'Detalle del memo'}
        cols={12}
        bind:valor={detalle}
        {disabled}
      />
      <!-- Select -->
      <Select
        error={errors.estado}
        label={'Seleccione un estado'}
        bind:valor={estado_id}
        cols={6}
        {disabled}
        options={optionsEstado}
      />
      <Select
        error={errors.secretaria}
        label={'Seleccione una secretaria / dependencia'}
        bind:valor={secretaria_id}
        cols={6}
        {disabled}
        options={optionsSecretaria}
      />
      <!-- Fecha -->
      <Input
        error={errors.fecha}
        name={'Fecha del memo'}
        cols={12}
        bind:valor={fechaDelMemo}
        {disabled}
      />
      <button
        type="button"
        on:click={handleSubmit}
        class="btn col-md-11 mt-3 btn-outline-dark">Agregar memo</button
      >
    </InputWrapper>
  </div>
</div>
