<template>
	<div class="section">
			<div class="row">
				<div v-for="particularNew in news">
					<div class="col s12 m6 l6">
						<div class="card">
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
		    	news: []
			}
		},
		methods: {
			getNews() {
				return newsService.getNewsPerCategory(this.id);
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