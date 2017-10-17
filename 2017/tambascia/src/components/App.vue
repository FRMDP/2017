<template>
	<div class="container-fluid app" id="app">
		<view-header></view-header>
		<router-view></router-view>
	</div>
</template>

<script>
    import viewHeader from './view-header.vue';
    export default {
        name: 'app',
        components: {
            viewHeader
        },



    }
</script>

<style>



</style>
