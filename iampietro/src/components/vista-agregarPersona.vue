<template>
	<div class="row justify-content-md-center">
		<div class="col-md-10 col-sm-10 col-xs-10">
			<div id="alerta" class="alert alert-success alerta">
                        <span aria-hidden="true" class="floatRight" onclick="this.parentElement.style.display='none';">&times;</span>
                      	<strong>Holy guacamole!</strong> Persona agregada correctamente.
            </div>
                <form>
                    <div class="form-row">
	                      <div class="form-group col-md-6 col-sm-6 col-xs-6">
		                        <label>Nombre</label>
		                        <input v-model="persona.nombre" type="text" placeholder="Ingrese nombre" class="form-control">
	                      </div>
	                      <div class="form-group col-md-6 col-sm-6 col-xs-6">
		                        <label>Apellido</label>
		                        <input v-model="persona.apellido" type="text" placeholder="Ingrese apellido" class="form-control">
	                      </div>
	                      <div class="form-group col-md-6 col-sm-6 col-xs-6">
		                        <label>Edad</label>
		                        <input type="number" placeholder="Ingrese edad" v-model="persona.edad" class="form-control">
	                      </div>
	                      <div class="form-group col-md-6 col-sm-6 col-xs-6">
		                        <label>Mail</label>
		                        <input type="email" placeholder="Ingrese e-mail" v-model="persona.mail" class="form-control">
	                      </div>
	                </div>
	                <label class="radio-inline">
	                      <input value="v" id="radio1" name="radio" type="radio" v-model="persona.sexo"
	                      checked>
	                </label>
	                <span class="custom-control-description">Varon</span>
	                <label class="radio-inline">
	                      <input value="m" id="radio2" name="radio" type="radio" v-model="persona.sexo">
	                </label>
	                <span class="custom-control-description">Mujer</span>
	                <button :disabled="!formOk" class="btn btn-primary" type="submit" @click.prevent="agregarPersona"> Ingresar
	                </button>
                </form>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'agregarPersona',
		data() {
			return {
				persona: {
					nombre: '',
					apellido: '',
					edad: '',
					sexo: '',
					mail: '',
					favoritos: 'false'
				}
			}
		},
		methods: {
			agregarPersona() {
				this.$emit('agregarPersona', Object.assign({}, this.persona))
				this.limpiarPersona();
				this.activarAlerta();
			},
			limpiarPersona() {
	          this.persona.nombre = '';
	          this.persona.apellido = '';
	          this.persona.edad = '';
	          this.persona.sexo = '';
	          this.persona.mail = '';
	        },
	        activarAlerta() {
	          const alert = document.getElementById("alerta");
	          alert.style.display = "block";
	        }
		},
		computed: {
	        formOk() {
	          return this.persona.nombre && this.persona.edad
	                 && this.persona.sexo && this.persona.apellido
	                 && this.persona.mail;
	        }
		}
	}
</script>