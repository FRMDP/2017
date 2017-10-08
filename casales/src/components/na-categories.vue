<template>
    <div class="bg-categories">
        <div class="container is-fluid">
            <na-navigation class="drop-shadow" :logo="'dark'"></na-navigation>
        </div>

        <div class="container">
            <section class="section">
                <div class="columns is-desktop is-multiline is-centered">
                    <div class="column is-4">
                        <div class="card animated" @mouseover="mouseOver" :class="{'pulse': active,'': !active}">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="~../assets/img/sports.jpg" alt="Image">
                                </figure>
                            </div>
                            <header class="card-header">
                                <p class="card-header-title">
                                    Component
                                </p>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-4">
                        <div class="card animated" @mouseover="mouseOver" :class="{'pulse': active,'': !active}">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="~../assets/img/local.jpg" alt="Image">
                                </figure>
                            </div>
                            <header class="card-header">
                                <p class="card-header-title">
                                    Component
                                </p>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-4">
                        <div class="card animated" @mouseover="mouseOver" :class="{'pulse': active,'': !active}">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="~../assets/img/world.jpg" alt="Image">
                                </figure>
                            </div>
                            <header class="card-header">
                                <p class="card-header-title">
                                    Component
                                </p>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-4">
                        <div class="card animated" @mouseover="mouseOver" :class="{'pulse': active,'': !active}">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="~../assets/img/economy.jpg" alt="Image">
                                </figure>
                            </div>
                            <header class="card-header">
                                <p class="card-header-title">
                                    Component
                                </p>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-4">
                        <div class="card animated" @mouseover="mouseOver" :class="{'pulse': active,'': !active}">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="~../assets/img/politics.jpg" alt="Image">
                                </figure>
                            </div>
                            <header class="card-header">
                                <p class="card-header-title">
                                    Component
                                </p>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-4">
                        <div class="card animated" @mouseover="mouseOver" :class="{'pulse': active,'': !active}">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src="~../assets/img/entertainment.jpg" alt="Image">
                                </figure>
                            </div>
                            <header class="card-header">
                                <p class="card-header-title">
                                    Component
                                </p>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                    </p>
                                </div>
                            </div>
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
        name: 'categories',
        components: {
            naNavigation: naNavigation,
            naFooter: naFooter
        },
        data(){
            return {
                active: false
            }
        },
        methods: {
            mouseOver: function () {
                this.active = true;
                setTimeout(() => {
                    this.active = false;
                }, 1000);
            }
        }
    }
</script>

<style src="../assets/css/na-categories.css">

</style>
