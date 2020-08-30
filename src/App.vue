<template>
  <div id="app">
    <HomePage/>
    <p class="body-smallest">Made by Isadora 💙 2020</p>
  </div>
</template>

<script>
import HomePage from './pages/HomePage.vue'
import './assets/global.less';

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style scoped>
#app {
  text-align: center;
  margin-bottom: 15px;
}
</style>
