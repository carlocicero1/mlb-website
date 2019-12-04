<template>
  <div class="teams">
    <h1> {{ this.$route.params.league }} Teams</h1>
    <div v-for="(team, i) in teams" :key="i">
      <router-link :to="`${team.league}/${trimName(team.mlb_org)}`"> {{ team.name_display_full }} </router-link>
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
  methods: {
    trimName: function (teamName) {
      teamName = teamName.toLowerCase().replace(/\s/g, '')
      console.log(teamName)
      return teamName.toLowerCase().trim()
    }
  },
  async created () {
    const league = this.$route.params.league

    this.$store.dispatch('getTeamsByLeague', league)
  }
}
</script>
