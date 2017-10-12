<template>
    <div class="app">
    	<top-menu></top-menu>
    	<router-view></router-view>
    </div>
</template>

<script>
	import topMenu from './top-menu.vue';
    import categorieService from '../services/categorieService.js';
    import reporterService from '../services/reporterService.js';
    export default {
    	components: {
    		topMenu
    	},
        created() {
            categorieService.addCategories();
            reporterService.addReporters();
        },
        mounted() {
            categorieService.getCategories();
            reporterService.getReporters();
        }
    }
</script>

<style>

</style>
