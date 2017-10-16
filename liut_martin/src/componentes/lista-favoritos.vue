<template>
    <div class="col s12 l6 offset-l3 formulario">
   		<div v-if="personasFavoritas.length > 0">
	   		<h1 class="center">Favoritos</h1>
	    	<div v-for="persona in personasFavoritas">
	            <tarjeta-contacto :persona="persona" :personas="personas" :mostrarBotones="mostrarBotones"></tarjeta-contacto>
	        </div>
	    </div>
	    <h3 v-else class="center">No hay favoritos</h3>
    </div>
</template>

<script>
	import tarjetaContacto from './tarjeta-contacto.vue';

	export default {
		name: 'listaFavoritos',
		components: {
			tarjetaContacto
		},
		data() {
			return {
				mostrarBotones: false
			}
		},
		props: ['personas', 'persona'],
		computed: {
	  		personasFavoritas(){
				return this.personas.filter(p =>  p.favorito == true);
			}
		}
	}
</script>