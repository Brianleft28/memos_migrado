<script lang="ts">
  /* Importo los componentes */
  import Input from '../../../components/common/Input.svelte';
  import InputWrapper from '../../../components/common/InputWrapper.svelte';
  import ListadoSecretarias from '../../../components/common/secretarias/ListadoSecretarias.svelte';
  import SecretariaServiceApi from '../../../services/api/SecretariaService';
  import DependenciasService from '../../../services/api/DependenciasService';
  import SecretariaServiceStorage from '../../../services/storage/SecretariaServices';
  /* Declaro las variables */
  let nombre: string = '';
  let telefono: number;
  let correo: string = '';
  let error: Record<string, string> = {};
  /* Insntancio los servicios de conexion con la API y storage */
  const secretariaServiceStorage = new SecretariaServiceStorage();
  const secretariaService = new SecretariaServiceApi();
  const dependenciaServices = new DependenciasService();

  const loadSecretarias = async () => {
    try {
      return await secretariaService.getAll();
    } catch (error) {
      console.error('Error al cargar las secretarias', error);
      return [];
    }
  };

  const loadDependencias = async () => {
    try {
      return await dependenciaServices.getAll();
    } catch (error) {
      console.error('Error al cargar las dependencias', error);
      return [];
    }
  };

  /* Funcion Handle Submit */
  const handleSubmit = () => {
    const secretaria = {
      nombre,
      telefono,
      correo
    };

    const validation = secretariaServiceStorage.validate(secretaria);
    if (validation.isValid === true) {
      secretariaService.create(secretaria);
      secretariaServiceStorage.add(secretaria);
      error = {};
      nombre = '';
      telefono = 0;
      correo = '';
      alert('Secretaria añadida correctamente');
      window.location.reload();
    }
    if (validation.isValid === false) {
      error = validation.errors;
    }
  };
</script>

<div class="row justify-content-center">
  <div class="col-md-6 my-2 p-1 shadow-md rounded-2">
    <InputWrapper name="Nueva secretaria">
      <Input
        placeholder="Nombre de la secretaria"
        error={error.nombre}
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
  <ListadoSecretarias {loadDependencias} {loadSecretarias} />
</div>
