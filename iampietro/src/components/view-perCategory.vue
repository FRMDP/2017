<template>
	<div class="section">
			<div class="row">
				<div class="col s12 m12 l12" v-if="!news.length">
	                <h4 class="center-align">There are no news in this category... yet</h4>
	            </div>
				<div v-for="particularNew in news">
					<div class="col s12 m4 l4">
						<div class="card forCards" >
							<div class="card-content">
								<strong><h4 class="card-title black-text">
									{{ particularNew.title }}
								</h4></strong>
								<p class="truncate card-text black-text">
									{{ particularNew.body }}
								</p>
								<router-link to="/particularNew">
									<p @click="setParticularNew(particularNew)">Read More</p>
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
	</div>
</template>

<script>

	export default {
		name:'viewPerCategory',
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
				const aux = this.c[0]._links.news.href;
				this.$http.get(aux)
					.then(response => {
						this.news = response.data._embedded.news;
					})
					.catch(error => {
						console.log(error);	
					})
			},
			setParticularNew(news){
				this.$emit('setParticularNew', news);
			}
		},
		watch: {
			'$route.params.id': function() {
				this.getNews();
			},
			categories: function() {
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