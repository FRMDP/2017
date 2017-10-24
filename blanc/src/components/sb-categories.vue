<template>
    <div>
        <div>
            <sb-navbar></sb-navbar>

            <div class="container">
                <br>
                <div class="column is-10-desktop is-offset-1-desktop">
                    <p class="title has-text-primary is-size-2-desktop">All Categories</p>
                </div>
            </div>

            <div class="container">
                <section class="section">
                    <div class="columns">
                        <div class="column is-10-desktop is-offset-1-desktop">
                            <div v-if="!categories.length">
                                <p class="title is-size-2">No Categories have been found!</p>
                                <a class="button is-primary" href="/#/news">Jump to News</a>
                            </div>
                            <div v-else>
                                <div class="columns is-multiline">
                                    <sbCategoryCards v-for="category in categories" :data="category"
                                                 :key="category.id" :category="category"></sbCategoryCards>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <sb-footer></sb-footer>
        </div>
    </div>
</template>

<script>
    import sbNavbar from "./sb-navbar.vue";
    import sbFooter from "./sb-footer.vue";
    import sbCategoryCards from "./sb-category-card.vue";
    import categoriesService from "./../services/categoriesService";

    export default {
        name: 'sbCategories',
        components: {
            sbCategoryCards: sbCategoryCards,
            sbNavbar: sbNavbar,
            sbFooter: sbFooter
        },
        data() {
            return {
                categories: []
            }
        },
        methods: {
          getCategories() {
            categoriesService.getCategories()
              .then((response) => {
                this.categories = response.data._embedded.categories;
              })
              .catch((error) => {
                console.log(error)
              });
          }
        },
        created() {
            this.getCategories();
        }
    }
</script>
