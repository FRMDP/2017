<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="nav-link navbar-brand" href="#" @click="cambiarVista('ingresar')">Ingresar</a>
              <a class="nav-link navbar-brand" href="#" @click="cambiarVista('buscar')">Buscar</a>
              <a class="nav-link navbar-brand" href="#" @click="cambiarVista('favoritos')">Favoritos</a>
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
	
</style>