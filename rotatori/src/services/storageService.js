export default {
	addNew(nnew){
		const news = this.getNews();
		news.push(nnew);
		localStorage.setItem('news',JSON.stringify(news));
	},
	getNews(){
		if(localStorage.getItem('news') != null){
			const news = localStorage.getItem('news');
			return JSON.parse(news);
		}else
			return [];
	},
	getLastId(){
		debugger;
		const news = this.getNews();
		if(news.length > 0)
			return news[(news.length-1)].id + 1;
		else
			return 1;
	},
	getNewById(id){
		const news = this.getNews();
		return news.find( r => r.id == id)
	}
}