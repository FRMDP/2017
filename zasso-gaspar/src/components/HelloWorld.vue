<template>
  <div class="hello">
    <p>{{ contador }} ({{doble}})</p>
    <button @click="plusOne">+1</button>
    <button @click="minusOne">-1</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  computed: {
    contador() {
      return this.$store.state.counter;
    },
    doble() {
      return this.$store.getters.twice;
    }
  },
  methods: {
    plusOne() {
      this.$store.commit('addOne');
    },
    minusOne() {
      this.$store.commit('addNumber', +5);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
