<template>
    <div class="top-menu">
    	<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img src="public\css\imagen/agenda.png" width="30" height="30" alt="">
        <a class="navbar-brand" href="#">Agenda</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#" @click="cambiarVista('inicio')">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="cambiarVista('ingresar')">Agregar Contacto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="cambiarVista('buscar')">Buscar Contacto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="cambiarVista('favoritos')">Favoritos</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
</template>

<script>
     import contactos from './contactos.vue';
     import favoritos from './favoritos.vue';
     import verTodos from './verTodos.vue';
    export default {
    	name: 'topMenu',
        props:['vista'],
        components:{
            contactos:contactos,
            favoritos:favoritos,
            verTodos:buscar
        },
    	data() {
    		return {
    		}
    	},
    	methods: {
        cambiarVista:function(vista){
          this.$emit('cambiarVista', vista);
        }
    	}
    }
</script>

<style>
</style>
