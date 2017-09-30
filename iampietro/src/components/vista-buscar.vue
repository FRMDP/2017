<template>
	<div class="row justify-content-md-center">
		<div class="col-md-10 col-sm-10 col-xs-10">
			<div class="row justify-content-md-center" v-show="personas.length">
                <span id="spanNearFilter"><strong> Buscar contacto: </strong></span>
                <input type="text" placeholder="Ej: Pablo 'Homero' Fino" v-model="filtro">
            </div>
            <div id="deleteAlert" class="alert alert-danger alerta">
                <span aria-hidden="true" class="floatRight" onclick="this.parentElement.style.display='none';">&times;</span>
                <strong>Contacto eliminado exitosamente.</strong>
            </div>
            <div id="favouriteAddAlert" class="alert alert-warning alerta">
                <span aria-hidden="true" class="floatRight" onclick="this.parentElement.style.display='none';">&times;</span>
                <strong>Favorito agregado exitosamente.</strong>
            </div>
            <div id="favouriteExistente" class="alert alert-warning alerta">
                <span aria-hidden="true" class="floatRight" onclick="this.parentElement.style.display='none';">&times;</span>
                <strong>El contacto ya se encuentra en Favoritos.</strong>
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
                <div v-else v-for="(persona, index) in personasFiltradas" class="card card-inverse" id="people">
                    <div class="card-body">
                            <h4 class="card-title">{{ persona.apellido }}, {{ persona.nombre }}</h4>
                            <h6 class="card-subtitle mb-2 text-muted">{{ persona.edad }} años</h6>
                            <p class="card-text">Email: <strong>{{ persona.mail }}.</strong></p>
                            <button data-toggle="tooltip" data-placement="top" data-html="true" type="button" class="btn btn-outline-warning floatRight" @click="agregarAfavoritos(index)">Favorito
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
			agregarAfavoritos(index) {
				this.$emit('agregarAfavoritos', index);
				if(this.persona.favoritos)
					this.activarFavoritoQuitado();
				else
					this.activarFavoritoAgregado();
				this.limpiarPersona();

			},
			eliminarPersona(persona) {
				this.$emit('eliminarPersona', Object.assign({}, persona));
				this.activarAlertaBorrado();
			},
	        personToEdit(persona) {
	        	this.$emit('personToEdit', Object.assign({}, persona));
	        },
			limpiarPersona() {
	          this.persona.nombre = '';
	          this.persona.apellido = '';
	          this.persona.edad = '';
	          this.persona.sexo = '';
	          this.persona.mail = '';
	        },
	        activarFavoritoQuitado() {
	          const alert = document.getElementById("favouriteAlert");
	          alert.style.display = "block";
	        },
	        activarFavoritoAgregado() {
	          const alert = document.getElementById("favouriteAddAlert");
	          alert.style.display = "block";
	        },
	        activarAlertaBorrado() {
	          const alert = document.getElementById("deleteAlert");
	          alert.style.display = "block";
	        }
		},
		computed: {
			personasFiltradas() {
	          return this.personas.filter(p => (p.apellido.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
	                                            p.edad.indexOf(this.filtro) >= 0 ||
	                                            p.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0)
	          );
			}
		}
	}
</script>