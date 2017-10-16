<template>
	<div class="negrita">
        <form class="ac-custom ac-radio ac-circle" autocomplete="off">
            <h2>Ingrese sus datos</h2>
            <input v-model="persona.nombre" type="text" placeholder="Ingrese nombre">
            <input v-model="persona.apellido" type="text" placeholder="Ingrese apellido">
            <input type="number" placeholder="Ingrese edad" v-model="persona.edad">
            <input type="text" placeholder="Ingrese domicilio" v-model="persona.direccion">
            <div class="row">
              <div class="col l5">
                <ul>
                  <li class="costado"><input value="v" id="r1" name="r1" type="radio" v-model="persona.sexo">Varon</li>
                  <li class="costado"><input value="m" id="r2" name="r1" type="radio" v-model="persona.sexo">Mujer</li>
                </ul>
              </div>
              <div class="col l7">
               <button :disabled="!formOk" class="btn waves-effect waves-light right" type="submit" name="action"  @click.prevent="addPersona">Aceptar</button>
               </div>
        	</div>
        </form>
        <div v-if="mensaje" class="todo_bien_box">
            Persona cargada succesfully
        </div>
     </div>
</template>

<script>
    export default {
    	name: 'vistaIngresar',
      props: [ 'vista'],
      data(){ 
        return {
          mensaje: false,
          persona: {
            id: '',
            nombre: '',
            apellido: '',
            edad: '',
            direccion: '',
            sexo: ''
          }
        }
      },
      computed:{
        formOk() {
          return this.persona.nombre && this.persona.apellido && this.persona.edad && this.persona.direccion &&  this.persona.sexo;
        }
      },
      methods:{
        addPersona(){
          this.$emit('addPersona', Object.assign({}, this.persona))
          this.cleanFormulario();
          this.mensaje = true;
          setTimeout(this.mensaje_false, 4000);
        },
        cleanFormulario() {
          this.persona.nombre = '';
          this.persona.apellido = '';
          this.persona.edad = '';
          this.persona.direccion = '';
          this.persona.fecha_nac = '';
          this.persona.sexo = '';
        },
        mensaje_false() { 
          this.mensaje = false; 
        }
      }
    }
</script>

<style>

</style>
