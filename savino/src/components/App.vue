<template>
    <div class="app">
    	<top-menu @cambiarVista="cambiarVista"></top-menu>
        <div class="row">
            <div class="col-md-1">
            </div>
            <div class="col-md-10 template">
                <h1>Agenda</h1>
                <buscar-menu v-if="vista == 'buscar'" @personas="personas"></buscar-menu>
                <agregar-menu v-if="vista == 'ingresar'" @agregarPersona="agregarPersona" ></agregar-menu>
                <eliminar-menu v-if="vista == 'eliminar'"></eliminar-menu>
                <modificar-menu v-if="vista == 'modificar'"></modificar-menu>
                <favoritos-menu v-if="vista == 'favoritos'"></favoritos-menu>
           </div>
           <div class="col-md-1">
           </div>
        </div> 
    </div>
</template>

<script>
	import topMenu from './top-menu.vue';
    import agregarMenu from './agregar-menu.vue';
    import buscarMenu from './buscar-menu.vue';
    import eliminarMenu from './eliminar-menu.vue';
    import modificarMenu from './modificar-menu.vue';
    import favoritosMenu from './favoritos-menu.vue';

    export default {
    	name: 'app',
    	components: {
    		topMenu,
            agregarMenu,
            buscarMenu,
            eliminarMenu,
            modificarMenu,
            favoritosMenu

    	},
    	data() {
    		return {
    			vista: 'ingresar',
    			personas: []
            }
        },
        computed: {
            personasFiltradas(filtro) {
                return this.personas;
            },
        },
    	methods: {
    		cambiarVista(vista) {
    			this.vista = vista;
    		},
            agregarPersona(persona) {
                this.personas.push(Object.assign({}, persona));
            }
            
        }
        
    }
</script>

<style>
.template{
  padding: 40px 15px;
  text-align: center;
}
</style>
