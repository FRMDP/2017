<style scoped>
/* Se definieron selectores css en el scope de este componenete
 para solucionar el problema de la barra de navaaegacion responsive*/
.wrap {
 display: inline-block;
 -webkit-box-shadow: 0 0 70px #fff;
 -moz-box-shadow: 0 0 70px #fff;
 box-shadow: 0 0 70px #fff;
 margin-top: 40px;
}

/* a little "umph" */

a {
 text-decoration: none;
 color: #fff;
 display: block;
}

ul {
 list-style: none;
 position: relative;
 text-align: left;
}

li {
 float: left;
}

/* clear'n floats */
ul:after {
 clear: both;
}

ul:before,
ul:after {
   content: " ";
   display: table;
}

nav {
 position: relative;
 background: #2B2B2B;
 background-image: -webkit-linear-gradient(bottom, #2B2B2B 7%, #333333 100%);
 background-image: -moz-linear-gradient(bottom, #2B2B2B 7%, #333333 100%);
 background-image: -o-linear-gradient(bottom, #2B2B2B 7%, #333333 100%);
 background-image: linear-gradient(bottom, #2B2B2B 7%, #333333 100%);
 text-align: center;
 letter-spacing: 1px;
 text-shadow: 1px 1px 1px #0E0E0E;
 -webkit-box-shadow: 2px 2px 3px #888;
 -moz-box-shadow: 2px 2px 3px #888;
 box-shadow: 2px 2px 3px #888;
 border-bottom-right-radius: 8px;
 border-bottom-left-radius: 8px;
}

/* prime */
ul.primary li a {
 display: block;
 padding: 20px 30px;
 border-right: 1px solid #3D3D3D;
}

ul.primary li:last-child a {
 border-right: none;
}

ul.primary li a:hover {

 color: #000;
}

/* subs */
ul.sub {
 position: absolute;
 z-index: 200;
 box-shadow: 2px 2px 0 #BEBEBE;
 width: 100%;
 display:none;
}

ul.sub li {
 float: none;
 margin: 0;
}

ul.sub li a {
 border-bottom: 1px dotted #ccc;
 border-right: none;
 color: #000;
 padding: 15px 30px;
}

ul.sub li:last-child a {
 border-bottom: none;
}

ul.sub li a:hover {
 color: #000;
 background: #eeeeee;
}

/* sub display*/
ul.primary li:hover ul {
 display: block;
 background: #fff;
}

/* keeps the tab background white */
ul.primary li:hover a {
 background: #fff;
 color: #666;
 text-shadow: none;
}

ul.primary li:hover > a{
 color: #000;
}

@media only screen and (max-width: 600px) {
 .decor {
   padding: 3px;
 }

 .wrap {
   width: 100%;
   margin-top: 0px;
 }

  li {
   float: none;
 }

 ul.primary li:hover a {
   background: none;
   color: #8B8B8B;
   text-shadow: 1px 1px #000;
 }

 ul.primary li:hover ul {
   display: block;
   background: #272727;
   color: #fff;
 }

 ul.sub {
   display: block;
   position: static;
   box-shadow: none;
   width: 100%;
 }

 ul.sub li a {
   background: #272727;
   border: none;
   color: #8B8B8B;
 }

 ul.sub li a:hover {
   color: #ccc;
   background: none;
 }
}


</style>

<template>

<div class="app">
    <div class="container">

        <div class="kode_logo_bar">
          <div class="wrap">
    <span class="decor"></span>
    <nav class="nav">
     <ul class="primary">
       <li>
         <a style="cursor:pointer;" @click="home()">HOME</a>
       </li>
       <li>
         <a style="cursor:pointer;">LIGAS</a>
         <ul class="sub">
           <div v-for="com in listaCompeticiones">
        <li><a style="cursor:pointer;" @click="verLiga(com.id)">{{com.caption}}</a></li>
         </div>
         </ul>
       </li>
     </ul>
    </nav>
    </div>
            <div class="logo">
                <a href="#">
                    <img src="http://clipart-finder.com/data/mini/1328241506.png" style="width:124px;height:62px;" alt="">
                </a>
            </div>

        </div>
        <transition name="fade">
          <router-view></router-view>
        </transition>
    </div>
</div>

</template>

<script>

import storageService from './services/storageService';
export default {
    name: 'app',
    data() {
        return {
            competiciones: '',
        }
    },
    methods: {
        verLiga(id) {
            this.$router.push('/ligas/' + id);
        },
        home(){
          this.$router.push('/');
        }
    },
    computed: {
        listaCompeticiones() {
            return this.competiciones;
        }
    },
    created() {
        let listag = [];
        storageService.traerCompeticiones()
            .then((response) => {
                this.competiciones = response.data;
                response.data.forEach(elem => {
                    storageService.traerEquipoUrl(elem._links.teams.href)
                        .then((response) => {
                          response.data.teams.forEach(elem => {
                            this.$store.commit('todosEquipos', elem);
                            listag.push(elem);
                          });
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                });
            })
            .then((response) => {
              storageService.traerPartidosDia()
                  .then((response) => {
                          response.data.fixtures.forEach(elem => {
                            let partido = elem;
                            let pich = this.$store.getters.lista.find(e => e._links.self.href.substr(e._links.self.href.lastIndexOf('/') + 1) == partido._links.homeTeam.href.substr(partido._links.homeTeam.href.lastIndexOf('/') + 1));
                            let pica = this.$store.getters.lista.find(e => e._links.self.href.substr(e._links.self.href.lastIndexOf('/') + 1) == partido._links.awayTeam.href.substr(partido._links.awayTeam.href.lastIndexOf('/') + 1));
                            if (pich)
                            {
                              partido.pich = pich.crestUrl;
                            }
                            if (pica)
                            {
                              partido.pica = pica.crestUrl;
                            }
                              this.$store.commit('todosPartidos',partido);
                          });
                        }
                      )
                      .catch((error) => {
                          console.log(error);
                      });
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
