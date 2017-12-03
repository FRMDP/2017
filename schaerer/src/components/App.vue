<template>
    <div class="app">
        <sd-navbar @setCategory="setCategory" ></sd-navbar> 
        <div class="content">
        	<router-view 
                @setOneNews="setOneNews" @setCategory="setCategory"
                :category="category" :oneNews="oneNews">    
            </router-view>
        </div>
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
.content{
     display: flex;
     min-height: 63vh;
     flex-direction: column;
     flex: 1 0 auto;
}
</style>
