<template>
    <div class="app">
        <top-menu @cambiarVista="cambiarVista"></top-menu>
        <div class="row contenedor">
            <agregar-contacto v-if="vista == 'registro'"  :personas="personas" :persona="persona"></agregar-contacto> 
            <lista-contactos  v-if="vista == 'ver_todos'" :personas="personas" :persona="persona" @cambiarVista="cambiarVista" @cambiarIndex="cambiarIndex" @setPersona="setPersona"></lista-contactos>
            <lista-favoritos  v-if="vista == 'favoritos'" :personas="personas"></lista-favoritos>
            <editar-contacto  v-if="vista == 'editar'"    :personas="personas" :persona="persona" :indexPersonaSeleccionada="indexPersonaSeleccionada"></editar-contacto>
        </div>
    </div>
</template>

<script>
	import topMenu from './top-menu.vue';
    import agregarContacto from './agregar-contacto.vue';
    import listaContactos from './lista-contactos.vue';
    import listaFavoritos from './lista-favoritos.vue';
    import editarContacto from './editar-contacto.vue';

    export default {
    	name: 'app',
    	components: {
            topMenu,
            agregarContacto,
            listaContactos,
            listaFavoritos,
            editarContacto
    	},
    	data() {
    		return {
                vista    : 'registro',
                persona  : {
                    nombre  : '',
                    apellido: '',
                    email   : '',
                    telefono: '',
                    genero  : '',
                    favorito: false
                },
                personas : [],
                indexPersonaSeleccionada: null
    		}
    	},
    	methods: {
    		cambiarVista: function(vista) {
                this.vista = vista;
                this.cerrarMensaje();
            },
            cerrarMensaje: function() {
                this.mensaje = false;
            },
            eliminarPersona: function(index) {
                this.personas.pop(index);
            },
            getPersonasLocalStorage: function() {
                const personas = localStorage.getItem('personas');
                if(personas){
                    this.personas = JSON.parse(personas);
                }
            },
            agregarOquitarFavorito: function(index) {
                if(this.personas[index].favorito)
                    this.personas[index].favorito = false;
                else
                    this.personas[index].favorito = true;
                localStorage.setItem('personas', JSON.stringify(this.personas));
            },
            cambiarIndex: function(index) {
                this.indexPersonaSeleccionada = index;
                console.log(this.personas[this.indexPersonaSeleccionada]);
            },
            setPersona: function(persona) {
                this.persona.nombre = persona.nombre;
                this.persona.apellido = persona.apellido;
                this.persona.email = persona.email;
                this.persona.telefono = persona.telefono;
                this.persona.genero = persona.genero;
            }
    	},
        mounted: function() {
            this.getPersonasLocalStorage();
        }
    }
</script>

<style scoped>
</style>
