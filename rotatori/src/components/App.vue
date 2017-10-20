<template>
    <div class="app">
        <zp-menu @toggleMenu="toggleMenu" id="toolbar"></zp-menu>
    	<router-view class="relative"></router-view>
    </div>
</template>

<script>
    import zpMenu from './zp-menu.vue';
    export default {
        name: 'app',
        components: {
            zpMenu
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