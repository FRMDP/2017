<template>
    <div class="box animated fadeIn">
        <h2 class="title is-2">{{ article.title }}</h2>
        <hr class="custom-hr">
        <a @click.prevent="displayThisCategory">
            <span class="tag" :class="isColor(article.category.name)">{{ article.category.name.toUpperCase() }}</span>
        </a>
        <hr class="custom-hr">
        <div class="content">
            <p class="has-text-right has-text-muted">published on {{article.date | formatDate}}</p>
            <div v-if="wrappedText">
                <p class="body-text">
                    {{ article.body.slice(0, 300) + ' ...' }}
                </p>
                <a @click.prevent="displayThisArticle">View full article</a>
            </div>
            <div v-else>
                <p class="body-text">
                    {{ article.body }}
                </p>
                <b-collapse class="card is-fullwidth" :open.sync="isOpen">
                    <div slot="trigger" class="card-header">
                        <p class="card-header-title">About the reporter</p>
                        <a class="card-header-icon">
                            <b-icon :icon="isOpen ? 'angle-down' : 'angle-up'"></b-icon>
                        </a>
                    </div>
                    <div class="card-content">
                        <article class="media">
                            <div class="media-left">
                                <figure class="image is-64x64">
                                    <img src="http://placehold.it/128x128" alt="Image">
                                </figure>
                            </div>
                            <div class="media-content">
                                <div class="content">
                                    <p>
                                        <strong>{{ article.reporter.name }}</strong>
                                        <br>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </b-collapse>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'naArticlesItem',
        props: ['article', 'wrappedText'],
        data() {
            return {
                isOpen: false
            }
        },
        methods: {
            isColor(category) {
                switch (category) {
                    case 'sports':
                        return 'is-primary';
                    case 'local':
                        return 'is-info';
                    case 'world':
                        return 'is-success';
                    case 'economy':
                        return 'is-warning';
                    case 'politics':
                        return 'is-danger';
                    case 'entertainment':
                        return 'is-dark';
                    default:
                        return 'is-primary';
                }
            },
            displayThisArticle() {
                this.$emit('displayArticle', this.article._links.self.href);
            },
            displayThisCategory() {
                this.$emit('displayCategory', this.article.category._links.news.href, this.article.category.name);
            }
        },
    }
</script>

<style src="../assets/css/na-article-item.css">

</style>
