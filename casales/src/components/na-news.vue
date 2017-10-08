<template>
    <div class="bg-news">
        <div class="container is-fluid">
            <na-navigation class="drop-shadow" :logo="'dark'" :subtitle="'News'"></na-navigation>
        </div>

        <div class="container">
            <section class="section">
                <div class="columns">
                    <div class="column is-8-desktop is-offset-2-desktop">
                        <div class="box animated fadeInUp">
                            <h1 class="title">
                                News item Title
                            </h1>
                            <section class="section">
                                <div class="content">
                                    <p class="has-text-right has-text-muted">published 2 days ago</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit massa eget mauris hendrerit, sit amet laoreet ex mattis. Aenean finibus massa eget finibus faucibus. Etiam dolor lacus, imperdiet et nisl vitae, lacinia euismod arcu. Aliquam non sapien hendrerit nisi semper rhoncus a eget erat. Maecenas accumsan semper ante eu molestie. Integer tristique erat sit amet posuere cursus. Aliquam placerat sit amet lectus laoreet vestibulum. Sed pharetra neque ac libero ornare, nec viverra ante tristique. Mauris eget urna metus.
                                    </p>
                                </div>
                                <div class="card is-fullwidth">
                                    <header class="card-header">
                                        <p class="card-header-title">
                                            About the author
                                        </p>
                                        <a class="card-header-icon">
                                            <i class="fa fa-angle-up"></i>
                                        </a>
                                    </header>
                                    <div class="card-content">
                                        <article class="media">
                                            <div class="media-left">
                                                <figure class="image is-64x64">
                                                    <img src="http://placehold.it/128x128" alt="Image">
                                                </figure>
                                            </div>
                                            <div class="media-content">
                                                <div class="content">
                                                    <p>
                                                        <strong>John Smith</strong>
                                                        <br>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <na-footer></na-footer>
    </div>
</template>

<script>
    import naNavigation from "./na-navigation.vue";
    import naFooter from "./na-footer.vue";

    export default {
        name: 'news',
        components: {
            naNavigation: naNavigation,
            naFooter: naFooter
        }
    }
</script>

<style src="../assets/css/na-news.css">

</style>
