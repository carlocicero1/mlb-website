<template>
  <div class="teams">
    <div class="text-center">
      <h1> {{ this.$route.params.league }} Teams</h1>
    </div>
    <div class="row">
      <div v-for="(team, i) in teams" :key="i" class="col-4 text-center team">
        <router-link :to="getPath(team.mlb_org_id)">
          <img :src="`http://www.mlbstatic.com/team-logos/${team.mlb_org_id}.svg`" class="team__logo">
          {{ team.name_display_full }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Teams',
  computed: {
    ...mapState(['teams'])
  },
  methods: {
    getPath: function (teamId) {
      return {
        name: 'players',
        params: { teamId }
      }
    }
  },
  async created () {
    const league = this.$route.params.league

    this.$store.dispatch('getTeamsByLeague', league)
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
