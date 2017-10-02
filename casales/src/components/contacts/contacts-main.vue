<template>
	<div>
		<contacts-add @addContact="addContact" @displayAlert="displayAlert" v-show="view === 'add'"></contacts-add>
		<contacts-search :contacts="contacts" v-show="view === 'search'"></contacts-search>
		<contacts-favs :contacts="contacts" v-show="view === 'favorites'"></contacts-favs>
		<contacts-trash :deletedContacts="deletedContacts" v-show="view === 'trash'"></contacts-trash>
		<contacts-storage @loadContacts="loadContacts"></contacts-storage>
	</div>
</template>

<script>
    import contactsAdd from './contacts-add.vue';
    import contactsSearch from './contacts-search.vue';
    import contactsFavs from './contacts-favs.vue';
    import contactsTrash from './contacts-trash.vue';
    import contactsStorage from './contacts-storage.vue';

    export default {
        name: 'contactsMain',
	    props: ['view'],
        components: {
            contactsAdd: contactsAdd,
            contactsSearch: contactsSearch,
            contactsFavs: contactsFavs,
            contactsTrash: contactsTrash,
            contactsStorage: contactsStorage
        },
        data() {
            return {
                contacts: [],
                deletedContacts: []
            }
        },
        methods: {
            loadContacts(contacts) {
                this.contacts = contacts;
            },
            addContact(contact) {
                this.contacts.push(Object.assign({}, contact));
                this.saveContactsToLocalStorage(this.contacts);
            },
            displayAlert(message) {
                this.$emit('displayAlert', message);
            }
        }
    }
</script>
