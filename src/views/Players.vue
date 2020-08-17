<template>
  <div class="players">
    <Banner
    class="col-4 text-center banner"
    :team-name="players[0].team_name"/>
    <h1>Players</h1>
    <div class='row'>
      <div v-for="(player, i) in players" :key="i" class="col-4 text-center player">
        <router-link :to="getPath(player.player_id)">
          <PlayerModal
            class="col-4 text-center player"
            :player-id="player.player_id"
            :full-name="player.name_display_first_last"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PlayerModal from '@/components/PlayerModal'
import Banner from '@/components/TeamBanner'

export default {
  name: 'players',
  components: {
    PlayerModal,
    Banner
  },
  methods: {
    getPath: (playerId) => {
      return {
        name: 'player',
        params: { playerId }
      }
    }
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
  h1,.row a {
    display: flex;
    justify-content: center;
  }
  .banner.col-4.text-center.banner{
    display: flex;
    justify-content: center;
    text-decoration: underline;
  }
</style>
