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
								<router-link to="/particularNew">
									<p class="right green-text" @click="setParticularNew(particularNew)">Read More</p>
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
			},
			setParticularNew(news){
				this.$emit('setParticularNew', news);
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