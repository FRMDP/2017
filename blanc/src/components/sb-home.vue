<template>
  <section class="hero is-fullheight">

    <div class="hero-head">
      <sb-navbar></sb-navbar>
    </div>

    <div class="hero-body">
           <div class="container has-text-centered is-dark">
               <h1 class="title is-2">
                   News Page
               </h1>
               <h2 class="subtitle is-4">
                   Your one and only stop for all your information needs!
               </h2>
               <a class="button is-medium is-primary" href="/#/news">See what's up!</a>
           </div>
       </div>

    <div class="hero-foot">
      <sb-footer></sb-footer>
    </div>

  </section>
</template>

<script>
import sbNavbar from "./sb-navbar.vue";
import sbFooter from "./sb-footer.vue";

  export default {
      name: 'sbHome',
      components: {
          sbNavbar: sbNavbar,
          sbFooter: sbFooter,
      }
  }
</script>

<style>
.hero-foot { height: 80px; }
.footer { padding: 32px 24px 32px; }
</style>
