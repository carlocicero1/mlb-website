import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teams: [],
    players: [],
    player: [],
    league: []
  },
  actions: {
    async getTeamsByLeague ({ commit }, selectedLeague) {
      let {
        data: {
          team_all_season: {
            queryResults: { row }
          }
        }
      } = await api.getAllTeams()
      const filteredTeams = row.filter(item => item.league === selectedLeague)

      commit('SET_TEAMS', filteredTeams)
      commit('SET_LEAGUE', selectedLeague)
    },
    async getPlayersByTeam ({ commit }, teamId) {
      let {
        data: {
          roster_40: {
            queryResults: { row }
          }
        }
      } = await api.getPlayersByTeam(teamId)
      console.log(row)
      commit('SET_PLAYERS', row)
    },
    async getPlayerById ({ commit }, selectedPlayer) {
      let {
        data: {
          player_info: {
            queryResults: { row }
          }
        }
      } = await api.getPlayerById(selectedPlayer)
      commit('SET_PLAYER', row)
    }
  },
  mutations: {
    SET_TEAMS (state, data) {
      state.teams = data
    },
    SET_PLAYERS (state, data) {
      state.players = data
    },
    SET_PLAYER (state, data) {
      state.player = data
    },
    SET_LEAGUE (state, data) {
      state.league = data
    }
  }
})
