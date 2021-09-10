<template>
  <div class='advisors'>
    <div class='advisors_list'>
      <div>
        <div @mouseover='teamClick(1)' @mouseout='closeIntroduce()'>
          <img src='../../assets/team/team_member_leon.png' />
          <b>Leon LIU</b>
          <span>CEO</span>
          <div class='team_introduce' :class="teamIndex == 1 ? 'team_introduceActive' : 'team_introduceHide'" >
            <div>
              <img src='../../assets/team/team_member_leon.png' />
              <b>Leon LIU</b>
              <span>CEO</span>
            </div>
            <div>
              <p>Serial entrepreneur in Australia, Hong Kong, Mainland China, and Japan</p>
              <p>Early Blockchain investor and senior DeFi expert</p>
              <p>COO of Australia's largest cross- border payment finance company</p>
              <p>Founder of Australia’s first fully compliant blockchain fund</p>
              <p>Founder of the largest BSC Chinese community
              <br/>-BroLeon - with 20K active members</p>
            </div>
            <span @click.stop='closeIntroduce()'><img  src='../../assets/ic_close.png'/></span>
          </div>
        </div>
        <div @mouseover='teamClick(2)' @mouseout='closeIntroduce()'>
          <img src='../../assets/team/team_member_vivi.png' />
          <b>Vivi LIN</b>
          <span>CMO</span>
          <div class='team_introduce' :class="teamIndex == 2 ? 'team_introduceActive' : 'team_introduceHide'">
            <div>
              <img src='../../assets/team/team_member_vivi.png' />
              <b>Vivi LIN</b>
              <span>CMO</span>
            </div>
            <div>
              <p>Global media personality, crypto influencer and marketing expert. </p>
              <p>Well-known Innovation advisor between Silicon Valley and China.</p>
            </div>
            <span @click.stop='closeIntroduce()'><img  src='../../assets/ic_close.png'/></span>
          </div>
        </div>

        <div @mouseover='teamClick(3)' @mouseout='closeIntroduce()'>
          <img src='../../assets/team/team_member_scott.png' />
          <b>Scott HAN</b>
          <span>Financial Director</span>
          <div class='team_introduce ' :class="teamIndex == 3 ? 'team_introduceActive' : 'team_introduceHide'">
            <div>
              <img src='../../assets/team/team_member_scott.png' />
              <b>Scott HAN</b>
              <span>Financial Director</span>
            </div>
            <div>
             <p>Business analyst in Macquarie Investment Bank and Federal Bank. </p>
              <p>Senior structure builder of global OTC derivatives transaction models and risk control system.</p>
            </div>
            <span @click.stop='closeIntroduce()'><img  src='../../assets/ic_close.png'/></span>
          </div>
        </div>
      </div>

      <div>
        <div @mouseover='teamClick(4)' @mouseout='closeIntroduce()'>
          <img src='../../assets/team/team_member_alan.png' />
          <b>Alan MA</b>
          <span>CTO</span>
          <div class='team_introduce' :class="teamIndex == 4 ? 'team_introduceActive' : 'team_introduceHide'">
            <div>
              <img src='../../assets/team/team_member_alan.png' />
              <b>Alan MA</b>
              <span>CTO</span>
            </div>
            <div>
            <p>Former CTO of Kcash, with 10 years of technology research and development experience in blockchain industry.</p>
            </div>
            <span @click.stop='closeIntroduce()'><img  src='../../assets/ic_close.png'/></span>
          </div>
          
        </div>


        <div @mouseover='teamClick(5)' @mouseout='closeIntroduce()'>
          <img src='../../assets/team/team_advisor_eric.png' />
          <b>Eric ZHENG</b>
          <span>Professor</span>
          <div class='team_introduce' :class="teamIndex == 5 ? 'team_introduceActive' : 'team_introduceHide'">
            <div>
              <img src='../../assets/team/team_advisor_eric.png' />
              <b>Eric ZHENG</b>
              <span>Professor</span>
            </div>
            <div>
              <p>Professor of information system. </p>
              <p>PhD,University of Pennsylvania. </p>
              <p>Devoted to information technology innovation research in data mining and social media analytics. </p>
            </div>
            <span @click.stop='closeIntroduce()'><img  src='../../assets/ic_close.png'/></span>
          </div>
          
        </div>
        <div @mouseover='teamClick(6)' @mouseout='closeIntroduce()'>
          <img src='../../assets/team/team_advisor_gieno.png' />
          <b>Gieno MIAO</b>
          <span>Chief Scientist</span>
          <div class='team_introduce' :class="teamIndex == 6 ? 'team_introduceActive' : 'team_introduceHide'">
            <div>
              <img src='../../assets/team/team_advisor_gieno.png' />
              <b>Gieno MIAO</b>
              <span>Chief Scientist</span>
            </div>
            <div>
              <p>Founder of Quantiex and chief crypto advisor for Asia Digital Bank.  </p>
              <p>Formerly, CTO of JMU and CTO of Heima. </p>
              <p>Senior Director of Amazon, Alibaba and Microsoft, Thomson Reuters.</p>
            </div>
            <span @click.stop='closeIntroduce()'><img  src='../../assets/ic_close.png'/></span>
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
  @media (max-width: 1200px){
    .advisors{
      width:960px;
      height:480px;
      position:relative;
      left:50%;
      margin-left:-480px;
      overflow:hidden;
      top:50%;
      margin-top:-240px;
    }
    .advisors_list{
      width: 640px;
      top:96px;
      margin: 0 auto;
      overflow:hidden;
    }
    .advisors_list>div{
      position:relative;
      left:0;
      top:0;
      display:flex;
      flex-flow:row wrap;
      justify-content:space-between;
      height:200px;
    }
    .advisors_list>div>div{
      width: 160px;
      margin-top: 24px;
      margin-right:40px;
      text-align:center;
    }
    .advisors_list>div>div:hover b{
      color:#FE4905;
    }
    .advisors_list>div>div:hover span{
      color:#FE4905;
    }
    .advisors_list>div>div>img{
      width:112px;
      height:112px;
      border-radius: 56px;
      object-fit:cover;
      margin:0 auto;
    }
    
    .advisors_list>div>div>b{
      font-family: 'Georgia';
      font-size: 24px;
      width:100%;
      text-align:center;
      float:left;
      margin:0;
      line-height:48px;
    }
    .advisors_list>div>div>span{
      font-family: 'DMSans-Medium';
      font-size: 18px;
      width:100%;
      display:block;
      text-align:center;
    }
    .team_introduce{
      position:absolute;
      left:-100%;
      top:0;
      bottom:0;
      background:white;
      width:100%;
      height:100%;
      overflow:hidden;
    }
    .team_introduce>div:nth-child(1){
      width:160px;
      height:100%;
      display:inline-block;
      text-align:center;
      float:left;
    }
    .team_introduce>div:nth-child(2){
      width:calc(100% - 160px);
      display:inline-block;
      height:100%;
      float:left;
      background:#F2F2F3;
      padding: 0 16px;
      text-align:left;
      font-size:13px;
      box-sizing:border-box;
    }
    .team_introduce>div>img{
      width:112px;
      height:112px;
      border-radius: 56px;
      object-fit:cover;
      margin-top:24px;
    }
    
    .team_introduce>div>b{
      font-family: 'Georgia';
      font-size: 24px;
      width:100%;
      text-align:center;
      float:left;
      margin:0;
      line-height:48px;
    }
    .team_introduce>div>span{
      font-family: 'DMSans-Medium';
      font-size: 18px;
      width:100%;
      display:block;
      text-align:center;
    }
    .team_introduce>div>p{
      margin-top:18px;
      line-height:16px;
      font-family: 'Georgia';
    }
    .team_introduce>span{
      position:absolute;
      display:block;
      right:0;
      bottom:0;
      width:16px;
      height:16px;
      text-align:center;
      line-height:14px;
      color:white;
      background:#FE4905;
      z-index:2
    }
    .team_introduce>span>img{
      width:60%;
    }
    .team_introduceActive{
      left:0;
      transition: left 1s;
    }
    .team_introduceHide{
      left:-100%;
      
      transition: left 0.5s;
    }
  }
  @media screen and (min-width: 1200px) and (max-width: 1680px){
    .advisors{
      width:1200px;
      height:600px;
      position:relative;
      left:50%;
      margin-left:-600px;
      overflow:hidden;
      top:50%;
      margin-top:-300px;
    }
    .advisors_list{
      width: 800px;
      top:120px;
      margin: 0 auto;
      overflow:hidden;
    }
    .advisors_list>div{
      position:relative;
      left:0;
      top:0;
      display:flex;
      flex-flow:row wrap;
      justify-content:space-between;
      height:250px;
    }
    .advisors_list>div>div{
      width: 200px;
      margin-top: 30px;
      margin-right:50px;
      text-align:center;
    }
    .advisors_list>div>div:hover b{
      color:#FE4905;
    }
    .advisors_list>div>div:hover span{
      color:#FE4905;
    }
    .advisors_list>div>div>img{
      width:140px;
      height:140px;
      border-radius: 70px;
      object-fit:cover;
      margin:0 auto;
    }
    
    .advisors_list>div>div>b{
      font-family: 'Georgia';
      font-size: 30px;
      width:100%;
      text-align:center;
      float:left;
      margin:0;
      line-height:60px;
    }
    .advisors_list>div>div>span{
      font-family: 'DMSans-Medium';
      font-size: 22px;
      width:100%;
      display:block;
      text-align:center;
    }
    .team_introduce{
      position:absolute;
      left:-100%;
      top:0;
      bottom:0;
      background:white;
      width:100%;
      height:100%;
      overflow:hidden;
    }
    .team_introduce>div:nth-child(1){
      width:200px;
      height:100%;
      display:inline-block;
      text-align:center;
      float:left;
    }
    .team_introduce>div:nth-child(2){
      width:calc(100% - 200px);
      display:inline-block;
      height:100%;
      float:left;
      background:#F2F2F3;
      padding: 0 20px;
      text-align:left;
      font-size:16px;
      box-sizing:border-box;
    }
    .team_introduce>div>img{
      width:140px;
      height:140px;
      border-radius: 70px;
      object-fit:cover;
      margin-top:30px;
    }
    
    .team_introduce>div>b{
      font-family: 'Georgia';
      font-size: 30px;
      width:100%;
      text-align:center;
      float:left;
      margin:0;
      line-height:60px;
    }
    .team_introduce>div>span{
      font-family: 'DMSans-Medium';
      font-size: 22px;
      width:100%;
      display:block;
      text-align:center;
    }
    .team_introduce>div>p{
      margin-top:22px;
      line-height:20px;
      font-family: 'Georgia';
    }
    .team_introduce>span{
      position:absolute;
      display:block;
      right:0;
      bottom:0;
      width:20px;
      height:20px;
      text-align:center;
      line-height:18px;
      color:white;
      background:#FE4905;
      z-index:2
    }
    .team_introduce>span>img{
      width:60%;
    }
    .team_introduceActive{
      left:0;
      transition: left 1s;
    }
    .team_introduceHide{
      left:-100%;
      
      transition: left 0.5s;
    }
  }
  @media screen and (min-width: 1680px) and (max-width: 1960px){
    .advisors{
      width:1680px;
      height:840px;
      position:relative;
      left:50%;
      margin-left:-840px;
      overflow:hidden;
      top:50%;
      margin-top:-420px;
    }
    .advisors_list{
      width: 1120px;
      top:168px;
      margin: 0 auto;
      overflow:hidden;
    }
    .advisors_list>div{
      position:relative;
      left:0;
      top:0;
      display:flex;
      flex-flow:row wrap;
      justify-content:space-between;
      height:350px;
    }
    .advisors_list>div>div{
      width: 280px;
      margin-top: 42px;
      margin-right:70px;
      text-align:center;
    }
    .advisors_list>div>div:hover b{
      color:#FE4905;
    }
    .advisors_list>div>div:hover span{
      color:#FE4905;
    }
    .advisors_list>div>div>img{
      width:196px;
      height:196px;
      border-radius: 98px;
      object-fit:cover;
      margin:0 auto;
    }
    
    .advisors_list>div>div>b{
      font-family: 'Georgia';
      font-size: 42px;
      width:100%;
      text-align:center;
      float:left;
      margin:0;
      line-height:84px;
    }
    .advisors_list>div>div>span{
      font-family: 'DMSans-Medium';
      font-size: 31px;
      width:100%;
      display:block;
      text-align:center;
    }
    .team_introduce{
      position:absolute;
      left:-100%;
      top:0;
      bottom:0;
      background:white;
      width:100%;
      height:100%;
      overflow:hidden;
    }
    .team_introduce>div:nth-child(1){
      width:280px;
      height:100%;
      display:inline-block;
      text-align:center;
      float:left;
    }
    .team_introduce>div:nth-child(2){
      width:calc(100% - 280px);
      display:inline-block;
      height:100%;
      float:left;
      background:#F2F2F3;
      padding: 0 28px;
      text-align:left;
      font-size:22px;
      box-sizing:border-box;
    }
    .team_introduce>div>img{
      width:196px;
      height:196px;
      border-radius: 98px;
      object-fit:cover;
      margin-top:42px;
    }
    
    .team_introduce>div>b{
      font-family: 'Georgia';
      font-size: 42px;
      width:100%;
      text-align:center;
      float:left;
      margin:0;
      line-height:84px;
    }
    .team_introduce>div>span{
      font-family: 'DMSans-Medium';
      font-size: 31px;
      width:100%;
      display:block;
      text-align:center;
    }
    .team_introduce>div>p{
      margin-top:31px;
      line-height:28px;
      font-family: 'Georgia';
    }
    .team_introduce>span{
      position:absolute;
      display:block;
      right:0;
      bottom:0;
      width:28px;
      height:28px;
      text-align:center;
      line-height:25px;
      color:white;
      background:#FE4905;
      z-index:2
    }
    .team_introduce>span>img{
      width:60%;
    }
    .team_introduceActive{
      left:0;
      transition: left 1s;
    }
    .team_introduceHide{
      left:-100%;
      
      transition: left 0.5s;
    }
  }
  @media (min-width: 1960px){
    .advisors{
      width:1920px;
      height:960px;
      position:relative;
      left:50%;
      margin-left:-960px;
      overflow:hidden;
      top:50%;
      margin-top:-480px;
    }
    .advisors_list{
      width: 1280px;
      top:192px;
      margin: 0 auto;
      overflow:hidden;
    }
    .advisors_list>div{
      position:relative;
      left:0;
      top:0;
      display:flex;
      flex-flow:row wrap;
      justify-content:space-between;
      height:400px;
    }
    .advisors_list>div>div{
      width: 320px;
      margin-top: 48px;
      margin-right:80px;
      text-align:center;
    }
    .advisors_list>div>div:hover b{
      color:#FE4905;
    }
    .advisors_list>div>div:hover span{
      color:#FE4905;
    }
    .advisors_list>div>div>img{
      width:224px;
      height:224px;
      border-radius: 112px;
      object-fit:cover;
      margin:0 auto;
    }
    
    .advisors_list>div>div>b{
      font-family: 'Georgia';
      font-size: 48px;
      width:100%;
      text-align:center;
      float:left;
      margin:0;
      line-height:96px;
    }
    .advisors_list>div>div>span{
      font-family: 'DMSans-Medium';
      font-size: 35px;
      width:100%;
      display:block;
      text-align:center;
    }
    .team_introduce{
      position:absolute;
      left:-100%;
      top:0;
      bottom:0;
      background:white;
      width:100%;
      height:100%;
      overflow:hidden;
    }
    .team_introduce>div:nth-child(1){
      width:320px;
      height:100%;
      display:inline-block;
      text-align:center;
      float:left;
    }
    .team_introduce>div:nth-child(2){
      width:calc(100% - 320px);
      display:inline-block;
      height:100%;
      float:left;
      background:#F2F2F3;
      padding: 0 32px;
      text-align:left;
      font-size:26px;
      box-sizing:border-box;
    }
    .team_introduce>div>img{
      width:224px;
      height:224px;
      border-radius: 112px;
      object-fit:cover;
      margin-top:48px;
    }
    
    .team_introduce>div>b{
      font-family: 'Georgia';
      font-size: 48px;
      width:100%;
      text-align:center;
      float:left;
      margin:0;
      line-height:96px;
    }
    .team_introduce>div>span{
      font-family: 'DMSans-Medium';
      font-size: 35px;
      width:100%;
      display:block;
      text-align:center;
    }
    .team_introduce>div>p{
      margin-top:35px;
      line-height:32px;
      font-family: 'Georgia';
    }
    .team_introduce>span{
      position:absolute;
      display:block;
      right:0;
      bottom:0;
      width:32px;
      height:32px;
      text-align:center;
      line-height:29px;
      color:white;
      background:#FE4905;
      z-index:2
    }
    .team_introduce>span>img{
      width:60%;
    }
    .team_introduceActive{
      left:0;
      transition: left 1s;
    }
    .team_introduceHide{
      left:-100%;
      
      transition: left 0.5s;
    }
  }
  
</style>
