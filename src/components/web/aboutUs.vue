<template>
  <div class='aboutUs'>
    <img src='../../assets/ic_down.svg' class="ic_up" :class="activeClass?'ic_active':'ic_hide'" @click='prevSwiper'>
    <img src='../../assets/ic_down.svg' class="ic_down" :class="activeClass?'ic_active':'ic_hide'" @click='nextSwiper'>
    <swiper ref="mySwiper" :options="swiperOptions" class='swiper-grid swiper_box ' >
    <!-- swiper-no-swiping -->
      <swiperSlide class='swiperSlide'>
        <div class='swiper_list'>
          <div class='swiper_list_introduce'>
            <h1>What's</h1>
            <h1>XCarnival?</h1>
            <p>XCarnival: A Metaverse Assets Liquidation Aggregator for Everyone</p>
            <div>Unique Value Proposition</div>
            <p>XCarnival offers innovative liquidation solutions for varieties of NFT assets and long- tail crypto assets.</p>
          </div>
          <div>
            <img class='aboutUsImg' src='../../assets/aboutUsImg1.png' />
          </div>
        </div>  
      </swiperSlide>
      <swiperSlide class='swiperSlide'>
        <div class='swiper_list'>
          <div>
            <img class='aboutUsImg2' src='../../assets/aboutUsImg2.png' />
          </div>
          <div class='swiper_list_introduce swiper_list_introduce2'>
            <h1>The Vision</h1>
            <b></b>
            <h2>Everything is Collateral</h2>
            <p>Regardless of whether they are NFTs or altcoins with liquidity issues, valuable assets require sustainable solutions for unlocking liquidity. We have solved that.</p>
            <h2>Evolvable Metaverse<br/>Lending solution</h2>
            <p>Our evolution is your evolution. Metaverse Epoch is coming with unpredictable formsOur highly-flexible solution will fit the requirements of Metaverse.</p>
          </div>
        </div>
      </swiperSlide>
      <swiperSlide class='swiperSlide'>
        <div class='swiper_list3'>
          <h1>Roadmap</h1>
          <div class='swiper_list3_charts'>
            <div>
              <div>
                <p>Concept Creation</p>
                <p>Team Construction</p>
                <p>Idea Optimization</p>
              </div>
              <h3>2020 Q4</h3>
            </div>
            <div>
              <div>
                <p>Verify the main logistic of the project</p>
                <p>Design the main structure of XCarnival</p>
                <p>Develop the smart contract for mainstream asset
                  <br /> collateral
                </p>
                <p>Megabox function developed</p>
              </div>
              <h3>2021 Q1</h3>
            </div>
            <div>
              <div>
                <p>Develop collateral ratio evaluation model with price trace function</p>
                <p>Develop the liquidation mechanism of normal crypto assets (altcoins) and abnormal crypto assets(NFTs)</p>
                <p>Develop the time-limited auction clearing mechanism</p>
                <p>XBroker function developed</p>
              </div>
              <h3>2021 Q2</h3>
            </div>
            <div>
              <div>
                <p>Smart Contract audit</p>
                <p>Bounty program set up</p>
                <p>Testnet launch on BSC chain</p>
                <p>NFT mystery box design</p>
                <p>Mainnet launch and Farming launch</p>
              </div>
              <h3>2021 Q3</h3>
            </div>
            <div>
              <div>
                <p>Multi-chain develop and deploy - ETH L2 solution</p>
                <p>DAO build up</p>
                <p>Cex listing</p>
                <p>Loyalty NFT system build up</p>
                <p>Xbroker V2 development</p>
              </div>
              <h3>2021 Q4</h3>
            </div>
          </div>
        </div>
      </swiperSlide>
    </swiper>
  </div>
</template>

@import  "../../assets/Georgia.ttf";
@import  "../../assets/DMSans-Regular.ttf";
@import  "../../assets/DMSans-Medium.ttf";

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
let that;
export default {
  name: 'aboutUs',
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
        effect:"slide",
        loop:true,
        speed: 1500,
        // autoplay: {
        //   disableOnInteraction: false,
        //   delay: 3000,
        //   stopOnLastSlide: false,
        // },
        on:{
          slideChange: function(){
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
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    that=this;
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
  
  @media (max-width: 1680px){
    .aboutUs{
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
    }
    .aboutUsImg{
      width:100;
      height:100%;
      margin-top:20px;
      object-fit:cover;
    }
    .aboutUsImg2{
      height:90%;
    }
    .swiper_list>div{
      text-align:center;
      position:relative;
      width:50%;
      float:left;
      display:inline-block;
      height:100%;
      box-sizing:border-box;
    }
    .swiper_list_introduce{
      padding-top:30px;
    }
    .swiper_list_introduce2{
      padding-right:30px;
    }
    .swiper_list_introduce>h1{
      font-size:64px;
      line-height:64px;
      margin:0;
      font-weight:bold;
      text-align:left;
      font-family:'Georgia';
    }
    .swiper_list_introduce>p{
      width:100%;
      font-size:14px;
      text-align:left;
      line-height:21px;
      font-family:'DMSans-Regular';
      float:left;
      font-weight:bold;
    }
    .swiper_list_introduce>div{
      margin-top: 30px;
      border-bottom: 3px solid black;
      display:inline-block;
      line-height:50px;
      float:left;
      font-size:16px;
      font-weight:bold;
      font-family:'DMSans-Medium';
      
    }
    .swiper_list_introduce>b{
      margin-top: 30px;
      border-bottom:3px solid black;
      text-indent: 50px;
      display:block;
      width: 200px;
      
    }
    .swiper_list_introduce>h2{
      margin:40px 0 0 0;
      font-size:30px;
      font-weight:bold;
      line-height:35px;
      text-align:left;
      font-family:'DMSans-Medium';
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
      bottom:100px;
      left:30px;
      z-index:3;
      transform: rotate(180deg);
    }
    
    .swiper_list3>h1{
      font-size:68px;
      margin: 30px 0 0 35px;
      font-weight:bold;
      line-height:70px;
      font-family:'Georgia'
    }
    .swiper_list3_charts{
      position:absolute;
      width:calc(100% - 200px);
      height:80%;
      margin-left:100px;
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
      width:100%;
      text-indent: 10px;
      font-size:20px;
      font-weight:bold;
      font-family:'DMSans-Medium';
    }
    .swiper_list3_charts>div div{
      box-sizing:border-box;
      width: calc(100% + 1px);
      position:relative;
      margin-top: 20px;
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
      top:-40px;
    }
    .swiper_list3_charts>div p{
      display:list-item; 
      list-style-type:disc; 
      margin-left:20px;
      color:white;
      font-size:14px;
      font-weight:bold;
    }
    .swiper_box{
      overflow:hidden;
      position:absolute;
      width:100%;
      left:0;
      top:0;
      bottom:0;
      flex-wrap:wrap;
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
  }
  @media screen and (min-width: 1680px) and (max-width: 1960px){
  .aboutUs{
      width:1680px;
      height:909px;
      position:relative;
      left:50%;
      margin-left:-840px;
      top:50%;
      margin-top:-450px;
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
    }
    .aboutUsImg{
      width:100;
      height:100%;
      margin-top:28px;
      object-fit:cover;
    }
    .aboutUsImg2{
      height:90%;
    }
    .swiper_list>div{
      text-align:center;
      position:relative;
      width:50%;
      float:left;
      display:inline-block;
      height:100%;
      box-sizing:border-box;
    }
    .swiper_list_introduce{
      padding-top:42px;
    }
    .swiper_list_introduce2{
      padding-right:42px;
    }
    .swiper_list_introduce>h1{
      font-size:90px;
      line-height:90px;
      margin:0;
      font-weight:bold;
      text-align:left;
      font-family:'Georgia';
    }
    .swiper_list_introduce>p{
      width:100%;
      font-size:20px;
      text-align:left;
      line-height:29px;
      font-family:'DMSans-Regular';
      float:left;
      font-weight:bold;
    }
    .swiper_list_introduce>div{
      margin-top: 42px;
      border-bottom: 4px solid black;
      display:inline-block;
      line-height:70px;
      float:left;
      font-size:22px;
      font-weight:bold;
      font-family:'DMSans-Medium';
      
    }
    .swiper_list_introduce>b{
      margin-top: 42px;
      border-bottom:4px solid black;
      text-indent: 70px;
      display:block;
      width: 280px;
      
    }
    .swiper_list_introduce>h2{
      margin:56px 0 0 0;
      font-size:42px;
      font-weight:bold;
      line-height:49px;
      text-align:left;
      font-family:'DMSans-Medium';
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
      top:100px;
      z-index:3;
      transform: rotate(180deg);
    }
    
    .swiper_list3>h1{
      font-size:95px;
      margin: 42px 0 0 49px;
      font-weight:bold;
      line-height:98px;
      font-family:'Georgia'
    }
    .swiper_list3_charts{
      position:absolute;
      width:calc(100% - 280px);
      height:80%;
      margin-left:140px;
      bottom:0;
      padding-top:42px;
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
      width:100%;
      text-indent: 14px;
      font-size:28px;
      font-weight:bold;
      font-family:'DMSans-Medium';
    }
    .swiper_list3_charts>div div{
      box-sizing:border-box;
      width: calc(100% + 1px);
      position:relative;
      margin-top: 28px;
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
      top:-56px;
    }
    .swiper_list3_charts>div p{
      display:list-item; 
      list-style-type:disc; 
      margin-left:28px;
      color:white;
      font-size:20px;
      font-weight:bold;
    }
    .swiper_box{
      overflow:hidden;
      position:absolute;
      width:100%;
      left:0;
      top:0;
      bottom:0;
      flex-wrap:wrap;
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
  }
  @media (min-width: 1960px){
    .aboutUs{
      width:1920px;
      height:960px;
      position:relative;
      left:50%;
      margin-left:-960px;
      overflow:hidden;
      top:50%;
      margin-top:-480px;
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
    }
    .aboutUsImg{
      width:100;
      height:100%;
      margin-top:32px;
      object-fit:cover;
    }
    .aboutUsImg2{
      height:90%;
    }
    .swiper_list>div{
      text-align:center;
      position:relative;
      width:50%;
      float:left;
      display:inline-block;
      height:100%;
      box-sizing:border-box;
    }
    .swiper_list_introduce{
      padding-top:48px;
    }
    .swiper_list_introduce2{
      padding-right:48px;
    }
    .swiper_list_introduce>h1{
      font-size:102px;
      line-height:102px;
      margin:0;
      font-weight:bold;
      text-align:left;
      font-family:'Georgia';
    }
    .swiper_list_introduce>p{
      width:100%;
      font-size:22px;
      text-align:left;
      line-height:34px;
      font-family:'DMSans-Regular';
      float:left;
      font-weight:bold;
    }
    .swiper_list_introduce>div{
      margin-top: 48px;
      border-bottom: 5px solid black;
      display:inline-block;
      line-height:80px;
      float:left;
      font-size:26px;
      font-weight:bold;
      font-family:'DMSans-Medium';
      
    }
    .swiper_list_introduce>b{
      margin-top: 48px;
      border-bottom:5px solid black;
      text-indent: 80px;
      display:block;
      width: 320px;
      
    }
    .swiper_list_introduce>h2{
      margin:64px 0 0 0;
      font-size:48px;
      font-weight:bold;
      line-height:56px;
      text-align:left;
      font-family:'DMSans-Medium';
    }
    .ic_down{
      position:fixed;
      width:96px;
      height:96px;
      left:48px;
      bottom:48px;
      z-index:3;
    }
    .ic_up{
      position:fixed;
      width:96px;
      height:96px;
      left:48px;
      top:120px;
      z-index:3;
      transform: rotate(180deg);
    }
    
    .swiper_list3>h1{
      font-size:109px;
      margin: 48px 0 0 56px;
      font-weight:bold;
      line-height:112px;
      font-family:'Georgia'
    }
    .swiper_list3_charts{
      position:absolute;
      width:calc(100% - 320px);
      height:80%;
      margin-left:160px;
      bottom:0;
      padding-top:48px;
    }
    .swiper_list3_charts>div{
      width:20%;
      border-left:2px dashed #9D9DA8 ;
      
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
      width:100%;
      text-indent: 16px;
      font-size:32px;
      font-weight:bold;
      font-family:'DMSans-Medium';
    }
    .swiper_list3_charts>div div{
      box-sizing:border-box;
      width: calc(100% + 2px);
      position:relative;
      margin-top: 32px;
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
      top:-64px;
    }
    .swiper_list3_charts>div p{
      display:list-item; 
      list-style-type:disc; 
      margin-left:32px;
      color:white;
      font-size:22px;
      font-weight:bold;
    }
    .swiper_box{
      overflow:hidden;
      position:absolute;
      width:100%;
      left:0;
      top:0;
      bottom:0;
      flex-wrap:wrap;
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
  }


  
</style>
