<template>
	<div class="container">
		<md-boards :md-auto="true" :md-infinite="true" :md-duration="5000" :md-swipeable="true">
			<md-board id="slide1">
				<img class="img-responsive" src="https://source.unsplash.com/1600x300/?news,world"/>
			</md-board>

			<md-board id="slide2">
				<img class="img-responsive" src="https://source.unsplash.com/1600x300/?news,politic"/>
			</md-board>

			<md-board id="slide3">
				<img class="img-responsive" src="https://source.unsplash.com/1600x300/?news,sport"/>
			</md-board>
		</md-boards>

		<div v-if="news.length != 0">
			<div v-for="(n, index) in news">
				<a :href="'/#/new/' + getIdNew(n)" class="linkCard">				
					<md-card md-with-hover md-big class="card-ripple">
						<md-card-header><h3>{{sliceText(n.title)}}</h3><i class="date">{{n.date}}</i></md-card-header>
						<md-card-content>{{sliceText(n.body)}}</md-card-content>
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
				</a>
			</div>
		</div>
		<h1 v-else>There aren't news</h1>

		<md-speed-dial md-open="hover" class="md-fab-bottom-left">
			<md-button class="md-fab" md-fab-trigger>
				<md-icon md-icon-morph>close</md-icon>
				<md-icon>whatshot</md-icon>
			</md-button>

			<md-button v-for="c in categories" :key="c.id" class="md-fab md-primary md-mini md-clean">
				<a :href="'/#/category/' + getIdCategory(c) + '/news'">{{c.name}}</a>
			</md-button>
		</md-speed-dial>
	</div>
</template>

<script>
	import newsService from './../services/newsService'
	import categoryService from './../services/categoryService'

	export default {
		name: 'allNews',
		data() {
			return {
				news      : [],
				categories: [],
			}
		},
		methods: {
			sliceText(text) {
				return (text.length >= 250) ? text.slice(0, 250) + '...' : text;
			},
			getIdNew(n) {
				const link       = n._links.self.href;
				const split_link = link.split('/');
				return split_link[split_link.length-1];
			},
			getIdCategory(c) {
				return categoryService.getIdCategory(c);
			}
		},
		created() {
			this.$http.get('http://192.168.99.100:8080/categories')
			 	      .then((response) => {
				          this.categories = response.data._embedded.categories;
				      })
				      .catch((error) => {
				     	  console.log(error);
				      })

			this.$http.get('http://192.168.99.100:8080/news')
			 	      .then((response) => {
				          this.news = response.data._embedded.news;
				      })
				      .catch((error) => {
				     	  console.log(error);
				      })
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

	.md-card .md-card-actions {
		border-top: 0.5px solid rgba(1, 1, 1, .1);
		padding: 5px;
	}

	.md-card .md-card-actions .md-icon {
		font-size: 20px;
	}

	.md-speed-dial.md-fab-bottom-left {
		position: fixed;
		bottom: 30px;
		left: 30px;
	}
</style>