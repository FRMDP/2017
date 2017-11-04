<template>
	<div class="phone-viewport">
		<md-toolbar>
			<md-layout md-gutter>
				<md-layout md-flex="70" md-flex-offset="15" class="menu-center">
					<md-button class="md-icon-button" @click="toggleLeftSidenav">
						<md-icon>menu</md-icon>
					</md-button>
					<h2 class="md-title">Martin's News</h2>
					
				</md-layout>
				<md-menu md-direction="top right">
				    <md-button md-menu-trigger>Categories</md-button>
				    <md-menu-content>
				        <a v-for="c in categories" :key="c.id" :href="'/#/category/' + getIdCategory(c) + '/news'"><md-menu-item>{{c.name}}</md-menu-item></a>
				    </md-menu-content>
				</md-menu>
			</md-layout>
		</md-toolbar>

		<md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')" md-swipeable fixed>
			<md-list>
				<md-list-item>
					<md-button class="md-icon-button" @click="toggleLeftSidenav" style="width: auto">
						<router-link to="/">News</router-link>
					</md-button>
				</md-list-item>
				<md-list-item>
					<md-button class="md-icon-button" @click="toggleLeftSidenav" style="width: auto">
						<router-link to="/add-new/">Add news</router-link>
					</md-button>
				</md-list-item>
			</md-list>
		</md-sidenav>

	</div>
</template>

<script>
	import categoryService from './../services/categoryService'

	export default {
		name: 'topMenu',
		data() {
			return {
				categories: []
			}
		},
		methods: {
			toggleLeftSidenav() {
				this.$refs.leftSidenav.toggle();
			},
			open(ref) {
				//console.log('Opened: ' + ref);
			},
			close(ref) {
				//console.log('Closed: ' + ref);
			},
			getIdCategory(c) {
				const link       = c._links.self.href;
				const split_link = link.split('/');
				return split_link[split_link.length-1];
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
		}
	}
</script>

<style scoped>
	.menu-center {
		align-items: center;
	}

	.md-list {
		background-color: initial;
	}

	.md-list .md-list-item {
		border-bottom: 0.5px solid #fff;
		-webkit-transition: all .5s ease;
		-o-transition: all .5s ease;
		transition: all .5s ease;
	}

	.md-list .md-list-item:hover {
		filter: brightness(150%);
	}

	.md-sidenav-content .md-list a {
		color: #fff;
	}

	.md-sidenav-content .md-list a:hover { 
		color: #fff;
	}

	.md-list a:hover { 
		text-decoration: none;
	}
</style>