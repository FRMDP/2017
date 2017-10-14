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
            <md-button v-for="c in categories" :key="c.id" @click="$router.push({ name: 'catById', params: { id: c.id }})"> {{ c.name }} </md-button>
            
            <h2 class="md-title alRight" style="flex: 1"><img src="img/UTN.png" height="42" width="42"></h2>
            <div class="alRight">
                <md-button @click="$router.push('/')">
                    Diario UTN FRMDP
                </md-button>
            </div>
        </md-toolbar> 
    </div>
</template>

<script>
    import categoriesService from '../services/categoriesServices'
    export default {
    	name: 'zpMenu',
        data() {
    		return {
                categories: [],
    		}
    	},
        methods: {
    		toggleMenu() {
    			this.$emit('toggleMenu');
            },
            clicli(){
                console.log("  .@@@@.    #+++#    ,@@@@   \n  `@@@@.    @@@@@    ,@@@@   \n   @@@@+    @@@@@    #@@@@   \n   @@@@@    @@@@@    @@@@@   \n   #@@@@'   @@@@@   +@@@@+   \n    @@@@@.  @@@@@  ,@@@@@    \n    @@@@@@' @@@@@ '@@@@@@    \n     @@@@@@@@@@@@@@@@@@@     \n     ,@@@@@@@@@@@@@@@@@`     \n      ,@@@@@@@@@@@@@@@.      \n       `@@@@@@@@@@@@@        \n         :@@@@@@@@@,         \n  :@@@@@@@@@@@@@@@@@@@@@@@,  \n  ,@@@@@@@@@@@@@@@@@@@@@@@.  \n  ,@@@@@@@@@@@@@@@@@@@@@@@.  \n  ,@@@@@@@@@@@@@@@@@@@@@@@.  \n  :@@@@@@@@@@@@@@@@@@@@@@@,  \n         :@@@@@@@@@,         \n       `@@@@@@@@@@@@@        \n      :@@@@@@@@@@@@@@@.      \n     ,@@@@@@@@@@@@@@@@@`     \n     @@@@@@@@@@@@@@@@@@@     \n    @@@@@@; @@@@@ '@@@@@@    \n    @@@@@.  @@@@@  ,@@@@@    \n   #@@@@;   @@@@@   +@@@@#   \n   @@@@@    @@@@@    @@@@@   \n   @@@@+    @@@@@    #@@@@   \n  `@@@@.    @@@@@    ,@@@@   \n  `@@@@`    +++++    .@@@@\nPara agregar noticias /addnew");
            }
        },
        created(){
            this.categories = categoriesService.getAllCat();
        }
    }
</script>