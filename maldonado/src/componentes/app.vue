<template>
    <div class="app">
    	<menu-superior @cambiarVista="cambiarVista"></menu-superior>
        <vista-ingresar v-show="vista == 'ingresar'" @agregarPersona="agregarPersona"></vista-ingresar>
        <vista-buscar v-show="vista == 'buscar'" :personaEditar="personaEditar" 
            :indicePersonaAEditar="indicePersonaAEditar" :personas="personas" :favoritos="favoritos"></vista-buscar>
        <vista-favoritos v-show="vista == 'favoritos'" @eliminarFavorito="eliminarFavorito"
            :favoritos="favoritos"></vista-favoritos>
        <vista-editar v-show="vista == 'editar'" :personaEditar="personaEditar"
            @editarPersona="editarPersona"></vista-editar>
    </div>
</template>

<script>
	import menuSuperior from './menu-superior.vue';
    import vistaIngresar from './vista-ingresar.vue';
    import vistaBuscar from './vista-buscar.vue';
    import vistaFavoritos from './vista-favoritos.vue';
    import vistaEditar from './vista-editar.vue';

    export default {
    	name: 'app',
    	components: {
    		menuSuperior,
    		vistaIngresar,
            vistaBuscar,
            vistaFavoritos,
            vistaEditar
    	},
    	data() {
    		return {
                vista: 'ingresar',
                personas: [],
                personaEditar: {
                    nombre: '',
                    apellido: '',
                    edad: '',
                    telefono: '',
                    sexo: '', 
                    gustos: ''
                },
                favoritos: [],
                mensaje: false,
                indicePersonaAEditar: ''
    		}
    	},
    	methods: {
            cambiarVista(nuevaVista) {
                this.vista = nuevaVista;
                this.mensaje = false;
            },
            //Personas
            agregarPersona(personaIngresada) {
                this.personas.push(personaIngresada);
                this.agregarPersonaALocalStorage();
                this.mensaje = true;
            },
            agregarPersonaALocalStorage(){
                localStorage.setItem('personas', JSON.stringify(this.personas));
            },
            traerPersonasDeLocalStorage(){
                const personas = localStorage.getItem('personas');
                if(personas){
                    this.personas = JSON.parse(personas)
                }
            },
            editarPersona(){
                this.personas.splice(this.indicePersonaAEditar, 1, Object.assign({}, this.personaEditar));
                this.agregarPersonaALocalStorage();
                this.traerPersonasDeLocalStorage();
                this.vista = 'buscar';
            },
            agregarFavoritoALocalStorage(){
                localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
            },
            traerFavoritosDeLocalStorage(){
                const favoritos = localStorage.getItem('favoritos');
                if(favoritos){
                    this.favoritos = JSON.parse(favoritos)
                }
            },
            eliminarFavorito(indicePersona) {
                const vuelveAcontactos = this.favoritos.splice(indicePersona, 1);
                this.personas.push(vuelveAcontactos[0]);
                this.actualizarPersonasYFavoritos();
            },
            //Metodo solamente hecho para no repetir codigo
            actualizarPersonasYFavoritos(){
                this.agregarPersonaALocalStorage();
                this.agregarFavoritoALocalStorage();
            }
    	},
        mounted() {
            this.traerPersonasDeLocalStorage();
            this.traerFavoritosDeLocalStorage();
        }
    }
</script>

<style >

</style>
