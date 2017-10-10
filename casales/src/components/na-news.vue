<template>
    <div>
        <div class="bg-news"></div>
        <div>
            <div class="container is-fluid">
                <na-navigation class="drop-shadow" :logo="'dark'" :subtitle="'News'"></na-navigation>
            </div>

            <div class="container">
                <section class="section">
                    <div class="columns">
                        <div class="column is-8-desktop is-offset-2-desktop">
                            <na-articles :filter="''"></na-articles>
                        </div>
                    </div>
                </section>
            </div>

            <na-footer></na-footer>
        </div>
    </div>
</template>

<script>
    import naNavigation from "./na-navigation.vue";
    import naFooter from "./na-footer.vue";
    import naArticles from "./na-articles.vue";

    export default {
        name: 'news',
        components: {
            naNavigation: naNavigation,
            naFooter: naFooter,
            naArticles: naArticles
        }
    }
</script>

<style src="../assets/css/na-news.css">

</style>
