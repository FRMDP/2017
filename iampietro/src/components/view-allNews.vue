<template>
	<div class="section dale">
			<div class="row">
				<div v-for="particularNew in news">
					<div class="col l4">
						<div class="card forCards">
							<div class="card-content">
								<strong><h4 class="card-title black-text">
									{{ particularNew.title }}
								</h4></strong>
								<router-link :to="{name: 'genre', params: {id: particularNew.category.id}}">
									<p class="forPs" style="margin-bottom: 10px;">
										{{ particularNew.category.name }}
									</p>
								</router-link>
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
				return newsService.getNews(this.id);
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
			this.news = this.getNews(this.id);
		}
	}
</script>

<style scoped>
	.dale {
		background-color: #eeeeee;
	}

</style>