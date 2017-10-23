<template>
    <div>
        <div class="bg-news"></div>
        <div>
            <div class="container is-fluid">
                <na-navigation class="drop-shadow" :logo="'dark'" :subtitle="'News'"></na-navigation>
            </div>
            <div class="container is-fluid">
                <section class="section">
                    <div class="columns">
                        <div class="column is-3-desktop">
                            <nav class="panel">
                                <p class="panel-heading">
                                    <b-icon
                                            pack="fa"
                                            icon="th-list"
                                            size="is-small"
                                            type="is-dark">
                                    </b-icon>
                                    &nbsp;Categories
                                </p>
                                <a class="panel-block" @click.prevent="displayAllArticles(), activeCategory='all'"
                                   :class="activeCategory === 'all' ? 'is-active' : ''">
                                    <span class="panel-icon">
                                      <i class="fa fa-dot-circle-o"></i>
                                    </span>
                                    ALL NEWS
                                </a>
                                <div v-if="loadedCategories">
                                    <a class="panel-block" v-for="(category, index) in categories"
                                       @click.prevent="displayCategory(category._links.news.href), activeCategory=category.name"
                                       :class="activeCategory === category.name ? 'is-active' : ''">
                                    <span class="panel-icon">
                                      <i class="fa fa-dot-circle-o"></i>
                                    </span>
                                        {{ category.name.toUpperCase() }}
                                    </a>
                                </div>
                            </nav>
                        </div>
                        <div class="column is-8-desktop is-offset-1-desktop">
                            <na-articles :articles="articles" :wrappedText="wrappedText"
                                         @displayArticle="displayArticle" @displayCategory="displayCategory"
                                         v-if="loadedArticles"></na-articles>
                        </div>
                    </div>
                </section>
            </div>

            <na-footer></na-footer>
        </div>
    </div>
</template>

<script>
    // Services
    import news from "./../services/newsService";
    import categories from "./../services/categoriesService";
    import reporters from "./../services/reportersService";

    // Components
    import naNavigation from "./na-navigation.vue";
    import naFooter from "./na-footer.vue";
    import naArticles from "./na-articles.vue";

    export default {
        name: 'news',
        components: {
            naNavigation: naNavigation,
            naFooter: naFooter,
            naArticles: naArticles
        },
        data() {
            return {
                articles: [],
                categories: [],
                loadedArticles: false,
                loadedCategories: false,
                wrappedText: true,
                activeCategory: 'all',
                loadingComponent: '',
                displayingError: false,
                errorMessages: []
            }
        },
        methods: {
            displayArticle(url) {
                this.loadingComponent = this.$loading.open();

                this.loadedArticles = false;
                this.articles = [];

                let article;

                news.getArticle(url)
                    .then((response) => {
                        article = response.data;

                        return categories.getCategory(article._links.category.href)
                    })
                    .then((response) => {
                        article.category = response.data;
                        return reporters.getReporter(article._links.reporter.href)
                    })
                    .then((response) => {
                        article.reporter = response.data;

                        this.articles.push(article);

                        this.wrappedText = false;
                        this.loadedArticles = true;
                    })
                    .catch((error) => {
                        console.debug(error);

                        this.loadedCategories = true;

                        this.loadingComponent.close();

                        this.errorMessages.push('Could\'t load article \n')

                        if (!this.displayingError) {
                            this.displayingError = true;
                            this.displayError();
                        }
                    });

                setTimeout(() => this.loadingComponent.close(), 1000);
            },
            displayAllArticles(url) {
                this.loadingComponent = this.$loading.open();

                this.loadedArticles = false;
                this.articles = [];

                news.getAllArticles(url)
                    .then((results) => {
                        this.articles = results ? results : [];

                        this.wrappedText = true;
                        this.loadedArticles = true;

                        setTimeout(() => this.loadingComponent.close(), 1000);
                    })
                    .catch((error) => {
                        console.debug(error);

                        this.loadedArticles = true;

                        this.loadingComponent.close();

                        this.errorMessages.push('Could\'t load articles \n')

                        if (!this.displayingError) {
                            this.displayingError = true;
                            this.displayError();
                        }
                    })
            },
            displayCategory(url, name) {
                if (name) {
                    this.activeCategory = name;
                }
                this.displayAllArticles(url);
            },
            loadCategories() {
                categories.getAllCategories()
                    .then((response) => {
                        if (response) {
                            this.categories = response.data._embedded.categories;
                        } else {
                            console.debug('error in categories');

                            this.loadedCategories = true;

                            this.loadingComponent.close();

                            this.errorMessages.push('Could\'t load categories \n')

                            if (!this.displayingError) {
                                this.displayingError = true;
                                this.displayError();
                            }
                        }
                        this.loadedCategories = true;
                    })
                    .catch((error) => {
                        console.debug(error);

                        this.loadedCategories = true;

                        this.loadingComponent.close();

                        this.errorMessages.push('Could\'t load categories \n')

                        if (!this.displayingError) {
                            this.displayingError = true;
                            this.displayError();
                        }
                    });
            },
            displayError() {
                this.$dialog.alert({
                    title: 'Sorry!',
                    message: this.errorMessages.toString(),
                    type: 'is-danger',
                    hasIcon: true,
                    icon: 'times-circle',
                    iconPack: 'fa',
                    onConfirm: () => {
                        this.$toast.open('Sorry!');
                        this.$router.push({path: `/home`});
                    }
                });
            }
        },
        created() {
            this.displayAllArticles();
            this.loadCategories();
        }
    }
</script>

<style src="../assets/css/na-news.css">

</style>
