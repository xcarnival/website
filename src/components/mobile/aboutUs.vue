<template>
  <div class='aboutUs'>
    <img src='../../assets/ic_down_m.png' class="ic_down" :class="activeClass?'ic_active':'ic_hide'" @click='nextSwiper'>
    <swiper ref="mySwiper" :options="swiperOptions" class='swiper-grid' >
      <swiperSlide class='swiperSlide'>
        <div class='swiper_list'>
          <div class='swiper_list_introduce'>
            <h1>What's</h1>
            <h1>XCarnival?</h1>
            <p>XCarnival: A Metaverse Assets Liquidity Aggregator for Everyone</p>
            <div>Unique Value Proposition</div>
            <p>XCarnival offers innovative liquidity solutions for varieties of NFT assets and long- tail crypto assets.</p>
            <img class='aboutUsImg' src='../../assets/aboutUsImg1.png' />
          </div>
        </div>  
      </swiperSlide>
      <swiperSlide class='swiperSlide'>
        <div class='swiper_list'>
          <div class='swiper_list_introduce swiper_list_introduce2'>
            <h1>The Vision</h1>
            <b></b>
            <h2>Everything is Collateral</h2>
            <p>Regardless of whether they are NFTs or altcoins with liquidity issues, valuable assets require sustainable solutions for unlocking liquidity. We have solved that.</p>
            <h2>Evolvable Metaverse Lending solution</h2>
            <p>Our evolution is your evolution. Metaverse Epoch is coming with unpredictable formsOur highly-flexible solution will fit the requirements of Metaverse.</p>
            <img class='aboutUsImg' src='../../assets/aboutUsImg2.png' />
          </div>
        </div>
      </swiperSlide>
      <swiperSlide class='swiperSlide'>
        <div class='swiper_list3'>
          <h1>Roadmap</h1>
          <b></b>
          <div class='swiper_list3_charts'>
            <div>
              <div>
                <p>Concept Creation</p>
                <p>Team Construction</p>
                <p>Idea Optimization</p>
              </div>
              <h3>2020 <br />Q4</h3>
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
              <h3>2021 <br />Q1</h3>
            </div>
            <div>
              <div>
                <p>Develop collateral ratio evaluation model with price trace function</p>
                <p>Develop the liquidation mechanism of normal crypto assets (altcoins) and abnormal crypto assets(NFTs)</p>
                <p>Develop the time-limited auction clearing mechanism</p>
                <p>XBroker function developed</p>
              </div>
              <h3>2021 <br />Q2</h3>
            </div>
            <div>
              <div>
                <p>Smart Contract audit</p>
                <p>Bounty program set up</p>
                <p>Testnet launch on BSC chain</p>
                <p>NFT mystery box design</p>
                <p>Mainnet launch and Farming launch</p>
              </div>
              <h3>2021 <br />Q3</h3>
            </div>
            <div>
              <div>
                <p>Multi-chain develop and deploy - ETH L2 solution</p>
                <p>DAO build up</p>
                <p>Cex listing</p>
                <p>Loyalty NFT system build up</p>
                <p>Xbroker V2 development</p>
              </div>
              <h3>2021 <br />Q4</h3>
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
        direction: 'vertical',
        effect:"slide",
        loop:true,
        speed: 1500,
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
  
    .aboutUs{
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
      font-size:0.36rem;
      line-height:0.36rem;
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
      font-size:0.36rem;
      line-height:0.36rem;
      font-weight:bold;
      text-align:left;
      font-family:'Georgia';
    }
    .swiper_list_introduce>p{
      font-size:0.14rem;
      width:calc(100% - 0.32rem);
      margin-left:0.16rem;
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
      margin: 0.2rem 0;
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


  
</style>
