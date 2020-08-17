<template>
<div class="navbar">
  <router-link to="/"> Home </router-link>
  <template v-if="this.$route.params.league">
    <div>|</div>
    <div class="link">{{ league }} teams</div>
    </template>
  <template v-if="this.$route.params.teamId">
    <div>|</div>
    <router-link :to="leagueLink(league)">{{ league }} teams</router-link>
    <div>|</div>
    <div class="link">{{ team[0].team_name }}</div>
  </template>
  <template v-if="this.$route.params.playerId">
    <div>|</div>
    <router-link :to="leagueLink(league)">{{ league }} teams</router-link>
    <div>|</div>
    <router-link :to="teamLink(team[0].team_id)">{{ team[0].team_name }}</router-link>
    <div>|</div>
    <div class="link">{{player.name_display_first_last}}</div>
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

<style lang="scss" scoped>
.navbar div {
  margin:0px 5px;
}
</style>
