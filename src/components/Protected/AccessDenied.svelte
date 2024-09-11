<script>
	import { link } from "svelte-routing";
</script>

<div class="container">
	<div class="row">
		<div class="col-md-12">
			<div
				class="card d-flex justify-content-center align-items-center border-0"
			>
				<div class="card-body text-center">
					<h2 class="card-title">Authorization required</h2>
					<h1 class="display-3">401</h1>
					<a class="btn btn-dark" href="/account/login" use:link
						>Inicio</a
					>
				</div>
			</div>
		</div>
	</div>
</div>
