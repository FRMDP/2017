<template>
    <div id="promatches">
        <div class="row" v-if="loading">
            <div class="col-sm-10 offset-sm-1">
                <div class="wrapper">
                    <div class="cssload-loader"></div>
                </div>
            </div>
        </div>
        <div class="row" v-else align="center">
            <div class="col-sm-10 offset-sm-1">
                <h3>Pro Matches (Last 100)</h3>
                <table class="table table-responsive-md table-stripped">
                    <thead>
                    <tr>
                        <th>Match ID</th>
                        <th>Winner</th>
                        <th>Duration</th>
                        <th>Dire Team</th>
                        <th>Radiant Team</th>
                        <th>Dire Score</th>
                        <th>Radiant Score</th>
                        <th>League Name</th>
                    </tr>
                    </thead>
                    <tbody v-if="promatches">
                    <tr v-for="r in promatches">
                        <td><b-link @click="seeMatch(r.match_id)">{{r.match_id}}</b-link></td>
                        <td v-if="r.radiant_win==true" style="color: forestgreen">Radiant</td>
                        <td v-else style="color: red">Dire</td>
                        <td>{{r.duration}}</td>
                        <td>{{r.dire_name}}</td>
                        <td>{{r.radiant_name}}</td>
                        <td>{{r.dire_score}}</td>
                        <td>{{r.radiant_score}}</td>
                        <td>{{r.league_name}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'proMatches',
        props:['id'],
        data(){
            return{
                promatches:[],
                loading:false
            }
        },
        methods:{
            seeMatch(match_id){
                  this.$router.push({ name: 'match', params: { id: match_id }})
            }
        },
        created(){
            this.loading=true;
            this.$http("https://api.opendota.com/api/proMatches")
                .then((response)=>{
                    this.promatches=response.data;
                    this.loading=false;
            }).catch((error)=>{
                console.log(error);
                this.loading=false;
            })
        }
    }
</script>

<style>
#promatches{
    margin-top: 20px;
}
</style>
