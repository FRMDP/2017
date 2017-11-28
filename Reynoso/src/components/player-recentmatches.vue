<template>
    <div id="recentmatches">
        <div class="row" v-if="loading">
            <div class="col-sm-10 offset-sm-1">
                <div class="wrapper">
                    <div class="cssload-loader"></div>
                </div>
            </div>
        </div>
        <div class="row" v-else align="center">
            <div class="col-sm-10 offset-sm-1">
                <h3>Recent Matches (Last 20)</h3>
                <table class="table table-responsive-md table-stripped">
                    <thead>
                    <tr>
                        <th>Match ID</th>
                        <th>Winner</th>
                        <th>Duration</th>
                        <th>Hero</th>
                        <th>Kills</th>
                        <th>Deaths</th>
                        <th>Assists</th>
                        <th>XP per min</th>
                        <th>Gold per min</th>
                        <th>Hero damage</th>
                        <th>Tower damage</th>
                    </tr>
                    </thead>
                    <tbody v-if="recentmatches && heroStats">
                    <tr v-for="r in recentmatches">
                        <td><b-link @click="seeMatch(r.match_id)">{{r.match_id}}</b-link></td>
                        <td v-if="r.radiant_win==true" style="color: forestgreen">Radiant</td>
                        <td v-else style="color: red">Dire</td>
                        <td>{{r.duration}}</td>
                        <td>{{getName(r.hero_id)}}</td>
                        <td>{{r.kills}}</td>
                        <td>{{r.deaths}}</td>
                        <td>{{r.assists}}</td>
                        <td>{{r.xp_per_min}}</td>
                        <td><p style="color: gold">{{r.gold_per_min}}</p></td>
                        <td>{{r.hero_damage}}</td>
                        <td>{{r.tower_damage}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'playerRecentmatches',
        props:['id','heroStats'],
        data(){
            return{
                recentmatches:[],
                loading:false,
                hero:{}
            }
        },
        computed:{

        },
        methods:{
            getName(heroid){
               return this.heroStats.find(h=>h.id==heroid).localized_name;
            },
            seeMatch(match_id){
                  this.$router.push({ name: 'matches', params: { id: match_id }})
            }
        },
        created(){
            this.loading=true;
            this.$http("https://api.opendota.com/api/players/"+this.id+"/recentMatches").then((response)=>{
                this.recentmatches=response.data;
                this.loading=false;
            }).catch((error)=>{
                console.log(error);
                this.loading=false;
            })

        }
    }
</script>

<style>
#recentmatches{
    background-color: #263238;
}
</style>
