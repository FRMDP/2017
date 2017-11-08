<template>
    <div>
        <form novalidate @submit.stop.prevent="submit">
            <md-input-container>
                <label>E-mail</label>
                <md-input v-model="user.email"></md-input>
            </md-input-container>

           <md-input-container md-has-password>
                <label>Contraseña</label>
                <md-input type="password" v-model="user.pass"></md-input>
            </md-input-container>
            <md-button class="md-raised md-primary" @click="loginUser" :disabled="!formOk">Login</md-button>
        </form>
        <zp-alert class="alert" s v-if="alert" :messageAlert="messageAlert" :classAlert="classAlert"></zp-alert>
    </div>
</template>
<script>
import zpAlert from './zp-alert.vue';
export default {
    components: {
        zpAlert
    },
    data(){
        return {
            user: {
                email: '',
                pass: '',
            },
            messageAlert: 'Mail o pass incorrecto',
            classAlert: 'alert-info',
            alert: false,
        }
    },
    computed: {
        formOk(){
            return this.user.email && this.user.pass;      
        }
    },
    methods: {
        toggleRightSidenav(){
            this.$emit('toggleRightSidenav');
        },
        clearField(){
            this.user.email = '';
            this.user.pass = '';
        },
        loginUser(){
            /*const userL = this.$storage.logUser(this.user);
            if(userL.name){
                this.$session.set('login', userL);
                this.clearField();
                this.toggleRightSidenav();
            }else{
                this.showAlert();
            }*/
            
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


