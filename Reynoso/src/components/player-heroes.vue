<template>
    <div id=heroes style="margin-top: 20px;">
        <div class="row" v-if="loading">
            <div class="col-sm-10 offset-sm-1">
                <div class="wrapper">
                    <div class="cssload-loader"></div>
                </div>
            </div>
        </div>
        <div v-else class="row" align="center">
            <div class="col-sm-8 offset-sm-2" >
                <h3>Played Heroes</h3>
                <table class="table table-responsive-md table-stripped">
                    <thead>
                        <tr>
                            <th>Hero</th>
                            <th>Games</th>
                            <th>Wins</th>
                            <th>Win rate</th>
                            <th>In my team</th>
                            <th>Team rate</th>
                            <th>In enemy team</th>
                            <th>Enemy rate</th>
                        </tr>
                    </thead>
                    <tbody v-if="heroes && heroStats">
                        <tr v-for="h in heroes">
                            <td><b-link @click="seeHero(h.hero_id)">{{getName(h.hero_id)}}</b-link></td>
                            <td>{{h.games}}</td>
                            <td>{{h.win}}</td>
                            <td>{{Percentage(h.win,h.games)}}</td>
                            <td>{{h.with_games}}</td>
                            <td>{{Percentage(h.with_win,h.with_games)}}</td>
                            <td>{{h.against_games}}</td>
                            <td>{{Percentage(h.against_win,h.against_games)}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'playerHeroes',
        props:['id','heroStats'],
        data(){
            return{
                heroes:[],
                loading:false,
            }
        },
        methods:{
            Percentage(wins,total){
                if(wins>0){
                const a = (wins/total)*100;
                return a.toFixed(2)+"%";
                }
                else{
                    return 0+"%";
                }
            },
            getAvatar(hero_id){
               return this.heroStats.find(h=>h.id == hero_id).img;
            },
            getName(hero_id){
               return this.heroStats.find(h=>h.id == hero_id).localized_name;
            },
            seeHero(hero_id){
                this.$router.push({ name: 'heroes', params: { id: hero_id }});
            }
        },
        created(){
            this.loading=true;
            this.$http("https://api.opendota.com/api/players/"+this.id+"/heroes").then((response)=>{
                this.heroes=response.data;
                this.loading=false;
            }).catch((error)=>{
                console.log(error);
                this.loading=false;
            })
        }
    }
</script>

<style>
#heroes{
    background-color: #263238;
}
</style>
