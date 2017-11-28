import axios from 'axios';
export default {

	data(){
		return {   			
		}
	},

	getAllHeroes(){
		const promise=axios.get('https://api.opendota.com/api/heroes');
		return promise;
	},

	getMatchHeroeById(idHero){
		const promise=axios.get('https://api.opendota.com/api/heroes/'+idHero +'/matches');
		return promise;
	},

	getMatchupsHeroeById(idHero){
		const promise=axios.get('https://api.opendota.com/api/heroes/'+idHero +'/matchups');
		return promise;
	},

	getDurationHeroeById(idHero){
		const promise=axios.get('https://api.opendota.com/api/heroes/'+idHero +'/durations');
		return promise;
	},

	getPlayersByHeroes(idHero){
		const promise=axios.get('https://api.opendota.com/api/heroes/'+idHero +'/players');
		return promise;
	},

	getRankingPlayerByHero(idHero){
		const promise=axios.get('https://api.opendota.com/api/rankings?hero_id='+idHero);
		return promise;
	},

	getHeroStatsById(idHero){
		const promise=axios.get('https://api.opendota.com/api/benchmarks?hero_id='+idHero);
		return promise;
	},

	getHeroStats(){
		const promise=axios.get('https://api.opendota.com/api/heroStats');
		return promise;
	},

	
}