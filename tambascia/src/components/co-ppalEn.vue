<template>
    <div class="container">
        <navigation></navigation>
        <allArticlesEn></allArticlesEn>
    </div>
</template>

<script>
    import navigation from './co-navigationEn.vue';
    import allArticlesEn from './co-allArticlesEn.vue';

    export default {
        name: 'ppalEn',
        data() {
            return {}
        },
        components: {
            navigation,
            allArticlesEn
        },
        methods: {}
    }
</script>

<style>

</style>