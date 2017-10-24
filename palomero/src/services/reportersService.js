
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
		this.getJson();
		return this.reporters;
	},

	getJson(){
    axios.get('localhost:8080/reporters')
    .then((response) => {
        for(let r in response.data._embedded.reporters){
        this.reporter.name=r.name;
        this.reporter.id=r._links.self.href;
        this.reporters.push(this.reporter);
      }
    })
    .catch(e=>{
      console.log(e);
    })
  },

	getReportersById(id){
		const reporters = getReporters();
		if(!reporters.lenght<1){
		return JSON.parse(reporters).find(reporter => reporter.id==id); 
	}
	}

}