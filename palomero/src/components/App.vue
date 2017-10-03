<template>
    <div class="app">
    	<top-menu @cambiarVista="cambiarVista"></top-menu>

    </div>
</template>

<script>
	import topMenu from './top-menu.vue';
	import userCard from './user-card.vue';

    export default {
    	name: 'app',
    	components: {
    		topMenu
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
                vista: 'ingresar',
                mensaje: false
                }     
            },

    	methods: {
            cambiarVista(vista) {
                this.vista=vista;
            }
    	}
    }
</script>

<style scoped>
</style>
