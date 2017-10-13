<template>
    <div class="column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen is-3-fullhd">
        <a :href="link">
            <div class="card animated" @mouseover="mouseOver" :class="{'pulse': isPulse,'': !isPulse}">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img :src="imageLink" alt="Image">
                    </figure>
                </div>
                <header class="card-header">
                    <p class="card-header-title">
                        {{ this.$stringUtils.firstToUpper(category.name) }}
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
        </a>
    </div>
</template>

<script>
    export default {
        name: 'naCategoriesItem',
        props: ['category'],
        data(){
            return {
                isPulse: false
            }
        },
        computed: {
            imageLink(){
                return ('img/dynamic/' + this.category.name + '.jpg');
            },
            link(){
                return ('/#/categories/' + this.category.id);
            }
        },
        methods: {
            mouseOver: function () {
                this.isPulse = true;
                setTimeout(() => {
                    this.isPulse = false;
                }, 1000);
            }
        }
    }
</script>
