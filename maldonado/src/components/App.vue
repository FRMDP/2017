<template>
    <div class="app">
    	<top-menu></top-menu>
    	<router-view></router-view>
        <fm-footer></fm-footer>
    </div>
</template>

<script>
    import topMenu from './top-menu.vue';
    import fmFooter from './fm-footer.vue';
    import catService from '../services/categorieService';

    export default {
        components: {
            topMenu,
            fmFooter
        }
    }
</script>

<style>

</style>
