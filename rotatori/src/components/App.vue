<template>
    <div class="app hei" style="padding-bottom:60px">
        <md-toolbar class="md-dense" id="toolbar">
            <md-button md-menu-trigger class="md-icon-button" @click="toggleLeftSidenav"><md-icon>menu</md-icon></md-button>
            <md-button style="flex: 1" @click="$router.push({name:'index'})">MusicPack</md-button>
            <h4 class="md-title alRight" v-if="isLogin != ''">Bienvenido, {{ isLogin }}</h4>
            <md-button class="md-icon-button" v-if="isLogin != ''" @click="logout">
                <md-icon>close</md-icon>
            </md-button>
            <div class="alRight" v-else>
                <md-button @click="toggleRightSidenav">
                    Entrar
                </md-button>
            </div>
        </md-toolbar>
        <md-sidenav class="md-left" ref="leftSidenav">
            <md-toolbar>
                <div class="md-toolbar-container">
                    <h3 class="md-title">Menu</h3>
                </div>
            </md-toolbar>
            <md-button class="butWid" @click="routeGo('index')">Volver</md-button>
            <md-button class="butWid" @click="routeGo('search')" >Buscar Canciones</md-button>
            <md-button class="butWid" @click="routeGo('searchArtist')">Buscar Artistas</md-button>
            <md-button class="butWid" v-if="isLogin != ''" @click="routeGo('myList')">Mi Track List</md-button>
            <md-button class="butWid" v-if="isLogin != ''" @click="routeGo('profile')">Mis datos</md-button>
            <md-button class="butWid" @click="routeGo('term')">Términos y Condiciones</md-button>
        </md-sidenav>
        <md-sidenav class="md-right" ref="rightSidenav">
            <md-toolbar>
            <div class="md-toolbar-container">
                <h3 class="md-title">Entrar</h3>
            </div>
            </md-toolbar>
                <md-button class="md-raised md-accent" @click="viewRegister">Registrar</md-button>
                <md-button class="md-raised md-accent" @click="viewLogin">Login</md-button>
            <div>
                <zp-login v-if="login" class="margin" @toggleRightSidenav="toggleRightSidenav"></zp-login>
                <zp-register v-if="register" class="margin" @toggleRightSidenav="toggleRightSidenav" ></zp-register>
            </div>
        </md-sidenav>
        <transition name="slide-fade">
            <router-view class="relative element hei"></router-view>
        </transition>
    </div>
</template>

<script>
import zpLogin from "./zp-login.vue";
import zpRegister from "./zp-register.vue";
    export default {
        name: 'app',
        components: {
            zpLogin,
            zpRegister,
        },
        data(){
            return {
                login: false,
                register: false,
    		}
        },
        computed: {
            isLogin(){
                return this.$store.getters.getUser;
            }
        },
        methods: {
            logout(){
                if(this.$route.path == '/myTrackList')
                    this.$router.push({name: 'index'});
                this.$session.destroy();
                this.$store.commit('clearUser');
            },
            toggleLeftSidenav() {
                this.$refs.leftSidenav.toggle();
            },
            toggleRightSidenav() {
                this.$refs.rightSidenav.toggle();
            },
            routeGo(nom){
                this.toggleLeftSidenav();
                this.$router.push({name: nom});
            },
            viewLogin(){
                this.login = true;
                this.register = false;
            },
            viewRegister(){
                this.register = true;
                this.login = false;
            },
            getCountries(){
                this.$http.get('https://restcountries.eu/rest/v2/all')
                    .then(response => {
                        let arrayTemp = [];
                        const array = response.data;
                        array.forEach( c => {
                            arrayTemp.push(this.castCountry(c));
                        });
                        arrayTemp = arrayTemp.sort( (a, b) =>{
                            return a.name.localeCompare(b.name);
                        });
                        this.$store.commit('putCountries', arrayTemp);
                    })
                    .catch(msg => console.log(msg));
            },
            castCountry(country){
                let name = country.translations.es;
                if(!name)
                    name = country.name;
                return {
                    name: name,
                    code: country.alpha2Code,
                    flag: country.flag,
                }
            }
        },
        created(){
            this.getCountries();
            //this.$users.putFirstUser(); utilizado para ya tener un usario
            if(this.$session.has('login')){
                this.$store.commit('putUser', this.$session.get('login').name);
            }
        }
    }
</script>
<style scoped>
h3{
    text-align: center;
}
.paddLeftRight{
    padding-left: 100px;
    padding-right: 100px;
}
.hei{
    height: 100%;
}
.margin{
    margin-left: 10%;
    margin-right: 10%;
}
.element{
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.butWid{
    width: 95%;
    text-align: left;
    left: 2px;
}
</style>
