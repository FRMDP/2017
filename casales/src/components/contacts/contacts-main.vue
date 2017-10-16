<template>
	<div>
		<contacts-add @addContact="addContact" @displayAlert="displayAlert" v-show="view === 'add'"></contacts-add>
		<contacts-search :contacts="contacts" @trashContact="trashContact" @displayAlert="displayAlert" @fave="fave"
		                 v-show="view === 'search'"></contacts-search>
		<contacts-favs :contacts="contacts" @unfave="unfave" v-show="view === 'favorites'"></contacts-favs>
		<contacts-trash :deletedContacts="deletedContacts" @restoreFromTrashed="restoreFromTrashed"
		                @deleteContactForever="deleteContactForever" v-show="view === 'trash'"></contacts-trash>
	</div>
</template>

<script>
    import contactsAdd from './contacts-add.vue';
    import contactsSearch from './contacts-search.vue';
    import contactsFavs from './contacts-favs.vue';
    import contactsTrash from './contacts-trash.vue';

    export default {
        name: 'contactsMain',
        props: ['view'],
        components: {
            contactsAdd: contactsAdd,
            contactsSearch: contactsSearch,
            contactsFavs: contactsFavs,
            contactsTrash: contactsTrash
        },
        mounted() {
            this.$persistence.getContactsFromLocalStorage();
            this.$persistence.getTrashedFromLocalStorage();
        },
        data() {
            return {
                contacts: [],
                deletedContacts: []
            }
        },
        methods: {
            displayAlert(message) {
                this.$emit('displayAlert', message);
            },
            addContact(contact) {
                this.contacts.push(Object.assign({}, contact));
                this.$persistence.saveContactsToLocalStorage(this.contacts);
            },
            trashContact(index) {
                let trashed = this.contacts.splice(index, 1);
                this.$persistence.saveContactsToLocalStorage(this.contacts);
                this.deletedContacts.push(trashed[0]);
                this.$persistence.saveTrashedToLocalStorage(this.deletedContacts);
                this.displayAlert('The contact ' + trashed[0].firstName + ' ' + trashed[0].lastName +
                    ' has been moved to trash.');
            },
            restoreFromTrashed(index) {
                let restored = this.deletedContacts.splice(index, 1);
                this.$persistence.saveTrashedToLocalStorage(this.deletedContacts);
                this.contacts.push(restored[0]);
                this.$persistence.saveContactsToLocalStorage(this.contacts);
                this.displayAlert('The contact ' + restored[0].firstName + ' ' + restored[0].lastName +
                    ' has been restored.');
            },
            deleteContactForever(index) {
                let deleted = this.deletedContacts.splice(index, 1);
                this.$persistence.saveTrashedToLocalStorage(this.deletedContacts);
                this.displayAlert('The contact ' + deleted[0].firstName + ' ' + deleted[0].lastName +
                    ' has been permanently removed.');
            },
            fave(contact) {
                contact.fave ?
                    this.displayAlert(contact.firstName + ' ' + contact.lastName + ' added to Favorites.') :
                    this.displayAlert(contact.firstName + ' ' + contact.lastName + ' removed from Favorites.');

                this.$persistence.saveContactsToLocalStorage(this.contacts);
            },
            unfave(contact) {
                this.displayAlert(contact.firstName + ' ' + contact.lastName + ' removed from Favorites.');

                this.$persistence.saveContactsToLocalStorage(this.contacts);
            }
        }
    }
</script>
