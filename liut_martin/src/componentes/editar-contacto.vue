<template>
    <div class="col s12 l6 offset-l3 formulario">
	    <form>
	        <div class="row">
		      	<h1 class="center">Editar Contacto</h1>
		        <div class="input-field col s12">
		          <input v-model="persona.nombre" type="text" class="validate" required>
		        </div>
		        <div class="input-field col s12">
		          <input v-model="persona.apellido" type="text" class="validate" required>
		        </div>
		        <div class="input-field col s12">
		          <input v-model="persona.email" type="email" class="validate" required>
		        </div>
		        <div class="input-field col s12">
		          <input v-model="persona.telefono" type="text" class="validate" required>
		        </div>
		        <div class="col s12 contenedor_radios">
					<p class="center">
		        	<input name="genero" type="radio" id="ma" class="with-gap" value="m" v-model="persona.genero" required />
	     			<label for="ma" class="black-text">Masculino</label>
		        	<input name="genero" type="radio" id="fe" class="with-gap" value="f" v-model="persona.genero" required />
	     			<label for="fe" class="black-text">Femenino</label>
	     			</p>
		        </div>
		        <div class="input-field col s12 center">
		          <button type="submit" class="blue waves-effect waves-light btn darken-2" @click.prevent="salvarCambios"><i class="material-icons left">save</i>Guardar</button>
		        </div>
	        </div>
	       <div v-if="mensaje == true" class="white-text card-panel green lighten-1 center"><i class="material-icons left">done</i>¡ Usuario editado correctamente !</div>
	    </form>
    </div>
</template>	

<script>
	export default {
		name: 'editarContacto',
		props: ['persona', 'personas', 'indexPersonaSeleccionada'],
		data() {
			return {
				mensaje: false
			}
		},
		methods: {
			salvarCambios: function(){
				this.personas[this.indexPersonaSeleccionada].nombre   = this.persona.nombre;
				this.personas[this.indexPersonaSeleccionada].apellido = this.persona.apellido;
				this.personas[this.indexPersonaSeleccionada].genero   = this.persona.genero;
				this.personas[this.indexPersonaSeleccionada].email    = this.persona.email;
				this.personas[this.indexPersonaSeleccionada].telefono = this.persona.telefono;
	          	this.guardarContactosEnStorage();
	          	this.mensaje = true;
			},
			guardarContactosEnStorage: function(){
				localStorage.setItem('personas', JSON.stringify(this.personas));
			}
		}
	}
</script>