<template>
	<div class="section dale">
			<div class="row">
				<div class="col s12 m12 l12" v-if="!news.length">
	                <h4 class="center-align">No hay noticias aún</h4>
	            </div>
				<div v-for="particularNew in news">
					<div class="col l4">
						<div class="card forCards">
							<div class="card-content">
								<strong><h4 class="card-title black-text">
									{{ particularNew.title }}
								</h4></strong>



								<p class="truncate card-text black-text">
									{{ particularNew.body }}
								</p>
								<router-link :to="{name: 'particular', params: {id: particularNew.uid}}">
									<p class="right green-text">Leer más</p>
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
		name: 'viewAllNews',
		data() {
			return {
		    	news: []
			}
		},
		methods: {
			getNews() {
				//return newsService.getNews(this.id);
				this.$http.get('https://utn-newspaper-api.herokuapp.com/news')
					.then(response => {
						this.news = response.data._embedded.news;
					})
					.catch(error => {
						console.log(error);	
					})
			}
		},
		watch: {
			'$route.params.id': function() {
 				this.news = this.getNews(this.id);
 			}
		},
		computed: {
			id() {
 				return this.$route.params.id;
 			}

		},
		created() {
			this.getNews();
		}
	}
</script>

<style scoped>
	.dale {
		background-color: #eeeeee;
	}

</style>