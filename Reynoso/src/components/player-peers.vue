<template>
    <div id="peers" style="margin-top: 20px;">
    	<div class="row" v-if="loading">
            <div class="col-sm-10 offset-sm-1">
                <div class="wrapper">
                    <div class="cssload-loader"></div>
                </div>
            </div>
        </div>
        <div v-else class="row" align="center" >
            <div class="col-sm-8 offset-sm-2">
                <h3>Partners</h3>
                <table class="table table-responsive-md table-stripped" >
                    <thead>
                        <tr>
                            <th>Player</th>
                            <th>Games</th>
                            <th>Wins</th>
                            <th>Win rate</th>
                            <th>In my team</th>
                            <th>Team rate</th>
                            <th>In enemy team</th>
                            <th>Enemy rate</th>
                        </tr>
                    </thead>
                    <tbody v-if="peers">
                        <tr v-for="p in peers">
                            <td><b-media>
                            		<b-link @click=seePLayer(p.account_id)>{{p.personaname}}</b-link>
    								<img slot="aside" :src="p.avatar" alt="avatar" />
    							</b-media></td>
                            <td>{{p.games}}</td>
                            <td>{{p.win}}</td>
                            <td>{{Percentage(p.win,p.games)}}</td>
                            <td>{{p.with_games}}</td>
                            <td>{{Percentage(p.with_win,p.with_games)}}</td>
                            <td>{{p.against_games}}</td>
                            <td>{{Percentage(p.against_win,p.against_games)}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
    	name:'playerPeers',
    	props:['id'],
    	data(){
    		return{
    			loading:false,
    			peers:[]
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
            this.$http("https://api.opendota.com/api/players/"+this.id+"/peers")
            .then((response)=>{
                this.peers=response.data;
                this.loading=false;
            }).catch((error)=>{
                console.log(error);
                this.loading=false;
            })
        }
    }
</script>

<style>
#peers{
	background-color: #263238;
}
</style>
