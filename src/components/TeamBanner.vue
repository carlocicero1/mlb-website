<template>
  <div class="banner">
      <h1>{{ teamName }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    teamName: String
  }
}
</script>
