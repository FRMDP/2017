<template>
    <div class="app">
    	<top-menu></top-menu>
    	<router-view
    		@setParticularNew="setParticularNew" :particularNew="particularNew">
    	</router-view>
    </div>
</template>

<script>
	import topMenu from './top-menu.vue';
	export default {
		name: 'app',
		components: {
			topMenu
		},
		data() {
			return {
				particularNew: {}
			}
		},
		methods: {
			setParticularNew(news){
				this.particularNew = news;
			}
		}
	}
</script>

<style>

</style>
