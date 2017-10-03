<template>
    <div class="app">
    	<top-menu @cambiarVista="cambiarVista"></top-menu>
        <agregar-persona @agregarPersonaLocalStorage="agregarPersona" :personas="personas" :persona="persona" v-show="vista == 'ingresar'"></agregar-persona>
        <vista-about v-if="vista=='about'"></vista-about>
        <ver-favoritos v-if="vista=='favoritos'"></ver-favoritos>

    </div>
</template>

<script>
	import topMenu from './top-menu.vue';
    import agregar from './agregar-persona.vue';
    import buscar from './buscar-contactos.vue';
    import about from './vista-about.vue';
    import favoritos from './ver-favoritos.vue';

    export default {
    	name: 'app',
    	components: {
    		topMenu,
            agregar,
            buscar,
            about,
            favoritos
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

            agregarPersonaLocalStorage(){
                localStorage.setItem('personas',JSON.stringify(this.personas));
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
