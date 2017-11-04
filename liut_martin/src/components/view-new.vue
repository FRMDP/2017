<template>
	<div class="container">
		<md-card v-if="news.uid" md-with-hover md-big>
			<md-card-header><h3>{{news.title}}</h3><i class="date">{{news.date}}</i></md-card-header>
			<md-card-content>{{news.body}}</md-card-content>
			<md-card-actions>
				<md-button class="md-icon-button">
					<md-icon>favorite</md-icon>
				</md-button>

				<md-button class="md-icon-button">
					<md-icon>bookmark</md-icon>
				</md-button>

				<md-button class="md-icon-button">
					<md-icon>share</md-icon>
				</md-button>
			</md-card-actions>
		</md-card>
		<h1 v-else>This news doesn't exist</h1>
	</div>
</template>

<script>
	import newsService from './../services/newsService'

	export default {
		name: 'viewNew',
		data() {
			return {
				news: {},
				id  : ''
			}
		},
		methods: {
			getId() {
				this.id = this.$route.params.id;
			},
			getNew() {
				this.getId();
				this.$http.get('http://192.168.99.100:8080/news/' + this.id)
				 	      .then((response) => {
					          this.news = response.data;
					      })
					      .catch((error) => {
					     	  console.log(error);
					      })
			}
		},
		watch: {
			'$route.params.id': function() {
				this.id = this.$route.params.id;
				this.getNew();
			}
		},
		created() {
			this.getNew();
		}
	}
</script>

<style scoped>
	div.container {
		width: 100%;
		padding: 10px;
		background-color: rgba(255, 255, 255, .4);
		margin: 20px auto;
	}

	.md-card {
		margin-bottom: 10px;
		padding: 0;
	}

	.md-card h3 {
		display: inline-block;
		margin-right: 10px;
	}

	.date, .reporter {
		color: rgba(1, 1, 1, .35);
	}

	.md-boards {
		height: auto !important;
		margin: 0px auto 10px;
	}

	.md-boards .md-board {
		padding: 0px;
	}

	.md-boards .md-boards-navigation {
		min-height: 18px;
		height: 18px;
	}

	.md-button.md-fab.md-mini {
		width: 130px;
	}

	.md-button.md-fab.md-mini a {
		color: #fff;
		text-decoration: none;
	}
	
	.md-card .md-card-header {
		background-color: #D55C5C;
	}
	
	.md-card .md-card-header i{ float: right; }

	.md-card .md-card-header + .md-card-content {
		padding-top: 10px;
	}

</style>