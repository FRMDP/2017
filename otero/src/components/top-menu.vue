<template>
    <div class="top-menu">
    	<button @click="toggleMenu">{{ buttonText }}</button>
    </div>
</template>

<script>
    export default {
    	name: 'topMenu',
    	data() {
    		return {
    			buttonText: 'toggle'
    		}
    	},
    	methods: {
    		toggleMenu() {
    			this.$emit('toggleMenu', {objeto: 'de prueba'});
    		}
    	}
    }
</script>

<style>
.top-menu {
	position: fixed;
	top: 0;
	left: 0;
	padding: 10px;
	width: 100%;
	background-color: red;
	z-index: 100;
}
</style>
