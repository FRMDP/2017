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
	getNew(categoryId){
		return JSON.parse(localStorage.getItem('news')).filter(newNew => newNew.category.id == categoryId);
	},
	idExists(){
		return JSON.parse(localStorage,getItem('news')).lenght+1;
	},
	linkCategory(){
		return JSON.parse(localStorage.getItem('categories')).find(category => category.name == name).id;
	},
	linkReporter(){
		return JSON.parse(localStorage.getItem('reporters')).find(reporter => reporter.name == name).id;
	}
}