const reporters=[
{id: 1, name: "John Doe"},
{id: 2, name: "Jane Doe"},
{id: 3, name: "Chuck Norris"},
{id: 4, name: "Barack Obama"}
]


export default{
	getReporters(){
		this.addReporters();
		return JSON.parse(localStorage.getItem('reporters'));
	},

	addReporters(){
		localStorage.setItem('reporters',JSON.stringify(reporters));
	},

	getReportersById(id){
		const reporters = localStorage.getItem('reporters') || '[]';
		if(reporters.lenght<1){
			this.addReporters();
			this.getReportersById(id);
		}
		return JSON.parse(reporters).find(reporter => reporter.id==id); 
	}

}