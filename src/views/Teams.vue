<template>
  <div class="teams">
    <h1>MLB Teams</h1>
    <div v-for="(team, i) in teams" :key="i">
      {{ team.name_display_full }}
      <h4>{{ team.venue_short }}</h4>
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
  async created () {
    const league = this.$route.params.league

    this.$store.dispatch('getTeamsByLeague', league)
  }
}
</script>
