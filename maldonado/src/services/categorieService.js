const categories = [
    	{
    		id: 1,
    	 	name: "locals"
    	},
    	{
    		id: 2, 
    		name: "sports"
    	},
    	{
    		id: 3,
    		name: "world"
    	},
    	{
    		id: 4, 
    		name: "economy"
    	},
    	{
    		id: 5, 
    		name: "politics"
    	},
    	{
    		id: 6, 
    		name: "entertainment"
    	}
];

export default {
    
	addCategories() {
        localStorage.setItem('categories', JSON.stringify(categories));
    },
    getCategory(id) {
        return JSON.parse(localStorage.getItem('categories')).find(category => category.id == id);
    },
    getCategories() {
        return JSON.parse(localStorage.getItem('categories'));
    }

}