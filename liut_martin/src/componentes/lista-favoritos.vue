<template>
    <div class="col s12 l6 offset-l3 formulario">
   		<div v-if="personasFavoritas.length > 0">
	   		<h1 class="center">Favoritos</h1>
	    	<div v-for="persona in personasFavoritas" class="card blue darken-2">
	            <div class="card-content white-text">
	              <span class="card-title">
	              	<p><i class="material-icons left">person</i> {{persona.apellido}} {{persona.nombre}} </p>
	              </span>
	              <ul class="descripcion_usuario">
	              	<li>E-mail: {{persona.email}}</li>
	              	<li>Teléfono: {{persona.telefono}}</li>
	              </ul>
	            </div>
	        </div>
	    </div>
	    <h3 v-else class="center">No hay favoritos</h3>
    </div>
</template>

<script>
	export default {
		name: 'listaFavoritos',
		props: ['personas'],
		computed: {
	  		personasFavoritas(){
				return this.personas.filter(p =>  p.favorito == true);
			}
		}
	}
</script>