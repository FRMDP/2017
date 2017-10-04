<template>
    <div class="app">
    	<top-menu @cambiarVista="cambiarVista"></top-menu>
        <agregar-persona :personas="personas" :persona="persona" v-show="vista == 'ingresar'"></agregar-persona>
        <vista-about v-if="vista=='about'"></vista-about>
        <buscar-contactos v-if="vista=='buscar'" :personas="personas" ></buscar-contactos>
        <ver-favoritos v-if="vista=='favoritos'" :personas="personas"></ver-favoritos>


    </div>
</template>

<script>
	import topMenu from './top-menu.vue';
    import agregarPersona from './agregar-persona.vue';
    import buscarContactos from './buscar-contactos.vue';
    import vistaAbout from './vista-about.vue';
    import verFavoritos from './ver-favoritos.vue';

    export default {
    	name: 'app',
    	components: {
    		topMenu,
            agregarPersona,
            buscarContactos,
            vistaAbout,
            verFavoritos
    	},
    	data() {
    		return {
                persona: {
                    nombre: '',
                    apellido:'',
                    edad: '',
                    telefono:'',
                    sexo: '',
                    favs: false,
                    index:0,
                },
                personas: [],
                vista: 'about',
                mensaje: false
                }     
            },

    	methods: {
            cambiarVista(vista) {
                this.vista=vista;
            },

            traerPersonasLocalStorage(){
                const personasLocalStorage=localStorage.getItem('personas');
                if(personasLocalStorage){
                this.personas=JSON.parse(personasLocalStorage);
             }
            }

    	},

        mounted()
        {
          this.traerPersonasLocalStorage();
        }


    }
</script>

<style scoped>
</style>
