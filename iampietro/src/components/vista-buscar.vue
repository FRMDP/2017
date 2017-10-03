<template>
	<div class="row justify-content-md-center">
		<div class="col-md-10 col-sm-10 col-xs-10">
			<div class="row justify-content-md-center" v-show="personas.length">
                <span class="spanNearFilter"><strong> Buscar contacto: </strong></span>
                <input type="text" placeholder="Ej: Pablo 'Homero' Fino" v-model="filtro">
            </div>
            <div id="deleteAlert" class="alert alert-danger alerta">
                <span aria-hidden="true" class="floatRight" onclick="this.parentElement.style.display='none';">&times;</span>
                <strong v-model="name">Parece que has eliminado a "{{ name }}" de tus contactos :(</strong>
            </div>
            <div id="favouriteAddAlert" class="alert alert-info alerta">
                <span aria-hidden="true" class="floatRight" onclick="this.parentElement.style.display='none';">&times;</span>
                <strong v-model="name">¡Enhorabuena! "{{ name }}" ha sido agregado a tus favoritos.</strong>
            </div>
            <div id="favouriteExists" class="alert alert-warning alerta">
                <span aria-hidden="true" class="floatRight" onclick="this.parentElement.style.display='none';">&times;</span>
                <strong v-model="name">Ya has agregado a "{{ name }}" a tus favoritos!</strong>
            </div>
            <div class="row justify-content-md-center">
                <div class="jumbotron" v-if="!personas.length">
                      <h1 class="display-3">Hello there!</h1>
                      <p class="lead">Haven't added any contact yet? Go on and attach your friends!</p>
                      <hr class="my-4">
                </div>
                <div class="jumbotron marginTop" v-else-if="busquedaSinResultados">
                      <h1 class="display-3">Hello there!</h1>
                      <p class="lead">We are sorry, your search didn't have any match :(</p>
                      <hr class="my-4">
                </div>
                <div v-else v-for="persona in personasFiltradas" class="card card-inverse" id="people">
                    <div class="card-body">
                            <h4 class="card-title">{{ persona.apellido }}, {{ persona.nombre }}</h4>
                            <h6 class="card-subtitle mb-2 text-muted">{{ persona.edad }} años</h6>
                            <p class="card-text">Email: <strong>{{ persona.mail }}.</strong></p>
                            <button data-toggle="tooltip" data-placement="top" data-html="true" type="button" class="btn btn-outline-warning floatRight" @click="agregarAfavoritos(persona)">Favorito
                            </button>
                            <button data-toggle="tooltip" data-placement="top" data-html="true" title="   Borrar persona" type="button" class="btn btn-outline-danger floatRight" @click.prevent="eliminarPersona(persona)">Borrar
                            </button>
                            <button data-toggle="tooltip" data-placement="top" data-html="true" type="button" class="btn btn-outline-success floatRight" @click="personToEdit(persona)">editar
                            </button>
                    </div>
                </div>
            </div>
		</div>
	</div>
	
</template>

<script>
	export default {
		name:'buscarPersona',
		props: ['personas'],
		data(){
			return {
				filtro: '',
				name: ''
			}
		},
		methods: {
			agregarAfavoritos(persona) {
				this.closeAlerts();
				this.name = persona.nombre + " " + persona.apellido;
				if(persona.favoritos == true){
					this.activarFavoritoExistente();
				}
				else {
					this.activarFavoritoAgregado();

				}
				this.$emit('agregarAfavoritos', persona);

			},
			eliminarPersona(persona) {
				this.closeAlerts();
				this.name = persona.nombre;
				this.$emit('eliminarPersona', Object.assign({}, persona));
				this.activarAlertaBorrado();
			},
	        personToEdit(persona) {
	        	this.$emit('personToEdit', persona);
	        },
	        activarFavoritoExistente() {
	          const alert = document.getElementById("favouriteExists");
	          alert.style.display = "block";
	        },
	        activarFavoritoAgregado() {
	          const alert = document.getElementById("favouriteAddAlert");
	          alert.style.display = "block";
	        },
	        activarAlertaBorrado() {
	          const alert = document.getElementById("deleteAlert");
	          alert.style.display = "block";
	        },
	        closeAlerts() {
	        	var alert = document.getElementById("deleteAlert");
	        	alert.style.display = "none";
	        	alert = document.getElementById("favouriteAddAlert");
	        	alert.style.display = "none";
	        	alert = document.getElementById("favouriteExists");
	        	alert.style.display = "none";
	        }
		},
		computed: {
			personasFiltradas() {
	          return this.personas.filter(p => (p.apellido.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
	                                            p.edad.indexOf(this.filtro) >= 0 ||
	                                            p.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0)
	          );
			},
			busquedaSinResultados() {
	          return this.personasFiltradas.length == 0 &&

	                 this.filtro != '';
	        }
		}
	}
</script>