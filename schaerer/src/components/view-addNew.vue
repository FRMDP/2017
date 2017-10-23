<template>
	<div class="row">
		<div class="row">
			<div class="col s10 m10 l10">
				<h1 id="pageTitle">Tell me, what's the news in the new world?</h1>
			</div>
		</div>
		<div class="row">
			<div class="col s12 m8 l8 offset-m2 offset-l2">
				<form>
					<div class="row">
						<div class="col s12 m6 l6">
							<h5>Title</h5>
							<input type="text" v-model="news.title" placeholder="Write the new's title.">
						</div>
					</div>
					<div class="row">
						<div class="col s12 m6 l6">
							<h5>Body</h5>
							<div class="input-field col s12">
				          		<textarea v-model="news.body" type="text" class="materialize-textarea"
				         		 	placeholder="Write the new's body.">
				         		</textarea>
				     	    </div>
						</div>
					</div>
					<div class="row">
						<h5>Select the new's category.</h5>
						<div class="col s12 m6 l6">
							<select v-model="news.category" style="display: block;">
								<option v-for="c in categories" v-bind:value ="c._links.self.href">{{c.name}}</option>
							</select>
				  	  	</div>
				  	</div>
				  	<div class="row">
						<h5>Select your name.</h5>
						<div class="col s12 m6 l6">
							<select v-model="news.reporter" style="display: block;">
								<option v-for="r in reporters" v-bind:value ="r._links.self.href">{{r.name}}</option>
							</select>
				  	  	</div>
				  	</div>
					<div class="row">
						<div class="col s12 m9 l9 offset-m3 offset-l3">
						<button class="waves-effect waves-light btn-large botonConLetrasRojitas" :disabled="!formOk" type="submit" @click.prevent="addNews">
																						DONE</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'viewAddNews',
		data(){
			return{
				news: {
					title: '',
					body: '',
					reporter: '',
					category: ''
				},
				categories: [],
				reporters: []
			}
		},
		computed: {
	        formOk() {
	            return this.news.title && this.news.body && this.news.category  && this.news.reporter;
	        }
	    },
	    methods: {
	    	cleanForm(){
	    		this.news.title = '';
	    		this.news.body = '';
	    		this.news.category = '',
				this.news.reporter = ''
	    	},
	    	addNews() {
    			this.$http.post('http://192.168.99.100:8080/news',{
    				"title": this.news.title,
    				"body": this.news.body,
    				"date": new Date().toJSON().slice(0,10),
    				"reporter": this.reporter,
    				"category": this.category,
    			})
    			.then(response => {
    				this.cleanInputs();
    			})
    			.catch(error => {
    				console.log(error);
    			});
    		},
	    },
	    created(){
	    	this.cleanForm();
	    	this.$http.get('http://192.168.99.100:8080/categories')
                .then(response => {
                    this.categories = response.data._embedded.categories;
                    })
                .catch(error => {
                    console.log(error); 
                });
            this.$http.get('http://192.168.99.100:8080/reporters')
                .then(response => {
                    this.reporters = response.data._embedded.reporters;
                    })
                .catch(error => {
                    console.log(error); 
                });
	    }
	}
</script>

<style>
	.botonConLetrasRojitas{
    	color: #b71c1c;
	}
	#pageTitle{
		font-family: 'Trocchi', serif; 
		font-size: 50px; 
		font-weight: normal; 
		line-height: 58px;
		margin-left: 300px;
	}
</style>