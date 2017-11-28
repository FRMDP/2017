import storageService from "./storageService";

let comments = [];
const key    = 'comments';

export default {
	all() {
		return storageService.getFromLocalStorage(key);
	},
	save(comment) {
		this.comments = storageService.getFromLocalStorage(key);
		this.comments.unshift(comment);
		storageService.saveToLocalStorage(key, this.comments);
	}
}