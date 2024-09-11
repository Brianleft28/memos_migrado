<script>
  // @ts-nocheck
  import toast, { Toaster } from 'svelte-french-toast';
  import { navigate } from 'svelte-routing';
  import brand from '/img/brand.png';
  import postLogin from './Login.js';
  import config from '../../config.js';
  import { user, setStorageUser } from '../../stores/stores.js';

  let legajo, password;

  const optionToast = {
    style:
      'border-radius: 5px; background: #343a40; color: #fff; padding: 20px',
    position: 'bottom-center',
    iconTheme: {
      primary: '#f0bab9',
      secondary: '#520120'
    }
  };

  async function handleSubmit() {
    const result = await postLogin({ legajo, password });
    console.log(legajo, password);
    console.log(result);

    console.log(result.error);

    if (result.error === true) {
      toast.error(
        'Credenciales incorrectas. Por favor, inicie sesión con credenciales válidas.',
        optionToast
      );
      return false;
    }

    if (result.error === false) {
      const permissions = result.body?.permissions;
      const guard = permissions.find(
        (permission) => permission.apps_id === 12 // Habilitaciones - 1
      );
      if (guard) {
        user.set(result.body);
        setStorageUser(result.body);
        toast.success('Bienvenido', optionToast);
        setTimeout(() => {
          navigate('/', { replace: true });
        }, 1500); // 1.5 segundos
      } else {
        toast.error(
          'Credenciales incorrectas. Por favor, inicie sesión con credenciales válidas. Para esta aplicación',
          optionToast
        );
        return false;
      }
    }
  }
</script>

<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6 col-lg-4">
      <div class="card p-5 border-0 text-center">
        <div class="card-body bg-body-tertiary rounded-1">
          <img src={brand} alt="Brand" width="60" height="60" class="mb-3" />
          <h5 class="card-title">{config.app.code}</h5>
          <form
            class="row"
            action=""
            method="post"
            on:submit|preventDefault={handleSubmit}
          >
            <div class="form-group mt-3">
              <div class="form-floating">
                <input
                  type="number"
                  class="form-control"
                  id="legajo"
                  placeholder="Legajo"
                  bind:value={legajo}
                  required
                />
                <label for="legajo"><b>Legajo</b></label>
              </div>
            </div>
            <div class="form-group mt-3">
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="clave"
                  placeholder="Clave"
                  bind:value={password}
                  required
                />
                <label for="clave"><b>Clave</b></label>
              </div>
            </div>
            <div class="form-group mt-3">
              <div class="d-grid">
                <button class="btn btn-dark mb-2" type="submit">Acceder</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<Toaster />
