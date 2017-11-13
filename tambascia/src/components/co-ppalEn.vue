<template>
    <div class="container">
        <allArticlesEn></allArticlesEn>
    </div>
</template>

<script>
    import allArticlesEn from './co-allArticlesEn.vue';

    export default {
        name: 'ppalEn',
        data() {
            return {}
        },
        components: {
            allArticlesEn
        },
        methods: {}
    }
</script>

<style>
.container{
  transition: all 0.5;
}
</style>
