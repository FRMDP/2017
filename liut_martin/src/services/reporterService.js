import storageService from "./storageService";

let reporters = [];
const key     = 'reporters';

export default {
	get(id) {
		this.reporters = this.getAll();
		return reporters.find(r => r.id = id);
	},
	getAll() {
		return storageService.getFromLocalStorage(key);
	}
}