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
        view: ''
    },
    mounted() {
        this.getContactsFromStorage();
    },
    computed: {
        searchedContacts() {
            return this.contactList.filter(p => p.firstName.indexOf(this.filter) >= 0);
        },
        formIsCorrect() {
            return this.contact.givenName &&
                this.contact.surName &&
                this.contact.address &&
                this.contact.gender;
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
        changeView(view) {
            this.view = view;
        },
        firstCharToUpper(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
});