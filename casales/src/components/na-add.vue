<template>
    <div>
        <div class="bg-add"></div>
        <section class="hero">
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
                                             maxlength="2500"
                                             placeholder="The body must contain a minimum of 50 characters"
                                             v-model="article.body">
                                    </b-input>
                                </b-field>
                                <b-field label="Select a date">
                                    <b-datepicker
                                            placeholder="Click to select..."
                                            :min-date="minDate"
                                            :max-date="maxDate"
                                            v-model="date">
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
                                    <button class="button is-danger is-outlined" @click="confirmDelete">
                                    <span class="icon is-small">
                                        <i class="fa fa-times"></i>
                                    </span>
                                        <span>Discard</span>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <na-footer></na-footer>
    </div>
</template>

<script>
    import categoriesService from "./../services/categoriesService";
    import reportersService from "./../services/reportersService";
    import articlesService from "./../services/articlesService";
    import naFooter from "./na-footer.vue";

    export default {
        name: 'add',
        components: {
            naFooter: naFooter
        },
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
                    date: ''
                }
            }
        },
        computed: {
            formOk() {
                return this.article.title &&
                    this.article.body &&
                    this.article.category.id &&
                    this.article.reporter.id;
            },
            formHasContent() {
                return this.article.title ||
                    this.article.body ||
                    this.article.category.id ||
                    this.article.reporter.id;
            }
        },
        methods: {
            saveNews() {
                articlesService.saveArticle(this.article, this.date);

                this.cleanFields();

                this.$dialog.alert({
                    title: 'Article created',
                    message: 'The article has been created.',
                    type: 'is-success',
                    hasIcon: true,
                    onConfirm: () => {
                        this.$toast.open('Article created');
                        this.$router.push({path: `/news`});
                    }
                });
            },
            cleanFields() {
                this.article.title = '';
                this.article.body = '';
                this.article.category.id = '';
                this.article.reporter.id = '';
            },
            confirmDelete() {
                if (this.formHasContent) {
                    this.$dialog.confirm({
                        title: 'Discard article',
                        message: 'Are you sure you want to <b>discard</b> this article? This action cannot be undone.',
                        confirmText: 'Delete article',
                        type: 'is-danger',
                        hasIcon: true,
                        onConfirm: () => {
                            this.cleanFields();
                            this.$toast.open('Article discarded!');
                            this.$router.push({path: `/news`});
                        }
                    });
                } else {
                    this.$toast.open('Nothing to save!');
                    this.$router.push({path: `/news`});
                }
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
