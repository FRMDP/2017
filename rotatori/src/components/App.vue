<template>
    <div class="app">
        <zp-menu @toggleMenu="toggleMenu" id="toolbar"></zp-menu>
    	<router-view class="relative"></router-view>
    </div>
</template>

<script>
    import zpMenu from './zp-menu.vue';
    import zpSidemenu from './zp-sidemenu.vue';
    export default {
        name: 'app',
        components: {
            zpMenu,
            zpSidemenu
        },
        data(){
            return {
                isMenuOpen: false
            }
        },
        methods: {
    		toggleMenu() {
    			this.isMenuOpen = !this.isMenuOpen;
            }
        }
    }
</script>

<style>

</style>