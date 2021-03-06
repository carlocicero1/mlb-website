const axios = require('axios')

export default {
  getAllTeams () {
    return axios.get(`https://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season='2019'`)
  },
  getPlayersByTeam (teamId) {
    return axios.get(`https://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id='${teamId}'`)
  },
  getPlayerById (playerId) {
    return axios.get(`https://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code='mlb'&player_id='${playerId}'`)
  }
}
