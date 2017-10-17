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
				    <md-button md-menu-trigger>Categorías</md-button>
				    <md-menu-content>
				        <a v-for="c in categories" :key="c.id" :href="'/#/category/' + c.id"><md-menu-item>{{c.name}}</md-menu-item></a>
				    </md-menu-content>
				</md-menu>
			</md-layout>
		</md-toolbar>

		<md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')" md-swipeable fixed>
			<md-list>
				<md-list-item>
					<router-link to="/">News</router-link>
				</md-list-item>
				<md-list-item>
					<router-link to="/add-new/">Add new</router-link>
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
			toggleRightSidenav() {
				this.$refs.rightSidenav.toggle();
			},
			closeRightSidenav() {
				this.$refs.rightSidenav.close();
			},
			open(ref) {
				//console.log('Opened: ' + ref);
			},
			close(ref) {
				//console.log('Closed: ' + ref);
			}
		},
		created() {
			this.categories = categoryService.getAll();
		}
	}
</script>

<style scoped>
.menu-center {
	align-items: center;
}
</style>