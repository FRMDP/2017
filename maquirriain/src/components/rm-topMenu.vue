<template>
  <div>
    <header>
     <b-navbar toggleable type="light" variant="light">
     <b-nav-toggle target="nav_text_collapse"></b-nav-toggle>
     <b-navbar-brand>MayeNews</b-navbar-brand>
     <b-collapse is-nav id="nav_text_collapse">
       <b-nav is-nav-bar>
         <router-link to="/category/sports"><a class="nav-link" href="#" >Sports</a></router-link>
       </b-nav>
       <b-nav is-nav-bar>
         <router-link to="/category/local"><a class="nav-link" href="#" >Local</a></router-link>
      </b-nav>
      <b-nav is-nav-bar>
        <router-link to="/category/world"><a class="nav-link" href="#" >World</a></router-link>
      </b-nav>
      <b-nav is-nav-bar>
        <router-link to="/category/economy"><a class="nav-link" href="#" >Economy</a></router-link>
      </b-nav>
      <b-nav is-nav-bar>
        <router-link to="/category/politics"><a class="nav-link" href="#" >Politics</a></router-link>
      </b-nav>
      <b-nav is-nav-bar>
        <router-link to="/category/entertainment"><a class="nav-link" href="#" >Entertainment</a></router-link>
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
      name: 'rmTopMenu'
    }

</script>
<style>

</style>
