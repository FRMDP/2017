<template>
    <div class="app">
    	<top-menu @cambiarVista="cambiarVista"></top-menu>
        <agregar-persona @agregarPersonaLocalStorage="agregarPersona" :personas="personas" :persona="persona" v-show="vista == 'ingresar'"></agregar-persona>
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
                    index:'',
                },
                personaedit: {
                    nombre: '',
                    apellido:'',
                    edad: '',
                    telefono:'',
                    sexo: '',
                    favs: false,
                    index:'',
                },
                edit:-1,
                personas: [],
                filtro: '',
                vista: 'about',
                mensaje: false
                }     
            },

    	methods: {
            cambiarVista(vista) {
                this.vista=vista;
            },

            agregarPersona() {
                this.personas.push(Object.assign({}, this.persona));
                const indice=this.personas.length-1;
                if (indice!=0) {
                    this.personas[indice].index=this.personas[indice].index+1;
                }
                else{
                    this.personas[indice].index=0;
                }

                this.agregarPersonaLocalStorage();
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
