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
	export default {
		name: 'addNew',
		data() {
			return {
				oneNew: {
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
			}
		},
		methods: {
			addNew() {			
				this.$http.post('http://192.168.99.100:8080/news', {
						"title": this.oneNew.title,
						"body": this.oneNew.body,
						"category": this.categories.find(category => category.name == this.oneNew.category.name)._links.self.href,
						"reporter": this.reporters.find(reporter => reporter.name == this.oneNew.reporter.name)._links.self.href,
						"date": new Date().toJSON().slice(0, 10)
					})
					.then((response) => {
						this.message = true;
						this.cleanForm();
						console.log(response);
					})
					.catch((error) => {
						console.log(error);
					})

			},
			cleanForm() {
				this.oneNew.title = '';
				this.oneNew.body = '';
				this.oneNew.category.name = '';
				this.oneNew.reporter.name = '';
			}
		},
		created() {
			this.$http.get('http://192.168.99.100:8080/categories')
	             .then((response) => {
	                this.categories = response.data._embedded.categories;
	             })
	             .catch((error) => {
	                console.log(error);
	             })
			this.$http.get('http://192.168.99.100:8080/reporters')
				 .then((response) => {
	                this.reporters = response.data._embedded.reporters;
	             })
	             .catch((error) => {
	                console.log(error);
	             })
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