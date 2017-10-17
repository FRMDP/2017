<template>
	<div>
		<div v-if="news.length != 0">
			<div v-for="(n, index) in news">
				<a :href="'/#/new/' + n.id" class="linkCard">				
					<md-card md-with-hover md-big>
						<md-card-header><h3>{{sliceText(n.title)}}</h3><i class="date">{{n.date}}</i></md-card-header>
						<md-card-content>{{sliceText(n.body)}}</md-card-content>
						<md-card-actions><p class="reporter">by {{n.reporter}}</p></md-card-actions>
					</md-card>
				</a>
			</div>
		</div>
		<h1 v-else>There aren't news</h1>
	</div>
</template>

<script>
	import newsService from './../services/newsService'

	export default {
		name: 'allNews',
		data() {
			return {
				news: []
			}
		},
		methods: {
			sliceText(text) {
				return (text.length > 100) ? text.slice(0, 100) + '...' : text;
			}
		},
		created() {
			this.news = newsService.getAll();
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

	.date, .reporter {
		color: rgba(1, 1, 1, .35);
	}
</style>