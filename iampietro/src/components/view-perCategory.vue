<template>
	<div class="section">
			<div class="row">
				<div class="col s12 m10 l10">
					<div v-for="particularNew in news">
						<div class="card">
							<div class="card-content white-text">
								<router-link to="/category/">
									<h5 class="card-title">
									{{ particularNew.title }}
									</h5>
								</router-link>
								<h3 class="card-text">
									{{ particularNew.category.name }}
								</h3>
								<p class="truncate card-text">
									{{ particularNew.body }}
								</p>
							</div>
						</div>
					</div>
					<router-view></router-view>
				</div>
			</div>
	</div>
</template>

<script>
	import newsService from '../services/newsService';

	export default {
		data() {
			return {
				news: {
		    		id: 0,
		    		title: '',
		    		body: '',
		    		category: {
		    			id: 0,
    					name: ''
		    		},
		    		reporter: {
		    			id: 0,
		    			name: ''
		    		},
		    		date: 0
		    	}
			}
		},
		methods: {
			getNews() {
				return newsService.getNewsPerCategory(this.id);
			}
		},
		watch: {
			'$route.params.id': function() {
				this.news = this.getNews();
			}
		},
		computed: {

		},
		created() {
			this.news = this.getNews();
		}
	}
</script>