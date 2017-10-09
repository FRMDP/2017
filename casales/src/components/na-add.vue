<template>
    <section class="hero is-fullheight is-dark is-bold">
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column is-8-desktop is-offset-2-desktop">
                        <h1 class="title animated fadeIn">
                            Write an Article
                        </h1>
                        <div class="box animated fadeInUp">
                            <b-field grouped>
                                <b-field label="Title" expanded>
                                    <b-field>
                                        <b-select placeholder="Select a category" v-model="article.category.id">
                                            <option v-for="category in categories" :value="category.id"
                                                    :key="category.id">
                                                {{ category.name.toUpperCase() }}
                                            </option>
                                        </b-select>
                                        <b-input placeholder="Title" expanded v-model="article.title"></b-input>
                                    </b-field>
                                </b-field>
                            </b-field>
                            <b-field label="Body">
                                <b-input type="textarea"
                                         minlength="50"
                                         maxlength="500"
                                         placeholder="The body must contain a minimum of 50 characters"
                                         v-model="article.body">
                                </b-input>
                            </b-field>
                            <b-field label="Select a date">
                                <b-datepicker
                                        placeholder="Click to select..."
                                        :min-date="minDate"
                                        :max-date="maxDate"
                                        v-model="article.date">
                                </b-datepicker>
                            </b-field>
                            <b-field label="Reporter">
                                <b-select placeholder="Select a name" v-model="article.reporter.id">
                                    <option v-for="reporter in reporters" :value="reporter.id" :key="reporter.id">
                                        {{ reporter.name }}
                                    </option>
                                </b-select>
                            </b-field>
                            <hr>
                            <p class="control">
                                <button @click.prevent="saveNews" class="button is-success is-outlined"
                                        :disabled="!formOk">
                                    <span class="icon is-small">
                                        <i class="fa fa-check"></i>
                                    </span>
                                    <span>Submit</span>
                                </button>
                                <button class="button is-danger is-outlined">
                                    <span class="icon is-small">
                                        <i class="fa fa-times"></i>
                                    </span>
                                    <span>Cancel</span>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import categoriesService from "./../services/categoriesService";
    import reportersService from "./../services/reportersService";
    import articlesService from "./../services/articlesService";

    export default {
        name: 'add',
        data() {
            const today = new Date();

            return {
                date: new Date(),
                minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 2),
                maxDate: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
                categories: [],
                reporters: [],
                article: {
                    id: '',
                    title: '',
                    body: '',
                    category: {
                        id: '',
                        name: ''
                    },
                    reporter: {
                        id: '',
                        name: ''
                    },
                    date: today
                }
            }
        },
        computed: {
            formOk() {
                return this.article.title &&
                    this.article.body &&
                    this.article.category.id &&
                    this.article.reporter.id &&
                    this.article.date;
            }
        },
        methods: {
            saveNews() {
                articlesService.saveArticle(this.article);

                this.cleanFields();
            },
            cleanFields() {
                this.article.title = '';
                this.article.body = '';
                this.article.category.id = '';
                this.article.reporter.id = '';
            }
        },
        created() {
            this.categories = categoriesService.getCategories();
            this.reporters = reportersService.getReporters();
        }
    }
</script>

<style src="../assets/css/na-add.css">

</style>
