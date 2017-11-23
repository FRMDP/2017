<template>
  <div class="containter topFixFixed">
    <div class="row">
      <div class="mx-auto">
        <form>
          <div class="form-group">
            <input type="email" class="form-control" aria-describedby="latitude"
                   placeholder="Enter city latitude">
          </div>
          <div class="form-group">
            <input type="password" class="form-control"  placeholder="Enter city longitude">
          </div>
          <small class="form-text text-muted">Have dont know the latitude and longitude of the city you are searching?. Try this <a href="https://www.latlong.net/">page</a> </small>
          <button type="submit" class="btn btn-primary customMarginTopButton">Search</button>
        </form>
      </div>
    </div>


  </div>

</template>

<script>
  export default {
    name: 'forecastByLL',
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style>
  .topFixFixed {
    margin-top: 68px;
  }
  .customMarginTopButton{
    margin-top:5px;
  }

</style>
