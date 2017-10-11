export default{
	getAllCategories(){
		return JSON.parse(localStorage.getItem('categories'));
	}
	getCategory(id){
		return JSON.parse(localStorage.getItem('categories')).find(c => c.id == id);
	}
}