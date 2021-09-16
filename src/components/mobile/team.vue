<template>
  <div class='advisors'>
    <h1>Team</h1>
    <p>Our most professional team</p>
    <b></b>
    <div class='advisors_list'>
      <div>
        <div @mouseover='teamClick(1)' @mouseout='closeIntroduce()'>
          <img src='../../assets/team/team_member_leon.png' />
          <b>Leon LIU</b>
          <span>CEO</span>
          <div class='team_introduce' :class="teamIndex == 1 ? 'team_introduceActive' : 'team_introduceHide'" >
            <h1>Leon LIU</h1>
            <h2>CEO</h2>
            <b></b>
            <p>Serial entrepreneur in Australia, Hong Kong, Mainland China, and Japan</p>
            <p>Early Blockchain investor and senior DeFi expert</p>
            <p>COO of Australia's largest cross- border payment finance company</p>
            <p>Founder of Australia’s first fully compliant blockchain fund</p>
            <span @click.stop='closeIntroduce()'><img  src='../../assets/ic_close2.png'/></span>
          </div>
        </div>
        <div @mouseover='teamClick(2)' @mouseout='closeIntroduce()'>
          <img src='../../assets/team/team_member_vivi.png' />
          <b>Vivi LIN</b>
          <span>CMO</span>
          <div class='team_introduce' :class="teamIndex == 2 ? 'team_introduceActive' : 'team_introduceHide'">
            <h1>Vivi LIN</h1>
            <h2>CMO</h2>
            <b></b>
            <p>Global media personality, crypto influencer and marketing expert. </p>
            <p>Well-known Innovation advisor between Silicon Valley and China.</p>
            <span @click.stop='closeIntroduce()'><img  src='../../assets/ic_close2.png'/></span>
          </div>
        </div>

        <div @mouseover='teamClick(3)' @mouseout='closeIntroduce()'>
          <img src='../../assets/team/team_member_scott.png' />
          <b>Scott HAN</b>
          <span>Financial Director</span>
          <div class='team_introduce ' :class="teamIndex == 3 ? 'team_introduceActive' : 'team_introduceHide'">
              <h1>Scott HAN</h1>
              <h2>Financial Director</h2>
              <b></b>
              <p>Business analyst in Macquarie Investment Bank and Federal Bank. </p>
              <p>Senior structure builder of global OTC derivatives transaction models and risk control system.</p>
              <span @click.stop='closeIntroduce()'><img  src='../../assets/ic_close2.png'/></span>
          </div>
        </div>
        <div @mouseover='teamClick(4)' @mouseout='closeIntroduce()'>
          <img src='../../assets/team/team_member_alan.png' />
          <b>Alan MA</b>
          <span>CTO</span>
          <div class='team_introduce' :class="teamIndex == 4 ? 'team_introduceActive' : 'team_introduceHide'">
            <h1>Alan MA</h1>
            <h2>CTO</h2>
            <b></b>
            <p>Former CTO of Kcash, with 10 years of technology research and development experience in blockchain industry.</p>
            <span @click.stop='closeIntroduce()'><img  src='../../assets/ic_close2.png'/></span>
          </div>
        </div>

        <div @mouseover='teamClick(5)' @mouseout='closeIntroduce()'>
          <img src='../../assets/team/team_advisor_eric.png' />
          <b>Eric ZHENG</b>
          <span>Professor</span>
          <div class='team_introduce' :class="teamIndex == 5 ? 'team_introduceActive' : 'team_introduceHide'">
            <h1>Eric ZHENG</h1>
            <h2>Professor</h2>
            <b></b>
            <p>Professor of information system. </p>
            <p>PhD,University of Pennsylvania. </p>
            <p>Devoted to information technology innovation research in data mining and social media analytics. </p>
            <span @click.stop='closeIntroduce()'><img  src='../../assets/ic_close2.png'/></span>
          </div>
          
        </div>
        <div @mouseover='teamClick(6)' @mouseout='closeIntroduce()'>
          <img src='../../assets/team/team_advisor_gieno.png' />
          <b>Gieno MIAO</b>
          <span>Chief Scientist</span>
          <div class='team_introduce' :class="teamIndex == 6 ? 'team_introduceActive' : 'team_introduceHide'">
            <h1>Gieno MIAO</h1>
            <h2>Chief Scientist</h2>
            <b></b>
            <p>Founder of Quantiex and chief crypto advisor for Asia Digital Bank.  </p>
            <p>Formerly, CTO of JMU and CTO of Heima. </p>
            <p>Senior Director of Amazon, Alibaba and Microsoft, Thomson Reuters.</p>
            <span @click.stop='closeIntroduce()'><img  src='../../assets/ic_close2.png'/></span>
          </div>
        </div>        
      </div>

    </div>
  </div>
</template>

@import  "../../assets/Georgia.ttf";
@import  "../../assets/DMSans-Medium.ttf";

<script>
export default {
  name: 'aboutUs',
  data(){
    return{
      teamIndex:0
    }
  },
  props: {
    
  },
  methods: {
    teamClick(i){
      this.teamIndex = i;
    },
    closeIntroduce(){
      this.teamIndex = 'false';
    }
  },
  components:{
    
  }
}
</script>

<style scoped>
    .advisors{
      width:100%;
      position:absolute;
      left:0;
      top:0.66rem;
      bottom:0;
      overflow-x:hidden;
      overflow-y:scroll;
      padding-bottom:2rem;
    }
    .advisors_list{
      width: calc(100% - 0.32rem);
      margin-left:0.16rem;
      
      height:100%;
    }
    .advisors>h1{
      width:calc(100% - 0.32rem);
      margin-left:0.16rem;
      font-size:0.36rem;
      line-height:0.4rem;
      font-weight:bold;
      text-align:left;
      font-family:'Georgia';
      margin-top:0.2rem;
    }
    .advisors>p{
      color:#D6D6D6;
      font-size:0.16rem;
      margin: 0 0 0 0.16rem;
    }
    .advisors>b{
      margin: 0.1rem 0;
      border-bottom:0.03rem solid black;
      display:block;
      width: 2.2rem;
    }
    .advisors_list>div{
      position:relative;
      left:0;
      top:0;
      display:flex;
      flex-flow:row wrap;
      justify-content:space-between;
      width:100%;
    }
    .advisors_list>div>div{
      width: 1.6rem;
      margin-top: 0.24rem;
      text-align:center;
    }
   
    .advisors_list>div>div>img{
      width:1.6rem;
      height:1.6rem;
      border-radius: 0.8rem;
      object-fit:cover;
      margin:0 auto;
    }
    
    .advisors_list>div>div>b{
      font-family: 'Georgia';
      font-size: 0.18rem;
      width:100%;
      text-align:center;
      float:left;
      margin:0;
      line-height:0.4rem;
    }
    .advisors_list>div>div>span{
      font-family: 'DMSans-Medium';
      font-size: 0.18rem;
      width:100%;
      display:block;
      text-align:center;
    }
    .team_introduce{
      position:fixed;
      left:0;
      top:0.66rem;
      bottom:0;
      background:#FE4905;
      width:100%;
      height:100%;
      overflow:hidden;
      display:none;
      opacity:0;
    }
    
    .team_introduceActive{
      opacity: 1;
      transition: opacity 1s;
      display:block;
    }
    .team_introduceHide{
      opacity: 0;
      display:none;
      transition: opacity 0.5s;
    }
    
    .team_introduce>h1{
      width:calc(100% - 0.32rem);
      margin-left:0.16rem;
      font-size:0.36rem;
      line-height:0.4rem;
      font-weight:bold;
      text-align:left;
      font-family:'Georgia';
      margin-top:0.2rem;
      color:white;
    }
    .team_introduce>h2{
      color:white;
      font-size:0.16rem;
      margin: 0 0 0 0.16rem;
      text-align:left;
      font-weight:bold;
    }
    .team_introduce>b{
      margin: 0.1rem 0;
      border-bottom:0.03rem solid white;
      display:block;
      width: 2.2rem;
    }
    .team_introduce>p{
      font-size:0.14rem;
      color:white;
      margin-top:0.2rem;
      text-align:left;
      width:calc(100% - 0.32rem);
      margin-left:0.16rem;
      font-family:'DMSans-Medium';
    }
    .team_introduce>span img{
      position:fixed;
      width:0.35rem;
      height:0.35rem;
      border-radius:0.175rem;
      position:absolute;
      left:50%;
      margin-left:-0.175rem;
      bottom:1rem;
    }
    
  
  
  
  
</style>
