<template>
    <div class="container-fluid app">
        <navigation></navigation>
        <router-view></router-view>
    </div>
</template>

<script>
    import navigation from './co-navigation.vue';

    export default {
        name: 'app',
        components: {
            navigation
        }
    }
</script>
<style>
</style>