<template>
        <div class="container">
            <md-list v-for="reporter in reporters" :key="reporter.uid">
                <md-list-item>
                    <md-avatar class="md-large">
                        <img v-if="reporter.name=='Barack Obama'" src="img/obama.jpg" alt="People">
                        <img v-if="reporter.name=='Chuck Norris'" src="img/chuck-norris.jpg" alt="People">
                        <img v-if="reporter.name=='Jane Doe'" src="img/anne.jpg" alt="People">
                        <img v-if="reporter.name=='John Doe'" src="img/joker.jpg" alt="People">
                    </md-avatar>

                    <span class="md-title">{{reporter.name}}</span>

                    <md-button class= " md-primary md-list-action" @click="redirect(reporter.uid)">Ver reportero</md-button>
                </md-list-item>
            </md-list>
        </div>
</template>

<script>
    import io from 'socket.io-client'
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
        },

    }
</script>

<style>
</style>