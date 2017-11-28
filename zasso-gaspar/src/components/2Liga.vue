<style scoped>



</style>

<template>
<div class="kode_wrapper">
  <div class="innner_banner">
      <div class="container">
          <h3>{{muestraLiga.caption}}</h3>
          <ul class="breadcrumb">
              <li class="active"><span>Equipos</span></li>
              <li><a >{{muestraLiga.year}}</a></li>
          </ul>
      </div>
  </div>

<div class="kode_content_wrap">
    <section class="roster_page">
        <div class="container">
            <!--Roster Wrap Start-->
            <div class="kf_roster_wrap">
                <div class="row">
                    <div class="roster">
                      <h3 v-if="!listaEquipos"><span>NO HAY EQUIPOS</span></h3>
                        <div v-else v-for="com, index  in listaEquipos">
                            <!--Roster Dec Start-->
                            <div class="kf_roster_dec">
                                <div class="text">
                                    <span>{{index+1}}</span>
                                    <div class="text_overflow">
                                        <h3><img :src="com.crestUrl" style="width:42px;height:42px;" alt="">
                                          <a @click="verEquipo(com._links.self.href.substr(com._links.self.href.lastIndexOf('/')))"style="cursor:pointer;">
                                              {{com.shortName}}<span>{{com.name}}</span>
                                          </a>
                                      </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</div>

</template>

<script>

import storageService from '../services/storageService';
export default {
    name: 'Liga',
    data() {
        return {
            equipos: '',
            liga:''


        }
    },
    computed: {
        contador() {
                return this.$store.state.counter;
            },
            doble() {
                return this.$store.getters.twice;
            },
            id() {
                return this.$route.params.id;
            },
            listaEquipos(){
              return this.equipos.teams;
            },
            muestraLiga(){
              return this.liga;
            }
    },
    watch: {
        '$route.params.id': function() {

            this.verEquipos();
            this.verLiga();
        }

    },
    methods: {
        plusOne() {
                this.$store.commit('addOne');
            },
            minusOne() {
                this.$store.commit('addNumber', +5);
            },
            verEquipos() {

                storageService.traerEquipos(this.id)
                .then((response) => {

                    this.equipos = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
            },
            verLiga(){
              storageService.traerLigas(this.id)
              .then((response)=> {
                this.liga = response.data;
              })
              .catch((error) => {
                  console.log(error);
              });
            },
            verEquipo(id){
              this.$router.push('/equipos' + id);
            }
    },
    created() {
        this.verEquipos();
        this.verLiga();

    }
}

</script>
