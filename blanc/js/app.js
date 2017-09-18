const vm = new Vue({
    el: '#app',
    data: {
        contact: {
            givenName: '',
            surName: '',
            address: '',
            gender: '',
            birthdate: '',
            numbers: []
        },
        contactList: [],
        filter: '',
        view: 'home'
    },
    mounted() {
        this.getContactsFromStorage();
    },
    computed: {
        searchedContacts() {
            return this.contactList.filter(c => c.givenName.indexOf(this.filter) >= 0);
        },
        formIsCorrect() {
            return this.contact.givenName &&
                this.contact.surName &&
                this.contact.address &&
                this.contact.numbers &&
                this.contact.birthdate;
        }
    },
    methods: {
        saveContactsToStorage(contactList) {
            localStorage.setItem('contactList', JSON.stringify(contactList));
        },
        getContactsFromStorage() {
            list = JSON.parse(localStorage.getItem('contactList'));
            this.contactList = list ? list : [];
        },
        addContact() {
            this.contactList.push(Object.assign({}, this.contact));
            this.resetContact();
            this.saveContactsToStorage(this.contactList)
        },
        resetContact() {
            this.contact.givenName = '';
            this.contact.surName = '';
            this.contact.birthdate = '';
            this.contact.address = '';
            this.contact.gender = '';
            this.contact.numbers = [];
        },
        deleteContact(contact){
          let index = null;
          for (let i = 0; i < this.contactList.length; i ++) {
            if (this.contactList[i].numbers === contact.numbers) {
              index = i;
            }
          }
          if (index!=null) {
            this.contactList.splice(index,1);
            this.saveContactsToStorage(this.contactList)
          }
        },
        changeView(view) {
            this.view = view;
        },
        firstCharToUpper(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
});
