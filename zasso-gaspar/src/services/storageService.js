import axios from 'axios';
export default {
	traerLigas(id) {
		const promesa = axios.get('http://api.football-data.org/v1/competitions/'+id, { 'headers': { 'X-Auth-Token': 'c813a8ae29014d84a6814dbccbb1343d' } });
		return promesa;
	},
	traerCompeticiones() {
		const promesa = axios.get('http://api.football-data.org/v1/competitions', { 'headers': { 'X-Auth-Token': 'c813a8ae29014d84a6814dbccbb1343d' } });
		return promesa;
	},
	traerFixture(id) {
		const promesa = axios.get('http://api.football-data.org/v1/competitions/'+id+'/fixtures', { 'headers': { 'X-Auth-Token': 'c813a8ae29014d84a6814dbccbb1343d' } });
		return promesa;
	},
	traerPosiciones(id){
			const promesa = axios.get('http://api.football-data.org/v1/competitions/'+id+'/leagueTable', { 'headers': { 'X-Auth-Token': 'c813a8ae29014d84a6814dbccbb1343d' } });
			return promesa;
			},
	traerMatchDay(id_liga,id_match){
			const promesa = axios.get('http://api.football-data.org/v1/competitions/'+id_liga+'/fixtures?matchday='+id_match, { 'headers': { 'X-Auth-Token': 'c813a8ae29014d84a6814dbccbb1343d' } });
			return promesa;
			},
	traerEquipos(id) {
		const promesa = axios.get('http://api.football-data.org/v1/competitions/'+id+'/teams', { 'headers': { 'X-Auth-Token': 'c813a8ae29014d84a6814dbccbb1343d' } });
		return promesa;
	},
	traerPartidosDia() {
		const promesa = axios.get('http://api.football-data.org/v1/fixtures?timeFrame=n1', { 'headers': { 'X-Auth-Token': 'c813a8ae29014d84a6814dbccbb1343d' } });
		return promesa;
	},
	traerEquipo(id){
		const promesa = axios.get('http://api.football-data.org/v1/teams/'+id, { 'headers': { 'X-Auth-Token': 'c813a8ae29014d84a6814dbccbb1343d' } });
		return promesa;
	},
	traerEquipoUrl(url){
		const promesa = axios.get(url, { 'headers': { 'X-Auth-Token': 'c813a8ae29014d84a6814dbccbb1343d' } });
		return promesa;
	},
	traerLiga(url){
		const promesa = axios.get(url, { 'headers': { 'X-Auth-Token': 'c813a8ae29014d84a6814dbccbb1343d' } });
		return promesa;
	},
	traerJugadores(id){
		const promesa = axios.get('http://api.football-data.org/v1/teams/'+id+'/players', { 'headers': { 'X-Auth-Token': 'c813a8ae29014d84a6814dbccbb1343d' } });
		return promesa;
	},
	traerPartidos(id) {
		const promesa = axios.get('http://api.football-data.org/v1/teams/'+id+'/fixtures', { 'headers': { 'X-Auth-Token': 'c813a8ae29014d84a6814dbccbb1343d' } });
		return promesa;
	},
	storeComentario(lista){
		localStorage.setItem('comentarios', JSON.stringify(lista));
	},
	traerComentarios(){
		let storeComentarios = localStorage.getItem('comentarios');
		if(storeComentarios != null)
			{
				return JSON.parse(storeComentarios);
			}
			else
			return [];
			}
	}
