<template>
    <div>
        <form novalidate @submit.stop.prevent="submit">
            <md-input-container>
                <label>Nombre</label>
                <md-input v-model="user.name"></md-input>
            </md-input-container>

            <md-input-container>
                <label>E-mail</label>
                <md-input v-model="user.email"></md-input>
            </md-input-container>

           <md-input-container md-has-password>
                <label>Contraseña</label>
                <md-input type="password" v-model="user.pass"></md-input>
            </md-input-container>
            <md-button class="md-raised md-primary" @click="userRegister" :disabled="!formOk">Registrar</md-button>
        </form>
        <zp-alert v-if="alert" class="alert" :messageAlert="messageAlert" :classAlert="classAlert"></zp-alert>
    </div>
</template>
<script>
import zpAlert from './zp-alert.vue'
export default {
    components:{
        zpAlert,
    },
    data(){
        return {
            user: {
                name: '',
                email: '',
                pass: '',
            },
            alert: false,
            messageAlert: 'Ya hay un usuario registrado con ese Mail',
            classAlert: 'alert-info',
        }
    },
    computed: {
        formOk(){
            return this.user.name && this.user.email && this.user.pass;
        }
    },
    methods: {
        toggleRightSidenav(){
            this.$emit('toggleRightSidenav');
        },
        clearFields(){
            this.user.name = '';
            this.user.email = '';
            this.user.pass = '';
        },
        userRegister(){
            if(this.$users.saveUser(this.user)){
                const userL = this.$users.logUser(this.user);
                userL.pass = '#@€€¬€¬@#~@|@#';
                this.$session.start();
                this.$session.set('login', userL);
                this.$store.commit('putUser', userL.name);
                this.clearFields();
                this.toggleRightSidenav();
            }else{
                this.showAlert();
            }
        },
        showAlert(){
                this.alert = true;
                setTimeout( () => this.hideAlert(),4000);

        },
        hideAlert(){
            this.alert = false;
        }
    }
}
</script>
<style scoped>
.alert{
    width: 100%;
    height: 50px;
    margin-left: 0px;
    left: 0px;
}
</style>


