export default {
	getNew(id) {
		return JSON.parse(localStorage.getItem('news')).find(news => news.id == id);
	},
	getNewsByCategory(categoryId) {
		return JSON.parse(localStorage.getItem('news')).filter(news => news.category.id == categoryId);
	}
}