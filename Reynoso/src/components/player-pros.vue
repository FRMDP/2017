<template>
    <div id="pros" style="margin-top: 20px;">
    	<div class="row" v-if="loading">
            <div class="col-sm-10 offset-sm-1">
                <div class="wrapper">
                    <div class="cssload-loader"></div>
                </div>
            </div>
        </div>
        <div v-else class="row" align="center">
            <div class="col-sm-8 offset-sm-2" >
                <h3>Professional Partners</h3>
                <table class="table table-responsive-md table-stripped">
                    <thead>
                        <tr>
                            <th>Player</th>
                            <th>Games</th>
                            <th>Wins</th>
                            <th>Win rate</th>
                            <th>Team name</th>
                            <th>Steam profile</th>
                        </tr>
                    </thead>
                    <tbody v-if="pros">
                        <tr v-for="p in pros">
                            <td><b-media>
                            		<b-link @click=seePLayer(p.account_id)>{{p.name}}</b-link>
    								<img slot="aside" :src="p.avatar" alt="avatar" />
    							</b-media></td>
                            <td>{{p.games}}</td>
                            <td>{{p.win}}</td>
                            <td>{{Percentage(p.win,p.games)}}</td>
                            <td>{{p.team_name}}</td>
                            <td><a :href="p.profileurl" target="blank"><img src="../assets/Steam.png" alt="avatar" style="{ max-width: 30%; height: 40px;}" /></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
    	name:'playerPros',
    	props:['id'],
    	data(){
    		return{
    			loading:false,
    			pros:[]
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
            }
    	},
    	created(){
            this.loading=true;
            this.$http("https://api.opendota.com/api/players/"+this.id+"/pros")
            .then((response)=>{
                this.pros=response.data;
                this.loading=false;
            }).catch((error)=>{
                console.log(error);
                this.loading=false;
            })
        }
    }
</script>

<style>
#pros{
	background-color: #263238;
}
</style>