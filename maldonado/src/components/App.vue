<template>
    <div class="app">
    	<top-menu></top-menu>
    	<router-view></router-view>
    </div>
</template>

<script>
	import topMenu from './top-menu.vue';
    export default {
    	components: {
    		topMenu
    	}
    }
</script>

<style>

</style>
