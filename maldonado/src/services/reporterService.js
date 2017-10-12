const reporters = [
    	{
    		id: 1, 
    		name: "John Doe"
    	},
    	{
    		id: 2, 
    		name: "Jane Doe"
    	},
    	{
    		id: 3, 
    		name: "Chuck Norris"
    	},
    	{
    		id: 4, 
    		name: "Barack Obama"
    	}
];

export default {
	
    getReporter(name) {
        return reporters.find(reporter => reporter.name == name);
    },
    getReporters(){
        return reporters;
    }

}