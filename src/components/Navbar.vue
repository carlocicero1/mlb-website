<template>
<div class="navbar">
  <router-link to="/"> Home </router-link>
  <template v-if="this.$route.params.league">
    <div>{{ league }} teams</div>
    </template>
  <template v-if="this.$route.params.teamId">
    <router-link :to="leagueLink(league)">{{ league }} teams</router-link>
    <div>{{ team[0].team_name }}</div>
  </template>
  <template v-if="this.$route.params.playerId">
    <router-link :to="leagueLink(league)">{{ league }} teams</router-link>
    <router-link :to="teamLink(team[0].team_id)">{{ team[0].team_name }}</router-link>
    <div>{{player.name_display_first_last}}</div>
  </template>
</div>
</template>
<script>

export default {
  name: 'navbar',
  props: [
    'player',
    'team',
    'league'
  ],
  methods: {
    leagueLink (league) {
      return {
        name: 'teams',
        params: { league }
      }
    },
    teamLink (teamId) {
      return {
        name: 'players',
        params: { teamId }
      }
    },
    playerLink (playerId) {
      return {
        name: 'player',
        params: { playerId }
      }
    }
  }
}

</script>
