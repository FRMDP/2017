<template>
    <div class="app">
        <sd-navbar></sd-navbar> 
    	<router-view></router-view>
        <sd-footer></sd-footer>
    </div>
</template>

<script>
    import sdNavbar from './sd-navbar.vue';
    import sdFooter from './sd-footer.vue';
    export default {
    	name: 'app',
        components: {
            sdNavbar,
            sdFooter
        }
    }
</script>

<style>

</style>
