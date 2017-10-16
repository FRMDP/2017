<template>
    <div class="app">
	    <router-link tag="md-button" class="md-raised md-primary" to="/add">Agregar Noticia</router-link>
    	<router-view>

		</router-view>
    </div>
</template>

<script>
    export default {
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
