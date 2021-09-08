<template>
  <div class='aboutUs'>
    <div class="swiper_list4">
      <h1>Discover</h1>
      <p>News</p>
      <div class="swiper_banner">
        <img class='ic_prev' src='../../assets/ic_prev.png' />
        <img class='ic_next' src='../../assets/ic_next.png' />
        <div class="swiper_banner_list" @click='goNews(1)'>
          <img src='../../assets/discover/discover1.png' />
          <div>
            <span>Jun 28, 2021</span>
            <span>XCarnival lists on CMC, celebrating with airdrops</span>
          </div>
        </div>
        <div class="swiper_banner_list" @click='goNews(2)'>
          <img src='../../assets/discover/discover2.png' />
          <div>
            <span>Jun 17, 2021</span>
            <span>XCarnival interview: the world needs better synthetic assets </span>
          </div>
        </div>
        <div class="swiper_banner_list" @click='goNews(3)'>
          <img src='../../assets/discover/discover1.png' />
          <div>
            <span>Jun 10, 2021</span>
            <span>XCarnival Secures $2 Million Seed Investment</span>
          </div>
        </div>
        <div class="swiper_banner_list" @click='goNews(4)'>
          <img src='../../assets/discover/discover2.png' />
          <div>
            <span>Jun 09, 2021</span>
            <span>XCarnival wins BSC Hackthon</span>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

@import  "../../assets/font/Georgia.ttf";
@import  "../../assets/font/DMSans-Medium.ttf";

<script>

// import { Swiper } from 'swiper';
// import 'swiper/css';

export default {
  name: 'aboutUs',
  props: {
    
  },
  methods: {
    goNews(i){
      switch (i) {
        case 1:
          window.open ('https://www.cryptodaily.co.uk/2021/06/xcarnival-celebrates-listing')
          break;
        case 2:
          window.open ("https://hackernoon.com/the-world-needs-better-synthetic-assets-unhashed-9-n93732sr")
          break;
        case 3:
          window.open ("https://news.bitcoin.com/xcarnival-secures-2-million-seed-investment/")
          break;
        case 4:
          window.open ("https://consent.yahoo.com/v2/collectConsent?sessionId=4_cc-session_3c40b2e0-616c-4256-b9fc-3f65595df31b")
          break;
        default:
          break;
      }
      
    }
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
    top:0;
    position:absolute;
    margin:0;
    padding:0;
    float:left;
  }
  
  .swiper_list4{
    position:absolute;
    width:100%;
    left:0;
    top:0;
    bottom:0;
  }
  .swiper_list4>h1{
    font-size:6.8rem;
    width:100%;
    line-height:8rem;
    text-align:center;
    margin: 3rem 0 0 0 ;
    font-weight:bold;
    font-family:'Georgia'
  }
  .swiper_list4>p{
    font-size:16px;
    width:100%;
    text-align:center;
    margin:0;
    font-weight: bold;
    font-family:'DMSans-Medium'
  }
  .swiper_banner{
    position:absolute;
    left:0;
    bottom:5rem;
    height:30rem;
    width:100%;
    display:flex;
  }
  .ic_prev{
    position:absolute;
    left:1.6rem;
    top:50%;
    width: 2.8rem;
    height:5rem;
    margin-top:-1.4rem; 
  }
  .ic_next{
    position:absolute;
    right:1.6rem;
    top:50%;
    width: 2.8rem;
    height:5rem;
    margin-top:-1.4rem; 
  }
  .swiper_banner_list{
    width:26rem;
    display:inline-block;
    margin-left:2rem;
    height:100%;
    position:relative;
  }
  .swiper_banner_list>img{
    height:100%;
    width:100%;
    object-fit:cover;
  }
  .swiper_banner_list>div{
    position:absolute;
    width:100%;
    height:5.6rem;
    bottom:0;
    background:rgba(0, 0, 0, 0.8);
    float:left;
    padding:1rem;
    box-sizing:border-box;
  }
  .swiper_banner_list>div>span:nth-child(1){
    font-size: 1.4rem;
    color:white;
    width:40%;
    line-height:1.4rem;
    height:100%;
    display:inline-block;
    box-sizing:border-box;
    float:left;
    font-family:'DMSans-Medium'
  }
  .swiper_banner_list>div>span:nth-child(2){
    font-size: 1.2rem;
    line-height:1.2rem;
    width:60%;
    color:white;
    height:100%;
    display:inline-block;
    box-sizing:border-box;
    float:left;
    
  }
</style>
