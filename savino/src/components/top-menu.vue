<template>
    <nav class="navbar navbar-inverse top-menu">
        <ul class="nav navbar-nav">
            <li><a href="#" @click="cambiarVista('buscar')">Mis contactos</a></li>
            <li><a href="#" @click="cambiarVista('ingresar')">Agregar contacto</a></li>
            <li><a href="#" @click="cambiarVista('eliminar')">Eliminar contacto</a></li>
            <li><a href="#" @click="cambiarVista('modificar')">Modificar contactos</a></li>
            <li><a href="#" @click="cambiarVista('favoritos')">Favoritos</a></li>
        </ul>
    </nav>
</template>

<script>
    export default {
    	name: 'topMenu',
    	data() {
            return {
            
            }
    	},
    	methods: {
    		cambiarVista(vista) {
    			this.$emit('cambiarVista', vista);
    		}
    	}
    }
</script>

<style>
.top-menu {
	
}
</style>
