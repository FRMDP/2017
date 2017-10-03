<template>
	<nav class="menu">
	    <div class="nav-wrapper blue darken-3">
	    	<div class="container">
		        <ul id="nav-mobile" class="center hide-on-med-and-down">
		           <li :class="{ active : vista == 'registro'}" ><a @click="cambiarVista('registro')"><i class="material-icons left">group_add</i>Registro</a></span></li>
		           <li :class="{ active : vista == 'ver_todos'}"><a @click="cambiarVista('ver_todos')"><i class="material-icons left">list</i>Ver todos</a></li>
		           <li :class="{ active : vista == 'favoritos'}"><a @click="cambiarVista('favoritos')"><i class="material-icons left">star_border</i>Favoritos</a></li>
		        </ul>
	      	</div>
	    </div>
	</nav>
</template>

<script>
	export default {
		name: 'topMenu',
		props: ['vista'],
		data() {
			return {
				mensaje: false
			}
		},
		methods: {
			cambiarVista: function(vista){
				this.$emit('cambiarVista', vista);
				this.cerrarMensaje();

			},
			cerrarMensaje: function(){
				this.mensaje = false;
			}
		}
	}
</script>

<style>
	.menu{
		opacity: .9;
	}

	.menu ul li a:hover {
		-webkit-transition: all .5s ease;
		-o-transition: all .5s ease;
		transition: all .5s ease;
		transform: scale(1.05);
	}

	nav ul a { font-weight: 300; }
</style>