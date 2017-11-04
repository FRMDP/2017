export default {
    saveToLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getFromLocalStorage(key) {
        let list = JSON.parse(localStorage.getItem(key));
        return list ? list : [];
    }
}