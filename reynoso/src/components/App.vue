<template>
    <div class="app">
		<news-menu></news-menu>
    	<router-view></router-view>
    </div>
</template>

<script>
	import newsMenu from './news-menu.vue'
    export default {
	    components:{
	      newsMenu
		},
		data(){
			return {}
		},
		created(){
		    this.$CategoryService.setCategories();
		    this.$ReporterService.setReporters();
		}
    }
</script>

<style>

</style>
