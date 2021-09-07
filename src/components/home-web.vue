<template>
  <div class='home_box'>
    <div class='home_header'>
      <img src='../assets/logo.png' class='logo' />
      <ul class='home_header_tab'>
        <li class='tabHigh'>About Us</li>
        <li>Solution</li>
        <li>Investors & Partners</li>
        <li>Discover</li>
      </ul>
    </div>

    <Index />
    <!-- <AboutUs /> -->
    <!-- <Solution /> -->
    <!-- <Investors /> -->
    <!-- <Discover /> -->
  </div>
</template>

@import  "../../assets/font/DMSans-Medium.ttf";

<script>
import Index from './web/index.vue'
import AboutUs from './web/aboutUs.vue'
import Solution from './web/solution.vue'
import Investors from './web/investors.vue'
import Discover from './web/discover.vue'


export default {
  name: 'index',
  components:{
    Index,
    AboutUs,
    Solution,
    Investors,
    Discover
  }
}
</script>

<style scoped>
  .home_box{
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    overflow:hidden;
    z-index:0;
  }
  .home_header{
    width: 100%;
    height: 6rem;
    border-bottom: 1px solid #EEEEF5;
    position: relative;
    background:black;
    left:0;
    top:0;
    z-index:1;
  }
  .logo{
    width: 10.7rem;
    height: 2.5rem;
    float: left;
    margin-left: 5rem;
    margin-top: 1.75rem;
    cursor: pointer;
    z-index:2
  }
  .home_header_tab{
    float: right;
    margin-right: 2.5rem;
    height:100%
  }
  .home_header_tab li{
    float:left;
    padding:0 1rem;
    height:1.75rem;
    color:white;
    list-style-type:none;
    cursor: pointer;
    line-height:1.75rem;
    margin-top:2.1rem;
    font-size:1.2rem;
    font-family:'DMSans-Medium';
  }
  .tabHigh{
    background: linear-gradient(180deg, #FE4905 0%, #FF7845 100%);
    box-shadow: 0px 10px 30px rgba(254, 73, 5, 0.25);
    border-radius: 22px;
  }
</style>
