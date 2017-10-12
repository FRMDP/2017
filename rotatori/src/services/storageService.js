export default {
	addNew(){
		const news = this.getNews();
		news.push(nnew);
		localStorage.setItem('news',JSON.stringify(news));
	},
	getNews(){
		const news = localStorage.getItem('news');
		return JSON.parse(news);
	}
}