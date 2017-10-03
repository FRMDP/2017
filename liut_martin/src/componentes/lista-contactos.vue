<template>
    <div class="col s12 l6 offset-l3 formulario">
    	<div v-if="mensaje == true" class="white-text card-panel green lighten-1 center"><i class="material-icons left">done</i>¡ {{perona.apellido}} {{persona.nombre}} editado correctamente !</div>
    	<div v-if="personas.length != 0">
	    	<h1 class="center">Lista de Contactos</h1>
	    	<div class="input-field">
		        <i class="material-icons prefix large">search</i>
		        <!-- El input debería ser de tipo "search", pero se veía feo el estilo -->
		        <input v-model="busqueda" id="icon_prefix" type="text" class="validate" placeholder="Buscar contacto">
	    	</div>  
	    	<div v-if="personasFiltradas.length > 0">
		    	<div v-for="(persona, index) in personasFiltradas">
		    		<tarjeta-contacto :persona="persona" :personas="personas" :index="index" @editarPersona="editarPersona"></tarjeta-contacto>
		    	</div>
		    </div>
		    <h3 v-else class="center">No se encontraron resultados con "{{busqueda}}"</h3>
	    </div>
	    <h3 v-else class="center">No hay personas cargadas</h3>
    </div>
</template>

<script>
	import tarjetaContacto from './tarjeta-contacto.vue';

	export default {
		name      : 'listaContactos',
		props     : ['persona', 'personas', 'mensaje'],
		components: {
			tarjetaContacto
		},
		data(){
			return {
				busqueda: ''
			}
		},
		methods: {
			getPersonasLocalStorage: function(){
				const personas = localStorage.getItem('personas');
				if(personas){
					this.personas = JSON.parse(personas);
				}
			},
			editarPersona: function(index){
				this.$emit('cambiarVista', 'editar');
				this.$emit('cambiarIndex', index);
				this.$emit('setPersona', this.personas[index]);
			}
		},
		computed: {
			personasFiltradas() {
				//La función filter es case sensitive
		  		return this.personas.filter(p => p.nombre.toLowerCase().indexOf(this.busqueda.toLowerCase()) >= 0 ||
		  		                            p.apellido.toLowerCase().indexOf(this.busqueda.toLowerCase())    >= 0 ||
		  		                            p.telefono.toLowerCase().indexOf(this.busqueda.toLowerCase())    >= 0 ||
		  		                            p.email.toLowerCase().indexOf(this.busqueda.toLowerCase())       >= 0 );
	  		}
		}
	}
</script>