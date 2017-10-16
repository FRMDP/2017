<template>
	<div class="col s6 m6 l6">
		<div class="card myCard">

			<a class="asd waves-effect waves-light"> 
				<label class="favoriteStar" v-bind:class="{'favoriteStarSelected': contact.favorito}" >
					<input class="favoriteCheck" type="checkbox" v-model="contact.favorito">★
				</label>
			</a>

			<h3 class="card-title">{{contact.nombre}} {{contact.apellido}}</h3>
			<p class="card-text">Edad: {{contact.edad}}</p>
			<p class="card-text">Sexo: {{contact.sexo }}</p>
			<p class="card-text">Dirección: {{contact.direccion}}</p>
			<div class="card-action">
				<a class="waves-effect waves-light btn-large" @click="abrirFormularioEditarContacto(contact)">
					<i class="material-icons right">edit</i>EDITAR
				</a>
				<a class="waves-effect waves-light btn-large" @click="borrarContacto(contact)">
					<i class="material-icons right">delete_forever</i>BORRAR
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'agendaCard',
		props: ['contact'],
		methods: {
			borrarContacto(contact){
				this.$emit('borrarContacto', contact);
			},
			abrirFormularioEditarContacto(contact){
				this.$emit('abrirFormularioEditarContacto', contact);
			},
			estadoFavorito(contact){
				this.$emit('estadoFavorito', contact);
			}
		}
	}
</script>

<style>
	.myCard{
	    padding: 20px;
	    border: 5px #00897b;
	    text-align: center;
	}
</style>