<template>
    <div class="hei">
        <md-toolbar class="md-dense" id="toolbar">
            <md-button md-menu-trigger class="md-icon-button" @click="toggleLeftSidenav"><md-icon>menu</md-icon></md-button>
            <h2 class="md-title" style="flex: 1">MusicPack</h2>
                <md-button @click="$router.push('/')">
                    volver
                </md-button>
        </md-toolbar>
        <md-sidenav class="md-left" ref="leftSidenav">
            <md-toolbar>
                <div class="md-toolbar-container">
                    <h3 class="md-title">Menu</h3>
                </div>
            </md-toolbar>
            <md-button class="butWid" @click="routeGo('index')">Volver</md-button>
            <md-button class="butWid" @click="routeGo('search')" >Buscar</md-button>
            <md-button class="butWid" >Gestion de Stock</md-button>
            <md-button class="butWid" >Ayuda</md-button>
        </md-sidenav>
        <router-view class="relative element hei paddLeftRight"></router-view>
    </div>
</template>

<script>
    export default {
        name: 'zpFrame',
        components: {
        },
        data() {
    		return {
    		}
        },
        methods: {
            toggleLeftSidenav() {
                this.$refs.leftSidenav.toggle();
            },
            routeGo(nom){
                this.toggleLeftSidenav();
                this.$router.push({name: nom});
            }
        },
        created(){
        }
    }
</script>
<style scoped>
.paddLeftRight{
    padding-left: 150px;
    padding-right: 150px;
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
