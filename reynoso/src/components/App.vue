<template>
    <div class="app">
		<news-menu></news-menu>
    	<router-view></router-view>
        <footer-news></footer-news>
    </div>
</template>

<script>
	import newsMenu from './news-menu.vue'
    import footerNews from './footer-news.vue'
    export default {
	    components:{
	        newsMenu,
            footerNews
		},
		data(){
			return {}
		},
		created(){}
    }
</script>

<style>

</style>
