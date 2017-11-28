<template>
	<div>
		<nav>
		  	<router-link to="/start">
		  		<a class="swapiNavText title">SWAPI - Star Wars API</a>
		  	</router-link>
		  	<input type="checkbox" id="nav" class="hidden"/>
		  	<label for="nav" class="nav-open"><i></i><i></i><i></i></label>
		  	<div class="nav-container">
		    	<ul>
				    <li>
				        <a>
				        	<router-link to="/start" class="swapiNavText">Root</router-link>
				        </a>
			        </li>
			        <li>
				        <a>
				        	<router-link to="/people" class="swapiNavText">People</router-link>
				        </a>
				    </li>
				    <li>
				        <a>
				        	<router-link to="/films" class="swapiNavText">Films</router-link>
				        </a>
				    </li>
				    <li>
				        <a>
				        	<router-link to="/starships" class="swapiNavText">Starships</router-link>
				        </a>
				    </li>
				    <li>
				        <a>
				        	<router-link to="/vehicles" class="swapiNavText">Vehicles</router-link>
				        </a>
				    </li>
				    <li>
				        <a>
				        	<router-link to="/species" class="swapiNavText">Species</router-link>
				        </a>
				    </li>
				    <li>
				        <a>
				        	<router-link to="/planets" class="swapiNavText">Planets</router-link>
				        </a>
				    </li>
				    <li>
				        <a>
				        	<router-link to="/chat" class="swapiNavText">Chat Room</router-link>
				        </a>
				    </li>
				</ul>
		    </div>
		</nav>
	</div>
</template>

<script>
	export default{
		name: 'msNavbar'
	}
</script>

<style scoped>
	.title {
		margin-left: 50px;
		cursor: pointer;
		font-size: 20px;
	}
	.swapiNavText {
		color: #ffff00 !important;
	}
	* {
		box-sizing: border-box;
	}

	nav {
		padding: 30px;
		background-color: #00001a;
	}

	nav ul {
		float: right;
		margin-top: -30px;
		margin-right: 150px;
	}

	nav ul li {
		display: inline-block;
		float: left;
	}

	nav ul li:not(:first-child) {
		margin-left: 25px;
	}

	nav ul li a {
		display: inline-block;
		outline: none;
		color: #1f2227;
		font-size: 16px;
		text-decoration: none;
		letter-spacing: 0.04em;
	}

	nav ul li a:hover {
		color: #808080;
		text-decoration: none;
	}

	@media screen and (max-width: 1150px) {
		.nav-container {
			position: fixed;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			z-index: -1;
			opacity: 0;
			transition: all 0.2s ease;
		}

		.nav-container ul {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			width: 100%;
			margin-top: 1px;
		}

		.nav-container ul li {
			display: block;
			float: none;
			width: 40%;
			text-align: left;
			background-color: #00001a;
			margin-left: 65% !important;
		}

		.nav-container ul li:hover {
			background-color: black;
		}

		.nav-container ul li:nth-child(1) a {
			transition-delay: 0.2s;
		}

		.nav-container ul li:nth-child(2) a {
			transition-delay: 0.3s;
		}

		.nav-container ul li:nth-child(3) a {
			transition-delay: 0.4s;
		}

		.nav-container ul li:nth-child(4) a {
			transition-delay: 0.5s;
		}

		.nav-container ul li:nth-child(5) a {
			transition-delay: 0.6s;
		}

		.nav-container ul li:nth-child(6) a {
			transition-delay: 0.7s;
		}

		.nav-container ul li:nth-child(7) a {
			transition-delay: 0.8s;
		}

		.nav-container ul li:nth-child(8) a {
			transition-delay: 0.9s;
		}

		.nav-container ul li:not(:first-child) {
			margin-left: 0;
		}

		.nav-container ul li a {
			padding: 10px 25px;
			opacity: 0;
			font-size: 14px;
			font-weight: 250;
			transform: translateY(-20px);
			transition: all 0.2s ease;
		}

		.nav-open {
			position: fixed;
			right: 10px;
			top: 10px;
			display: block;
			width: 48px;
			height: 48px;
			cursor: pointer;
			z-index: 9999;
			border-radius: 50%;
			margin-top: 12px;
			margin-right: 15px;
		}

		.nav-open i {
			display: block;
			width: 20px;
			height: 2px;
			background: #1f2227;
			border-radius: 2px;
			margin-right: 25px;
		}

		.nav-open i:nth-child(1) {
			margin-top: 16px;
			width: 40px;
			background-color: red;
		}

		.nav-open i:nth-child(2) {
			margin-top: 4px;
			width: 40px;
			opacity: 1;
			background-color: green;
		}

		.nav-open i:nth-child(3) {
			margin-top: 4px;
			width: 40px;
			background-color: aqua
		}
	}

	#nav:checked + .nav-open {
		transform: rotate(45deg);
	}

	#nav:checked + .nav-open i {
		transition: transform 0.2s ease;
	}

	#nav:checked + .nav-open i:nth-child(1) {
		transform: translateY(6px) rotate(180deg);
	}

	#nav:checked + .nav-open i:nth-child(2) {
		opacity: 0;
	}

	#nav:checked + .nav-open i:nth-child(3) {
		transform: translateY(-6px) rotate(90deg);;
	}

	#nav:checked ~ .nav-container {
		z-index: 9990;
		opacity: 1;
	}

	#nav:checked ~ .nav-container ul li a {
		opacity: 1;
		transform: translateY(0);
	}

	.hidden {
		display: none;
	}
</style>