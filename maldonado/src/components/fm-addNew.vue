<template>
	<div class="container form">
		<div class="row">
			<div class="col s12 m8 l6 offset-m2 offset-l3">
				<h2 class="center">Agrega una noticia</h2>
				<form>
					<!-- TITLE -->
			      <div class="row">
			      	<h4>Titulo</h4>
			        <div class="input-field col s12">
			          <input v-model="oneNew.title" placeholder="Ej: Argentina va al mundial" 
			          type="text" class="validate">
			        </div>
			      </div>
			      <!-- TITLE -->
			      <!-- BODY -->
			      <div class="row">
			        <h4>Cuerpo</h4>
			        <div class="input-field col s12">
			          <textarea v-model="oneNew.body" type="text" class="materialize-textarea"
			          	placeholder="Ej: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, nemo.">
			          </textarea>
			        </div>
			      </div>
			      <!-- BODY -->
			      <!-- CATEGORIES -->
			  	  <div class="row">
			  	  	<h4>Elige una categoria</h4>
			  	  	<div class="row">
				  	  	<div class="col s12 m6 l6">
				  	  		<input name="category" type="radio" class="with-gap" v-model="oneNew.category.name" id="1">
				  	  		<label for="1">Locales</label>
				  	  	</div>
				  	  	<div class="col s12 m6 l6">
				  	  		<input name="category" type="radio" class="with-gap" v-model="oneNew.category.name" id="2">
				  	  		<label for="2">Deportes</label>
				  	  	</div>
			  	  	</div>
			  	  	<div class="row">
				  	  	<div class="col s12 m6 l6">
				  	  		<input name="category" type="radio" class="with-gap" v-model="oneNew.category.name" id="3">
				  	  		<label for="3">Mundo</label>
				  	  	</div>
				  	  	<div class="col s12 m6 l6">
				  	  		<input name="category" type="radio" class="with-gap" v-model="oneNew.category.name" id="4">
				  	  		<label for="4">Economia</label>
				  	  	</div>
			  	  	</div>
			  	  	<div class="row">
				  	  	<div class="col s12 m6 l6">
				  	  		<input name="category" type="radio" class="with-gap" v-model="oneNew.category.name" id="5">
				  	  		<label for="5">Politica</label>
				  	  	</div>
				  	  	<div class="col s12 m6 l6">
				  	  		<input name="category" type="radio" class="with-gap" v-model="oneNew.category.name" id="6">
				  	  		<label for="6">Entretenimiento</label>
				  	  	</div>
			  	  	</div>
			  	  </div>
			  	  <!-- END CATEGORIES -->
			  	  <!-- REPORTERS -->
			  	  <div class="row">
			  	  	<h4>Quien escribe esto?</h4>
			  	  	<div class="row">
				  	  	<div class="col s12 m6 l6">
				  	  		<input name="reporter" type="radio" class="with-gap" v-model="oneNew.reporter.name" id="7">
				  	  		<label for="7">John Doe</label>
				  	  	</div>
				  	  	<div class="col s12 m6 l6">
				  	  		<input name="reporter" type="radio" class="with-gap" v-model="oneNew.reporter.name" id="8">
				  	  		<label for="8">Jane Doe</label>
				  	  	</div>
			  	  	</div>
			  	  	<div class="row">
				  	  	<div class="col s12 m6 l6">
				  	  		<input name="reporter" type="radio" class="with-gap" v-model="oneNew.reporter.name" id="9">
				  	  		<label for="9">Chuck Norris</label>
				  	  	</div>
				  	  	<div class="col s12 m6 l6">
				  	  		<input name="reporter" type="radio" class="with-gap" v-model="oneNew.reporter.name" id="10">
				  	  		<label for="10">Barack Obama</label>
				  	  	</div>
			  	  	</div>
			  	  </div>
			  	  <!-- END REPORTERS -->
			  	  <div class="row">
			  	  	<button :disabled="!newIsOk" class="btn-flat waves-effect waves-light green"
			  	  		@click.prevent="addNew">
			  	  		Agregar
			  	  		<i class="material-icons right">send</i>
			  	  	</button>
			  	  </div>
			    </form>
			</div>
		</div>
	</div>
</template>

<script>
	import newsService from '../services/newsService.js';

	export default {
		name: 'addNew',
		data() {
			return {
				oneNew: {
					id: 0,
					title: '',
					body: '',
					category: {
						id: 0,
						name: ''
					},
					reporter: {
						id: 0,
						name: ''
					},
					date: ''
				}
			}
		},
		computed: {
			newIsOk() {
				return this.oneNew.title && this.oneNew.body && this.oneNew.category.name
					&& this.oneNew.reporter.name;
			}
		},
		methods: {
			addNew() {
				this.oneNew.id = newsService.setNewId();
				this.oneNew.category.id = newsService.linkCategory(this.oneNew.category.name);
				this.oneNew.reporter.id = newsService.linkReporter(this.oneNew.reporter.name);
				this.oneNew.date = new Date().toJSON().slice(0, 10);
				newsService.addNew(this.oneNew);
				this.cleanForm();
			},
			cleanForm() {
				this.oneNew.title = '';
				this.oneNew.body = '';
				this.oneNew.category.name = '';
				this.oneNew.reporter.name = '';
			}
		}
	}
</script>

<style>
	.form{
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		border-radius: 15px;
	}
</style>