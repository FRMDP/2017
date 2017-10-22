<template>
    <div class="container">
        <div class="row">
            <div class="twelve columns">
                <img src="img/img.jpg">
            </div>
            <hr>
            <div class="row">
                <div class="twelve columns">
                    <div class="md-display-2">{{New.title}}</div>
                </div>
            </div>
            <div class="row">
                <span v-if="New.category.name=='local'" class="md-display-1">Locales</span>
                <span v-if="New.category.name=='entertainment'" class="md-display-1">Entretenimiento</span>
                <span v-if="New.category.name=='sports'" class="md-display-1">Deportes</span>
                <span v-if="New.category.name=='politics'" class="md-display-1">Politica</span>
                <span v-if="New.category.name=='world'" class="md-display-1">Mundo</span>
                <span v-if="New.category.name=='economy'" class="md-display-1">Economia</span>
            </div>
            <br>
            <div class="row">
                <div class="four columns">
                    <span class="md-title">Por: {{New.reporter.name}}</span>
                </div>
                <div class="eight columns">
                    <div class="md-title">{{New.body}}</div>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="three columns">
                    <span class="md-body-2">{{New.date}}</span>
                </div>
            </div>
            <br>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'oneNew',
        data(){
            return{
                New:{},
                category:{}
            }
        },
        computed: {
            params() {
                this.$route.params;
            },
            id() {
                return this.$route.params.id;
            }
        },
        watch: {
            '$route.params.id': function() {
                this.New=this.$NewService.getNew(this.id);
            }
        },
        created(){
            this.New=this.$NewService.getNew(this.id);
        }
    }
</script>

<style>
</style>