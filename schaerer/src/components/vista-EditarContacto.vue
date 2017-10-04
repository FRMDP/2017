<template>
	<div>
		<div class="row">
			<div class="col s12 m8 l8 offset-m2 offset-l2">
				<h5 id="tituloVistaEditar">Modifique los datos del contacto :)</h5>
			</div>
		</div>
		<div class="row">
			<div class="col s12 m10 l8 offset-m2 offset-l2">
			<!-- FORMULARIO EDITAR CONTACTO  -->
				<form>
					<div class="row">
						<div class="col s12 m6 l6">
							<input type="text" v-model="contactoEditar.nombre" placeholder="Ingrese nombre">
						</div>
						<div class="col s12 m6 l6">
							<input type="text" v-model="contactoEditar.apellido" placeholder="Ingrese apellido">
						</div>
					</div>
					<div class="row">
						<div class="col s12 m6 l6">
							<input type="number" v-model="contactoEditar.edad" placeholder="Ingrese edad">
						</div>
						<div class="col s12 m6 l6">
							<input type="text" v-model="contactoEditar.direccion" placeholder="Ingrese dirección">
						</div>
					</div>
					<div class="row">
						<label for="sexo">Seleccione el sexo</label>
	                        <div class="row" id="sexo">
	                            <div class="col s12 m6 l6">
	                                <select v-model="contactoEditar.sexo" name="sexo" style="display: block;">
	                                    <option value="Varon" id="varon">Varon</option>
	                                    <option value="Mujer" id="mujer">Mujer</option>
	                                </select>
	                            </div>
	                        </div>
					</div>
					<div class="row">
						<div class="col s12 m9 l9 offset-m3 offset-l3">
						<button class="waves-effect waves-light btn-large botonConLetrasRojitas" :disabled="!formOk" type="submit" @click.prevent="editarContacto">
								EDICION TERMINADA</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'vistaEditarContacto',
		props: ['contactoEditar'],
		computed: {
			formOk(){
				return this.contactoEditar.nombre && this.contactoEditar.apellido && this.contactoEditar.edad 
													&& this.contactoEditar.sexo && this.contactoEditar.direccion;
			}
		},
		methods: {
			editarContacto(){
				this.$emit('editarContacto');
			}
		}
	}
</script>

<style>
	.botonConLetrasRojitas{
    	color: #b71c1c;
	}
	#tituloVistaEditar{
	    color: #b71c1c; 
	    font-family: 'Raleway',sans-serif; 
	    font-size: 50px; 
	    font-weight: 800; 
	    line-height: 72px; 
	    margin: 24px; 
	    text-align: center;
	}
</style>