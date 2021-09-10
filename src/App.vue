<template>
  <div id="app">
    <HomeMobile v-if="browserRedirect == 'mobile'"/>
    <HomeWeb v-else/>
  </div>
</template>

<script>
import HomeWeb from './components/home-web.vue'
import HomeMobile from './components/home-mobile.vue'

export default {
  name: 'App',
  data(){
    return{
      browserRedirect:false,
    }
  },
  components: {
    HomeWeb,
    HomeMobile
  },
  mounted() {
    let sUserAgent = navigator.userAgent.toLowerCase();
    let bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    let bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    let bIsMidp = sUserAgent.match(/midp/i) == "midp";
    let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    let bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    let bIsAndroid = sUserAgent.match(/android/i) == "android";
    let bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    let bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
      this.browserRedirect='mobile'
    } else{
      this.browserRedirect='pc'
    }
    
  },
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
