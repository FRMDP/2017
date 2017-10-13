<template>
	<nav class="menu menu--stephano">
		<a href="#" class="brand-logo logo">Maldoff</a>
			<ul class="menu__list">
				<li class="menu__item menu__item--current">
					<router-link to="news" class="menu__link menu__link_news">
						Noticias
					</router-link>
				</li>
				<li class="menu__item">
					<router-link to="/category/1" class="menu__link menu__link_locals">
						Locales
					</router-link>
				</li>
				<li class="menu__item">
					<router-link to="/category/2" class="menu__link menu__link_sports">
						Deportes
					</router-link>
				</li>
				<li class="menu__item">
					<router-link to="/category/3" class="menu__link menu__link_world">
						Mundo
					</router-link>
				</li>
				<li class="menu__item">
					<router-link to="/category/4" class="menu__link menu__link_economy">
						Economia
					</router-link>
				</li>
				<li class="menu__item">
					<router-link to="/category/5" class="menu__link menu__link_politics">
						Politica
					</router-link>
				</li>
				<li class="menu__item">
					<router-link to="/category/6" class="menu__link menu__link_entertainment">
						Entretenimiento
					</router-link>
				</li>
			</ul>
	</nav>
</template>

<script>
	name: 'topMenu'
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
</style>