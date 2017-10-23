<template>
    <div class="app">
        <sd-navbar @setCategory="setCategory" ></sd-navbar> 
    	<router-view 
            @setOneNews="setOneNews" @setCategory="setCategory"
            :category="category" :oneNews="oneNews">    
        </router-view>
        <sd-footer></sd-footer>
    </div>
</template>

<script>
    import sdNavbar from './sd-navbar.vue';
    import sdFooter from './sd-footer.vue';
    export default {
    	name: 'app',
        components: {
            sdNavbar,
            sdFooter
        },
        data(){
            return{
                category: {},
                oneNews: {}
            }
        },
        methods: {
            setCategory(category){
                this.category = category;
            },
            setOneNews(news){
                this.oneNews = news;
            }
        }
    }
</script>

<style>

</style>
