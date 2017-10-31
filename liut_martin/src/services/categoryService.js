import storageService from "./storageService";
import newsService from './../services/newsService'

let news       = [];
let categories = [];
const key      = 'categories';

export default {
	get(id) {
		this.categories = this.getAll();
		return categories.find(c => c.id = id);
	},
	getAll() {
		return storageService.getFromLocalStorage(key);
	},
	getNewsByCategory(id) {
		this.news = newsService.getAll();
		console.log(id);
		console.log(this.news.filter(n => n.category == id));
		return this.news.filter(n => n.category == id)
	},
	getIdCategory(c) {
		const link       = c._links.self.href;
		const split_link = link.split('/');
		return split_link[split_link.length-1];
	}
}