<script>
  import toast, { Toaster } from 'svelte-french-toast';
  import AuthServices from '../../services/rest/AuthServices.js';
  import { user } from '../../stores/stores.js';

  let password = '',
    repassword = '';

  async function changePassword() {
    try {
      const authServices = new AuthServices();
      const change = await authServices.changePassword(
        $user.legajo,
        password,
        repassword
      );
      // console.log(change);
      if (change.status === 204) {
        toast.error('Puede ser que las passwords no coincidan.', {
          style: 'border-radius: 20px; background: #343a40; color: #fff;',
          iconTheme: {
            primary: '#f0bab9',
            secondary: '#520120'  
          }
        });
      } else {
        toast.success('Su password cambio.', {
          style: 'border-radius: 20px; background: #343a40; color: #fff;',
          iconTheme: {
            primary: '#55595c',
            secondary: '#dbf2e3'
          }
        });
      }
      (password = ''), (repassword = '');
      return true;
    } catch (error) {
      throw 'Hubo un Error!';
    }
  }
</script>

<!-- Button trigger modal -->
<button
  type="button"
  class="btn btn-outline-dark mt-2"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
>
  Cambiar contraseña
</button>

<!-- Modal -->
<div
  class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">
          Actualiza tu contraseña
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div class="modal-body">
        <form class="row" on:submit|preventDefault={changePassword}>
          <div class="col-md-12 mb-3">
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                placeholder="Nueva Password"
                bind:value={password}
                required
              />
              <label for="password">Nueva Password:</label>
            </div>
          </div>
          <div class="col-md-12 mb-3">
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="repassword"
                name="repassword"
                placeholder="Repita Password"
                bind:value={repassword}
                required
              />
              <label for="repassword">Repita Password:</label>
            </div>
          </div>
          <hr />
          <div class="text-center mb-3">
            <button
              type="reset"
              class="btn btn-secondary"
              data-bs-dismiss="modal">Cerrar</button
            >
            <button type="submit" class="btn btn-dark">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<Toaster />
