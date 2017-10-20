export default {
	addNew(newNew) {
		const news = this.getNews();
		news.push(newNew);
		localStorage.setItem('news', JSON.stringify(news));
	},
	getNews() {
		return JSON.parse(localStorage.getItem('news'));
	},
	getNew(id) {
		return JSON.parse(localStorage.getItem('news')).find(news => news.id == id);
	},
	getNewsByCategory(categoryId) {
		return JSON.parse(localStorage.getItem('news')).filter(news => news.category.id == categoryId);
	},
	setNewId() {
		const news = localStorage.getItem('news');
		if(!news){
			return 1;
		}else{
			return JSON.parse(localStorage.getItem('news')).length+1;			
		}
	},
	linkCategory(name) {
		return JSON.parse(localStorage.getItem('categories')).find(category => category.name == name).id;
	},
	linkReporter(name) {
		return JSON.parse(localStorage.getItem('reporters')).find(reporter => reporter.name == name).id;
	}
}