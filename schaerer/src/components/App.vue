<template>
    <div class="app">
        <sd-navbar></sd-navbar> 
    	<router-view></router-view>
    </div>
</template>

<script>
    import sdNavbar from './sd-navbar.vue';
    export default {
    	name: 'app',
        components: {
            sdNavbar
        }
    }
</script>

<style>

</style>
