<template>
	<div>
		<b-card class="text-center">
	    	<b-card-group>
	    		<b-card v-for="t in teams" :key="t.team_id" :title="t.tag"
	                :img-src="t.logo_url"
	                img-alt="Img"
	                img-top>
	            <h3>{{t.name}}</h3>
	            <div slot="footer">
		            <b-button :href="'#/teams/'+ t.team_id">Details</b-button>
		            <b-button :href="'#/teams/'+ t.team_id + '/players/'">Players</b-button>
		        </div>
	        	</b-card>
	    	</b-card-group>
	    </b-card>
    </div>
</template>
<script>
import teamService from '../services/teamService';
	export default {
		data() {
			return {   			
			    teams:[],
				loading:false
		}
	}, 	

	mounted(){
		this.teams=teamService.getTeamsLocal();
	},

  	methods: {


	}

  }
</script>