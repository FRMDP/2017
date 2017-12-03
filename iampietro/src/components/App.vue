<template>
    <div class="app">
    	<top-menu></top-menu>
    	<router-view
    		@setParticularNew="setParticularNew" :particularNew="particularNew"
    		:visitedNews="visitedNews">
    	</router-view>
    </div>
</template>

<script>
	import topMenu from './top-menu.vue';
	export default {
		name: 'app',
		components: {
			topMenu
		},
		data() {
			return {
				particularNew: {},
				visitedNews : []
			}
		},
		methods: {
			setParticularNew(news){
				this.particularNew = news;
				this.countNews(news);
			},
			countNews(news){
				const auxNews = this.visitedNews.find(n => n.uid == news.uid);
				if (auxNews) {
					this.visitedNews[this.visitedNews.indexOf(auxNews)].visits++;
				} else {
					news.visits = 1;
					this.visitedNews.push(news);
				}
			}
		}
	}
</script>

<style>

</style>
