export default {
    saveContactsToLocalStorage(contacts) {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    },
    saveTrashedToLocalStorage(trashedContacts) {
        localStorage.setItem('trashedContacts', JSON.stringify(trashedContacts))
    },
    getContactsFromLocalStorage() {
        let list = JSON.parse(localStorage.getItem('contacts'));
        this.contacts = list ? list : [];
    },
    getTrashedFromLocalStorage() {
        let list = JSON.parse(localStorage.getItem('trashedContacts'));
        this.deletedContacts = list ? list : [];
    }
}
