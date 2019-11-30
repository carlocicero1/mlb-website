<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <!-- {{ teams }} -->
    <div v-for="(team, i) in teams" :key="i">
      {{ team.name_display_full }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data () {
    return {
      teams: []
    }
  },
  async created () {
    console.log('Starting')
    let {
      data: {
        team_all_season: {
          queryResults: { row }
        }
      }
    } = await axios.get(`http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season='2017'`)
    this.teams = row
    console.log('DONE', row)
  }
}
</script>
