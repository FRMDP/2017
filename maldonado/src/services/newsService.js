export default {
	getNew(id) {
		return JSON.parse(localStorage.getItem('news')).find(news => news.id == id);
	}
}