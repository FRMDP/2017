<template>
    <div class="menu-superior">
    	<nav class="nav-wrapper blue darken-4" id="navbar">
            <div class="container">
                <a href="#" class="brand-logo">Trabajo Práctico 5</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a class="nav-link" href="#" @click="cambiarVista('ingresar')">Ingresar</a></li>
                    <li><a class="nav-link" href="#" @click="cambiarVista('buscar')">Contactos</a></li>
                    <li><a class="nav-link" href="#" @click="cambiarVista('favoritos')">Favoritos</a></li>
                </ul>   
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
    	name: 'menuSuperior',
    	data() {
    		return {
    		  
            }
    	},
    	methods: {
            //Se mueve entre las diferentes vistas
            cambiarVista(vista) {
              this.$emit('cambiarVista', vista);
            }
    	}
    }
</script>

<style>

</style>
