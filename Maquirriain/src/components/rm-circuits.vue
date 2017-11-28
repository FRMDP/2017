<template>
  <div>
    <rm-spinner v-if='loading'></rm-spinner>
    <div v-if='!error'>
    <b-row>
      <b-col>
          <b-dropdown id="ddown-buttons" text="Circuits" class="m-2">
            <div v-for='circuit in circuits'>
              <b-dropdown-item-button @click='showCircuit(circuit.circuitName)'>{{circuit.circuitName}}</b-dropdown-item-button>
            </div>
          </b-dropdown>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div v-if='circuit'>
          <b-card bg-variant="dark"
                  text-variant="white"
                    :img-src="img"
                    img-alt="Image"
                    img-top
                     style="max-width: 40rem;"
                    :header="circuit.raceName"
                    header-tag="header"
                    :title="circuit.circuitName">
                    <p class="card-text">
                      Country: {{circuit.Location.country}}
                      <br/>
                      City: {{circuit.Location.locality}}
                      <br>
                      Geographical Coordinates: Lat {{circuit.Location.lat}} Long {{circuit.Location.long}}

                    </p>
                    <b-button :href="circuit.url"
                          variant="primary">More Info In wikipedia</b-button>
              </b-card>
          </div>
        </b-col>
      </b-row>
      </div>
      <div v-else>
        <label>SOME ARE WRONG</label>
      </div>
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
        circuits: [],
        circuit:'',
        img:'',
        error : false
      }
    },
    methods:{
      getCircuits(){
        this.loading = true;
        this.$http.get('http://ergast.com/api/f1/circuits.json?limit=73')
        .then((response) => {
          this.circuits = response.data.MRData.CircuitTable.Circuits;
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
      },
      searchImg(name){
        this.loading = true;
        this.$http.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyCESbb8aksvTXgiGEaTZ4Ev9Mw2lOCpI40&cx=008826416416088798084:ria9zrnc1gk&q="+name)
        .then((response) => {
          this.loading = false;
          if(response.data.items[0].pagemap.cse_image){
            this.img = response.data.items[0].pagemap.cse_image[0].src;
            this.circuit = this.circuits.find((n) => n.circuitName == name);
          }
        else{
            this.circuit = this.circuits.find((n) => n.circuitName == name);
          }
        })
        .catch((error) => {
          this.loading = false;
          this.error = true;
        });
      },
      showCircuit(circuitAux){
        this.img = '';
        this.circuit = '';
        this.searchImg(circuitAux);

      },

    },
    mounted(){
      this.getCircuits();
    }
  }
</script>
<style>

</style>
