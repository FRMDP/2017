<template>
    <div class="container">
        <allArticlesEn></allArticlesEn>
        <!--<coFooter></coFooter>-->
    </div>
</template>

<script>
    import allArticlesEn from './co-allArticlesEn.vue';
    //import coFooter from './co-footer.vue';
    export default {
        name: 'ppalEn',
        data() {
            return {}
        },
        components: {
          allArticlesEn,
          //coFooter
        }
    }
</script>

<style>
.container{
  margin-top: 68px;
  transition: all 0.5;
}
</style>
