<template>
    <div class="container" id="overview">
        <div class="row" v-if="loading">
            <div class="col-sm-8 offset-sm-2">
                <div class="wrapper">
                    <div class="cssload-loader"></div>
                </div>
            </div>
        </div>
        <div class="row" v-else>
            <div v-if="player.profile" class="col-sm-8 offset-sm-2">
                <h3>PLAYER OVERVIEW</h3>
                <b-media right-align vertical-align="center" style="margin-top: 20px;">
                    <b-img slot="aside" :src="player.profile.avatarfull" width="auto" alt="placeholder" />
                    <h5 class="mt-0 mb-1">{{player.profile.personaname}}</h5>
                    <table class="table table-responsive" >
                        <thead>
                        <tr>
                            <th>Wins </th>
                            <th>Loses </th>
                            <th>Percentage </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{{winloses.win}}</td>
                            <td>{{winloses.lose}}</td>
                            <td>{{Percentage}}</td>
                        </tr>
                        </tbody>
                    </table>
                </b-media>
            </div>
        </div>
    </div>
</template>

<script>

    export default{
        name:'playerOverview',
        props:['id'],
        data(){
            return{
                player:{},
                profile:{},
                mmr_estimate:{},
                winloses:{},

                alert:'',
                loading:false,
            }
        },
        computed:{
            Percentage(){
                const a = (this.winloses.win/(this.winloses.win+this.winloses.lose))*100;
                return a.toFixed(2)+"%";
            }
        },
        filters:{

        },
        created(){
            this.loading=true;
            this.$http("https://api.opendota.com/api/players/"+this.id).then((response)=>{
                this.player=response.data;
            }).catch((error)=>{
                console.log(error);
            })
            this.$http("https://api.opendota.com/api/players/"+this.id+"/wl")
                .then((response)=>{
                    this.winloses=response.data;
                    this.loading=false;
                })
                .catch((error)=>{
                    console.log(error);
                    this.loading=false;
                })

            //consulta api por detras
        }
    }
</script>

<style>
#overview{
    background-color: #263238;
}
</style>
