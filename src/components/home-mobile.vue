<template>
  <div class='home_box'>
    <div class='home_header'>
      <div class='home_header_div'>
        <div class='home_header_left'>
          <img src='../assets/logo.png' class='logo' @click='tabFun(0)' />
        </div>
        <div @click='openList()' v-if="menuToggle" class='home_header_right'>
          <img src='../assets/ic_menu.png' class='menu' />
        </div>
        <div @click='openList()' v-else class='home_header_right'>
          <img src='../assets/ic_close.png' class='menu' />
        </div>
      </div>
    </div>
    <ul class='home_tab' v-if="!menuToggle">
      <li @click='tabFun(1)' :class="[tabIndex == 1 ? 'tabHigh' : '']">About Us</li>
      <li @click='tabFun(2)' :class="[tabIndex == 2 ? 'tabHigh' : '']">Solution</li>
      <!-- <li @click='tabFun(3)' :class="[tabIndex == 3 ? 'tabHigh' : '']">Team</li> -->
      <li @click='tabFun(4)' :class="[tabIndex == 4 ? 'tabHigh' : '']">Investors & Partners</li>
      <li @click='tabFun(5)' :class="[tabIndex == 5 ? 'tabHigh' : '']">Discover</li>
      <li @click='tabFun(6)' >Launch APP</li>
    </ul>
    
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
import Index from './mobile/index.vue'
import AboutUs from './mobile/aboutUs.vue'
import Solution from './mobile/solution.vue'
import Investors from './mobile/investors.vue'
import Discover from './mobile/discover.vue'
import Team from './mobile/team.vue'


export default {
  name: 'index',
  data(){
    return{
      tabIndex:0,
      menuToggle:true
    }
  },
  methods: {
    tabFun(i){
      this.menuToggle = true;
      if(i == 6){
        window.open('https://app.xcarnival.fi')
      }else{
        this.tabIndex = i;
      }
    },
    openList(){
      this.menuToggle = !this.menuToggle;
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

@import  "../../assets/DMSans-Medium.ttf";

<style scoped>
  .home_box{
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    z-index:0;
  }
  .home_header{
    position:relative;
    top:0;
    left:0;
    width:100%;
    height:0.66rem;
		overflow:hidden;
  }
  .home_header_div{
    position:fixed;
    top:0;
    left:0;
    width: 100%;
    height: 0.66rem;
    border-bottom: 1px solid #EEEEF5;
    z-index:10;
    background: black;
  }
  .home_header_div .logo{
    width: 1;
    height: 0.25rem;
    margin-left: 0.1rem;
    margin-top: 0.3rem;
    float:left;
  }
  .home_header_div .menu{
    float:right;
    margin-right:0.1rem;
    margin-top:0.3rem;
    width:0.2rem;
    height:0.2rem;
  }
  .home_header_left{
    display:inline-block;
    width:30%;
    height:100%;
    float:left;
  }
  .home_header_right{
    display:inline-block;
    width:30%;
    height:90%;
    float:right;
  }
  .home_tab{
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    background:black;
    box-sizing:border-box;
    z-index:9;
    padding-top:0.66rem;
  }
  .home_tab>li{
    width:100%;
    text-align:center;
    color: #D6D6D6;
    font-size:0.24rem;
    font-family:'DMSans-Medium';
    font-weight:bold;
    margin-top:0.6rem;
  }
  .home_content{
    position:absolute;
    top:0;
    bottom:0;
    width:100%;
  }
  .tabHigh{
    color: #FE4905 !important;
  }
    
</style>
