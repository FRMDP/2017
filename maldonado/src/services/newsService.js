export default {
	addNew(newNew) {
		const news = this.getNews();
		news.push(newNew);
		localStorage.setItem('news', JSON.stringify(news));
	},
	getNews() {
		return JSON.parse(localStorage.getItem('news'));
	},
	getNew(id){
		return JSON.parse(localStorage.getItem('news')).find(newNew => newNew.id == id);
	},
	getNewByCategory(categoryId){
		return JSON.parse(localStorage.getItem('news')).filter(newNew => newNew.category.id == categoryId);
	},
	setNewId(){
		const news = localStorage.getItem('news');
		if(!news){
			return 1;
		}else{
			return JSON.parse(localStorage.getItem('news')).lenght+1;			
		}
	},
	linkCategory(name){
		return JSON.parse(localStorage.getItem('categories')).find(category => category.name == name).id;
	},
	linkReporter(name){
		return JSON.parse(localStorage.getItem('reporters')).find(reporter => reporter.name == name).id;
	}
}