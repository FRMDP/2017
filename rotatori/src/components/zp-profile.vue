<template>
    <div class="paddings">
        <zp-alert v-if="showA" :messageAlert="messageAlert" :classAlert="classAlert"></zp-alert>
        <h2>Mi Información</h2>
        <h3>Nombre:</h3>
         <md-input-container>
            <label></label>
            <md-input v-model="profile.name"></md-input>
        </md-input-container>
        <h3>E-mail: </h3>
        <md-input-container>
            <label></label>
            <md-input disabled v-model="profile.email"></md-input>
        </md-input-container>
        <h3>Pass:</h3>
        <md-input-container md-has-password :class="clss">
            <label>Contraseña</label>
            <md-input type="password" v-model="mypass"></md-input>
            <span class="md-error">Requerido</span>
        </md-input-container>

        <md-input-container md-has-password>
            <label>Nueva contraseña</label>
            <md-input type="password" v-model="newPass"></md-input>
        </md-input-container>

         <md-input-container :class="passOK" md-has-password>
            <label>Repita nueva contraseña</label>
            <md-input required type="password" v-model="repitNewPass"></md-input>
            <span class="md-error">No coinciden</span>
        </md-input-container>
        <md-button class="md-raised md-accent" :disabled="passOK != ''" @click="changePass">Cambiar Contraseña</md-button>
    </div>
</template>
<script>
import zpAlert from './zp-alert.vue'
export default {
    components: {
        zpAlert,
    },
    data(){
        return {
            profile: {},
            mypass: '',
            newPass: '',
            repitNewPass: '',
            clss: '',
            classAlert: '',
            messageAlert: '',
            showA: false,
        }
    },
    computed: {
        passOK(){
            if(this.newPass != this.repitNewPass || (this.newPass == '' && this.repitNewPass == ''))
                return 'md-input-invalid'
            else
                return '';
        },
    },
    methods: { 
        changePass(){
            if(this.mypass!= ''){
                if(this.passOK == ''){
                    const userMod = {
                        email: this.profile.email,
                        pass: this.newPass
                    }
                    
                    if(this.$users.changePass(this.profile, this.mypass, userMod)){
                        this.messageAlert = 'Contraseña cambiada con exito!';
                        this.classAlert = 'alert-success';
                    }else{
                        this.messageAlert = 'Contraseña incorrecta';
                        this.classAlert ='alert-info';
                    }
                    this.clearField();
                    this.showAlert();
                }
            }else{
                this.clss = 'md-input-invalid';
            }
        },
        showAlert(){
            this.showA = true;
            setTimeout(() => {
                this.showA = false;
            }, 3500);
        },
        clearField(){
            this.mypass = '';
            this.newPass = '';
            this.repitNewPass = '';
            this.clss = '';
        }
    },
    created(){
        if (!this.$session.has('login')) {
            this.$router.push({ name: "index" });
        }else{
            this.profile = this.$session.get('login');
        }
    }
}
</script>

