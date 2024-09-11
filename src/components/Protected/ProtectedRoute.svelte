<!-- ProtectedRoute.svelte -->
<script>
  import { Route } from 'svelte-routing';
  import AccessDenied from './AccessDenied.svelte';
  import { user } from '../../stores/stores';

  export let path;
  export let component;

  $: isAuthenticated = $user;
</script>

<!-- Acá -->
{#if isAuthenticated}
  <Route {path} let:params>
    <svelte:component this={component} {...params} />
  </Route>
{:else}
  <Route {path} component={AccessDenied} />
{/if}
