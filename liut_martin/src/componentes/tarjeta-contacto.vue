<template>
	<div class="card darken-2" :class="{'pink': persona.genero == 'f', 'blue' : persona.genero == 'm'}">
        <div class="card-content white-text">
	        <span class="card-title">
	          	<p><i class="material-icons left">person</i> {{persona.apellido}} {{persona.nombre}} </p>
	      		<div v-if="mostrarBotones">
		      		<button class="waves-effect red btn-floating right darken-0" @click="eliminarPersona(index);">
		      			<i class="material-icons">delete_forever</i>
		      		</button>
		      		<button class="waves-effect  blue lighten-2 btn-floating right btnEditar" 
		      		@click="editarPersona(index)">
						<i class="material-icons">mode_edit</i>
					</button>
					<button class="waves-effect waves-yellow btn-floating right btnFavorito" :class="{ favoritoOn : persona.favorito}" @click="agregarOquitarFavorito(index);">
						<i class="material-icons">star_border</i>
					</button>
				</div>
	        </span>
            <ul class="descripcion_usuario">
          	    <li>E-mail: {{persona.email}}</li>
          	    <li>Teléfono: {{persona.telefono}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
	export default {
		name   : 'tarjetaContacto',
		props  : {
			persona: Object,
			personas: Array,
			mostrarBotones : {
				type    : Boolean,
				required: false,
				default : true
			},
			index: Number
		},
		methods: {
			eliminarPersona: function(index){
				this.personas.pop(index);
			},
			editarPersona: function(index){
				this.$emit('editarPersona', index);
			},
			agregarOquitarFavorito: function(index){
				this.personas[index].favorito = !this.personas[index].favorito;
				localStorage.setItem('personas', JSON.stringify(this.personas));
			}
		}
	}
</script>

<style>
	.card .card-content .descripcion_usuario{
		font-weight: 300;
		margin     : 0px;
	}

	.card .card-content .card-title i{
		line-height: inherit;
	}

	.btnFavorito{
		margin-right: 10px;
		background: #ccc;
		color: rgba(1, 1, 1, .6);
	}

	.btn-floating:hover, .btn-floating:active {
		background-color: initial;
	}
	
	.btn-floating.btnFavorito:hover {
		background-color: yellow;
	}
	
	.floating:focus.btnFavorito:active {
		color: inherit;
	}

	.btnEditar{
		margin-right: 10px;
	}

	.favoritoOn{
		background: yellow;
	}

	.favoritoOn i{
		color: rgba(1, 1, 1, .6);
	}
</style>