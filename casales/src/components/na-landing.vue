<template>
    <section class="hero is-fullheight is-dark bg-landing">
        <div class="hero-head">
            <div class="container">
                <na-navigation :logo="'light'"></na-navigation>
            </div>
        </div>

        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="columns is-vcentered">
                    <div class="column is-5">
                        <figure id="promo" class="image is-4by3 animated fadeIn">
                            <img src="img/promo.jpg"
                                 class="promo-img" alt="Description">
                        </figure>
                    </div>
                    <div class="column is-6 is-offset-1">
                        <h1 class="title is-2 animated fadeInRightBig">
                            Introducing World News
                        </h1>
                        <h2 class="subtitle is-4 animated fadeInUp">
                            Be the first to know.
                        </h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="hero-foot">
            <div class="container">
                <div class="tabs is-centered">
                    <ul>
                        <li>
                            <a href="https://github.com/ignaciocasales/" target="_blank">Made by Ignacio Casales</a>
                        </li>
                        <li>
                            <a>Copyright 2017</a>
                        </li>
                        <li>
                            <a href="http://unsplash.com" target="_blank">Images taken from unsplash</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import naNavigation from "./na-navigation.vue";

    export default {
        name: 'home',
        components: {
            naNavigation: naNavigation,
        }
    }
</script>

<style src="../assets/css/na-landing.css">

</style>
