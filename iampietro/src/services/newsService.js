export default {

	addNew(oneNew){
		var news = this.getNews()
		news.push(oneNew);
		localStorage.setItem('news', JSON.stringify(news));
	},

	getNews() {
		var news = localStorage.getItem('news') || '[]';
		return JSON.parse(news); 
	},

	getNewsPerCategory(idCat) {
		var newsFiltred = localStorage.getItem('news') || '[]';
		JSON.parse(newsFiltred);
		return newsFiltred.find(n => n.idCat == category.id);
	}

}