export default{
	getAllNews(){
		return JSON.parse(localStorage.getItem('news'));
	},
	getNews(id){
		return JSON.parse(localStorage.getItem('news')).find(n => n.id == id);
	},
	getNewsCat(categoryId){
		let all_news = this.getAllNews();
		let specific_category_news = [];
		all_news.forEach(function(news) {
		    if(news.category.id == categoryId){
		    	specific_category_news.push(news);
		    }
		});
		return specific_category_news;
	},
	addNews(news){
		let all_news = this.getAllNews();
		if(!all_news){
		  all_news = [];
          news.id = 0;
        } else {
          let indice = all_news.length;
          news.id = all_news[indice - 1].id +1;
        }
        all_news.push(news);
        localStorage.setItem('news', JSON.stringify(all_news));
	}
}