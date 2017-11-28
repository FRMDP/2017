<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="520"
                img-height="140"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >
    <router-link to="/schedule">
      <b-carousel-slide caption="Schedule"
                        text=""
                        img-src="./../../build/img/f1.jpg"
      ></b-carousel-slide>
      </router-link>

      <router-link to="/results">
      <b-carousel-slide caption="Results"
                        img-src="./../../build/img/f4.jpg">
      </b-carousel-slide>
      </router-link>

      <router-link to="/qualifying">
      <b-carousel-slide caption="Qualifying"
                        img-src="./../../build/img/f5.jpg">

      </b-carousel-slide>
      </router-link>

      <router-link to="/standings">
      <b-carousel-slide
                        caption="Standings"
                        img-src="./../../build/img/f6.jpg">
      </b-carousel-slide>
      </router-link>

      <router-link to="/drivers">
      <b-carousel-slide caption="Drivers"
                        img-src="./../../build/img/f10.jpg">
      </b-carousel-slide>
      </router-link>

      <router-link to="/f1Teams">
      <b-carousel-slide caption="F1 Teams"
                        img-src="./../../build/img/f7.jpg">
      </b-carousel-slide>
      </router-link>

      <router-link to="/circuits">
      <b-carousel-slide caption="Circuits"
                        img-src="./../../build/img/f9.jpg">
      </b-carousel-slide>
      </router-link>

      <router-link to="/lapsTimes">
      <b-carousel-slide caption="Laps Times"
                        img-src="./../../build/img/f3.jpg">
      </b-carousel-slide>
      </router-link>

      <router-link to="/pitStop">
      <b-carousel-slide caption="Pit Stop"
                        img-src="./../../build/img/f8.jpg">
      </b-carousel-slide>
      </router-link>


      <router-link to="/chat">
      <b-carousel-slide
                      caption="CHAT"
                      text="Inside to the best race chat"
                      img-src="./../../build/img/f2.jpg">
      </b-carousel-slide>
       </router-link>



    </b-carousel>

  </div>
</template>

<script>
export default {
  name:'rmCousel',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<!-- carousel-1.vue
