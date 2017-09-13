const vm = new Vue({
    el: '#app',
    data: {
        contact: {
            firstName: '',
            lastName: '',
            address: '',
            telephoneNumbers: [],
            description: '',
            gender: '',
            dob: ''
        },
        contacts: [],
        filter: '',
        view: 'search'
    },
    mounted() {
        this.getContactsFromLocalStorage();
    },
    computed: {
        filteredContacts() {
            return this.contacts.filter(p => p.firstName.indexOf(this.filter) >= 0);
        },
        formOk() {
            return this.contact.firstName &&
                this.contact.lastName &&
                this.contact.description &&
                this.contact.gender;
        }
    },
    methods: {
        addContact() {
            this.contacts.push(Object.assign({}, this.contact));
            this.cleanPerson();
            this.saveContactsToLocalStorage(this.contacts)
            /*this.message = true;*/
        },
        cleanPerson() {
            this.contact.firstName = '';
            this.contact.lastName = '';
            this.contact.dob = '';
            this.contact.description = '';
            this.contact.gender = '';
        },
        changeView(view) {
            this.view = view;
        },
        saveContactsToLocalStorage(contacts) {
            localStorage.setItem('contacts', JSON.stringify(contacts));
        },
        getContactsFromLocalStorage() {
            list = JSON.parse(localStorage.getItem('contacts'));
            this.contacts = list ? list : [];
        },
        firstToUpper(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
});
