<template>
  <div class="form-agenda">
    <div id="form">
      <form>
        <div class="field">
          <label class="label">Nombre</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" v-model="persona.nombre" type="text" placeholder="Ingrese Nombre">
          </div>
        </div>
        <div class="field">
          <label class="label">Apellido</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" v-model="persona.apellido" type="text" placeholder="Ingrese Apellido">
          </div>
        </div>
        <div class="field">
          <label class="label">Edad</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" v-model="persona.edad" type="number" placeholder="Ingrese Edad">
          </div>
        </div>
        <div class="field">
          <label class="label">Sexo</label>
          <div class="control">
            <div class="select">
              <select v-model="persona.sexo">
                <option disabled value="">Seleccione sexo</option>
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Telefono</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" v-model="persona.telefono" type="number" placeholder="Ingrese Nro de Telefono">
          </div>
        </div>
        <div class="field">
          <label class="label">Direccion</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" v-model="persona.direccion" type="text" placeholder="Ingrese Direccion">
          </div>
        </div>
        <button v-if="vista=='ingresar'" class="button" :disabled="!formOk" type="submit" @click.prevent="nuevaPersona">Ingresar</button>
        <div v-show ="mensaje=='guardado'" class="modal">
          <div class="modal-content">
          <button class="delete" @click="cerrarMensaje"></button>
          <p>Contacto Agregado</p>
        </div>
      </div>
      <button v-if="vista=='editar'" class="button" :disabled="!formOk" type="submit" @click.prevent="editaPersona">Guardar</button>
      <div v-show ="mensaje=='editado'" class="modal">
        <div class="modal-content">
        <button class="delete" @click="cerrarMensaje"></button>
        <p>Contacto Editado</p>
      </div>
      </div>
      </form>
  </div>
</div>
</template>

<script>
    export default {
    	name: 'formAgenda',
      props: ['vista','p'],
    	data() {
    		return {
          persona: {
            nombre: '',
            apellido:'',
            edad: '',
            sexo: '',
            telefono:'',
            direccion:''
          },
          mensaje:'',
    		}
    	},
      computed: {
        formOk() {
          return this.persona.nombre && this.persona.apellido && this.persona.edad && this.persona.sexo && this.persona.telefono && this.persona.direccion;
        }
      },
    	methods: {
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
          this.persona.direccion = '';
        },
        cerrarMensaje() {
          this.mensaje = false;
          this.$emit('inicio', 'buscar');
        },
        editaPersona(){
          this.$emit('editaPersona',this.persona);
          this.mensaje = 'editado';
        }
    	},
      created(){
        if(this.p!='')
        {
          this.persona=Object.assign({}, this.p);
        }
      },
      watch:{
        vista: function(){
          this.limpiarPersona();
        }
      }
    }
</script>
<style>

</style>
