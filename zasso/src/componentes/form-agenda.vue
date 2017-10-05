<template>
<div class="form-agenda">
<div id="form">
  <form class='formEstilos'>
    <div class="field">
      <label class="label">Nombre</label>
      <div class="control">
        <input class="input" v-model="persona.nombre" type="text" placeholder="Ingrese nombre">
      </div>
    </div>
    <div class="field">
      <label class="label">Apellido</label>
      <div class="control">
        <input class="input" v-model="persona.apellido" type="text" placeholder="Ingrese apellido">
      </div>
    </div>
    <div class="field">
      <label class="label">Edad</label>
      <div class="control">
        <input class="input" type="number" placeholder="Ingrese edad" v-model="persona.edad">
      </div>
    </div>
    <div class="field">
      <label class="label">Telefono</label>
      <div class="control">
        <input class="input" type="number" placeholder="Ingrese telefono" v-model="persona.telefono">
      </div>
    </div>
    <label class="label">Seleccione Sexo</label>
    <label class="checkbox">
      <input value="Varón" name="radio" type="radio" v-model="persona.sexo">
      Varón
    </label>
    <label class="checkbox">
      <input value="Mujer"
             name="radio" type="radio" v-model="persona.sexo">
      Mujer
    </label>
    <button v-if="vista=='ingresar'" class="button boton-agregar" :disabled="!formOk" type="submit" @click.prevent="nuevaPersona">Ingresar</button>
    <div v-show="mensaje=='guardado'" class="modal">
      <div class="modal-content">
        <button class="delete" @click="cerrarMensaje"></button>
        <p>Contacto Agendado</p>
      </div>
    </div>
    <button v-if="vista=='editar'" class="button boton-agregar" :disabled="!formOk" type="submit"  @click.prevent="editaPersona()">Guardar cambios</button>
    <div v-show="mensaje=='editado'" class="modal">
      <div class="modal-content">
        <button class="delete" @click="cerrarMensaje"></button>
        <p>Contacto Modificado</p>
      </div>
    </div>
  </form>

</div>

</div>
</template>

<script>
export default {
  name: 'formAgenda',
  props: ['vista','p','indice'],
  data() {
    return {
      persona: {
        nombre: '',
        apellido:'',
        edad: '',
        sexo: '',
        telefono:''
      },
      mensaje:'',
    }
  },
  watch:{
    p: function(){
      if(this.p)
      {
        this.persona.nombre = this.p.nombre;
        this.persona.apellido = this.p.apellido;
        this.persona.edad = this.p.edad;
        this.persona.sexo = this.p.sexo;
        this.persona.telefono = this.p.telefono;

      }
      else {
        {
          this.limpiarPersona();
        }
      }
    }
  },
  computed: {
    formOk() {
      return this.persona.nombre && this.persona.apellido && this.persona.edad && this.persona.sexo && this.persona.telefono;
    }
  },
  methods:{
    nuevaPersona() {
      this.$emit('nuevaPersona', this.persona);
      this.limpiarPersona();
      this.mensaje = 'guardado';
    },
    limpiarPersona() {
      this.persona.nombre = '';
      this.persona.apellido = '';
      this.persona.edad = '';
      this.persona.sexo = '';
      this.persona.telefono = '';
    },
    cerrarMensaje() {
      this.mensaje = false;
      this.$emit('nuevaVista','buscar');

    },
    editaPersona(){
      this.$emit('editaPersona',this.persona);
      this.mensaje = 'editado';
    }

  },
  created(){
    if(this.p!='')
    {
      this.persona=Object.assign({},this.p);
    }
  }
}
</script>

<style>
</style>
