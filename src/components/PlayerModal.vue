<template>
  <div class="player">
      <template v-if="playerId">
        <img :src="`https://content.mlb.com/images/headshots/current/60x60/${playerId}@2x.png`">
      </template>  
      <h1>{{ fullName }}</h1>
  </div>
</template>

<script>
export default {
  name: 'playerModal',
  props: {
    playerId: String,
    fullName: String
  }
}
</script>
