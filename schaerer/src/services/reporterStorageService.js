export default{
	getAllReporters(){
		return JSON.parse(localStorage.getItem('reporters'));
	}
	getReporter(id){
		return JSON.parse(localStorage.getItem('reporters')).find(r => r.id == id);
	}
}