<template>
	<div class="container form">
		<div class="row" style="margin-top: 60px;">
			<div class="col s12 m8 l6 offset-m2 offset-l3">
				<div class="alert" id="newsAlert" v-show="message == true">
                    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                    Holy Guacamole! Noticia agregada con exito.
                </div>
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
				  	  		<select v-model="oneNew.category.name" style="display: block;">
								<option v-for="category in categories" v-bind:value="category.name">
									{{category.name}}
								</option>
							</select>
				  	  	</div>
			  	  	</div>
			  	  </div>
			  	  <!-- END CATEGORIES -->
			  	  <!-- REPORTERS -->
			  	  <div class="row">
			  	  	<h4>Quien escribe esto?</h4>
			  	  	<div class="row">
				  	  	<div class="col s12 m6 l6">
				  	  		<select v-model="oneNew.reporter.name" style="display: block;">
								<option v-for="reporter in reporters" v-bind:value="reporter.name">
									{{reporter.name}}
								</option>
							</select>
				  	  	</div>
			  	  	</div>
			  	  </div>
			  	  <!-- END REPORTERS -->
			  	  <div class="row">
			  	  	<div class="col s6 m4 l4 offset-s3 offset-m4 offset-l4">
			  	  		<button :disabled="!newIsOk" class="btn waves-effect waves-light green" type="submit" 
			  	  			onclick="document.getElementById('newsAlert').style.display='block';"
			  	  			@click.prevent="addNew" name="action">
			  	  			<i class="material-icons">publish</i>
						</button>
			  	  	</div>
			  	  </div>
			    </form>
			</div>
		</div>
	</div>
</template>

<script>
	import newsService from '../services/newsService';
	import categorieService from '../services/categorieService';
	import reporterService from '../services/reporterService';

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
				},
				categories: [],
				reporters: [],
				message: false
			}
		},
		computed: {
			newIsOk() {
				return this.oneNew.title && this.oneNew.body && this.oneNew.category.name
					&& this.oneNew.reporter.name;
			},
		},
		methods: {
			addNew() {
				this.oneNew.id = newsService.setNewId();
				this.oneNew.category.id = newsService.linkCategory(this.oneNew.category.name);
				this.oneNew.reporter.id = newsService.linkReporter(this.oneNew.reporter.name);
				this.oneNew.date = new Date().toJSON().slice(0, 10);
				newsService.addNew(this.oneNew);
				this.cleanForm();
				this.message = true;
			},
			cleanForm() {
				this.oneNew.title = '';
				this.oneNew.body = '';
				this.oneNew.category.name = '';
				this.oneNew.reporter.name = '';
			}
		},
		created() {
			this.categories = categorieService.getCategories();
			this.reporters = reporterService.getReporters();
		}
	}
</script>

<style>
	.form{
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		border-radius: 15px;
	}
	.alert {
		margin-left: 30px;
		margin-top: 25px;
		margin-bottom: 10px;
	  	background-color: #80ff80;
	  	padding: 20px;
		color: black;
		font-weight: bold;
		border-radius: 5px;
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

	.closebtn:hover {
	    color: white;
	}
	.categoryName {
		text-transform: capitalize;
	}
	.radio-button-css{
	  position: relative !important;
	  z-index: 12;
	  opacity: 1 !important;
	  left: 18px !important;
	}
</style>