import storageService from "./storageService";

let news = [];
const key  = 'news';

export default {
	get(id) {
		this.news = this.getAll();
		return this.news.find(n => n.id == id);
	},
	getAll() {
		return storageService.getFromLocalStorage(key);
	},
	save(New) {
		this.news = storageService.getFromLocalStorage(key);
		New.id    = this.getId();
		this.news.push(New);
		storageService.saveToLocalStorage(key, this.news);
	},
	getId() {
		return this.news.length + 1;
	}
}