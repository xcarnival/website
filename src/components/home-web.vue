<template>
  <div class='home_box'>
    <div class='home_header'>
      <img src='../assets/logo.png' class='logo' @click='tabFun(0)' />
      <ul class='home_header_tab'>
        <li @click='tabFun(1)' :class="[tabIndex == 1 ? 'tabHigh' : '']">About Us</li>
        <li @click='tabFun(2)' :class="[tabIndex == 2 ? 'tabHigh' : '']">Solution</li>
        <li @click='tabFun(3)' :class="[tabIndex == 3 ? 'tabHigh' : '']">Investors & Partners</li>
        <li @click='tabFun(4)' :class="[tabIndex == 4 ? 'tabHigh' : '']">Discover</li>
        <li @click='tabFun(5)' :class="[tabIndex == 5 ? 'tabHigh' : '']">Team</li>
      </ul>
    </div>
    
    <div class='home_content'>
      <Index v-if='tabIndex == 0' />
      <AboutUs v-else-if='tabIndex == 1' />
      <Solution v-else-if='tabIndex == 2' />
      <Investors v-else-if='tabIndex == 3' />
      <Discover v-else-if='tabIndex == 4' />
      <Team v-else-if='tabIndex == 5' />
    </div>
  </div>
</template>

@import  "../../assets/font/DMSans-Medium.ttf";

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
      tabIndex:1
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
    margin-right: 5rem;
    height:100%
  }
  .home_header_tab li{
    float:left;
    padding:0 1.5rem;
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
  .home_content{
    position:absolute;
    top:6rem;
    bottom:0;
    width:100%;
    left:0;
    overflow:hidden;
  }
</style>
