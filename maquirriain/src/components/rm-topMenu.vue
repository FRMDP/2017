<template>
  <div>
    <header>
     <b-navbar toggleable type="light" variant="light">
     <b-nav-toggle target="nav_text_collapse"></b-nav-toggle>
     <router-link to="/"><b-navbar-brand>MayeNews</b-navbar-brand></router-link>
     <b-collapse  is-nav id="nav_text_collapse">
       <b-nav is-nav-bar v-for="category in categories" :key='category.id'>
          <router-link v-bind:to="'/category/'+category.name"><a class="nav-link" href="#" >{{category.name}}</a></router-link>
        </b-nav>
        <b-nav is-nav-bar>
        <router-link to="/add"><a class="nav-link" href="#" >Add news</a></router-link>
      </b-nav>
    </b-collapse>
    </b-navbar>
    </header>
  </div>
</template>
<script>
    export default {
      name: 'rmTopMenu',
      data(){
        return{
          categories:[]
        }
      },
      created() {
            this.$http.get('http://localhost:8080/categories')
                  .then((categories) => {
                      this.categories = categories.data._embedded.categories;
                  })
                  .catch((error) => {
                      console.log(error);
                  })
                }
    }

</script>
<style>

</style>
