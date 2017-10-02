<script>
	export default {
	    name: 'contactsStorage',
        mounted() {
            this.getContactsFromLocalStorage();
            this.getTrashedFromLocalStorage();
        },
		methods:{
            saveContactsToLocalStorage(contacts) {
                localStorage.setItem('contacts', JSON.stringify(contacts));
            },
            saveTrashedToLocalStorage(trashedContacts) {
                localStorage.setItem('trashedContacts', JSON.stringify(trashedContacts))
            },
            getContactsFromLocalStorage() {
                let list = JSON.parse(localStorage.getItem('contacts'));
                this.$emit('loadContacts', list ? list : []);
            },
            getTrashedFromLocalStorage() {
                let list = JSON.parse(localStorage.getItem('trashedContacts'));
                this.deletedContacts = list ? list : [];
            }
		}
	}
</script>
