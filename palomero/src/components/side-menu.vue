<template>
    <div v-if="isMenuOpen" class="side-menu">
    	
    </div>
</template>

<script>
    export default {
    	name: 'sideMenu',
    	props: ['isMenuOpen']
    }
</script>

<style>
.side-menu {
	position: fixed;
	top: 0;
	left: 0;
	padding: 10px;
	width: 200px;
	height: 100%;
	background-color: green;
	z-index: 50;
}
</style>
