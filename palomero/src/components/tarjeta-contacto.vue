<template>
	<div class="row">
		<div class="col s12 m6">
			<div class="card blue-grey darken-1">
				<div class="card-content white-text">
					<span class="card-title">{{ persona.nombre }} {{ persona.apellido }}</span>
					<p>Age: {{persona.edad}}</p>
					<p>Phone number: {{persona.telefono}}</p>
					<p>Sex: {{persona.sexo}}</p>
				</div>
				<div class="card-action">
					<button class="btn waves-effect waves-light" @click="eliminarFav(index);">Unfave</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
	
</script>