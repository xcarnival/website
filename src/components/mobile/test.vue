<template>
  <div class='advisors'>
    <div class='advisors_list'>
      <div>
        <div @click='teamClick(1)'>
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
        <div @click='teamClick(2)'>
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

        <div @click='teamClick(3)'>
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
        <div @click='teamClick(4)'>
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


        <div @click='teamClick(5)'>
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
        <div @click='teamClick(6)'>
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
  .advisors{
    width:100%;
    margin:0;
    padding:0;
    float:left;
  }
  .advisors_list{
    width: 80rem;
    top:12rem;
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
    height:25rem;
  }
  .advisors_list>div>div{
    width: 20rem;
    margin-top: 3rem;
    margin-right:5rem;
    text-align:center;
  }
  .advisors_list>div>div:hover b{
    color:#FE4905;
  }
  .advisors_list>div>div:hover span{
    color:#FE4905;
  }
  .advisors_list>div>div>img{
    width:14rem;
    height:14rem;
    border-radius: 7rem;
    object-fit:cover;
    margin:0 auto;
  }
  
  .advisors_list>div>div>b{
    font-family: 'Georgia';
    font-size: 3rem;
    width:100%;
    text-align:center;
    float:left;
    margin:0;
    line-height:6rem;
  }
  .advisors_list>div>div>span{
    font-family: 'DMSans-Medium';
    font-size: 2.2rem;
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
    width:20rem;
    height:100%;
    display:inline-block;
    text-align:center;
    float:left;
  }
  .team_introduce>div:nth-child(2){
    width:calc(100% - 20rem);
    display:inline-block;
    height:100%;
    float:left;
    background:#F2F2F3;
    padding: 0 2rem;
    text-align:left;
    font-size:1.6rem;
    box-sizing:border-box;
  }
  .team_introduce>div>img{
    width:14rem;
    height:14rem;
    border-radius: 7rem;
    object-fit:cover;
    margin-top:3rem;
  }
  
  .team_introduce>div>b{
    font-family: 'Georgia';
    font-size: 3rem;
    width:100%;
    text-align:center;
    float:left;
    margin:0;
    line-height:6rem;
  }
  .team_introduce>div>span{
    font-family: 'DMSans-Medium';
    font-size: 2.2rem;
    width:100%;
    display:block;
    text-align:center;
  }
  .team_introduce>div>p{
    margin-top:2.2rem;
    line-height:2rem;
    font-family: 'Georgia';
  }
  .team_introduce>span{
    position:absolute;
    display:block;
    right:0;
    bottom:0;
    width:2rem;
    height:2rem;
    text-align:center;
    line-height:1.8rem;
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
</style>
