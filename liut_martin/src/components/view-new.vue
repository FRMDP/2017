<template>
	<md-card md-with-hover md-big>
		<md-card-header><h3>{{news.title}}</h3><i class="date">{{news.date}}</i></md-card-header>
		<md-card-content>{{news.body}}</md-card-content>
		<md-card-actions><p class="reporter">by {{news.reporter}}</p></md-card-actions>
	</md-card>
</template>

<script>
	import newsService from './../services/newsService'

	export default {
		name: 'viewNew',
		data() {
			return {
				news: {}
			}
		},
		computed: {
			getId() {
				return this.$route.params.id;
			}
		},
		methods: {
			getNew() {
				return newsService.get(this.getId);
			}
		},
		created() {
			this.news = this.getNew();
		}
	}
</script>

<style scoped>
	.md-card {
		margin-bottom: 10px;
	}

	.md-card h3 {
		display: inline-block;
		margin-right: 10px;
	}
</style>