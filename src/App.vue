<template>
  <div id="app">
    <HomeWeb/>
  </div>
</template>

<script>
import HomeWeb from './components/home-web.vue'

export default {
  name: 'App',
  components: {
    HomeWeb
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  margin:0
}
</style>
