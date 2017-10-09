<template>
    <div class="app">
    	<top-menu @cambiarVista="cambiarVista"></top-menu>
    </div>
</template>

<script>
	import topMenu from './top-menu.vue';

    export default {
    	name: 'app',
    	components: {
    		topMenu
    	},
    	data() {
    		return {
                Reporter: {
                    id: number,
                    name: string
                },

                Category: {
                    id: number,
                    name: string
                },

                New: {
                    id: number,
                    title: string,
                    body: string,
                    category: Category,
                    reporter: Reporter,
                    date: number
                }
            }
        },

        methods: {
            cambiarVista(vista) {
                this.vista=vista;
            }
        },

        mounted()
        {

        }
    }
</script>

<style scoped>
</style>
