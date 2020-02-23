<template>
  <div class="player">
      <img :src="`https://content.mlb.com/images/headshots/current/60x60/${playerId}@2x.png`">
      <h1>{{ fullName }}</h1>
      <h6>{{ nickname }} </h6>
      <h5> {{ position }}, {{ team }} </h5>
      <table>
        <tr>
          <td>Age: </td>
          <td>{{ age }}</td>
          <tr>
              <td>Born: </td>
              <td>{{getDate(birthday)}} ({{city}}, {{country}})</td>
          </tr>
        <tr>
        <tr>
          <td>Height: </td>
          <td>{{ height }}</td>
        </tr>
        <tr>
          <td>Weight: </td>
          <td>{{ weight }} lbs</td>
        </tr>
        <tr>
          <td>Bats: </td>
          <td>{{ armBat }}</td>
        </tr>
        <tr>
          <td>Throws: </td>
          <td>{{ armThrow }}</td>
        </tr>
        <tr>
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
