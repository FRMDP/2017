<template>
    <div>
        <md-toolbar class="md-dense">
            <md-menu md-align-trigger>
            <md-button md-menu-trigger class="md-icon-button"><md-icon>menu</md-icon></md-button>
                <md-menu-content>
                    <md-menu-item @selected="$router.push('/')">Pagina Principal</md-menu-item>
                    <md-menu-item @selected="clicli">Presione aquí</md-menu-item>
                </md-menu-content>
           
            </md-menu>
            <md-button v-for="c in categories" :key="c.uid" @click="$router.push({ name: 'catById', params: { id: c.name }})"> {{ c.name }} </md-button>
            
            <h2 class="md-title alRight" style="flex: 1"><img src="img/UTN.png" height="42" width="42"></h2>
            <div class="alRight">
                <md-button @click="$router.push('/')">
                    Diario UTN FRMDP
                </md-button>
            </div>
        </md-toolbar>
        <zp-alert v-if="alert" :messageAlert="messageAlert" :classAlert="classAlert"></zp-alert>
    </div>
</template>

<script>
    import categoriesService from '../services/categoriesServices'
    import zpAlert from '../components/zp-alert.vue'
    export default {
        name: 'zpMenu',
        components: {
            zpAlert
        },
        data() {
    		return {
                categories: [],
                messageAlert: 'Mire la consola',
                classAlert: 'alert-info',
                alert:false,
    		}
    	},
        methods: {
    		toggleMenu() {
    			this.$emit('toggleMenu');
            },
            clicli(){
                this.alert=true;
                setTimeout(() => this.alert = false, 1000);
                console.log("  .@@@@.    #+++#    ,@@@@   \n  `@@@@.    @@@@@    ,@@@@   \n   @@@@+    @@@@@    #@@@@   \n   @@@@@    @@@@@    @@@@@   \n   #@@@@'   @@@@@   +@@@@+   \n    @@@@@.  @@@@@  ,@@@@@    \n    @@@@@@' @@@@@ '@@@@@@    \n     @@@@@@@@@@@@@@@@@@@     \n     ,@@@@@@@@@@@@@@@@@`     \n      ,@@@@@@@@@@@@@@@.      \n       `@@@@@@@@@@@@@        \n         :@@@@@@@@@,         \n  :@@@@@@@@@@@@@@@@@@@@@@@,  \n  ,@@@@@@@@@@@@@@@@@@@@@@@.  \n  ,@@@@@@@@@@@@@@@@@@@@@@@.  \n  ,@@@@@@@@@@@@@@@@@@@@@@@.  \n  :@@@@@@@@@@@@@@@@@@@@@@@,  \n         :@@@@@@@@@,         \n       `@@@@@@@@@@@@@        \n      :@@@@@@@@@@@@@@@.      \n     ,@@@@@@@@@@@@@@@@@`     \n     @@@@@@@@@@@@@@@@@@@     \n    @@@@@@; @@@@@ '@@@@@@    \n    @@@@@.  @@@@@  ,@@@@@    \n   #@@@@;   @@@@@   +@@@@#   \n   @@@@@    @@@@@    @@@@@   \n   @@@@+    @@@@@    #@@@@   \n  `@@@@.    @@@@@    ,@@@@   \n  `@@@@`    +++++    .@@@@\nPara agregar noticias /addnew");
            },
            getAllCat(){
                this.$http.get('http://192.168.99.100:8080/categories')
                .then((response) => {
                    this.categories =  response.data._embedded.categories
                })
                .catch((msg) => console.log('Error: ', msg));
            },
        },
        created(){
            this.getAllCat();
        }
    }
</script>