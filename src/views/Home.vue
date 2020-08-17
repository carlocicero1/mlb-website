<template>
  <div class="home">
    <div class="banners">
      <router-link :to="getPath('AL')">
        <img alt="American League" class="image" src="../assets/american-league.png">
        <p>American League</p>
      </router-link>
      <router-link :to="getPath('NL')">
        <img alt="National League" class="image" src="../assets/national-league.png">
        <p>National League</p>
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

<style lang="scss" scoped>
.home {
  margin: 1rem 18rem;
  display: flex;
  justify-content: center;
  width: 75rem;
  .banners {
    display: inline-flex;
    p {
      text-align: center;
      margin-top: 10px;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }
  }
  .image {
    height: 20rem;
    margin: 0 6rem;
  }
}
</style>
