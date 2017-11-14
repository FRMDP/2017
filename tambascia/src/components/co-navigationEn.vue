<template>
  <!-- Image and text -->
  <nav class="navbar navbar-light  justify-content-center fixed-top backColor">
    <a class="navbar-brand" href="/#/">
      <img src="../../static/pageico.png" width="30" height="30" class="d-inline-block align-top" alt="Web Page icon">
    </a>
    <ul class="nav ">
      <li class="nav-item">
        <a class="nav-link active" href="/#/en/ppal/">All news</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click="showSideBar()" href="/#/en/ppal">Sources</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle backColor" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
           aria-expanded="false">Categories</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="/#/en/category/business">Business</a>
          <a class="dropdown-item" href="/#/en/category/entertainment">Entertainment</a>
          <a class="dropdown-item" href="/#/en/category/gaming">Gaming</a>
          <a class="dropdown-item" href="/#/en/category/general">General</a>
          <a class="dropdown-item" href="/#/en/category/music">Music</a>
          <a class="dropdown-item" href="/#/en/category/politics">Politics</a>
          <a class="dropdown-item" href="/#/en/category/science-and-nature">Science and Nature</a>
          <a class="dropdown-item" href="/#/en/category/sport">Sport</a>
          <a class="dropdown-item" href="/#/en/category/technology">Technology</a>
        </div>
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
    background-color: #000000;
  }
  a{
    color: #999999;
  }
</style>
