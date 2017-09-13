const vm = new Vue({
    el: '#app',
    data: {
        contact: {
            firstName: '',
            lastName: '',
            age: '',
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
        this.getFromLocalStorage();
    },
    computed: {
        filteredContacts() {
            return this.contacts.filter(p => p.firstName.indexOf(this.filter) >= 0);
        },
        formOk() {
            return this.contact.firstName &&
                this.contact.lastName &&
                this.contact.age &&
                this.contact.description &&
                this.contact.gender;
        }
    },
    methods: {
        addContact() {
            this.contacts.push(Object.assign({}, this.contact));
            this.cleanPerson();
            this.saveToLocalStorage(this.contacts)
            /*this.message = true;*/
        },
        cleanPerson() {
            this.contact.firstName = '';
            this.contact.age = '';
            this.contact.gender = '';
        },
        changeView(view) {
            this.view = view;
        },
        saveToLocalStorage(contacts){
            localStorage.setItem('contact', JSON.stringify(contacts));
        },
        getFromLocalStorage(){
            this.contacts = JSON.parse(localStorage.getItem('contact'));
        },
        firstToUpper(string){
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
});