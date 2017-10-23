<template>
    <div>
        <sb-navbar></sb-navbar>

        <section class="hero">
            <div class="container">
                <p class="title has-text-primary is-size-1-desktop">Create a New Article</p>
            </div>

            <div class="container">
                <br>
                <b-field label="Title">
                    <b-input placeholder="Title" v-model="article.title"></b-input>
                </b-field>
                <b-field label="Reporter">
                    <b-select placeholder="Select Author Name" v-model="article.reporter.id">
                        <option v-for="reporter in reporters" :value="reporter.id" :key="reporter.id">
                            {{ reporter.name }}
                        </option>
                    </b-select>
                </b-field>
                <b-field label="Category">
                    <b-select placeholder="Select Article Category" v-model="article.category.id">
                        <option v-for="category in categories" :value="category.id"
                                :key="category.id">
                            {{ category.name.toUpperCase() }}
                        </option>
                    </b-select>
                </b-field>
                <b-field label="Writing Date">
                    <b-datepicker
                            placeholder="Click to choose date"
                            :min-date="minDate"
                            :max-date="maxDate"
                            v-model="date">
                    </b-datepicker>
                </b-field>
                <b-field label="Body">
                    <b-input type="textarea"
                             minlength="140"
                             maxlength="2500"
                             placeholder="The length of the Article must be at least 140 characters!"
                             v-model="article.body">
                    </b-input>
                </b-field>
                <button @click.prevent="saveNews" class="button is-primary is-outlined is-pulled-right"
                        :disabled="!formIsCorrect"> Add
                </button>
            </div>
            <br>
        </section>

        <sb-footer></sb-footer>
    </div>
</template>

<script>
    import sbNavbar from "./sb-navbar.vue";
    import sbFooter from "./sb-footer.vue";
    import categoriesService from "./../services/categoriesService";
    import reportersService from "./../services/reportersService";
    import newsService from "./../services/newsService";

    export default {
        name: 'addArticle',
        components: {
            sbNavbar: sbNavbar,
            sbFooter: sbFooter
        },
        data() {
            const today = new Date();
            return {
                date: new Date(),
                minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7),
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
            formIsCorrect() {
                return this.article.title &&
                    this.article.body &&
                    this.article.category.id &&
                    this.article.reporter.id;
            }
        },
        methods: {
            saveNews() {
                newsService.saveNews(this.article, this.date);
                this.formReset();
                this.$dialog.alert({
                    title: 'Added a new Article',
                    message: 'The article has been succesfully created!',
                    type: 'is-primary',
                    hasIcon: true,
                    onConfirm: () => {
                        this.$toast.open('Article created');
                        this.$router.push({path: `/news`});
                    }
                });
            },
            formReset() {
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
