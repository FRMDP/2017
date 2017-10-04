<template>
    <div>
        <sb-contactsHome @changeView="changeView" :view="view" v-if="view === 'home'"></sb-contactsHome>
        <sb-contactsAdd @addContact="addContact" @showPopUpAlert="showPopUpAlert" v-if="view === 'new'"></sb-contactsAdd>
        <sb-contactsSearch :contactList="contactList" @setToDelete="setToDelete" v-if="view === 'search'"></sb-contactsSearch>
        <sb-confirmDelete @changeView="changeView" @deleteContact="deleteContact" :toDelete="toDelete" :view="view" v-if="contactToDelete"></sb-confirmDelete>
    </div>
</template>

<script>
    import sbContactsHome from './sb-contactsHome.vue';
    import sbContactsAdd from './sb-contactsAdd.vue';
    import sbContactsSearch from './sb-contactsSearch.vue';
    import sbConfirmDelete from './sb-confirmDelete.vue';

    export default {
        name: 'sbContactsMain',
        props: ['view'],
        components: {
            sbContactsHome: sbContactsHome,
            sbContactsAdd: sbContactsAdd,
            sbContactsSearch: sbContactsSearch,
            sbConfirmDelete: sbConfirmDelete
        },
        mounted () {
            this.getContactsFromStorage();
        },
        data () {
            return {
                contactList: [],
                toDelete: {}
            }
        },
        computed: {
          contactToDelete: function(){
              return Object.keys(this.toDelete).length;
          }
        },
        methods: {
            changeView(view){
                this.$emit('changeView',this.view)
            },
            saveContactsToStorage(contactList) {
                localStorage.setItem('contactList', JSON.stringify(contactList));
            },
            getContactsFromStorage() {
                let list = JSON.parse(localStorage.getItem('contactList'));
                this.contactList = list ? list : [];
            },
            addContact(contact) {
                this.contactList.push(Object.assign({}, contact));
                this.saveContactsToStorage(this.contactList)
            },
            setToDelete(contact){
                this.toDelete = contact;
            },
            deleteContact(contact){
                let index = null;
                for (let i = 0; i < this.contactList.length; i++) {
                    if (this.contactList[i] === contact) {
                        index = i;
                    }
                }
                if (index != null) {
                    this.contactList.splice(index, 1);
                    this.saveContactsToStorage(this.contactList)
                }
            },
            showPopUpAlert(msg){
                this.$emit('showPopUpAlert', this.msg);
            }
        }
    }
</script>