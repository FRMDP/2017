<template>
    <div class="app">
    	<top-menu @changeview="changeview"></top-menu>
        <div class="container">
        <inicio v-if="vista=='inicio'"></inicio>
    	<contactos v-if="vista=='ingresar'" :persona="persona" :personas ="personas"></contactos>
        <verTodos v-if="vista=='buscar'" :personas="personas" @changeview ="changeview"> </verTodos>
    	<favoritos v-if="vista=='favoritos'" :persona="persona" :personas="personas"></favoritos>
    </div>
</template>

<script>
	import topMenu from './top-menu.vue';
	import contactos from './contactos.vue';
    import verTodos from './verTodos.vue';
	import favoritos from './favoritos.vue';
    import inicio from './inicio.vue';

    export default {
    	name: 'app',
    	components: {
            inicio,
    		topmenu,
            vertodos,
    		contactos,
    		favoritos
    	},
    	data() {
    		return {
    			isMenuOpen: true,
                view : "inicio"
                persona:{
                    nnombre: '',
                    apellido: '',
                    edad: '',
                    favorito: false,
                    sexo: ''
                },
                personas[]
    		}
    	},
    	methods: {
    		toggleMenu(payload) {
    			console.log(payload);
    			this.isMenuOpen = !this.isMenuOpen;
    		}
            changeview(view){
            this.view = view;
            },
            traerContactos:function(){
              const agendaCompleta =localStorage.getItem('personas');
              if(agendaCompleta){
                this.personas = JSON.parse(agendaCompleta);
              }
    	}
        mounted: function(){
            this.traerContactos();
        }
    }
</script>

<style scoped>
	
</style>
