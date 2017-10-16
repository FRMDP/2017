<template>
    <form @submit.prevent="registrar" class="col s12 l6 offset-l3 formulario">
      <div class="row">
      	<h1 class="center">Registro de Contacto</h1>
        <div class="input-field col s12">
          <input v-model="persona.nombre" id="nombre" type="text" class="validate" required placeholder="Nombre">
        </div>
        <div class="input-field col s12">
          <input v-model="persona.apellido" id="apellido" type="text" class="validate" required placeholder="Apellido">
        </div>
        <div class="input-field col s12">
          <input v-model="persona.email" id="email" type="email" class="validate" required placeholder="E-mail">
        </div>
        <div class="input-field col s12">
          <input v-model="persona.telefono" id="telefono" type="text" class="validate" required placeholder="Teléfono">
        </div>
        <div class="col s12 contenedor_radios">
			<p class="center">
        	<input name="genero" type="radio" id="m" class="with-gap" value="m" v-model="persona.genero" required />
 			<label for="m" class="black-text">Masculino</label>
        	<input name="genero" type="radio" id="f" class="with-gap" value="f" v-model="persona.genero" required />
 			<label for="f" class="black-text">Femenino</label>
 			</p>
        </div>
        <div class="input-field col s12 center">
          <button type="submit" class="blue waves-effect waves-light btn darken-2"><i class="material-icons left">save</i>Guardar</button>
        </div>
      </div>
      <div v-if="mensaje == true" class="white-text card-panel green lighten-1 center"><i class="material-icons left">done</i>¡ Usuario registrado correctamente !</div>
    </form>
</template>

<script>
	export default {
		name: 'agregarContacto',
        props: ['persona', 'personas'],
        data() {
            return {
                mensaje: false
            }
        },
        methods: {
            registrar(){
                const persona = Object.assign({}, this.persona);
                this.personas.push(persona);
                this.limpiarRegistro();
                this.mensaje = true;
                localStorage.setItem('personas', JSON.stringify(this.personas));
            },
            limpiarRegistro: function(){
                this.persona.nombre   = '';
                this.persona.apellido = '';
                this.persona.genero   = '';
                this.persona.email    = '';
                this.persona.telefono = '';
            }
        }
	}
</script>

<style>
    .contenedor_radios{ 
        margin-bottom: 15px; 
    }
</style>