<template>
    <nav>
        <div class="nav-wrapper negrita">
            <a href="#!" class="brand-logo right">NotiBolaso</a>
            <ul class="left hide-on-med-and-down">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/create">Create news</router-link></li>
                <li v-for="category in categories"><router-link v-bind:to="'/newscat/'+category.id"> {{ category.name }}</h3></router-link></li>

            </ul>
        </div>
    </nav>
</template>

<script>
    import serviceCategory from '../services/serviceCategory';
    export default {
        name: 'topMenu',
        data(){
            return {
                categories: []
            }
        },
        mounted() {
            this.categories = serviceCategory.getAllCategories();
        },
        created() {
            this.categories = serviceCategory.getAllCategories();
        },
    }
</script>

<style>

nav-wrapper: { color: #7572ff }

</style>