<template>
	<nav class="menu menu--stephano">
		<a href="#" class="brand-logo logo">Maldoff</a>
		<ul class="menu__list">
			<li class="menu__item menu__item--current">
				<router-link to="/news" class="menu__link menu__link_news">
					News
				</router-link>
			</li>
			<li id="category" class="menu__item" v-for="category in categories">
				<router-link :to="{name: 'category' , params: {id: category.uid }}"
						class="categoryName menu__link menu__link_locals">
					{{ category.name }}
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		name: 'topMenu',
		data() {
			return {
				categories: []
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

<style>
	.logo{
		margin-left: 40px;
		color: black !important;
		margin-right: 100px;
		padding-top: 15px !important;
	}
	nav{
		background-color: #ffffff;
		height: 65px;
	}
	.categoryName {
		text-transform: capitalize;
	}
</style>