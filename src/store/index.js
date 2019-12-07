import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teams: [],
    players: []
  },
  mutations: {
    SET_TEAMS (state, data) {
      state.teams = data
    },
    SET_PLAYERS (state, data) {
      state.players = data
    }
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
    },
    async getPlayersByTeam ({ commit }, teamId) {
      let {
        data: {
          roster_40: {
            queryResults: { row }
          }
        }
      } = await api.getPlayersByTeam(teamId)

      commit('SET_PLAYERS', row)
    }
  }
})
