<template>
	<div class="row justify-content-md-center">
		<div class="col-md-10 col-sm-10 col-xs-10">
			<div class="row justify-content-md-center" v-show="personas.length">
                <span id="spanNearFilter"><strong> Buscar favorito: </strong></span>
                <input type="text" placeholder="Ej: Cerveza Duff" v-model="filtro">
            </div>
            <div id="favouriteAlert" class="alert alert-danger alerta">
                <span aria-hidden="true" class="floatRight" onclick="this.parentElement.style.display='none';">&times;</span>
                <strong>Favorito eliminado exitosamente.</strong>
            </div>
            <div class="row justify-content-md-center">
                <div class="jumbotron" v-if="!personas.length">
                      <h1 class="display-3">Hello there!</h1>
                      <p class="lead">Haven't added any favourite yet? Go on and attach your friends!</p>
                      <hr class="my-4">
                </div>
                <div class="jumbotron marginTop" v-else-if="busquedaSinResultados">
                      <h1 class="display-3">Hello there!</h1>
                      <p class="lead">We are sorry, your search didn't have any match :(</p>
                      <hr class="my-4">
                </div>
                <div v-else v-for="(persona, index) in favoritosFiltrados" class="card card-inverse" id="people">
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
		methods: {
			quitarFavorito(persona){
				this.$emit('quitarFavorito', Object.assign({}, persona));
				this.activarFavoritoQuitado();
			},
	        activarFavoritoQuitado() {
	          const alert = document.getElementById("favouriteAlert");
	          alert.style.display = "block";
	        }
		},
		computed: {
			favoritosFiltrados() {
	          return this.personas.filter(p => (p.favorito=='true' &&(p.apellido.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
	                                            p.edad.indexOf(this.filtro) >= 0 ||
	                                            p.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0)));
	        }
		}
	}
</script>