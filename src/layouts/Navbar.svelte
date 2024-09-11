<script>
  import brand from '/img/brand.png';
  import { Link, navigate } from 'svelte-routing';
  import { user } from '../stores/stores.js';

  $: isAuthenticated = $user;

  function logout() {
    user.set(false);
    localStorage.clear();
    navigate('/account/login', { replace: false });
  }
</script>

<!-- aca tambien -->
{#if isAuthenticated}
  <nav
    class="navbar navbar-expand-lg fixed-top bg-dark shadow-sm border-bottom border-dark-subtle"
    data-bs-theme="dark"
    style="padding: 0.5rem"
  >
    <div class="container">
      <Link class="navbar-brand" to="/">
        <img src={brand} alt="Bootstrap" width="60" height="60" />
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-print-none">
          <li class="nav-item">
            <Link class="nav-link" to="/memos">Memos</Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/secretarias">Secretarias</Link>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="badge rounded-pill bg-light"
                ><b>{isAuthenticated.legajo}</b></span
              >
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <Link class="dropdown-item" to="/account/profile">Perfil</Link>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <button class="dropdown-item" on:click={logout}
                  >Desconectarse</button
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
{/if}
