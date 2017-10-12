<template>
	<!-- HACER PRIMERO NORMAL CON MATERIALIZE Y LUEGO AGREGARLE EL STEPHANO  class="menu menu(guion medio doble)stephano navbar"-->
	<div class="navbar-fixed nav">
		<nav>
			<a href="#" class="brand-logo logo">Maldoff</a>
			<div class="container">
				<ul class="right">
					<li>
						<router-link to="news">
							Noticias
						</router-link>
					</li>
					<li>
						<router-link to="/category/1">
							Locales
						</router-link>
					</li>
					<li>
						<router-link to="/category/2">
							Deportes
						</router-link>
					</li>
					<li>
						<router-link to="/category/3">
							Mundo
						</router-link>
					</li>
					<li>
						<router-link to="/category/4">
							Economia
						</router-link>
					</li>
					<li>
						<router-link to="/category/5">
							Politica
						</router-link>
					</li>
					<li>
						<router-link to="/category/6">
							Entretenimiento
						</router-link>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
	name: 'topMenu'
</script>

<style>
	.logo{
		margin-left: 40px;
		color: black !important;
	}
	.nav{
		margin-bottom: 40px;
	}
	nav{
		background-color: #ffffff;
	}
	/* Se agrega al final si sobra tiempo
	.navbar{
		left: 0;
		top: 0;
		position: fixed;
		width: 100%;
		height: 65px;
		padding-left: 50px;
		padding-right: 50px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
	.menu {
		line-height: 1;
		margin: 0 auto 3em;
	}

	.menu__list {
		position: relative;
		display: -webkit-flex;
		display: flex;
		-webkit-flex-wrap: wrap;
		flex-wrap: wrap;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.menu__item {
		display: block;
		margin: 1em 0;
	}
	/*Colors by section
	.notices:hover{
		color: lightblue;
	}
	.locals:hover{
		color: red;
	}
	.sports{
		color: green;
	}
	.world{
		color: blue;
	}
	.economy{
		color: yellow;
	}
	.politics{
		color: black;
	}
	.entertainment{
		color: orange;
	}

	.menu__link {
		font-size: 1.05em;
		font-weight: bold;
		display: block;
		padding: 1em;
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-webkit-touch-callout: none;
		-khtml-user-select: none;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	.menu__link:hover,
	.menu__link:focus {
		outline: none;
	}
	.menu--stephano .menu__item {
		position: relative;
		margin: 0 1em;
	}

	.menu--stephano .menu__link {
		position: relative;
		min-width: 105px;
		text-align: center;
		color: #b5b5b5;
		-webkit-transition: color 0.3s;
		transition: color 0.3s;
	}

	.menu--stephano .menu__link:hover,
	.menu--stephano .menu__link:focus {
		color: #929292;
	}

	.menu--stephano .menu__item--current .menu__link {
		color: #d94f5c;
	}

	.menu--stephano .menu__item::before,
	.menu--stephano .menu__link::before,
	.menu--stephano .menu__link::after {
		content: '';
		position: absolute;
		bottom: 0;
		width: 10px;
		height: 2px;
		opacity: 0;
		background: #d94f5c;
	}

	/* flipped sides 
	.menu--stephano .menu__link::before,
	.menu--stephano .menu__link::after {
		-webkit-transform: translate3d(0, 10px, 0);
		transform: translate3d(0, 10px, 0);
		-webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
		transition: transform 0.3s, opacity 0.3s;
	}

	.menu--stephano .menu__item--current .menu__link::before,
	.menu--stephano .menu__item--current .menu__link::after {
		opacity: 1;
	}

	/* left flip 
	.menu--stephano .menu__link::before {
		left: 0;
		-webkit-transform-origin: 0% 0%;
		transform-origin: 0% 0%;
	}

	.menu--stephano .menu__item--current .menu__link::before {
		-webkit-transform: rotate3d(0, 0, 1, -90deg);
		transform: rotate3d(0, 0, 1, -90deg);
	}

	/* right flip 
	.menu--stephano .menu__link::after {
		right: 0;
		-webkit-transform-origin: 100% 0%;
		transform-origin: 100% 0%;
	}

	.menu--stephano .menu__item--current .menu__link::after {
		-webkit-transform: rotate3d(0, 0, 1, 90deg);
		transform: rotate3d(0, 0, 1, 90deg);
	}

	/* bottom line 
	.menu--stephano .menu__item::before {
		left: 0;
		width: 100%;
		-webkit-transform: translate3d(0, 10px, 0);
		transform: translate3d(0, 10px, 0);
		-webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
		transition: transform 0.3s, opacity 0.3s;
	}

	.menu--stephano .menu__item--current::before {
		opacity: 1;
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
		-webkit-transition: -webkit-transform 0.3s, opacity 0.1s;
		transition: transform 0.3s, opacity 0.1s;
	}
	a{
		text-decoration: none !important;
	}*/


</style>