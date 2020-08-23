<template>
  <div class="player">
    <Player
      class="col-4 text-center"
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
  async beforeCreate () {
    let playerId = this.$route.params.playerId

    this.$store.dispatch('getPlayerById', playerId)
    this.$store.dispatch('getPlayersByTeam', sessionStorage.getItem('players'))
    this.$store.dispatch('getTeamsByLeague', sessionStorage.getItem('league'))
  }
}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  height: 100%;
}
.player {
  display: flex;
  justify-content: center;
  margin: 0px 50px;
  padding: 10px 10px;
}
</style>
