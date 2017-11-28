<template>
   <div>
    <rm-spinner v-if='loading'></rm-spinner>
    <b-row>
      <b-col>
      <b-dropdown id="ddown-buttons" text="F1 Teams" class="m-2">
        <div v-for='team in teams'>
          <b-dropdown-item-button @click='showTeam(team.name)'>{{team.name}}</b-dropdown-item-button>
        </div>
      </b-dropdown>
    </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div v-if='!error'>
        <div v-if='team'>
          <b-card bg-variant="dark"
                  text-variant="white"
                  :img-src="img"
                  img-alt="Image"
                  img-top
                   style="max-width: 40rem;"
                  :header="team.name"
                  header-tag="header"
                  :title="team.name">
                  <p class="card-text">
                    Nationality: {{team.nationality}}
                  </p>
                  <a :href="team.url"
                        variant="primary">More Info In wikipedia</a>
          </b-card>
      </div>
    </div>
    <div v-else>
      <label>SOME ARE WRONG</label>
    </div>
      </b-col>
    </b-row>
   </div>
</template>
<script>
  import rmSpinner from './rm-spinner.vue';
  export default{
    name: 'rmCircuits',
    components:{
      rmSpinner
    },
    data(){
      return{
        loading: false,
        teams: [],
        team:'',
        img:'',
        error:false

      }
    },
    methods:{
      getTeams(){
        this.loading = true;
        this.$http.get('http://ergast.com/api/f1/constructors.json?limit=208')
        .then((response) => {
          this.teams = response.data.MRData.ConstructorTable.Constructors;
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          this.error = true;
        });
      },
      searchImg(name){
        this.loading = true;
        this.$http.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyCESbb8aksvTXgiGEaTZ4Ev9Mw2lOCpI40&cx=008826416416088798084:ria9zrnc1gk&q="+name)
        .then((response) => {
          this.loading = false;
          if(response.data.items[0].pagemap.cse_image){
            this.img = response.data.items[0].pagemap.cse_image[0].src;
            this.team = this.teams.find((n) => n.name == name);
          }
        else{
            this.team = this.teams.find((n) => n.name == name);
          }
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
          this.error = true;
        });
      },
      showTeam(teamAux){
        this.img = '';
        this.team = '';
        this.searchImg(teamAux);

      },

    },
    mounted(){
      this.getTeams();
    }
  }
</script>
<style>

</style>
