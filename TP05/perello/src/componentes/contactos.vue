<template>
   <div class="container" v-show="vista == 'ingresar'">
        <div>
        <h1 class="card-text">Usted eligio la pestaña Ingresar</h1>
          <h3 class="card-text">Aqui agregará sus contactos, por favor complete todos los campos obligatorios.</h3>
        <div class="form-group">
          <label for="exampleInputEmail1">Nombre *</label>
          <input type="text" class="form-control" v-model="persona.nombre" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Agregar Nombre">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Apellido *</label>
          <input type="text" class="form-control" v-model="persona.apellido" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Agregar Apellido">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Edad *</label>
          <input type="number" class="form-control"  v-model="persona.edad"id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Agregar Edad">
        </div>
          <div class="form-check form-check-inline">
            <label class="form-check-label">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"  v-model="persona.sexo" value="masculino">Masculino
          </div>
          <div class="form-check form-check-inline">
              <label class="form-check-label">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"  v-model="persona.sexo" value="femenino"> Femenino
              </label>
          </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary" :disabled="!formOk" type="submit" @click.prevent="agregarPersona">Agregar Persona</button>
              </div>
               <div class="form-group">
                <div class="alert alert-warning" role="alert" width="70px">
                  * = Campos obligatorios
                </div>
               </div>
                <div class="alert  alert-success alert-dismissible fade show" role="alert" v-if="mensaje">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"  @click.prevent="cerrarMensaje()">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <strong>Exelente!!</strong> Agregaste una persona a tu agenda, recuerda ver tus contacto en la pestaña buscar.
                </div>  
            </div>
            </div>
</template>

<script>
    export default {
    	name: 'contactos',
      props:['persona', 'personas'],
    	data() {
    		return {
    			 mensaje:false
    		}
    	},
        computed: {
            formOk() {
                return this.persona.nombre && this.persona.apellido && this.persona.edad && this.persona.sexo;
            }
        },
    	methods: {
            agregarPersona:function() {
                    const persona=Object.assign({}, this.persona);
                    this.personas.push(persona);
                    this.mensaje = true;
                    localStorage.setItem('personas', JSON.stringify(this.personas));
                    this.limpiarPersona();
                },
            limpiarPersona:function() {
                this.persona.nombre = '';
                this.persona.apellido='';
                this.persona.edad = '';
                this.persona.sexo = '';
            },
            cerrarMensaje:function(){
              this.mensaje=false;
            }
    	}
    }
</script>

<style>
</style>
