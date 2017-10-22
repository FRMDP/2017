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
		const news = this.getNews();
		if(news.length > 0)
			return news[(news.length-1)].id + 1;
		else
			return 1;
	},
	getNewById(id){
		const news = this.getNews();
		return news.find( n => n.id == id)
	},
	getNewsByCatId(catId){
		const news = this.getNews();
		 /* es la única manera que encontre para buscar las noticias
		 que coincidiera con el id, quise usar el filter con el indexOf
		 pero no me lo reconocia */
		let newsCat = [];
		news.forEach(function(n) { 
			if(n.category.id == catId)
				newsCat.push(n);
		});
		return newsCat;
		
	}
}