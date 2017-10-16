const categories=[
    		{id: 1, name: "sports"},
    		{id: 2, name: "local"},
    		{id: 3, name: "world"},
    		{id: 4, name: "economy"},
    		{id: 5, name: "politics"},
    		{id: 6, name: "entertainment"}
    	]


export default{
  getCategories(){
  	const categories = localStorage.getItem('categories') || '[]';
    if(categories<1){
      this.addCategories();
      this.getCategories();
    }
  	return JSON.parse(categories); 
  },

  addCategories(){
  	localStorage.setItem('categories',JSON.stringify(categories));
  }

  getCategoryById(id){
    const categories = localStorage.getItem('categories') || '[]';
        if(categories<1){
      this.addCategories();
      this.getCategoryById(id);
    }
    return JSON.parse(categories).find(category => category.id==id);
  }

}