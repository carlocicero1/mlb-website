<template>
  <div class="players">
    <h1>Players</h1>
    <!-- <div v-for="(player, i) in players" :key="i" class="col-4 text-center">
      <img :src="`https://content.mlb.com/images/headshots/current/60x60/${player.player_id}@2x.png`">
      {{ player }}
    </div> -->
    <div class='row'>
    <Player
      v-for="(player, i) in players"
      :key="i"
      class="col-4 text-center player"
      :player-id="player.player_id"
      :full-name="player.name_display_first_last"
    />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Player from '@/components/Player'

export default {
  name: 'players',
  components: {
    Player
  },
  computed: {
    ...mapState(['players'])
  },
  async created () {
    let teamId = this.$route.params.teamId
    this.$store.dispatch('getPlayersByTeam', teamId)
  }
}
</script>

<style lang="scss" scoped>
.team {
  margin: 15px 0px;

  &__logo {
    max-height: 100px;
  }
}
</style>
