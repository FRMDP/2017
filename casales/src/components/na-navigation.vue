<template>
    <nav class="nav">
        <div class="container">
            <div class="nav-left">
                <b-tooltip label="World News!" position="is-right">
                    <a class="nav-item animated fadeInLeftBig" href="/">
                        <img :src="imageLink" alt="World News Logo">
                    </a>
                </b-tooltip>
            </div>
            <span class="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
            </span>
            <div class="nav-right nav-menu">
                <a id="nav-item-3" class="nav-item animated fadeIn" href="/#/news">
                    <b-icon
                            pack="fa"
                            icon="newspaper-o"
                            size="is-small"
                            type="is-light">
                    </b-icon>
                    &nbsp;News
                </a>
                <a id="nav-item-2" class="nav-item animated fadeIn">
                    <b-icon
                            pack="fa"
                            icon="th-list"
                            size="is-small"
                            type="is-light">
                    </b-icon>
                    &nbsp;Categories
                </a>
                <a id="nav-item-1" class="nav-item animated fadeIn" href="/#/add">
                    <b-icon
                            pack="fa"
                            icon="pencil"
                            size="is-small"
                            type="is-light">
                    </b-icon>
                    &nbsp;Write
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'naNavigation',
        props: ['logo'],
        computed: {
            imageLink(){
                switch (this.logo) {
                    case 'dark':
                        return ('img/brand-' + this.logo + '.png');
                    case 'light':
                        return ('img/brand.png');
                    default:
                        return ('img/brand.png');
                }
            }
        }
    }
</script>

<style src="../assets/css/na-navigation.css">

</style>
