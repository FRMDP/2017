export default {

	addNew(oneNew){
		const news = this.getNews()
		news.push(oneNew);
		localStorage.setItem('news', JSON.stringify(news));
	},

	getNews() {
		const news = localStorage.getItem('news') || '[]';
		return JSON.parse(news); 
	},

	getNewsPerCategory(idCat) {
		let newsFiltred = localStorage.getItem('news') || '[]';
		newsFiltred = JSON.parse(newsFiltred);
		return newsFiltred.filter((n) => idCat == n.category.id);
	},

	getNew(idNew) {
		let particularNew = localStorage.getItem('news') || '[]';
		particularNew = JSON.parse(particularNew);
		return particularNew.find(n => idNew == n.id);
	},

	getCorrectId() {
		let news = localStorage.getItem('news') || '[]';
		news = JSON.parse(news);
		return news.length+1;
	},

	getReporterId(name) {
		let reporters = localStorage.getItem('reporters') || '[]';
		reporters = JSON.parse(reporters);
		return reporters.find(r => r.name == name).id;
	},

	getCategoryId(name) {
		let categories = localStorage.getItem('categories') || '[]';
		categories = JSON.parse(categories);
		return categories.find(c => c.name == name).id;
	}
}