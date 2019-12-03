<template>
  <div class="home">
    <div class="banners">

      <router-link :to="getPath('AL')">
        <img alt="American League" class="image" src="../assets/american-league.png">
      </router-link>
      <router-link :to="getPath('NL')">
        <img alt="National League" class="image" src="../assets/national-league.png">
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    getPath (league) {
      return {
        name: 'teams',
        params: { league }
      }
    }
  }
}
</script>
