<template>
	<nav>                     
	    <div class="nav-wrapper teal darken-1">
	      <a href="#" class="brand-logo right" id="navbarlogo">AGENDA SCHAERER 4000</a>
	      <ul id="nav-mobile" class="left hide-on-med-and-down">
	        <li><a href="#" class="navbarContent" @click="cambiarVista('vistaAgregarContacto')">Agregar contactos</a></li>
	        <li><a href="#" class="navbarContent" @click="cambiarVista('vistaListaContactos')">Ver contactos</a></li>
	        <li><a href="#" class="navbarContent" @click="cambiarVista('vistaListaFavoritos')">Ver favoritos</a></li>
	      </ul>
	    </div>
	</nav>
</template>

<script>
	export default {
    	name: 'agendaNav',
    	methods: {
    		cambiarVista(vista) {
    			this.$emit('cambiarVista', vista);
    		}
    	}
    }
</script>

<style>
	#navbarlogo{
    	font-size: 25px;
	}
	.navbarContent{
 	   font-size: 25px;
	}
	
</style>