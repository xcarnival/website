<template>
  <div class='solution'>
    <img src='../../assets/ic_down_m.png' class="ic_down" :class="activeClass?'ic_active':'ic_hide'" @click='nextSwiper'>
    <swiper ref="mySwiper" :options="swiperOptions" class='swiper-grid swiper_box ' >
      <swiperSlide class='swiperSlide'>
        <div class='swiper_list'>
          <div class='swiper_list_introduce'>
            <h1>Pain Points of current lending markets</h1>
            <b></b>
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
          <div class='swiper_list_introduce swiper_list_introduce2'>
            <h1>Solution</h1>
            <h1>Matrix</h1>
            <b></b>
            <h2>XBroker</h2>
            <p>XCarnival's original time-limited auction clearing mechanism. The pledge model is optimized for special types of assets with extremely poor liquidity, such as NFTs.</p>
            <h2>Megabox</h2>
            <p>Allows users to unlock the liquidation of their long-tail assets which have relatively limited liquidity (such as Altcoins and LPs).</p>
            <img class='aboutUsImg' src='../../assets/solutionImg.png' />    
          </div>
        </div>  
      </swiperSlide>
      <swiperSlide class='swiperSlide'>
        <div class='swiper_list3'>
          <h1>XCarnival’s <br /> 4 Competitive Advances</h1>
          <div class='swiper_list_solution'>
            <div >
              <div><span>1</span><b></b></div>
              <p>XCarnival’s products could be used for lending and pledging of all kinds of NFTs, including celebrity NFTs,Virtual identity, financial NFTs, and Loyalty NFTs. Its third-party platform operating model can contain the risks within each transaction, so as to avoid systemic risks and bad debts.</p>
            </div>
            <div>
              <div><span>2</span><b></b></div>
              <p>XCarnival believes “Everything is collateralized”, which is in line with the development of Metaverse. XCarnival is already working with Metaverse projects to provide liquidity, such as the exclusive lending and pledging services for USM’s NFTs in the metaverse.</p>
            </div>
            <div>
              <div><span>3</span><b></b></div>
              <p>Through its mining mechanism, the XCarnival platform allows users to form a habit with NFT pledging and lending, which is one of the first in the industry, with first-to-market advantages.</p>
            </div>
            <div>
              <div><span>4</span><b></b></div>
              <p>With rapid development of the NFT market, lending & Pledging is the infrastructure of the industry, with huge potentials and demand.</p>
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
    }
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

<style scoped>
  
  .ic_down{
    position:fixed;
    width:0.35rem;
    height:0.35rem;
    left:50%;
    margin-left:-0.175rem;
    bottom:0.3rem;
    z-index: 2;
    animation: icDownTranslate 2s infinite;
  }
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
  
    .solution{
      width:100%;
      position:absolute;
      left:0;
      top:0.66rem;
      bottom:0;
      overflow:hidden;
    }
    .swiper_list{
      position:absolute;
      overflow:hidden;  
      height:100%;
      width:100%;
      left:0;
      top:0;
      background:white;
    }
    .swiper_list3{
      width:100%;
      position:relative;
      bottom:0;
      top:0;
      height:100%;
      background:white;
      overflow-y:scroll;
      padding-bottom:0.5rem;
    }
    .aboutUsImg{
      width:100%;
      margin-top:0.2rem;
      object-fit:cover;
    }
    .aboutUsImg2{
      height:90%;
    }
    .swiper_list>div{
      text-align:center;
      position:relative;
      width:100%;
      float:left;
      display:inline-block;
      height:100%;
      box-sizing:border-box;
    }
    .swiper_list_introduce{
      padding-top:0.2rem;
    }
    .swiper_list3>h1{
      width:calc(100% - 0.32rem);
      margin-left:0.16rem;
      font-size:0.26rem;
      line-height:0.3rem;
      font-weight:bold;
      text-align:left;
      font-family:'Georgia';
      margin-top:0.2rem;
    }
    .swiper_list3>b{
      margin: 0.2rem 0;
      border-bottom:0.03rem solid black;
      display:block;
      width: 2.2rem;
    }
    .swiper_list_introduce>h1{
      width:calc(100% - 0.32rem);
      margin-left:0.16rem;
      font-size:0.26rem;
      line-height:0.3rem;
      font-weight:bold;
      text-align:left;
      font-family:'Georgia';
    }
    .swiper_list_introduce>p{
      
      font-size:0.12rem;
      width:calc(100% - 0.32rem);
      margin:0.1rem 0 0.1rem 0.16rem;
      text-align:left;
      line-height:0.2rem;
      font-family:'DMSans-Regular';
      float:left;
    }
    .swiper_list_introduce>div{
      margin-top: 0.1rem;
      border-bottom: 0.03rem solid black;
      position:relative;
      display:inline-block;
      line-height:0.3rem;
      float:left;
      font-size:0.16rem;
      font-weight:bold;
      font-family:'DMSans-Medium';
      text-indent: 0.16rem;
    }
    .swiper_list_introduce>b{
      margin: 0.1rem 0;
      border-bottom:0.03rem solid black;
      display:block;
      width: 2.2rem;
    }
    .swiper_list_introduce>h2{
      width:calc(100% - 0.32rem);
      margin-left:0.16rem;
      font-size:0.14rem;
      font-weight:bold;
      line-height:0.3rem;
      text-align:left;
      font-family:'DMSans-Regular';
    }
    
    
    .swiper_list3_charts{
      position:absolute;
      width:calc(100% - 0.32rem);
      height:80%;
      margin-left:0.16rem;
      bottom:0;
      padding-top:30px;
    }
    .swiper_list3_charts>div{
      width:20%;
      border-left:1px dashed #9D9DA8 ;
      height:100%;
      display:inline-block;
      float:left;
      box-sizing:border-box;
      position:relative;
      display:flex;
      flex-direction: column-reverse;
      align-items:flex-end;
    }
    .swiper_list3_charts>div h3{
      display: block;
      width:80%;
      font-size:0.14rem;
      font-weight:bold;
      font-family:'DMSans-Medium';
    }
    .swiper_list3_charts>div div{
      box-sizing:border-box;
      width: 100%;
      position:relative;
      margin-top: 0.2rem;
      font-family:'DMSans-Medium';
    }
    .swiper_list3_charts>div:nth-child(1) div{
      background: #FE4905;
      height:30%;
    }
    .swiper_list3_charts>div:nth-child(2) div{
      background: #F96209;
      height:55%;
    }
    .swiper_list3_charts>div:nth-child(3) div{
      background: #F4740B;
      height:78%;
    }
    .swiper_list3_charts>div:nth-child(4) div{
      background: #F68906;
      height:85%;
    }
    .swiper_list3_charts>div:nth-child(5) div{
      background: #FFA604;
      height:100%;
      margin-top:0;
    }
    .swiper_list3_charts>div:nth-child(5) h3{
      position:absolute;
      top:-0.6rem;
    }
    .swiper_list3_charts>div p{
      display:list-item; 
      list-style-type:disc; 
      margin-left:0.15rem;
      color:white;
      font-size:0.08rem;
      font-weight:bold;
    }
    
    .swiperSlide{
      width:100%;
      position:relative;
      left:0;
      top:0;
    }
    .swiper-wrapper{
      flex-wrap:wrap !important;
    }
    .swiper-container {
      width: 100%;
      height: 100%;
      margin-left: auto;
      margin-right: auto;
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
    .swiper_list_solution{
      width:calc(100% - 0.16rem);
      margin-left:0.16rem;
    }
    .swiper_list_solution>div{
      width:100%;
      margin-top:0.2rem;
    }
    .swiper_list_solution>div>div{
      height:0.25rem;
      width:100%;
      position:relative;
    }
    .swiper_list_solution>div>div span{
      display:inline-block;
      width:0.25rem;
      height:0.25rem;
      border-radius: 0.125rem;
      background:#EEEEEE;
      text-align:center;
      line-height:0.25rem;
      font-size:0.14rem;
      float:left;
      font-family:'DMSans-Medium';
    }
    .swiper_list_solution>div>div b{
      width:calc(100% - 0.35rem);
      float:right;
      height:0.01rem;
      margin-top:0.12rem;
      background:#FE4905;
      font-family:'DMSans-Medium';
    }
    .swiper_list_solution>div p{
      font-size:0.12rem;
      font-family:'DMSans-Medium';
      width:calc(100% - 0.16rem);
      display:block;
    }


  
</style>
