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
                <span class="md-display-1">{{category.name}}</span>
                <div class="md-title">visitas:{{visit[this.$route.path]}}</div>
            </div>
            <br>
            <div class="row">
                <div class="four columns">
                    <span class="md-title">Por: {{reporter.name}}</span>
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
    import io from 'socket.io-client'
    export default{
        name: 'oneNew',
        data(){
            return{
                New:{},
                category:{},
                reporter:{},
                loading: false,
                visit:''
            }
        },
        methods:{
            httpGetNews(){
                this.$http('http://localhost:8080/news/'+this.id).then((response)=> {this.New= response.data
                    this.$http(this.New._links.category.href).then((response)=>this.category=response.data).catch((error)=>console.log(error))
                    this.$http(this.New._links.reporter.href).then((response)=>this.reporter=response.data).catch((error)=>console.log(error))
                    this.loading=false
                })
                .catch((error)=>{console.log(error);this.loading=false})
            },
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
                this.$socket.emit('addvisit',this.$route.path);
                this.httpGetNews();
            }
        },
        created(){
            this.loading=true;
            this.$socket.emit('addvisit',this.$route.path);
            this.$socket.on('getvisit',(data)=>this.visit=data);
            this.httpGetNews();
        }
    }
</script>

<style>
</style>