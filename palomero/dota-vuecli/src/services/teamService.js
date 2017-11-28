import axios from 'axios';

const teams=[
	{"team_id":2163,"rating":1563.41,"wins":602,"losses":376,"last_match_time":1510770599,"name":"Team Liquid","tag":"Liquid","logo_url":"http://cloud-3.steamusercontent.com/ugc/858347654776522964/E70F0E063879154A1982B3C907D6A5DFDA183BF9/"},
	{"team_id":1375614,"rating":1512.68,"wins":650,"losses":398,"last_match_time":1511694277,"name":"Newbee","tag":"Newbee","logo_url":"http://cloud-3.steamusercontent.com/ugc/101724518978773491/49B6B1889141A4C2FEE40AD0CCAD3006E179576B/"},
	{"team_id":726228,"rating":1447.61,"wins":726,"losses":493,"last_match_time":1511694277,"name":"Vici Gaming","tag":"VG","logo_url":"http://cloud-3.steamusercontent.com/ugc/845963870798027729/B143B7D3225133A054AE924F5E3F628AC342E78D/"},
	{"team_id":3331948,"rating":1445.47,"wins":216,"losses":154,"last_match_time":1511607335,"name":"LGD.Forever Young","tag":"LFY","logo_url":"http://cloud-3.steamusercontent.com/ugc/92725562078077112/B8CAD43EC48B1E91C60D94D4D03D927891190B81/"},
	{"team_id":1883502,"rating":1419.7,"wins":838,"losses":713,"last_match_time":1511364457,"name":"Virtus.pro","tag":"VP","logo_url":"http://cloud-3.steamusercontent.com/ugc/642124127283031446/047CF997122691194BCDF1EA7C58C18BEB325AF0/"},
	{"team_id":36,"rating":1419.39,"wins":745,"losses":562,"last_match_time":1511364457,"name":"Natus Vincere","tag":"Na`Vi","logo_url":"http://cloud-3.steamusercontent.com/ugc/46499322609643214/B5909AD7E90C90C7FD5BE12175504FC271987D9F/"},
	{"team_id":3214108,"rating":1401.12,"wins":136,"losses":90,"last_match_time":1498631388,"name":"Team NP","tag":"NP","logo_url":"http://cloud-3.steamusercontent.com/ugc/143381995902154305/0621C33DC779B11A51543135DCEF9837771C50CD/"},
	{"team_id":2519319,"rating":1389,"wins":45,"losses":16,"last_match_time":1445985009,"name":"(monkey) Business","tag":"(monkey)","logo_url":"http://cloud-3.steamusercontent.com/ugc/383162071968605685/B670804CDB13F184D122ACBB8F75E2DB2C959CAF/"},
	{"team_id":1838315,"rating":1383.12,"wins":455,"losses":238,"last_match_time":1511516610,"name":"Team Secret","tag":"Secret","logo_url":"http://cloud-3.steamusercontent.com/ugc/543025270456493033/7F92FF439CEE7E0745519538E2EE3E21EBA6BFEC/"},
	{"team_id":350190,"rating":1378.95,"wins":635,"losses":510,"last_match_time":1511852381,"name":"Fnatic","tag":"Fnatic","logo_url":"http://cloud-3.steamusercontent.com/ugc/812181939783674919/F688D74050C29A2112C9AF92BC00572657931320/"}
]

export default {

	getTeamsLocal(){
		this.addTeamLocal();
		return JSON.parse(localStorage.getItem('teams')); 
	},

	addTeamLocal(){
		localStorage.setItem('teams',JSON.stringify(teams));
	},

	getTeams(){
		const promise=axios.get('https://api.opendota.com/api/teams');
		return promise;
	},

	getTeamById(idTeam){
		const promise=axios.get('https://api.opendota.com/api/teams/' + idTeam);
		return promise;
	},

	getTeamMatchesById(idTeam){
		const promise=axios.get('https://api.opendota.com/api/teams/' + idTeam +'/matches');
		return promise;
	},

	getTeamPlayersById(idTeam){
		const promise=axios.get('https://api.opendota.com/api/teams/' + idTeam +'/players');
		return promise;
	},


	getTeamHeroesById(idTeam){
		const promise=axios.get('https://api.opendota.com/api/teams/' + idTeam +'/heroes');
		return promise;
	},

	getStatusCountry(){
		const promise=axios.get('https://api.opendota.com/api/distributions');
		return promise;
	},

	getLeagues(){
		const promise=axios.get('https://api.opendota.com/api/leagues');
		return promise;
	}

}