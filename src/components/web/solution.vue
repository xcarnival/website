<template>
  <div class='aboutUs'>
    <!-- <div class='swiper_list'>
      <div class='swiper_list_line'>
        <span>
          Pain Points of current lending markets
        </span>
        <img src='../../assets/ic_down.png' class="ic_down">
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
    </div> -->
    <!-- <div class='swiper_list swiper_list2'>
      <div>
        <img class='aboutUsImg2' src='../../assets/solutionImg.png' />
        <img src='../../assets/ic_down.png' class="ic_down">    
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
    </div> -->
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
  </div>
</template>

@import  "../../assets/font/Georgia.ttf";
@import  "../../assets/font/DMSans-Medium.ttf";
@import  "../../assets/font/DMSans-Regular.ttf";


<script>

// import { Swiper } from 'swiper';
// import 'swiper/css';

export default {
  name: 'aboutUs',
  props: {
    
  },
  components:{
    // Swiper
  }
}
</script>

<style scoped>
  .aboutUs{
    width:100%;
    bottom:0;
    left:0;
    top:6rem;
    position:absolute;
    margin:0;
    padding:0;
    float:left;
  }
  .swiper_list{
    width:100%;
    position:absolute;
    bottom:0;
    top:0;
  }
  .aboutUsImg{
    height:100%;
    margin-top:5rem;
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
    font-size:6.4rem;
    line-height:6.8rem;
    font-weight: bold;
    margin-left:5rem;
    margin-left:1rem;
    display:block;
    font-family:'Georgia'
  }
  
  .swiper_list_introduce2{
    padding-right:3rem;
  }
  .swiper_list_introduce>h1{
    font-size:6.4rem;
    line-height:8rem;
    margin:0;
    text-indent:2rem;
    font-weight:bold;
    text-align:left;
    font-family:'Georgia'
  }
  .swiper_list_introduce>h2{
    font-size:3rem;
    line-height:5rem;
    margin:0;
    text-indent:2rem;
    font-weight:bold;
    text-align:left;
    font-family:'DMSans-Medium'
  }
  .swiper_list_introduce>p{
    margin-left:2rem;
    font-size:1.4rem;
    text-align:left;
    line-height:2rem;
    float:left;
    font-weight:bold;
    font-family:'DMSans-Medium'
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
  }
  .swiper_list_introduce>b{
    margin-top: 3rem;
    margin-bottom: 3rem;
    border-bottom:3px solid black;
    text-indent: 5rem;
    display:block;
    width: 20rem;
    margin-left:2rem;
  }
  .swiper_list_introduce>h2{
    margin:4rem 0 0 2rem;
    font-size:3rem;
    font-weight:bold;
    line-height:3.5rem;
    text-align:left;
  }
  .swiper_list_introduce2>h2{
    margin-left:0;
  }
  .ic_down{
    position:absolute;
    width:80px;
    height:80px;
    left:3rem;
    bottom:3rem;
  }
  .advisors_list{
    width: calc(100% - 14rem);
    margin-left: 5rem;
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
  }
  .swiper_list3>h1{
    font-size:6.4rem;
    line-height:8rem;
    font-weight: bold;
    width:100%;
    text-align:center;
    font-family:'Georgia'
  }
  .swiper_list_solution{
    width: 90rem;
    position:absolute;
    bottom:0;
    left:50%;
    margin-left:-45rem;
    height: 60%;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-between;
    margin-top:2rem;
  }
  .swiper_list_solution>div{
    width: calc(calc(100% - 2rem)/2);
    height: 40%;
    display:inline-block;
    float:left;
  }
  .swiper_list_solution>div>span{
    width: 6rem;
    height: 6rem;
    margin-right:2rem;
    border-radius:3rem;
    background: #EEEEF5;
    text-align:center;
    line-height: 6rem;
    font-size: 3rem;
    color: #9D9DA8;
    display: inline-block;
    float:left;
  }
  .swiper_list_solution>div>div{
    font-size: 1.4rem;
    line-height: 2.2rem;
    float:left;
    display:inline-block;
    width:calc(100% - 8rem);
    font-family:'DMSans-Medium'
  }
</style>
