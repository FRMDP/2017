<template>
    <div class="app">
    	<top-menu></top-menu>
    	<router-view></router-view>
    </div>
</template>

<script>
    import topMenu from './top-menu.vue';
    import newsService from '../services/newsService.js';
    import categorieService from '../services/categorieService.js';
    import reporterService from '../services/reporterService.js';

    export default {
        components: {
            topMenu
        },
    }
</script>

<style>
    .background {
        background-image: url('');/*agregar url imagen*/
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
</style>
