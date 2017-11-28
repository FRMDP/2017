<template>
    <div id="totals" style="margin-top: 20px;">
    	<div class="row" v-if="loading">
            <div class="col-sm-10 offset-sm-1">
                <div class="wrapper">
                    <div class="cssload-loader"></div>
                </div>
            </div>
        </div>
        <div v-else class="row">
            <div class="col-sm-8 offset-sm-2">
                <h3>Totals</h3>
                <div class="row" v-for="t in totals" style="padding: 16px;position: relative;">
                    <span><h5>{{Replace(t.field)}}:</h5></span>
                    <div class="col-sm-12">
                        <span><p>{{t.sum}}</p></span>
                    </div>
                </div>
                <br>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
    	name:'playerTotals',
    	props:['id'],
    	data(){
    		return{
    			loading:false,
    			totals:[]
    		}
    	},
        methods:{
            Replace(field){
                const str = field.replace(/_/gi," ");
                return str.trim();
            }
        },
    	created(){
            this.loading=true;
            this.$http("https://api.opendota.com/api/players/"+this.id+"/totals")
            .then((response)=>{
                this.totals=response.data;
                this.loading=false;
            }).catch((error)=>{
                console.log(error);
                this.loading=false;
            })
        }
    }
</script>

<style>
#totals{
	background-color: #263238;
};
#card{
    background-color: #263238;
}
</style>