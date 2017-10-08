<template>
    <div class="app">
	    <router-link to="/news">News</router-link>
	    <router-link to="/createNew">Add New</router-link>
	    <router-link to="category/:id"></router-link>
	    <router-link to="new/:id"></router-link>
    	<router-view></router-view>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>

</style>
