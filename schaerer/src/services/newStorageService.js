export default{
	getAllNews(){
		return JSON.parse(localStorage.getItem('news'));
	}
	getNew(id){
		return JSON.parse(localStorage.getItem('news')).find(n => n.id == id);
	}
	getNew(categoryId){
		return JSON.parse(localStorage.getItem('news')).filter(n => n.category.id == categoryId);
	}
	addNew(new){
		const news = this.getAllNews();
		news.push(new);
		localStorage.setItem('news', JSON.stringify(news));
	}
}