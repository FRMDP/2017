<template>
    <nav class="nav">
        <div class="container">
            <div class="nav-left">
                <a class="nav-item animated fadeInLeftBig" href="/">
                    <img :src="imageLink" alt="World News Logo">
                </a>
                <p class="nav-item animated fadeIn">
                    &nbsp;|&nbsp;{{ this.subtitle.toUpperCase() }}&nbsp;
                </p>
            </div>
            <span class="nav-toggle" @click.prevent="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </span>
            <div class="nav-right nav-menu" :class="isActive ? 'is-active' : ''">
                <a id="nav-item-3" class="nav-item animated fadeIn" href="/#/news">
                    <b-icon
                            pack="fa"
                            icon="newspaper-o"
                            size="is-small"
                            :type="'is-' + this.logo">
                    </b-icon>
                    &nbsp;News
                </a>
                <a id="nav-item-1" class="nav-item animated fadeIn" href="/#/add">
                    <b-icon
                            pack="fa"
                            icon="pencil"
                            size="is-small"
                            :type="'is-' + this.logo">
                    </b-icon>
                    &nbsp;Write
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
    import io from "socket.io-client";

    import config from "./../config/application";

    export default {
        name: 'naNavigation',
        props: ['logo', 'subtitle'],
        data() {
            return {
                isActive: false,
                socket: ''
            }
        },
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
        },
        methods: {
            toggleMenu() {
                this.isActive = !this.isActive;
            }
        },
        created(){
            this.socket = io(config.WS_URL);

            this.socket.on('notificate', (data) => {
                    this.$toast.open({
                        message: 'We have a new article: ' + data.message,
                        type: 'is-info'
                    });
                }
            );
        }
    }
</script>

<style src="../assets/css/na-navigation.css">

</style>
