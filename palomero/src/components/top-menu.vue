<template>

  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo"><router-link to="/all">Portal</router-link></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/add">Add News</router-link></li>
        <li v-for="c in categories"><router-link v-bind:to="'/category/'+c.id">{{c.name}}</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import categoriesService from '../services/categoriesService';
    export default {
    	name: 'topMenu',
        props: ['vista'],
    	data() {
    		return {
         mensaje:false,
         categories:[]
    		}
    	},

      mounted() {
        this.categories = categoriesService.getCategories();
      },

      created() {
        this.categories = categoriesService.getCategories();
      },

    	methods: {
    		cambiarVista(vista) {
                this.$emit('cambiarVista', vista);
            }
    	}

    }
</script>

<style>
</style>
