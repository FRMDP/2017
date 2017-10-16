<template>
  <div class='view-add'>
    <!-- Alert de persona agregada -->
    <div v-if='mensajePersonaAgregada' class="alert alert-warning alert-dismissible fade show " role="alert">
      <button @click="cerrarMensajePersona" type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <strong>Holy guacamole!</strong> You added a new person
    </div>
    <form>
      <label class="sizeSubTitle"><strong>Add a person</strong></label>
      <br/>
      <label>Name</label>
      <input class="form-control" v-model="persona.nombre" type="text" placeholder="Put your name">
      <label>Age</label>
      <input class="form-control" type="number" placeholder="Put your age" v-model="persona.edad">
      <label>Description</label>
      <textarea  class="form-control Styletextarea" v-model="persona.descripcion"> </textarea>
      <label class="custom-control custom-radio">
        <input value="male" class="custom-control-input" id="radio1" name="radio" type="radio" v-model="persona.sexo">
        <span class="custom-control-indicator"></span>
        <span class="custom-control-description">Man</span>
      </label>
      <label class="custom-control custom-radio">
        <input value="female" class="custom-control-input" id="radio2" name="radio" type="radio" v-model="persona.sexo">
        <span class="custom-control-indicator"></span>
        <span class="custom-control-description">Woman</span>
      </label>
      <br/>
      <button class="btn btn-success spaceButton" :disabled="!formPeopleOk" type="submit" @click.prevent="agregarPersona">Send</button>
    </form>
  </div>
</template>
<script>
  export default{
    name: 'viewAdd',
    data(){
      return{
        persona: {
        	nombre: '',
        	edad: '',
        	sexo: '',
          descripcion: '',
        },
        vista: 'ingresar',
        mensajePersonaAgregada: false
      }
    },
    computed:{
      formPeopleOk() {
        return this.persona.nombre && this.persona.edad && this.persona.sexo && this.persona.descripcion;
      }
   },
   methods:{
     agregarPersona(){
       this.$emit('agregarPersona', Object.assign({}, this.persona));
       this.mensajePersonaAgregada = true;
       this.limpiarPersona();
     },
     cerrarMensajePersona()
     {
       this.mensajePersonaAgregada = false;
     },
     limpiarPersona() {
       this.persona.nombre = '';
       this.persona.edad = '';
       this.persona.sexo = '';
       this.persona.descripcion = '';
       this.index = '';
     }
   }
  }

</script>
<style>

</style>
