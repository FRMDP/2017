<template>
	<div class="section">
		<div class="container">
			<h1 class="header black-text">{{ news.title }}</h1>
			<div class="row">
				<div class="col 12 m12 l12">
					<img src="https://picsum.photos/950/350/?random">
				</div>
			</div>
			<p class="black-text"><strong>{{ news.date }}</strong></p>
			<p class="right-align black-text">By: <strong>{{ news.reporter.name }}</strong></p>
			<div class="divider"></div>
			<div class="row center">
				<p class="light black-text forP">
					{{ news.body }}
				</p>
			</div>
			<div class="row">
				<p class="black-text">More news like this: 
					<router-link :to="{name: 'category', params: {id: news.category.id}}">
						<strong>{{ news.category.name }}</strong>
					</router-link>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		date(){
			return{
				news: ''
			}
		},
		computed: {
            newsId() {
                return this.$route.params.id;
            }
        },
        watch: {
            '$route.params.id': function() {
                this.news = this.$newStorageService.getNew(this.newsId);
            }
        },
		created(){
			this.news = this.$newStorageService.getNew(this.newsId);
		}
	}
</script>