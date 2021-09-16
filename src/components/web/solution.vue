<template>
  <div class='solution'>
    <img src='../../assets/ic_down.svg' class="ic_down" :class="activeClass?'ic_active':'ic_hide'" @click='nextSwiper'>
    <!-- <img src='../../assets/ic_down.svg' class="ic_up" :class="activeClass?'ic_active':'ic_hide'" @click='prevSwiper'> -->
    <swiper ref="mySwiper" :options="swiperOptions" class='swiper-grid swiper_box ' >
    <!-- swiper-no-swiping -->
      <swiperSlide class='swiperSlide'>
        <div class='swiper_list'>
          <div class='swiper_list_line'>
            <span>
              Pain Points of current lending markets
            </span>
          </div>
          <div class='swiper_list_introduce'>
            <h2>NFT as collateral? Not Accepted</h2>
            <p>NFTs can not be used as collateral.
              <br />Everybody knows NFT is amazing, NFT is the key foundation for Metaverse but currently almost no lending platforms treat NFTs as stable and valuable assets.
            </p>
            <h2>AltCoins? Too Risky</h2>
            <p>Huge value are locked in Altcoins but refused as the collateral.
    New projects are born everyday, their tokens are trading. However people can hardly find a place to unlock the liquidity of these assets due to the risk aversion of current lending platforms.</p>
            <h2>Big Change? No</h2>
            <p>Lending industry develops fast but incumbent players are slow to catch up. Most of current lending platforms are used to stable business models with few motivations to take big innovation. Taking traditional funds into the crypto is a safe direction but people also need solutions flexible enough to fit the changing trends and requirements needed.</p>
          </div>
        </div>  
      </swiperSlide>
      <swiperSlide class='swiperSlide'>
        <div class='swiper_list swiper_list2'>
          <div>
            <img class='aboutUsImg2' src='../../assets/solutionImg.png' />    
          </div>
          <div class='swiper_list_introduce swiper_list_introduce2'>
            <h1>Solution</h1>
            <h1>Matrix</h1>
            <b></b>
            <h2>XBroker</h2>
            <p>XCarnival's original time-limited auction clearing mechanism. The pledge model is optimized for special types of assets with extremely poor liquidity, such as NFTs.</p>
            <h2>Megabox</h2>
            <p>Allows users to unlock the liquidation of their long-tail assets which have relatively limited liquidity (such as Altcoins and LPs).</p>
          </div>
        </div>  
      </swiperSlide>
      <swiperSlide class='swiperSlide'>
        <div class='swiper_list3'>
          <h1>XCarnival’s</h1>
          <h1>4 Competitive Advances</h1>
          <div class='swiper_list_solution'>
            <div >
              <span>1</span>
              <div>XCarnival’s products could be used for lending and pledging of all kinds of NFTs, including celebrity NFTs,Virtual identity, financial NFTs, and Loyalty NFTs. Its third-party platform operating model can contain the risks within each transaction, so as to avoid systemic risks and bad debts.</div>
            </div>
            <div>
              <span>2</span>
              <div>XCarnival believes “Everything is collateralized”, which is in line with the development of Metaverse. XCarnival is already working with Metaverse projects to provide liquidity, such as the exclusive lending and pledging services for USM’s NFTs in the metaverse.</div>
            </div>
            <div>
              <span>3</span>
              <div>Through its mining mechanism, the XCarnival platform allows users to form a habit with NFT pledging and lending, which is one of the first in the industry, with first-to-market advantages.</div>
            </div>
            <div>
              <span>4</span>
              <div>With rapid development of the NFT market, lending & Pledging is the infrastructure of the industry, with huge potentials and demand.</div>
            </div>
          </div>
        </div>
      </swiperSlide>
    </swiper>
    
    
    
  </div>
</template>

@import  "../../assets/Georgia.ttf";
@import  "../../assets/DMSans-Medium.ttf";
@import  "../../assets/DMSans-Regular.ttf";


<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
let that;

export default {
  name: 'solution',
  props: {},
  components:{
    swiper, swiperSlide
  },
  data(){
    return{
      activeClass:true,
      swiperOptions: {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        loop:true,
        speed: 1000,
        mousewheel:true,
        // autoplay: {
        //   disableOnInteraction: false,
        //   delay: 2000,
        //   stopOnLastSlide: false,
        // },
        on:{
          slideChange: function(){
            console.log('开始滑动')
            that.activeClass = false;
            setTimeout(() => {
              that.activeClass = true;
            }, 1500);
          },  
        }
      }
    }
  },
  methods: {
    nextSwiper(){
      this.swiper.slideNext()
    },
    prevSwiper(){
      this.swiper.slidePrev()
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    that = this;
    console.log(this.swiper)
    
  }
}
</script>

<!-- .ic_down{
    animation: icDownTranslate 2s infinite;
  } -->
<style scoped>
  
  @keyframes icDownTranslate {
    0% {
        transform: translate(0px, 0px);
    }
    50% {
        transform: translate(0px, -10px);
    }
    100% {
        transform: translate(0px, 0px);
    }
  }
  @media (max-width: 1200px){
    .solution{
      width:960px;
      height:480px;
      position:relative;
      left:50%;
      margin-left:-480px;
      overflow:hidden;
      top:50%;
      margin-top:-240px;
    }
    .swiper_list{
      width:100%;
      position:absolute;
      bottom:0;
      top:0;
      background:white;
    }
    .aboutUsImg{
      height:100%;
      margin-top:40px;
    }
    .aboutUsImg2{
      width:80%;
      float:right
    }
    .swiper_list>div{
      position:relative;
      width:50%;
      float:left;
      display:inline-block;
      height:90%;
      margin-top:3%;
      box-sizing:border-box;
    }
    .swiper_list_line{
      border-right:2px solid black;
    }
    .swiper_list>div>span{
      font-size:51px;
      line-height:54px;
      font-weight: bold;
      margin-left:40px;
      margin-left:8px;
      display:block;
      font-family:'Georgia'
    }
    
    .swiper_list_introduce2{
      padding-right:24px;
    }
    .swiper_list_introduce>h1{
      font-size:51px;
      line-height:64px;
      margin:0;
      text-indent:16px;
      font-weight:bold;
      text-align:left;
      font-family:'Georgia'
    }
    .swiper_list_introduce>h2{
      font-size:24px;
      line-height:40px;
      margin:0;
      text-indent:16px;
      font-weight:bold;
      text-align:left;
      font-family:'DMSans-Medium'
    }
    .swiper_list_introduce>p{
      margin-left:16px;
      font-size:11px;
      text-align:left;
      line-height:16px;
      float:left;
      font-weight:bold;
      font-family:'DMSans-Medium'
    }
    .swiper_list_introduce>div{
      margin-top: 24px;
      border-bottom: 2px solid black;
      text-indent: 40px;
      display:inline-block;
      line-height:40px;
      float:left;
      font-size:13px;
      font-weight:bold;
    }
    .swiper_list_introduce>b{
      margin-top: 24px;
      margin-bottom: 24px;
      border-bottom:2px solid black;
      text-indent: 40px;
      display:block;
      width: 160px;
      margin-left:16px;
    }
    
    .swiper_list_introduce2>h2{
      margin-left:0;
    }
    .ic_down{
      position:fixed;
      width:60px;
      height:60px;
      left:24px;
      bottom:24px;
      z-index:3;
    }
    .ic_up{
      position:fixed;
      width:60px;
      height:60px;
      left:24px;
      bottom:100px;
      z-index:3;
      transform: rotate(180deg);
    }
    
    .advisors_list{
      width: calc(100% - 112px);
      margin-left: 40px;
      height:100%;
      display:flex;
      flex-flow:row wrap;
      justify-content:space-between;
    }
    .advisors_list>div img{
      height:100%;
    }
    .advisors_list>div{
      width: calc(calc(100% - 16px)/3);
      height: 49%;
    }
    .swiper_list3{
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      background:white;
    }
    .swiper_list3>h1{
      font-size:51px;
      line-height:64px;
      font-weight: bold;
      width:100%;
      text-align:center;
      font-family:'Georgia'
    }
    .swiper_list_solution{
      width: 720px;
      position:absolute;
      bottom:0;
      left:50%;
      margin-left:-360px;
      height: 60%;
      display:flex;
      flex-flow:row wrap;
      justify-content:space-between;
      margin-top:16px;
    }
    .swiper_list_solution>div{
      width: calc(calc(100% - 16px)/2);
      height: 40%;
      display:inline-block;
      float:left;
    }
    .swiper_list_solution>div>span{
      width: 48px;
      height: 48px;
      margin-right:16px;
      border-radius:24px;
      background: #EEEEF5;
      text-align:center;
      line-height: 48px;
      font-size: 24px;
      color: #9D9DA8;
      display: inline-block;
      float:left;
    }
    .swiper_list_solution>div>div{
      font-size: 11px;
      line-height: 18px;
      float:left;
      display:inline-block;
      width:calc(100% - 64px);
      font-family:'DMSans-Medium'
    }
    .swiperSlide{
      width:100%;
      position:relative;
      left:0;
      top:0;
    }
    .swiper_box{
      position:absolute;
      width:100%;
      left:0;
      top:0;
      bottom:0;
      flex-wrap:wrap;
    }
    .ic_active{
      opacity:1;
      transition: opacity 0.5s;
    }
    .ic_hide{
      opacity:0;
      transition: opacity 0.1s;
    }
  }
  @media screen and (min-width: 1200px) and (max-width: 1680px){
    .solution{
      width:1200px;
      height:600px;
      position:relative;
      left:50%;
      margin-left:-600px;
      overflow:hidden;
      top:50%;
      margin-top:-300px;
    }
    .swiper_list{
      width:100%;
      position:absolute;
      bottom:0;
      top:0;
      background:white;
    }
    .aboutUsImg{
      height:100%;
      margin-top:50px;
    }
    .aboutUsImg2{
      width:80%;
      float:right
    }
    .swiper_list>div{
      position:relative;
      width:50%;
      float:left;
      display:inline-block;
      height:90%;
      margin-top:3%;
      box-sizing:border-box;
    }
    .swiper_list_line{
      border-right:3px solid black;
    }
    .swiper_list>div>span{
      font-size:64px;
      line-height:68px;
      font-weight: bold;
      margin-left:50px;
      margin-left:10px;
      display:block;
      font-family:'Georgia'
    }
    
    .swiper_list_introduce2{
      padding-right:30px;
    }
    .swiper_list_introduce>h1{
      font-size:64px;
      line-height:80px;
      margin:0;
      text-indent:20px;
      font-weight:bold;
      text-align:left;
      font-family:'Georgia'
    }
    .swiper_list_introduce>h2{
      font-size:30px;
      line-height:50px;
      margin:0;
      text-indent:20px;
      font-weight:bold;
      text-align:left;
      font-family:'DMSans-Medium'
    }
    .swiper_list_introduce>p{
      margin-left:20px;
      font-size:14px;
      text-align:left;
      line-height:20px;
      float:left;
      font-weight:bold;
      font-family:'DMSans-Medium'
    }
    .swiper_list_introduce>div{
      margin-top: 30px;
      border-bottom: 3px solid black;
      text-indent: 50px;
      display:inline-block;
      line-height:50px;
      float:left;
      font-size:16px;
      font-weight:bold;
    }
    .swiper_list_introduce>b{
      margin-top: 30px;
      margin-bottom: 30px;
      border-bottom:3px solid black;
      text-indent: 50px;
      display:block;
      width: 200px;
      margin-left:20px;
    }
    
    .swiper_list_introduce2>h2{
      margin-left:0;
    }
    .ic_down{
      position:fixed;
      width:60px;
      height:60px;
      left:30px;
      bottom:30px;
      z-index:3;
    }
    .ic_up{
      position:fixed;
      width:60px;
      height:60px;
      left:30px;
      bottom:130px;
      z-index:3;
      transform: rotate(180deg);
    }
    
    .advisors_list{
      width: calc(100% - 140px);
      margin-left: 50px;
      height:100%;
      display:flex;
      flex-flow:row wrap;
      justify-content:space-between;
    }
    .advisors_list>div img{
      height:100%;
    }
    .advisors_list>div{
      width: calc(calc(100% - 20px)/3);
      height: 49%;
    }
    .swiper_list3{
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      background:white;
    }
    .swiper_list3>h1{
      font-size:64px;
      line-height:80px;
      font-weight: bold;
      width:100%;
      text-align:center;
      font-family:'Georgia'
    }
    .swiper_list_solution{
      width: 900px;
      position:absolute;
      bottom:0;
      left:50%;
      margin-left:-450px;
      height: 60%;
      display:flex;
      flex-flow:row wrap;
      justify-content:space-between;
      margin-top:20px;
    }
    .swiper_list_solution>div{
      width: calc(calc(100% - 20px)/2);
      height: 40%;
      display:inline-block;
      float:left;
    }
    .swiper_list_solution>div>span{
      width: 60px;
      height: 60px;
      margin-right:20px;
      border-radius:30px;
      background: #EEEEF5;
      text-align:center;
      line-height: 60px;
      font-size: 30px;
      color: #9D9DA8;
      display: inline-block;
      float:left;
    }
    .swiper_list_solution>div>div{
      font-size: 14px;
      line-height: 22px;
      float:left;
      display:inline-block;
      width:calc(100% - 80px);
      font-family:'DMSans-Medium'
    }
    .swiperSlide{
      width:100%;
      position:relative;
      left:0;
      top:0;
    }
    .swiper_box{
      position:absolute;
      width:100%;
      left:0;
      top:0;
      bottom:0;
      flex-wrap:wrap;
    }
    .ic_active{
      opacity:1;
      transition: opacity 0.5s;
    }
    .ic_hide{
      opacity:0;
      transition: opacity 0.1s;
    }
  }
  @media screen and (min-width: 1680px) and (max-width: 1960px){
    .solution{
      width:1680px;
      height:840px;
      position:relative;
      left:50%;
      margin-left:-840px;
      overflow:hidden;
      top:50%;
      margin-top:-420px;
    }
    .swiper_list{
      width:100%;
      position:absolute;
      bottom:0;
      top:0;
      background:white;
    }
    .aboutUsImg{
      height:100%;
      margin-top:70px;
    }
    .aboutUsImg2{
      width:80%;
      float:right
    }
    .swiper_list>div{
      position:relative;
      width:50%;
      float:left;
      display:inline-block;
      height:90%;
      margin-top:3%;
      box-sizing:border-box;
    }
    .swiper_list_line{
      border-right:4px solid black;
    }
    .swiper_list>div>span{
      font-size:90px;
      line-height:95px;
      font-weight: bold;
      margin-left:70px;
      margin-left:14px;
      display:block;
      font-family:'Georgia'
    }
    
    .swiper_list_introduce2{
      padding-right:42px;
    }
    .swiper_list_introduce>h1{
      font-size:90px;
      line-height:112px;
      margin:0;
      text-indent:28px;
      font-weight:bold;
      text-align:left;
      font-family:'Georgia'
    }
    .swiper_list_introduce>h2{
      font-size:42px;
      line-height:70px;
      margin:0;
      text-indent:28px;
      font-weight:bold;
      text-align:left;
      font-family:'DMSans-Medium'
    }
    .swiper_list_introduce>p{
      margin-left:28px;
      font-size:20px;
      text-align:left;
      line-height:28px;
      float:left;
      font-weight:bold;
      font-family:'DMSans-Medium'
    }
    .swiper_list_introduce>div{
      margin-top: 42px;
      border-bottom: 4px solid black;
      text-indent: 70px;
      display:inline-block;
      line-height:70px;
      float:left;
      font-size:22px;
      font-weight:bold;
    }
    .swiper_list_introduce>b{
      margin-top: 42px;
      margin-bottom: 42px;
      border-bottom:4px solid black;
      text-indent: 70px;
      display:block;
      width: 280px;
      margin-left:28px;
    }
    
    .swiper_list_introduce2>h2{
      margin-left:0;
    }
    .ic_down{
      position:fixed;
      width:60px;
      height:60px;
      left:42px;
      bottom:42px;
      z-index:3;
    }
    .ic_up{
      position:fixed;
      width:60px;
      height:60px;
      left:42px;
      bottom:100px;
      z-index:3;
      transform: rotate(180deg);
    }
    
    .advisors_list{
      width: calc(100% - 196px);
      margin-left: 70px;
      height:100%;
      display:flex;
      flex-flow:row wrap;
      justify-content:space-between;
    }
    .advisors_list>div img{
      height:100%;
    }
    .advisors_list>div{
      width: calc(calc(100% - 28px)/3);
      height: 49%;
    }
    .swiper_list3{
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      background:white;
    }
    .swiper_list3>h1{
      font-size:90px;
      line-height:112px;
      font-weight: bold;
      width:100%;
      text-align:center;
      font-family:'Georgia'
    }
    .swiper_list_solution{
      width: 1260px;
      position:absolute;
      bottom:0;
      left:50%;
      margin-left:-630px;
      height: 60%;
      display:flex;
      flex-flow:row wrap;
      justify-content:space-between;
      margin-top:28px;
    }
    .swiper_list_solution>div{
      width: calc(calc(100% - 28px)/2);
      height: 40%;
      display:inline-block;
      float:left;
    }
    .swiper_list_solution>div>span{
      width: 84px;
      height: 84px;
      margin-right:28px;
      border-radius:42px;
      background: #EEEEF5;
      text-align:center;
      line-height: 84px;
      font-size: 42px;
      color: #9D9DA8;
      display: inline-block;
      float:left;
    }
    .swiper_list_solution>div>div{
      font-size: 20px;
      line-height: 31px;
      float:left;
      display:inline-block;
      width:calc(100% - 112px);
      font-family:'DMSans-Medium'
    }
    .swiperSlide{
      width:100%;
      position:relative;
      left:0;
      top:0;
    }
    .swiper_box{
      position:absolute;
      width:100%;
      left:0;
      top:0;
      bottom:0;
      flex-wrap:wrap;
    }
    .ic_active{
      opacity:1;
      transition: opacity 0.5s;
    }
    .ic_hide{
      opacity:0;
      transition: opacity 0.1s;
    }
  }
  @media (min-width: 1960px){
    .solution{
      width:1915px;
      height:958px;
      position:relative;
      left:50%;
      margin-left:-958px;
      overflow:hidden;
      top:50%;
      margin-top:-479px;
    }
    .swiper_list{
      width:100%;
      position:absolute;
      bottom:0;
      top:0;
      background:white;
    }
    .aboutUsImg{
      height:100%;
      margin-top:80px;
    }
    .aboutUsImg2{
      width:80%;
      float:right
    }
    .swiper_list>div{
      position:relative;
      width:50%;
      float:left;
      display:inline-block;
      height:90%;
      margin-top:3%;
      box-sizing:border-box;
    }
    .swiper_list_line{
      border-right:5px solid black;
    }
    .swiper_list>div>span{
      font-size:103px;
      line-height:108px;
      font-weight: bold;
      margin-left:80px;
      margin-left:16px;
      display:block;
      font-family:'Georgia'
    }
    
    .swiper_list_introduce2{
      padding-right:48px;
    }
    .swiper_list_introduce>h1{
      font-size:103px;
      line-height:128px;
      margin:0;
      text-indent:32px;
      font-weight:bold;
      text-align:left;
      font-family:'Georgia'
    }
    .swiper_list_introduce>h2{
      font-size:48px;
      line-height:80px;
      margin:0;
      text-indent:32px;
      font-weight:bold;
      text-align:left;
      font-family:'DMSans-Medium'
    }
    .swiper_list_introduce>p{
      margin-left:32px;
      font-size:23px;
      text-align:left;
      line-height:32px;
      float:left;
      font-weight:bold;
      font-family:'DMSans-Medium'
    }
    .swiper_list_introduce>div{
      margin-top: 48px;
      border-bottom: 5px solid black;
      text-indent: 80px;
      display:inline-block;
      line-height:80px;
      float:left;
      font-size:25px;
      font-weight:bold;
    }
    .swiper_list_introduce>b{
      margin-top: 48px;
      margin-bottom: 48px;
      border-bottom:5px solid black;
      text-indent: 80px;
      display:block;
      width: 319px;
      margin-left:32px;
    }
    
    .swiper_list_introduce2>h2{
      margin-left:0;
    }
    .ic_down{
      position:fixed;
      width:60px;
      height:60px;
      left:48px;
      bottom:48px;
      z-index:3;
    }
    .ic_up{
      position:fixed;
      width:60px;
      height:60px;
      left:48px;
      bottom:118px;
      z-index:3;
      transform: rotate(180deg);
    }
    
    .advisors_list{
      width: calc(100% - 223px);
      margin-left: 80px;
      height:100%;
      display:flex;
      flex-flow:row wrap;
      justify-content:space-between;
    }
    .advisors_list>div img{
      height:100%;
    }
    .advisors_list>div{
      width: calc(calc(100% - 32px)/3);
      height: 49%;
    }
    .swiper_list3{
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      background:white;
    }
    .swiper_list3>h1{
      font-size:103px;
      line-height:128px;
      font-weight: bold;
      width:100%;
      text-align:center;
      font-family:'Georgia'
    }
    .swiper_list_solution{
      width: 1436px;
      position:absolute;
      bottom:0;
      left:50%;
      margin-left:-718px;
      height: 60%;
      display:flex;
      flex-flow:row wrap;
      justify-content:space-between;
      margin-top:32px;
    }
    .swiper_list_solution>div{
      width: calc(calc(100% - 32px)/2);
      height: 40%;
      display:inline-block;
      float:left;
    }
    .swiper_list_solution>div>span{
      width: 96px;
      height: 96px;
      margin-right:32px;
      border-radius:48px;
      background: #EEEEF5;
      text-align:center;
      line-height: 96px;
      font-size: 48px;
      color: #9D9DA8;
      display: inline-block;
      float:left;
    }
    .swiper_list_solution>div>div{
      font-size: 23px;
      line-height: 35px;
      float:left;
      display:inline-block;
      width:calc(100% - 128px);
      font-family:'DMSans-Medium'
    }
    .swiperSlide{
      width:100%;
      position:relative;
      left:0;
      top:0;
    }
    .swiper_box{
      position:absolute;
      width:100%;
      left:0;
      top:0;
      bottom:0;
      flex-wrap:wrap;
    }
    .ic_active{
      opacity:1;
      transition: opacity 0.5s;
    }
    .ic_hide{
      opacity:0;
      transition: opacity 0.1s;
    }
  }
  
</style>
