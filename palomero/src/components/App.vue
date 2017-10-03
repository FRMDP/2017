<template>
    <div class="app">
    	<top-menu @cambiarVista="cambiarVista"></top-menu>

    </div>
</template>

<script>
	import topMenu from './top-menu.vue';
	import sideMenu from './side-menu.vue';
	import userCard from './user-card.vue';

    export default {
    	name: 'app',
    	components: {
    		topMenu
    	},
    	data() {
    		return {
                
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
