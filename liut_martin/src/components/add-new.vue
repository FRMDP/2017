<template>
	<div class="container">
		<md-card>
			<form @submit.prevent="addNew">
				<md-card-header>
					<h1>Add NEWS</h1>
				</md-card-header>
				<md-card-content>
					<md-input-container>
						<label>Title</label>
						<md-input v-model="New.title" maxlength="100" required></md-input>
					</md-input-container>

					<md-input-container>
						<label>Body</label>
						<md-textarea v-model="New.body" maxlength="500" required></md-textarea>
					</md-input-container>
					
					<md-input-container>
						<label for="reporter">Reporter</label>
						<md-select name="reporter" id="reporter" v-model="New.reporter" required>
							<md-option v-for="r in reporters" :value="r._links.reporter.href" :key="r.uid">{{r.name}}</md-option>
						</md-select>
					</md-input-container>

					<md-input-container>
						<label for="category">Category</label>
						<md-select name="category" id="category" v-model="New.category" required>
							<md-option v-for="c in categories" :value="c._links.category.href" :key="c.uid">{{c.name}}</md-option>
						</md-select>
					</md-input-container>
				</md-card-content>
				<md-card-actions>
					<md-button class="md-raised md-primary" type="submit">Save</md-button>
				</md-card-actions>
				<md-snackbar :md-position="message.vertical + ' ' + message.horizontal" ref="snackbar" :md-duration="message.duration">
					<span>News saved</span>
					<md-button class="md-accent" @click="$refs.snackbar.close()">OK</md-button>
				</md-snackbar>
			</form>
		</md-card>
	</div>
</template>

<script>
	import newService from './../services/newsService'
	import reporterService from './../services/reporterService'
	import categoryService from './../services/categoryService'

	export default {
		name: 'addNew',
		data() {
			return {
				date: new Date(),
				New: {
					title    : '',
					body     : '',
					category : '',
					reporter : '',
					date     : '' 
		    	},
				reporters : [],
				categories: [],
		    	message: {
					vertical  : 'bottom',
					horizontal: 'right',
					duration  : Infinity
		    	}
			}
		},
		methods: {
			addNew() {
				this.New.date = this.date;
				this.$http.post('http://192.168.99.100:8080/news', 
						{
							"title": this.New.title,
							"body" : this.New.body,
							"date" : this.New.date,
							"reporter": this.New.reporter,
							"category": this.New.category
						}
					)
					.then((response) => {
						this.showMessage();
						this.cleanNew();
					})
					.catch((error) => console.log(error))
			},
			showMessage() {
		      this.$refs.snackbar.open();
		    },
		    cleanNew() {
				this.New.id       = '';
				this.New.title    = '';
				this.New.body     = '';
				this.New.category = '';
				this.New.reporter = '';
				this.New.date     = '';
		    }
		},
		created() {
			this.$http.get('http://192.168.99.100:8080/reporters')
			 	      .then((response) => {
				          this.reporters = response.data._embedded.reporters;
				      })
				      .catch((error) => {
				     	  console.log(error);
				      })

			this.$http.get('http://192.168.99.100:8080/categories')
			 	      .then((response) => {
				          this.categories = response.data._embedded.categories;
				      })
				      .catch((error) => {
				     	  console.log(error);
				      })
		}
	}
</script>

<style>
	div.container {
		width: 100%;
		margin-top: 30px;
	}

	h1 {
		text-align: center;
	}

	.md-card {
		padding: 20px;
		border-radius: 7px;
	}
</style>