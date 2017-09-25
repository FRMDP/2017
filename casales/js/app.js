new Vue({
    el: '#app',
    data: {
        contact: {
            firstName: '',
            lastName: '',
            address: '',
            telephoneNumber: '',
            fave: false
        },
        contacts: [],
        deletedContacts: [],
        filter: '',
        view: 'search',
        alertMessage: '',
        showAlert: false
    },
    mounted() {
        this.getContactsFromLocalStorage();
        this.getTrashedFromLocalStorage();
    },
    computed: {
        filteredContacts() {
            return this.contacts.filter(p => p.firstName.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0 ||
                p.lastName.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0 ||
                p.address.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0
            );
        },
        formOk() {
            return this.contact.firstName &&
                this.contact.lastName &&
                this.contact.address &&
                this.contact.telephoneNumber;
        },
        filteredFavorites() {
            return this.contacts.filter(p => p.fave == true);
        }
    },
    methods: {
        addContact() {
            this.contacts.push(Object.assign({}, this.contact));
            this.cleanPerson();
            this.saveContactsToLocalStorage(this.contacts);
            this.displayAlert('The contact has been created');
        },
        cleanPerson() {
            this.contact.firstName = '';
            this.contact.lastName = '';
            this.contact.address = '';
            this.contact.telephoneNumber = '';
        },
        changeView(view) {
            this.view = view;
        },
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
        },
        trashContact(index) {
            let trashed = this.contacts.splice(index, 1);
            this.saveContactsToLocalStorage(this.contacts);
            this.deletedContacts.push(trashed[0]);
            this.saveTrashedToLocalStorage(this.deletedContacts);
            this.displayAlert('The contact has been moved to trash.');
        },
        deleteContactForever(index) {
            this.deletedContacts.splice(index, 1);
            this.saveTrashedToLocalStorage(this.deletedContacts);
            this.displayAlert('The contact has been permanently removed.');
        },
        restoreFromTrashed(index) {
            let restored = this.deletedContacts.splice(index, 1);
            this.saveTrashedToLocalStorage(this.deletedContacts);
            this.contacts.push(restored[0]);
            this.saveContactsToLocalStorage(this.contacts);
            this.displayAlert('The contact has been restored');
        },
        firstToUpper(string) {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        },
        displayAlert(message){
            this.alertMessage = message;
            this.showAlert = true;
            setTimeout(() => {
                this.alertMessage = '';
                this.showAlert = false;
            }, 2000);
        },
        addOrRemoveContactToFavorites(contact){
            contact.fave = !contact.fave;
            if (contact.fave) {
              this.displayAlert("Contact added to Favorites!");
            } else {
              this.displayAlert("Contact removed from Favorites!");
            };
            this.saveContactsToLocalStorage(this.contacts);
        },
        deleteContactFromFavorites(contact){
          let index = null;
          for (let i = 0; i < this.contacts.length; i ++) {
            if (this.contacts[i] === contact) {
              index = i;
            }
          }
          if (index!=null) {
            this.trashContact(index);
          }
        }
    }
});
