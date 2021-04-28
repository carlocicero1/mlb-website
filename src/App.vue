<template>
  <div id="app">
    <div class='navbar'>
      <Navbar
      v-bind:league="league"
      v-bind:team="players"
      v-bind:player="player"
      />
    </div>
      <router-view></router-view>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import { mapState } from 'vuex'

export default {
  name: 'navbar',
  components: {
    Navbar
  },
  computed: {
    ...mapState([
      'league',
      'players',
      'player'])
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
