
import axios from 'axios';

export default{

	data(){
		return{
			reporters:[],
			reporter: {
				id: '',
				name: ''
			},

		}
	},

	getReporters(){
		const promise=axios.get('http://localhost:8080/reporters');
		return promise;
	},

	getReportersById(id){
		const reporters = getReporters();
		if(!reporters.lenght<1){
		return JSON.parse(reporters).find(reporter => reporter.id==id); 
	}
	}

}