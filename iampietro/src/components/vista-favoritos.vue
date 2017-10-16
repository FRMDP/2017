<template>
	<div class="row justify-content-md-center">
		<div class="col-md-10 col-sm-10 col-xs-10">
			<div class="row justify-content-md-center" v-if="favoritos.length">
                <span class="spanNearFilter"><strong> Buscar favorito: </strong></span>
                <input type="text" placeholder="Ej: Cerveza Duff" v-model="filtro">
            </div>
            <div id="favouriteAlert" class="alert alert-info alerta">
                <span aria-hidden="true" class="floatRight" onclick="this.parentElement.style.display='none';">&times;</span>
                <strong v-model="name">Has quitado a "{{ name }}" de tus contactos favoritos.</strong>
            </div>
            <div class="row justify-content-md-center">
                <div class="jumbotron" v-if="!favoritos.length">
                      <h1 class="display-3">Hello there!</h1>
                      <p class="lead">Haven't added any favourite yet? Go on and attach your friends!</p>
                      <hr class="my-4">
                </div>
                <div class="jumbotron marginTop" v-else-if="busquedaSinResultados">
                      <h1 class="display-3">Hello there!</h1>
                      <p class="lead">We are sorry, your search didn't have any match :(</p>
                      <hr class="my-4">
                </div>
                <div v-else v-for="persona in favoritosFiltrados" class="card card-inverse" id="people">
                    <div class="card-body">
                        <h4 class="card-title">{{ persona.apellido }}, {{ persona.nombre }}</h4>
                        <h6 class="card-subtitle mb-2 text-muted">{{ persona.edad }} años</h6>
                        <p class="card-text">Email: <strong>{{ persona.mail }}.</strong></p>
                        <button data-toggle="tooltip" data-placement="top" data-html="true" title="   Borrar persona" type="button" class="btn btn-outline-danger floatRight" @click.prevent="quitarFavorito(persona)">Quitar de Favoritos
                        </button>
                    </div>
                </div>
            </div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'vistaFavoritos',
		props: ['personas'],
		data() {
			return {
				filtro: '',
				name: ''
			}
		},
		methods: {
			quitarFavorito(persona){
				this.name = persona.nombre + " " + persona.apellido;
				this.activarFavoritoQuitado();
				this.$emit('quitarFavorito', persona);
			},
	        activarFavoritoQuitado() {
	          const alert = document.getElementById("favouriteAlert");
	          alert.style.display = "block";
	        }
		},
		computed: {
			favoritos(){
				return this.personas.filter(p => p.favoritos);
			},
			favoritosFiltrados() {
	          return this.favoritos.filter(p => p.apellido.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
	                                            p.edad.indexOf(this.filtro) >= 0 ||
	                                            p.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0);
	        },
	        busquedaSinResultados() {
	          return this.favoritosFiltrados.length == 0 
	                 this.filtro != '';
	        }
		}
	}
</script>