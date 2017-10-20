export default{
	getAllNews(){
		return JSON.parse(localStorage.getItem('news') || '[]');
	},
	getNew(id){
		return JSON.parse(localStorage.getItem('news')).find(n => n.id == id);
	},
	getCategoryNews(categoryId){
		return JSON.parse(localStorage.getItem('news')).filter(n => n.category.id == categoryId);
	},
	addNew(newNews){
		const news = this.getAllNews();
		news.push(newNews);
		localStorage.setItem('news', JSON.stringify(news));
	},
	getLastId(){
		const news = JSON.parse(localStorage.getItem('news') || '[]');
		if(!news.length){
			return 0;
		}
		return news[(news.length)-1].id;
	}
}