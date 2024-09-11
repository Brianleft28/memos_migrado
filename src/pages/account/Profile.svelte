<script>
  import AccountChangePassword from '../../components/Account/AccountChangePassword.svelte';
  import { user } from '../../stores/stores';
  import { toggleTheme } from '../../stores/theme.js';
</script>

<div class="container">
  <div class="row">
    <div class="col-md-6 mt-3 mb-3">
      <div class="card bg-body-tertiary border-0 rounded-1">
        <div class="card-body p-5">
          <h3 class="card-title">Perfil</h3>
          <h5>Nombre</h5>
          {$user.name}
          <hr />
          <h5>Legajo</h5>
          {$user.legajo}
          <hr />
          <h5>Email</h5>
          {$user.email}
          <hr />
          <h5>Fecha de Alta</h5>
          {$user.created_at}
          <hr />

          <AccountChangePassword />

          <button class="btn btn-outline-dark mt-2" on:click={toggleTheme}
            >Dark/Light</button
          >
        </div>
      </div>
    </div>
  </div>
</div>
