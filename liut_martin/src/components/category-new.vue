<template>
	<div class="container">
		<h1>{{category.name}}</h1>
		<div v-if="news.length != 0">
			<div v-for="(n, index) in news">
				<a :href="'/#/new/' + getIdNew(n)" class="linkCard">				
					<md-card md-with-hover md-big>
						<md-card-header><h3>{{sliceText(n.title)}}</h3><i class="date"><md-icon class="clock">schedule</md-icon> {{n.date}}</i></md-card-header>
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
	</div>
</template>

<script>
	import categoryService from './../services/categoryService'

	export default {
		name: 'allNews',
		data() {
			return {
				news    : [],
				id      : '',
				category: {}
			}
		},
		methods: {
			sliceText(text) {
				return (text.length > 250) ? text.slice(0, 250) + '...' : text;
			},
			getId() {
				this.id = this.$route.params.id;
			},
			getIdNew(n) {
				const link       = n._links.self.href;
				const split_link = link.split('/');
				return split_link[split_link.length-1];
			},
			getNewsByCategory() {
				this.getId();
				this.$http.get('http://192.168.99.100:8080/categories/' + this.id + '/news')
				 	      .then((response) => {
					          this.news = response.data._embedded.news;
					      })
					      .catch((error) => {
					     	  console.log(error);
					      })
			},
			getCategory() {
				this.$http.get('http://192.168.99.100:8080/categories/' + this.id)
				 	      .then((response) => {
					          this.category = response.data;
					      })
					      .catch((error) => {
					     	  console.log(error);
					      })
			}
		},
		watch: {
			'$route.params.id': function() {
				this.id = this.$route.params.id;
				this.getNewsByCategory();
				this.getCategory();
			}
		},
		created() {
			this.getNewsByCategory();
			this.getCategory();
		}
	}
</script>

<style scoped>
	div.container {
		width: 100%;
		padding: 10px;
		background-color: rgba(255, 255, 255, .4);
		margin: 20px auto;
		border-radius: 5px;
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
		line-height: normal;
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

	h1 {
		text-align: center;
		margin: 20px auto 40px;
		text-transform: uppercase;
	}

	.clock {
		margin-left: 7px;
	}
</style>