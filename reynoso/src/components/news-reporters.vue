<template>
    <md-layout md-gutter>
        <div class="container">
            <div v-for="reporter in reporters" :key="reporter.uid">
                <div class="row">
                    <div class="offset-by-trhee columns nine columns">
                    <md-avatar class="md-avatar-icon md-large">
                        <img    src="img/obama.jpg">
                    </md-avatar>
                    <span class="md-title">{{reporter.name}}</span>
                    <md-button @click="redirect(reporter.uid)">Ver reportero</md-button>
                    </div>
                </div>
            </div>
        </div>
    </md-layout>
</template>

<script>
    export default{
        name:'newsReporters',
        data(){
            return{
                reporters:{},
            }
        },
        methods:{
            redirect(uid){
                const reporter= this.reporters.filter(r =>r.uid == uid);
                const repid= this.reporterId(reporter[0]);
                this.$router.push({ name: 'onereporter', params: { id: repid}})
            },
            reporterId(reporter){
                const newlink = reporter._links.self.href.split("/");
                return newlink.pop();
            },
            httpGetReporters(){
                this.$http('http://localhost:8080/reporters').then((reponse)=>
                {this.reporters=reponse.data._embedded.reporters;})
                    .catch((error)=>console.log(error));
            }
        },
        mounted(){
            this.httpGetReporters();
        }
    }
</script>

<style>
</style>