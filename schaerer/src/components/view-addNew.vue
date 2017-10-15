<template>
	<div class="row">
		<form class="col s12 l6 offset-l3">
			<div class="row">
				<h2 class="center" id="pageTitle">Tell me, what's the news in the new world?</h2>
				<div class="input-field col s12 m12 l12">
					<div class="row">
						<label><strong>Title</strong></label>
						<input v-model="news.title" placeholder="Write the tittle of the new" type="text" class="validate" maxlength="54" required>
					</div>
				</div>
				<div class="input-field col s12 m12 l8">
					<div class="row">
						<label><strong>Body</strong></label>
						<textarea style="height: 150px;" v-model="news.body" class="materialize-textarea validate" placeholder="Write the body of the new"
						rows="20" required>
						</textarea>	
					</div>
				</div>
				<div class="row">
							<label class="black-text forLabel">Select the new's category</label>
						</div>
				<div v-for="category in categories">
					<div class="col m4 s6">
						<div class="row">
							<input name="categorySelected" class="with-gap" v-bind:value="category.id" v-model="news.category.id" type="radio" />
							<label>{{category.name}}</label>
						</div>
					</div>
				</div>

				<div class="row">
							<label class="black-text forLabel">Pick your name</label>
				</div>
				<div v-for="reporter in reporters">
					<div class="col m4 s6">
						<div class="row">
							<input name="reporterSelected" class="with-gap" v-bind:value="reporter.id" v-model="news.reporter.id" type="radio" />
							<label>{{reporter.name}}</label>
						</div>
					</div>
				</div>
				<div class="input-field col l7">
                    <button :disabled="!formOk" class="waves-effect waves-light btn-large botonConLetrasRojitas" type="submit"
                                name="action" @click.prevent="addNews">Done
                    </button>
                </div>
            </div>
		</form>
	</div>
</template>

<script>
/*	import newStorageService from '../newStorageService';
	import categoryStorageService from '../categoryStorageService';
	import reporterStorageService from '../reporterStorageService'; */

	export default{
		data(){
			return{
				news: {
					id: 0,
					title: '',
					body: '',
					category: {
						id: 0,
						name: ''
					},
					reporter:{
						id:0,
						name: ''
					},
					date: 0
				},
				categories: [],
				reporters: []
			}
		},
		computed: {
	        formOk() {
	            return this.news.title && this.news.body && this.news.category.name && this.nre.category.id && this.news.reporter.name && this.news.reporter.id;
	        }
	    },
	    methods: {
	    	cleanForm(){
	    		this.news.title = '';
	    		this.news.body = '';
	    		this.news.category = {
						id: 0,
						name: ''
					};
				this.news.reporter = {
					id:0,
					name: ''
				};
	    	},
	    	addNews(){
	    		this.news.category = this.$categoryStorageService.getCategory(this.news.category.id);
	    		this.news.reporter = this.$reporterStorageService.getCategory(this.news.reporter.id);
	    		this.news.id = this.$newsStorageService.getLastId()+1;
	    		this.news.date = new Date().toJSON().slice(0, 10);
	    		this.$newStorageService.addNew(this.news);
	    		this.cleanForm();
	    	}
	    },
	    created(){
	    	this.cleanForm();
	    	this.categories = this.$categoryStorageService.getAllCategories();
	    	this.reporters = this.$reporterStorageService.getAllReporters();
	    }
	}
</script>

<style>
	.botonConLetrasRojitas{
    	color: #b71c1c;
	}
	#pageTitle{
		color: #b71c1c ; 
		font-family: 'Trocchi', serif; 
		font-size: 50px; 
		font-weight: normal; 
		line-height: 58px;
		padding-left: 300px; 
	}
</style>