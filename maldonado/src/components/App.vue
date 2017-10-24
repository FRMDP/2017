<template>
    <div class="app">
    	<top-menu></top-menu>
    	<router-view @setNews="setNews" :oneNew="oneNew" 
                     @backToCategory="backToCategory" :category="category">
        </router-view>
        <fm-footer></fm-footer>
    </div>
</template>

<script>
    import topMenu from './top-menu.vue';
    import fmFooter from './fm-footer.vue';

    export default {
        name: 'app',
        components: {
            topMenu,
            fmFooter
        },
        data() {
            return {
                oneNew: {},
                category: {}
            }
        },
        methods: {
            setNews(oneNew) {
                this.oneNew = oneNew;
            },
            backToCategory(category) {
                this.category = category;
            }
        }
    }
</script>

<style>

</style>
