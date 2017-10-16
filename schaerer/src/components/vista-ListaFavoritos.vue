<template>
	<div>
		<div class="row">
			<div class="col s12 m8 l8 offset-m2 offset-l2">
				<h3>Lista de contactos favoritos</h3>
				<h5>Acá puede ver, editar y borrar sus contactos favoritos.</h5>
				<input type="text" v-model="filtro" placeholder="Acá podés buscar ingresando cualquier tipo de información relacionada a un contacto :)">

				<!-- Alert Contacto Eliminado .....no sabia donde ponerlo -->
				<div v-if="mensajeContactoEliminado">
					<div class="alert">
						<span class="closebtn" @click="cerrarMensajes()">&times;</span> 
								Contacto eliminado con exito!
					</div>
				</div>
				<!-- Alert Contacto Editado .....no sabia donde ponerlo -->
				<div v-if="mensajeContactoEditado">
					<div class="alert">
						<span class="closebtn" @click="cerrarMensajes()">&times;</span> 
								Contacto editado con exito!
					</div>
				</div>

				<h3 v-if="!contactosFavoritos.length">Todavía no tenés contactos favoritos, ¿¿¿que esperás para agregarlos???</h3>
				<h3 v-else-if="busquedaIncorrecta">¡No tenés a nadie con esa característica!</h3>
				<agenda-Card v-else v-for="contact in contactosFavoritosFiltrados" :contact="contact"
					@borrarContacto="borrarContacto" @abrirFormularioEditarContacto="abrirFormularioEditarContacto" 
					@estadoFavorito="estadoFavorito">
				</agenda-Card>
			</div>
		</div>
	</div>
</template>

<script>
	import agendaCard from './agenda-Card.vue';

	export default{
		name: 'vistaListaFavoritos',
		components: {
			agendaCard
		},
		props: ['contactos' , 'mensajeContactoEditado'],
		data(){
			return{
				filtro: '',
				mensajeContactoEliminado: false
			}
		},
		computed: {
			contactosFavoritos(){
				return this.contactos.filter(c => c.favorito);
			},
			contactosFavoritosFiltrados() {
				return this.contactosFavoritos.filter(c => c.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0
			                        || c.apellido.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0
			                        || c.edad.indexOf(this.filtro) >= 0
			                        || c.sexo.toLowerCase().indexOf(this.filtro.toLowerCase()) >=0
			                        || c.direccion.toLowerCase().indexOf(this.filtro.toLowerCase()) >=0
					);
			},
			busquedaIncorrecta(){
				return this.contactosFavoritosFiltrados.length == 0 && this.filtro!='';
			}
		},
		methods: {
			cerrarMensajes(){
				this.mensajeContactoEditado = false;
				this.mensajeContactoEliminado = false;
			},
			borrarContacto(contact){
				this.$emit('borrarContacto', this.contactos.indexOf(contact));
				this.mensajeContactoEliminado = true;
			},
			abrirFormularioEditarContacto(contact){
				this.$emit('abrirFormularioEditarContacto', this.contactos.indexOf(contact));
			},
			estadoFavorito(contact) {
				this.$emit('estadoFavorito', this.contactos.indexOf(contact));
	        }
		}
	}
</script>

<style>
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
	.favoriteStar {
	    display: inline-block;
	    padding: 3px;
	    vertical-align: middle;
	    line-height: 1;
	    font-size: 16px;
	    color: #ABABAB;
	    cursor: pointer;
	    -webkit-transition: color .2s ease-out;
	    transition: color .2s ease-out;
	    font-size: 30px;
	}
	.favoriteStar.is-disabled:hover {
	     cursor: default;
	 }
	.favoriteCheck {
	    position: absolute;
	    overflow: hidden;
	    clip: rect(0 0 0 0);
	    height: 1px;
	    width: 1px;
	    margin: -1px;
	    padding: 0;
	    border: 0;

	}
	.favoriteStarSelected{
	    color: #ff6e00;
	}
</style>