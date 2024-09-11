<!-- App.svelte -->
<script>
  import { Router, Link, Route, link } from 'svelte-routing';
  import Navbar from './layouts/Navbar.svelte';
  import Layouts from './layouts/Layouts.svelte';
  import Login from './pages/account/Login.svelte';
  import Profile from './pages/account/Profile.svelte';
  import ProtectedRoute from './components/Protected/ProtectedRoute.svelte';
  import NotFound from './components/Protected/NotFound.svelte';
  import Home from './pages/home/index.svelte';
  import Memo from './pages/memos/index.svelte';
  import MemoNuevo from './pages/memos/nuevo/index.svelte';
  import Secretaria from './pages/secretarias/index.svelte';
  import SecretariaNuevo from './pages/secretarias/nuevo/index.svelte';
  // export let url = "";
</script>

<Router>
  <Navbar />
  <Layouts>
    <ProtectedRoute path="/" component={Home} />
    <ProtectedRoute path="/memos" component={Memo} />
    <ProtectedRoute path="/memos/nuevo" component={MemoNuevo} />
    <ProtectedRoute path="/secretarias" component={Secretaria} />
    <ProtectedRoute path="/secretarias/nuevo" component={SecretariaNuevo} />
    <ProtectedRoute path="/account/profile" component={Profile} />
    <Route path="/account/login" component={Login} />
    <Route path="/*" component={NotFound} />
  </Layouts>
</Router>
