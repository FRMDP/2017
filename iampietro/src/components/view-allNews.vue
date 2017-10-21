<template>
	<div class="section dale">
			<div class="row">
				<div class="col s12 m12 l12" v-if="!news.length">
	                <h4 class="center-align">No hay noticias en esta categoria aun</h4>
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
								<router-link :to="{name: 'particular', params: {id: particularNew.id}}">
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
	import newsService from '../services/newsService';

	export default {
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
						console.log(response);
					})
					.catch(error => {
						console.log(error);	
					})
			}
		},
		watch: {

		},
		computed: {


		},
		created() {
			this.news = this.getNews();
		}
	}
</script>

<style scoped>
	.dale {
		background-color: #eeeeee;
	}

</style>