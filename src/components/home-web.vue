<template>
  <div class='home_box'>
    <div class='home_header'>
      <div class='home_header_div'>
        <img src='../assets/logo.png' class='logo' @click='tabFun(0)' />
          <ul class='home_header_tab'>
            <li @click='tabFun(1)' :class="[tabIndex == 1 ? 'tabHigh' : '']">About Us</li>
            <li @click='tabFun(2)' :class="[tabIndex == 2 ? 'tabHigh' : '']">Solution</li>
            <!-- <li @click='tabFun(3)' :class="[tabIndex == 3 ? 'tabHigh' : '']">Team</li> -->
            <li @click='tabFun(4)' :class="[tabIndex == 4 ? 'tabHigh' : '']">Investors & Partners</li>
            <li @click='tabFun(5)' :class="[tabIndex == 5 ? 'tabHigh' : '']">Discover</li>
          </ul>
      </div>
    </div>
    
    <div class='home_content'>
      <Index v-if='tabIndex == 0' />
      <AboutUs v-else-if='tabIndex == 1' />
      <Solution v-else-if='tabIndex == 2' />
      <Team v-else-if='tabIndex == 3' />
      <Investors v-else-if='tabIndex == 4' />
      <Discover v-else-if='tabIndex == 5' />
    </div>
  </div>
</template>

@import  "../../assets/DMSans-Medium.ttf";

<script>
import Index from './web/index.vue'
import AboutUs from './web/aboutUs.vue'
import Solution from './web/solution.vue'
import Investors from './web/investors.vue'
import Discover from './web/discover.vue'
import Team from './web/team.vue'


export default {
  name: 'index',
  data(){
    return{
      tabIndex:0
    }
  },
  methods: {
    tabFun(i){
      this.tabIndex = i;
    }
  },
  components:{
    Index,
    AboutUs,
    Solution,
    Investors,
    Discover,
    Team
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
    z-index:0;
  }
  
  @media screen and (min-width: 800px) and (max-width: 1200px){
    .home_header{
      width: 100%;
      height: 42px;
      position: relative;
      background:black;
      left:0;
      top:0;
      z-index:1;
    }
    .home_header_div{
      width:800px;
      margin:0 auto;
    }
    .logo{
      width: 75px;
      height: 18px;
      float: left;
      margin-top: 13px;
      cursor: pointer;
      z-index:2
    }
    .home_header_tab{
      float: right;
      margin-right: 35px;
      height:100%
    }
    .home_header_tab li{
      float:left;
      padding:0 11px;
      height:13px;
      color:white;
      list-style-type:none;
      cursor: pointer;
      line-height:13px;
      margin-top:15px;
      font-size:12px;
      font-family:'DMSans-Medium';
    }
    .tabHigh{
      background: linear-gradient(180deg, #FE4905 0%, #FF7845 100%);
      box-shadow: 0px 7px 21px rgba(254, 73, 5, 0.25);
      border-radius: 15px;
    }
    .home_content{
      position:absolute;
      top:42px;
      bottom:0;
      width:100%;
      left:0;
      overflow:hidden;
    }
  }
  @media screen and (min-width: 1200px) and (max-width: 1680px){
    .home_header{
      width: 100%;
      height: 60px;
      position: relative;
      background:black;
      left:0;
      top:0;
      z-index:1;
    }
    .home_header_div{
      width:1200px;
      margin:0 auto;
    }
    .logo{
      width: 107px;
      height: 25px;
      float: left;
      margin-top: 18px;
      cursor: pointer;
      z-index:2
    }
    .home_header_tab{
      float: right;
      margin-right: 50px;
      height:100%
    }
    .home_header_tab li{
      float:left;
      padding:0 15px;
      height:18px;
      color:white;
      list-style-type:none;
      cursor: pointer;
      line-height:18px;
      margin-top:21px;
      font-size: 16px;
      font-family:'DMSans-Medium';
    }
    .tabHigh{
      background: linear-gradient(180deg, #FE4905 0%, #FF7845 100%);
      box-shadow: 0px 10px 30px rgba(254, 73, 5, 0.25);
      border-radius: 22px;
    }
    .home_content{
      position:absolute;
      top:60px;
      bottom:0;
      width:100%;
      left:0;
      overflow:hidden;
    }
  }
  @media screen and (min-width: 1680px) and (max-width: 1960px){
    .home_header{
      width: 100%;
      height: 84px;
      position: relative;
      background:black;
      left:0;
      top:0;
      z-index:1;
    }
    .home_header_div{
      width:1680px;
      margin:0 auto;
    }
    .logo{
      width: 150px;
      height: 35px;
      float: left;
      margin-top: 25px;
      cursor: pointer;
      z-index:2
    }
    .home_header_tab{
      float: right;
      margin-right: 70px;
      height:100%
    }
    .home_header_tab li{
      float:left;
      padding:0 21px;
      height:25px;
      color:white;
      list-style-type:none;
      cursor: pointer;
      line-height:25px;
      margin-top:29px;
      font-size:20px;
      font-family:'DMSans-Medium';
    }
    .tabHigh{
      background: linear-gradient(180deg, #FE4905 0%, #FF7845 100%);
      box-shadow: 0px 14px 42px rgba(254, 73, 5, 0.25);
      border-radius: 31px;
    }
    .home_content{
      position:absolute;
      top:84px;
      bottom:0;
      width:100%;
      left:0;
      overflow:hidden;
    }
  }
  @media (min-width: 1960px){
    .home_header{
      width: 100%;
      height: 96px;
      position: relative;
      background:black;
      left:0;
      top:0;
      z-index:1;
    }
    .home_header_div{
      width:1960px;
      margin:0 auto;
    }
    .logo{
      width: 171px;
      height: 40px;
      float: left;
      margin-top: 29px;
      cursor: pointer;
      z-index:2
    }
    .home_header_tab{
      float: right;
      margin-right: 80px;
      height:100%
    }
    .home_header_tab li{
      float:left;
      padding:0 24px;
      height:29px;
      color:white;
      list-style-type:none;
      cursor: pointer;
      line-height:29px;
      margin-top:34px;
      font-size:24px;
      font-family:'DMSans-Medium';
    }
    .tabHigh{
      background: linear-gradient(180deg, #FE4905 0%, #FF7845 100%);
      box-shadow: 0px 16px 48px rgba(254, 73, 5, 0.25);
      border-radius: 35px;
    }
    .home_content{
      position:absolute;
      top:96px;
      bottom:0;
      width:100%;
      left:0;
      overflow:hidden;
    }
  }
  
</style>
