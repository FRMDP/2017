<template>
	
	<div class="phone-viewport">
		<top-menu></top-menu>
	    <md-layout md-gutter md-transparent>
	    	<md-layout md-flex="70" md-flex-offset="15">
	    		<router-view></router-view>
	    	</md-layout>
		</md-layout>

	</div>

</template>

<script>
	import topMenu from './top-menu.vue'

	export default {
		name: 'app',
		components: {
			topMenu
		},
		data() {
			return {
				Reporter: {
					id  : '', //int
					name: ''  //str
		    	},
		    	Category: {
					id  : '', //int
					name: ''  //str
		    	},
				reporters : [],
				news      : [],
				categories: []
			}
		},
		created() {
		}
	}
</script>

<style scoped>
	
</style>
