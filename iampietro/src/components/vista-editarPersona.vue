<template>
	<div class="row justify-content-md-center">
		<div class="col-md-10 col-sm-10 col-xs-10">
			      <div id="editAlert" class="alert alert-info alerta">
                  <span aria-hidden="true" class="floatRight" onclick="this.parentElement.style.display='none';">&times;</span>
                  <strong>Contacto editado exitosamente.</strong>
            </div>
                <form>
                        <div class="form-row">
                          	<div class="form-group col-md-6 col-sm-6 col-xs-6">
	                            <label>Nombre</label>
	                            <input v-model="personaEditable.nombre" type="text" class="form-control">
                          	</div>
                          	<div class="form-group col-md-6 col-sm-6 col-xs-6">
	                            <label>Apellido</label>
	                            <input v-model="personaEditable.apellido" type="text" class="form-control">
                          	</div>
                          	<div class="form-group col-md-6 col-sm-6 col-xs-6">
                            	<label>Edad</label>
                            	<input type="number" v-model="personaEditable.edad" class="form-control">
                          	</div>
                          	<div class="form-group col-md-6 col-sm-6 col-xs-6">
                            	<label>Mail</label>
                            	<input type="email" v-model="personaEditable.mail" class="form-control">
                          	</div>
                    	</div>
                    <input value="v" id="radio1" name="radio" type="radio" v-model="personaEditable.sexo"
                      checked>
	                      <span class="custom-control-description">Varon</span>
	                      <input value="m" id="radio2" name="radio" type="radio" v-model="personaEditable.sexo">
	                      <span class="custom-control-description">Mujer</span>
	                      <button :disabled="!formOk" class="btn btn-primary" type="submit" @click.prevent="guardarCambios">Editar</button>
                </form>
		</div>
	</div>
</template>

<script>
  export default {
    name:'editarPersona',
    props: ['personaEditable'],
    computed: {
      formOk() {
            return this.personaEditable.nombre && this.personaEditable.edad
                   && this.personaEditable.sexo && this.personaEditable.apellido
                   && this.personaEditable.mail;
          }
    },
    methods: {
      guardarCambios() {
        this.$emit('guardarCambios', Object.assign({}, this.personaEditable));
        this.activarAlertaEditado();
      },
      activarAlertaEditado() {
          const alert = document.getElementById("editAlert");
          alert.style.display = "block";
        }
    }
  }
</script>