<template>
  <div>
      <img :src="`https://content.mlb.com/images/headshots/current/60x60/${playerId}@2x.png`">
      <h1 class='player__name'>{{ fullName }}</h1>
      <template v-if="nickname">
      <h6 class='player__nickname'>nickname: {{ nickname }} </h6>
      </template>
      <h5 class='player__position'> {{ position }}, {{ team }} </h5>
      <table class='flex-column player__info'>
        <tr class='flex-row player__age'>
          <td>Age: </td>
          <td>{{ age }} years old</td>
        <tr class='flex-row player__born'>
          <td>Born: </td>
          <td>{{getDate(birthday)}} ({{city}}, {{country}})</td>
        </tr>
        <tr class='flex-row player__height'>
          <td>Height: </td>
          <td>{{ height }}</td>
        </tr>
        <tr class='flex-row player__weight'>
          <td>Weight: </td>
          <td>{{ weight }} lbs</td>
        </tr>
        <tr class='flex-row player__bat'>
          <td>Bats: </td>
          <td>{{ armBat }}</td>
        </tr>
        <tr class='flex-row player__throws'>
          <td>Throws: </td>
          <td>{{ armThrow }}</td>
        </tr>
        <tr class='flex-row player__debut'>
          <td>MLB Debut: </td>
          <td>{{ getDate(debut) }}</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'player',
  methods: {
    getDate: (date) => {
      const $date = new Date(date)
      return $date.toDateString()
    }
  },
  props: {
    playerId: String,
    fullName: String,
    armBat: String,
    armThrow: String,
    position: String,
    height: String,
    jerseyNumber: String,
    weight: String,
    age: String,
    team: String,
    birthday: String,
    city: String,
    country: String,
    nickname: String,
    debut: String
  }
}
</script>
<style lang="scss" scoped>
.player {
  &__info {
    margin: 1rem 5rem;
    border: 2px solid grey;
    height: 300px;
    width: 400px;
    .flex-row {
      margin: 50px;
      border-bottom: 1px solid #2c3e50;
    }
  }
  &__nickname {
      font-size: 14px;
      color:#2c3e50;
      font-weight: bold;
    }
}
</style>
