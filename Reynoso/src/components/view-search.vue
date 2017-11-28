<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 offset-sm-2">
          <b-form style="margin-top: 20px;margin-bottom: 20px;">
            <b-form-group>
              <b-form-input v-model="find" required placeholder="Player name"></b-form-input>
            </b-form-group>
              <b-button @click="findPlayer">Search</b-button>
          </b-form>
        </div>
      </div>
      <div class="row" v-if="alert">
        <b-alert dismissible variant="danger">{{alert}}</b-alert>
      </div>
      <div class="row" v-if="loading">
        <div class="col-sm-8 offset-sm-2">
          <div class="wrapper">
            <div class="cssload-loader"></div>
          </div>
        </div>
      </div>
			<div class="row" v-else>
        <div class="col-sm-8 offset-sm-2">
          <table v-if="resultlist.data" class="table table-responsive-md table-stripped">
            <thead>
            <tr>
              <th scope="col">Player Name</th>
              <th scope="col">Profile Avatar</th>
            </tr>
            </thead>
            <tbody v-for="r in resultlist.data">
            <tr>
              <td><b-link id="link" @click="seeProfile(r.account_id)">{{r.personaname}}</b-link></td>
              <td><b-img :src="r.avatarfull" style="{ max-width: 30%; height: 70px;}"></b-img></td>
            </tr>
            </tbody>
          </table>
        </div>
			</div>
		</div>
</template>

<script>
    export default{
      name:'viewSearch',
      data(){
            return{
                find:'',
                alert:'',
                resultlist:[],
                loading:false
            }
      },
      computed:{

      },
      methods: {
        findPlayer(){
            if (this.find) {
              this.loading=true;
              this.$http("https://api.opendota.com/api/search?q=" + this.find)
                .then((response) => {
                  this.resultlist = response;
                  this.loading = false;
                })
                .catch((error) => {
                  this.alert = error;
                  this.loading = false;
                })
            }
        },
        seeProfile(id){
            this.$router.push({ name: 'players', params: { id: id }})
        }
      },
    }
</script>

<style>
  #link{
    color: darkorange;
  }
</style>
