<template>
  <div class="player">
    <Player
      class="col-4 text-center player"
      :player-id='player.player_id'
      :full-name="player.name_display_first_last"
      :height="player.height_feet + `'` + player.height_inches"
      :arm-bat="player.bats"
      :arm-throw="player.throws"
      :age="player.age"
      :position="player.primary_position_txt"
      :team="player.team_name"
      :weight="player.weight"
      :birthday="player.birth_date"
      :city="player.birth_city"
      :country="player.birth_country"
      :nickname="player.name_nick"
      :debut="player.pro_debut_date"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Player from '@/components/Player'

export default {
  name: 'player',
  components: {
    Player
  },
  computed: {
    ...mapState(['player'])
  },
  async created () {
    let playerId = this.$route.params.playerId
    this.$store.dispatch('getPlayerById', playerId)
    console.log(playerId)
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
