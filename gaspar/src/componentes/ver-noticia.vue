<style>



</style>

<template>

<div class="noticia">
    <div class="box">
        <div class="post-header has-text-centered">
            <img src="">
            <h4 class="title is-8"><i>{{New.title}}</i></h4>
            <h4 class="title is-4">{{New.subtitle}}</h4>
        </div>
        <hr>
        <div class="post-content-short">
            <p>{{New.body}}</p>
            <div class="post-content-details">
                <div class="is-pulled-left">
                    <i>{{New.date}} by <i>{{New.reporter.name}}</i></i>
                </div>
                <div class="is-pulled-right" @click="verCategoria(New.category.id)">
                    <a>{{New.category.name}}</a>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>

import storageService from '../services/storageService';
export default {
    name: 'verNoticia',
    data() {
        return {
            New: ''
        }
    },
    methods: {
        verNoticia() {
                return storageService.traerNoticia(this.id);
            },
            verCategoria(id) {
                this.$router.push('/category/' + id);
            }
    },
    computed: {
        params() {
                return this.$route.params;
            },
            id() {
                return this.$route.params.id;
            }
    },
    watch: {
        '$route.params.id': function() {
            this.New = this.verNoticia();
        }
    },
    created() {
        this.New = this.verNoticia();
    }
}

</script>
