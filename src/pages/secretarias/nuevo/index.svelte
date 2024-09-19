<script lang="ts">
  /* Importo los componentes */
  import Input from '../../../components/common/Input.svelte';
  import InputWrapper from '../../../components/common/InputWrapper.svelte';
  import ListadoSecretarias from '../../../components/common/secretarias/ListadoSecretarias.svelte';
  import SecretariaServiceApi from '../../../services/api/SecretariaService';
  import SecretariaServiceStorage from '../../../services/storage/SecretariaServices';
  import type { Secretaria } from '../../../types/secretaria';
  /* Declaro las variables */
  let nombre: string = '';
  let telefono: number;
  let correo: string = '';
  let error: Record<string, string> = {};
  const secretariaService = new SecretariaServiceApi();
  const secretariaServiceStorage = new SecretariaServiceStorage();

  /* Funcion Handle Submit */
  const handleSubmit = () => {
    const secretaria = {
      nombre,
      telefono,
      correo,
      dependencias: null
    };
    secretariaServiceStorage.add(secretaria);
  };
</script>

<div class="row justify-content-center">
  <div class="col-md-6 my-2 p-3 shadow-md rounded-2">
    <InputWrapper name="Nueva secretaria">
      <Input
        placeholder="Nombre de la secretaria"
        error={error.secretaria}
        cols={6}
        name={'Nombre de la secretaria'}
        bind:valor={nombre}
      />
      <Input
        placeholder="Telefono"
        error={error.telefono}
        cols={6}
        name={'Teléfono de la secretaria'}
        bind:valor={telefono}
      />
      <Input
        placeholder="secretaria@miituzaingo.gob.ar"
        error={error.correo}
        cols={12}
        name={'Correo de la secretaria'}
        bind:valor={correo}
      />
      <div class="col-md-12 mt-2">
        <button class="btn btn-outline-dark col-md-12" on:click={handleSubmit}>
          Añadir secretaria
        </button>
      </div>
    </InputWrapper>
  </div>
  <ListadoSecretarias />
</div>
