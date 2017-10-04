<template>
	<div>
		<div class="row">
			<div class="col s10 m10 l10">
				<h3 id="tituloVistaAgregar">Ingresa datos para agendar nuevo contacto :)</h3>
			</div>
		</div>
		<div class="row">
			<div class="col s12 m8 l8 offset-m2 offset-l2">
			<!-- FORMULARIO AGREGAR CONTACTO  -->
				<form>
					<div class="row">
						<div class="col s12 m6 l6">
							<input type="text" v-model="contacto.nombre" placeholder="Ingrese nombre">
						</div>
						<div class="col s12 m6 l6">
							<input type="text" v-model="contacto.apellido" placeholder="Ingrese apellido">
						</div>
					</div>
					<div class="row">
						<div class="col s12 m6 l6">
							<input type="number" v-model="contacto.edad" placeholder="Ingrese edad">
						</div>
						<div class="col s12 m6 l6">
							<input type="text" v-model="contacto.direccion" placeholder="Ingrese dirección">
						</div>
					</div>
					<div class="row">
						<div class="col s12 m6 l6">
							<h5>Seleccione el sexo:</h5>
						</div>
						<div class="col s12 m3 l3">
							<input class="with-gap" name="sexo" value="Varon" type="radio" id="varon" 
									v-model="contacto.sexo"/>
							<label for="varon">Varon</label>

						</div>
						<div class="col s12 m3 l3">
							<input class="with-gap" name="sexo" value="Mujer" type="radio" id="mujer" 
									v-model="contacto.sexo"/>
							<label for="mujer">Mujer</label>
						</div>
					</div>
					<div class="row">
						<div class="col s12 m9 l9 offset-m3 offset-l3">
						<button class="waves-effect waves-light btn-large botonConLetrasRojitas" :disabled="!formOk" type="submit" @click.prevent="agregarContacto">
																						PULSEME CUANDO TERMINE DE INGRESAR LOS DATOS</button>
						</div>
					</div>
				</form>
				<!-- Alert contacto agregado -->
				<div v-if="mensajeContactoAgregado">
					<div class="alert">
						<span class="closebtn" @click="cerrarMensajes()">&times;</span> 
								Contacto agregado con exito!
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'vistaAgregarContacto',
		data(){
			return{
				contacto: {
					nombre: '',
					apellido: '',
					edad: '',
					sexo: '',
					direccion: '',
					favorito: false
				},
				mensajeContactoAgregado: false
			}
		},
		computed:{
			formOk(){
				return this.contacto.nombre && this.contacto.apellido && this.contacto.edad && this.contacto.sexo && this.contacto.direccion;
			}
		},
		methods: {
			cerrarMensajes(){
				this.mensajeContactoAgregado = false;
			},
			limpiarDatosContacto(){
				this.contacto.nombre = '';
				this.contacto.apellido = '';
				this.contacto.edad = '';
				this.contacto.sexo = '';
				this.contacto.direccion = '';
			},
			agregarContacto(){
				this.$emit('agregarContacto', Object.assign({}, this.contacto))
				this.limpiarDatosContacto();
				this.mensajeContactoAgregado = true;
			}
		}
	}
</script>

<style>
	#tituloVistaAgregar{
		color: #b71c1c ; 
		font-family: 'Trocchi', serif; 
		font-size: 50px; 
		font-weight: normal; 
		line-height: 58px;
		padding-left: 300px; 
	}
	.botonConLetrasRojitas{
    	color: #b71c1c;
	}
	.closebtn {
	    margin-left: 15px;
	    color: black;
	    font-weight: bold;
	    float: right;
	    font-size: 22px;
	    line-height: 20px;
	    cursor: pointer;
	    transition: 0.3s;
	}
	.alert {
	    font-size: 20px;
	    margin-left: 30px;
	    margin-top: 25px;
	    margin-bottom: 50px;
	    padding: 20px;
	    background-color: #00897b;
	    color: #b71c1c;
	    font-weight: bold;
	    border-radius: 5px;
	}

</style>