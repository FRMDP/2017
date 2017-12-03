<template>
  <nav>
    <div class="nav-wrapper negrita">
      <label class="brand-logo right">NotiBolaso</label>
        <ul class="left hide-on-med-and-down">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/create">Create news</router-link></li>
          <li><router-link to="/foro">Foro bardo</router-link></li>
          <li :key='category.id' v-for="category in categories"><router-link v-bind:to="'/newscat/'+category.name"> {{ category.name }}</h3></router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'topMenu',
        data(){
            return {
                categories: []
            }
        },
        mounted() {
            this.getAllCategories();
        },
        created() {
            this.getAllCategories();
        },
        methods: {
            getAllCategories(){
                this.$http.get('http://localhost:8080/categories')
                .then((response) => {
                    this.categories =  response.data._embedded.categories
                })
                .catch((msg) => console.log('Error: ', msg));
            }
        }
    }
</script>

<style>

nav-wrapper: { color: #7572ff }

</style>