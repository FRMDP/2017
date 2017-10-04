<template>
    <div class="app">
        <sb-Navbar @changeView="changeView"></sb-Navbar>
        <sb-Banner @changeView="changeView"></sb-Banner>
        <sb-contactsMain @changeView="changeView" :view="view" @showPopUpAlert="showPopUpAlert"></sb-contactsMain>
        <sb-Footer></sb-Footer>
        <sb-popAlert :showAlert="showAlert" :alertMsg="alertMsg"></sb-popAlert>
    </div>
</template>

<script>
    import sbNavbar from './components/page/sb-navbar.vue';
    import sbBanner from './components/page/sb-banner.vue';
    import sbFooter from './components/page/sb-footer.vue';
    import sbContactsMain from './components/contacts/sb-contactsMainLoader.vue';
    import sbPopAlert from './components/page/sb-popAlert.vue';

    export default {
        name: 'app',
        components: {
            sbNavbar: sbNavbar,
            sbBanner: sbBanner,
            sbFooter: sbFooter,
            sbContactsMain: sbContactsMain,
            sbPopAlert: sbPopAlert
        },
        data () {
            return {
                showAlert: false,
                view: 'home',
                alertMsg: ''
            }
        },
        methods: {
            changeView(view) {
                this.view = view;
            },
            showPopUpAlert(msg){
                this.alertMsg = msg;
                this.showAlert = true;
                setTimeout(() => {
                    this.alertMsg = '';
                    this.showAlert = false;
                }, 3000);
            }
        }
    }
</script>