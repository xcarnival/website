<template>
  <div class='aboutUs'>
    <img src='../../assets/ic_down.png' class="ic_down" :class="activeClass?'ic_active':'ic_hide'">
    <swiper ref="mySwiper" :options="swiperOptions" class='swiper_box' >
      <swiperSlide class='swiperSlide' style='flex-wrap:wrap'>
        <div class='swiper_list'>
          <div class='swiper_list_introduce'>
            <h1>What's</h1>
            <h1>XCarnival?</h1>
            <p>XCarnival is an aggregator for synthetic decentralized finance (DeFi) assets that provides the masses on-chain exposure to a wide variety of crypto and non-crypto assets.</p>
            <div>Unique Value Proposition</div>
            <p>XCarnival not only provides easy-to-use financial products for users to create synthetic assets in DeFi, but also creates more liquidity in the DeFi market by allowing users to pledge and borrow NFTs and other Altcoin assets without having to sell them</p>
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

@import  "../../assets/font/Georgia.ttf";
@import  "../../assets/font/DMSans-Regular.ttf";
@import  "../../assets/font/DMSans-Medium.ttf";

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
        autoplay: {
          disableOnInteraction: false,
          delay: 3000,
          stopOnLastSlide: false,
        },
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
  .aboutUs{
    width:100%;
    height:100%;
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
    margin-left:20%;
    margin-top:5rem;
    object-fit:cover;
  }
  .aboutUsImg2{
    height:90%;
  }
  .swiper_list>div{
    position:relative;
    width:50%;
    float:left;
    display:inline-block;
    height:100%;
    box-sizing:border-box;
  }
  .swiper_list_introduce{
    padding-top:3rem;
  }
  .swiper_list_introduce2{
    padding-right:3rem;
  }
  .swiper_list_introduce>h1{
    font-size:6.4rem;
    line-height:6.4rem;
    margin:0;
    text-indent:5rem;
    font-weight:bold;
    text-align:left;
    font-family:'Georgia';
  }
  .swiper_list_introduce>p{
    margin-left:5rem;
    font-size:1.4rem;
    text-align:left;
    line-height:2.1rem;
    font-family:'DMSans-Regular';
    float:left;
    font-weight:bold;
  }
  .swiper_list_introduce>div{
    margin-top: 3rem;
    border-bottom: 0.3rem solid black;
    text-indent: 5rem;
    display:inline-block;
    line-height:5rem;
    float:left;
    font-size:1.6rem;
    font-weight:bold;
    font-family:'DMSans-Medium';
    
  }
  .swiper_list_introduce>b{
    margin-top: 3rem;
    border-bottom:3px solid black;
    text-indent: 5rem;
    display:block;
    width: 20rem;
    margin-left:5rem;
  }
  .swiper_list_introduce>h2{
    margin:4rem 0 0 5rem;
    font-size:3rem;
    font-weight:bold;
    line-height:3.5rem;
    text-align:left;
    font-family:'DMSans-Medium';
  }
  .ic_down{
    position:absolute;
    width:80px;
    height:80px;
    left:3rem;
    bottom:3rem;
    z-index:3;
  }
  
  .swiper_list3>h1{
    font-size:6.8rem;
    margin: 3rem 0 0 3.5rem;
    font-weight:bold;
    line-height:7rem;
    font-family:'Georgia'
  }
  .swiper_list3_charts{
    position:absolute;
    width:calc(100% - 20rem);
    height:80%;
    margin-left:10rem;
    bottom:0;
    padding-top:3rem;
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
    font-size:2rem;
    font-weight:bold;
    font-family:'DMSans-Medium';
  }
  .swiper_list3_charts>div div{
    box-sizing:border-box;
    width: calc(100% + 1px);
    position:relative;
    margin-top: 2rem;
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
    height:70%;
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
    top:-4rem;
  }
  .swiper_list3_charts>div p{
    display:list-item; 
    list-style-type:disc; 
    margin-left:2rem;
    color:white;
    font-size:1.4rem;
    font-weight:bold;
  }
  .swiper_box{
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
</style>
