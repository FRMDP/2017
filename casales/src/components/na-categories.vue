<template>
    <div class="bg-categories">
        <div class="container is-fluid">
            <na-navigation class="drop-shadow" :logo="'dark'" :subtitle="'Categories'"></na-navigation>
        </div>

        <div class="container">
            <section class="section">
                <div class="columns is-desktop is-multiline is-centered">
                    <na-categories-item v-for="(category, index) in categories" :data="category"
                                        :key="category.id" :category="category"></na-categories-item>
                </div>
            </section>
        </div>

        <na-footer></na-footer>
    </div>
</template>

<script>
    import naNavigation from "./na-navigation.vue";
    import naFooter from "./na-footer.vue";
    import naCategoriesItem from "./na-categories-item.vue";
    import categoriesService from "./../services/categoriesService";

    export default {
        name: 'categories',
        components: {
            naNavigation: naNavigation,
            naFooter: naFooter,
            naCategoriesItem: naCategoriesItem
        },
        data() {
            return {
                categories: []
            }
        },
        created() {
            this.categories = categoriesService.getCategories();
        }
    }
</script>

<style src="../assets/css/na-categories.css">

</style>
