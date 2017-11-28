import axios from 'axios';

export default {

	getPlayerByPersonaname(name){
		const promise=axios.get('https://api.opendota.com/api/search?q='+name);
		return promise;
	},

	getPlayerById(playerId){
		const promise=axios.get('https://api.opendota.com/api/players/'+ playerId);
		return promise;
	},

	getWinLosesByPlayerId(playerId){
		const promise=axios.get('https://api.opendota.com/api/players/'+ playerId +'/wl');
		return promise;
	},

	getRecentMatchesByPlayerId(playerId){
		const promise=axios.get('https://api.opendota.com/api/players/'+ playerId +'/recentMatches');
		return promise;
	},

	getMatchesByPlayerId(playerId){
		const promise=axios.get('https://api.opendota.com/api/players/'+ playerId +'/matches');
		return promise;
	},

	getWinLosesByPlayerIdPerHeroe(playerId){
		const promise=axios.get('https://api.opendota.com/api/players/'+ playerId +'/heroes');
		return promise;
	},

	getPeersByPlayerId(playerId){
		const promise=axios.get('https://api.opendota.com/api/players/'+ playerId +'/peers');
		return promise;
	},

	getTotalStatsByPlayerId(playerId){
		const promise=axios.get('https://api.opendota.com/api/players/'+ playerId +'/totals');
		return promise;
	},

	getCountsByPlayerId(playerId){
		const promise=axios.get('https://api.opendota.com/api/players/'+ playerId +'/counts');
		return promise;
	},

	getWordsByPlayerId(playerId){
		const promise=axios.get('https://api.opendota.com/api/players/'+ playerId +'/wordcloud');
		return promise;
	},

	getProPlayers(){
		const promise=axios.get('https://api.opendota.com/api/proPlayers');
		return promise;
	}

}