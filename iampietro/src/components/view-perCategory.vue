<template>
	<div class="section">
			<div class="row">
				<div v-for="particularNew in news">
					<div class="col s12 m4 l4">
						<div class="card forCards">
							<div class="card-content">
								<strong><h4 class="card-title black-text">
									{{ particularNew.title }}
								</h4></strong>
								<p class="truncate card-text black-text">
									{{ particularNew.body }}
								</p>
								<router-link :to="{name: 'particular', params: {id: particularNew.id}}">
									<p>Leer más</p>
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
	</div>
</template>

<script>
	import newsService from '../services/newsService';

	export default {
		data() {
			return {
		    	news: [],
		    	categories : [],
		    	c: []
			}
		},
		methods: {
			getNews() {
				//return newsService.getNewsPerCategory(this.id);
				this.c = this.categories.filter(c => c.uid == this.id);
				this.$http.get(this.c._links.news.href)
					.then(response => {
						this.news = response.data._embedded.news;
						console.log(response);
					})
					.catch(error => {
						console.log(error);	
					})
				
			}
		},
		watch: {
			'$route.params.id': function() {
				this.getNews();
			}
		},
		computed: {
			id() {
				return this.$route.params.id;
			}

		},
		created() {
			this.$http.get('https://utn-newspaper-api.herokuapp.com/categories')
					.then(response => {
						this.categories = response.data._embedded.categories;
					})
					.catch(error => {
						console.log(error);	
					})
		}
	}
</script>