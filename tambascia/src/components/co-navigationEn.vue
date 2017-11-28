<template>
  <!-- Image and text -->
  <nav class="navbar navbar-light  justify-content-center fixed-top backColor changeFont">
    <router-link :to="{ name: 'chooseLanguage'}" class="navbar-brand" href="/#/">
      <img src="../../static/pageico.png" width="30" height="30" class="d-inline-block align-top" alt="Web Page icon">
    </router-link>
    <ul class="nav ">
      <li class="nav-item">
        <router-link :to="{ name: 'ppalEn'}" class="nav-link active">Main Page</router-link>
      </li>
      <li class="nav-item">
        <a href="/#/en/ppal/" class="nav-link" @click.prevent="showSideBar()">Sources</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle backColor" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
           aria-expanded="false">Categories</a>
        <div class="dropdown-menu">
          <router-link :to="{ name: 'categoriesEn', params: {id:'business'} }" class="dropdown-item">Business
          </router-link>
          <router-link class="dropdown-item" :to="{ name: 'categoriesEn', params: {id:'entertainment'} }">
            Entertainment
          </router-link>
          <router-link class="dropdown-item" :to="{ name: 'categoriesEn', params: {id:'gaming'} }">Gaming</router-link>
          <router-link class="dropdown-item" :to="{ name: 'categoriesEn', params: {id:'general'} }">General
          </router-link>
          <router-link class="dropdown-item" :to="{ name: 'categoriesEn', params: {id:'music'} }">Music</router-link>
          <router-link class="dropdown-item" :to="{ name: 'categoriesEn', params: {id:'politics'} }">Politics
          </router-link>
          <router-link class="dropdown-item" :to="{ name: 'categoriesEn', params: {id:'science-and-nature'} }">
            Science and Nature
          </router-link>
          <router-link class="dropdown-item" :to="{ name: 'categoriesEn', params: {id:'sport'} }">Sport</router-link>
          <router-link class="dropdown-item" :to="{ name: 'categoriesEn', params: {id:'technology'} }">Technology
          </router-link>
        </div>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'search' }" class="nav-link">News Search</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'myWeather' }" class="nav-link">My Forecast</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'forecastByLL'}" class="nav-link active">Forecast Search</router-link>
      </li>
    </ul>
  </nav>

</template>

<script>
  export default {
    name: 'navigation',
    data() {
      return {
        sideBar: false,
      }
    },
    methods: {
      showSideBar(data) {
        this.$emit('showSideBar', data);
      }
    }
  }
</script>

<style>
  .changeFont {
    font-family: 'Roboto', sans-serif;
  }

  .backColor {
    background-color: #292c2f;
  }

  a {
    color: #999999;
  }
</style>
