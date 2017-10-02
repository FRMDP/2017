<template>
	<div class="app">
		<ic-hero @changeView="changeView"></ic-hero>
		<ic-alerts :showAlert="showAlert" :alertMessage="alertMessage" ></ic-alerts>
		<contacts-main :view="view" @displayAlert="displayAlert"></contacts-main>
		<ic-footer></ic-footer>
	</div>
</template>

<script>
    import icHero from './components/web/ic-hero.vue';
    import icAlerts from './components/web/ic-alerts.vue';
    import contactsMain from './components/contacts/contacts-main.vue';
    import icFooter from './components/web/ic-footer.vue';

    export default {
        name: 'app',
        components: {
            icHero: icHero,
            icAlerts: icAlerts,
            contactsMain: contactsMain,
            icFooter: icFooter
        },
        data() {
            return {
                view: 'search',
                alertMessage: '',
                showAlert: false
            }
        },
        methods: {
            changeView(view) {
                this.view = view;
            },
            displayAlert(message) {
                this.alertMessage = message;
                this.showAlert = true;
                setTimeout(() => {
                    this.alertMessage = '';
                    this.showAlert = false;
                }, 2000);
            }
        }
    }
</script>
