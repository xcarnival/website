<template>
  <div class='aboutUs'>
    <div class="swiper_list4">
      <h1>Discover</h1>
      <p>News</p>
      <div class="swiper_banner">
        <img class='ic_prev' src='../../assets/ic_prev.png' />
        <img class='ic_next' src='../../assets/ic_next.png' />
        <div class="swiper_banner_list" @click='goNews(1)'>
          <img src='../../assets/discover1.jpg' />
          <div>
            <span>Jun 28, 2021</span>
            <span>XCarnivfoutal lists on CMC, celebrating with airdrops</span>
          </div>
        </div>
        <div class="swiper_banner_list" @click='goNews(2)'>
          <img src='../../assets/discover2.jpg' />
          <div>
            <span>Jun 17, 2021</span>
            <span>XCarnival interview: the world needs better synthetic assets </span>
          </div>
        </div>
        <div class="swiper_banner_list" @click='goNews(3)'>
          <img src='../../assets/discover3.jpg' />
          <div>
            <span>Jun 10, 2021</span>
            <span>XCarnival Secures $2 Million Seed Investment</span>
          </div>
        </div>
        <div class="swiper_banner_list" @click='goNews(4)'>
          <img src='../../assets/discover4.jpg' />
          <div>
            <span>Jun 09, 2021</span>
            <span>XCarnival wins BSC Hackthon</span>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

@import  "../../assets/Georgia.ttf";
@import  "../../assets/DMSans-Medium.ttf";

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
          window.open ("https://www.yahoo.com/news/xcarnival-wins-bsc-hackathon-four-041400960.html?guccounter=2")
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
  @media (max-width: 1200px){
    .aboutUs{
      width:840px;
      height:420px;
      position:relative;
      left:50%;
      margin-left:-420px;
      overflow:hidden;
      top:50%;
      margin-top:-210px;
    }
    
    .swiper_list4{
      position:absolute;
      width:100%;
      left:0;
      top:0;
      bottom:0;
    }
    .swiper_list4>h1{
      font-size:48px;
      width:100%;
      line-height:56px;
      text-align:center;
      margin: 21px 0 0 0 ;
      font-weight:bold;
      font-family:'Georgia'
    }
    .swiper_list4>p{
      font-size:11px;
      width:100%;
      text-align:center;
      margin:0;
      font-weight: bold;
      font-family:'DMSans-Medium'
    }
    .swiper_banner{
      margin-top:14px;
      height:210px;
      width:100%;
      display:flex;
    }
    .ic_prev{
      position:absolute;
      left:11px;
      top:50%;
      width: 20px;
      height:35px;
      margin-top:-10px; 
    }
    .ic_next{
      position:absolute;
      right:11px;
      top:50%;
      width: 20px;
      height:35px;
      margin-top:-10px; 
    }
    .swiper_banner_list{
      width:182px;
      display:inline-block;
      margin-left:14px;
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
      height:39px;
      bottom:0;
      background:rgba(0, 0, 0, 0.8);
      float:left;
      padding:7px;
      box-sizing:border-box;
    }
    .swiper_banner_list>div>span:nth-child(1){
      font-size: 10px;
      color:white;
      width:40%;
      line-height:10px;
      height:100%;
      display:inline-block;
      box-sizing:border-box;
      float:left;
      font-family:'DMSans-Medium'
    }
    .swiper_banner_list>div>span:nth-child(2){
      font-size: 8px;
      line-height:8px;
      width:60%;
      color:white;
      height:100%;
      display:inline-block;
      box-sizing:border-box;
      float:left;
      
    }
  }
  @media screen and (min-width: 1200px) and (max-width: 1680px){
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
    
    .swiper_list4{
      position:absolute;
      width:100%;
      left:0;
      top:0;
      bottom:0;
    }
    .swiper_list4>h1{
      font-size:68px;
      width:100%;
      line-height:80px;
      text-align:center;
      margin: 30px 0 0 0 ;
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
      margin-top:20px;
      height:300px;
      width:100%;
      display:flex;
    }
    .ic_prev{
      position:absolute;
      left:16px;
      top:50%;
      width: 28px;
      height:50px;
      margin-top:-14px; 
    }
    .ic_next{
      position:absolute;
      right:16px;
      top:50%;
      width: 28px;
      height:50px;
      margin-top:-14px; 
    }
    .swiper_banner_list{
      width:260px;
      display:inline-block;
      margin-left:20px;
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
      height:56px;
      bottom:0;
      background:rgba(0, 0, 0, 0.8);
      float:left;
      padding:10px;
      box-sizing:border-box;
    }
    .swiper_banner_list>div>span:nth-child(1){
      font-size: 14px;
      color:white;
      width:40%;
      line-height:14px;
      height:100%;
      display:inline-block;
      box-sizing:border-box;
      float:left;
      font-family:'DMSans-Medium'
    }
    .swiper_banner_list>div>span:nth-child(2){
      font-size: 12px;
      line-height:12px;
      width:60%;
      color:white;
      height:100%;
      display:inline-block;
      box-sizing:border-box;
      float:left;
      
    }
  }
  @media screen and (min-width: 1680px) and (max-width: 1960px){
    .aboutUs{
      width:1680px;
      height:840px;
      position:relative;
      left:50%;
      margin-left:-840px;
      overflow:hidden;
      top:50%;
      margin-top:-420px;
    }
    
    .swiper_list4{
      position:absolute;
      width:100%;
      left:0;
      top:0;
      bottom:0;
    }
    .swiper_list4>h1{
      font-size:95px;
      width:100%;
      line-height:112px;
      text-align:center;
      margin: 42px 0 0 0 ;
      font-weight:bold;
      font-family:'Georgia'
    }
    .swiper_list4>p{
      font-size:22px;
      width:100%;
      text-align:center;
      margin:0;
      font-weight: bold;
      font-family:'DMSans-Medium'
    }
    .swiper_banner{
      margin-top:28px;
      height:420px;
      width:100%;
      display:flex;
    }
    .ic_prev{
      position:absolute;
      left:22px;
      top:50%;
      width: 39px;
      height:70px;
      margin-top:-20px; 
    }
    .ic_next{
      position:absolute;
      right:22px;
      top:50%;
      width: 39px;
      height:70px;
      margin-top:-20px; 
    }
    .swiper_banner_list{
      width:364px;
      display:inline-block;
      margin-left:28px;
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
      height:78px;
      bottom:0;
      background:rgba(0, 0, 0, 0.8);
      float:left;
      padding:14px;
      box-sizing:border-box;
    }
    .swiper_banner_list>div>span:nth-child(1){
      font-size: 20px;
      color:white;
      width:40%;
      line-height:20px;
      height:100%;
      display:inline-block;
      box-sizing:border-box;
      float:left;
      font-family:'DMSans-Medium'
    }
    .swiper_banner_list>div>span:nth-child(2){
      font-size: 17px;
      line-height:17px;
      width:60%;
      color:white;
      height:100%;
      display:inline-block;
      box-sizing:border-box;
      float:left;
      
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
    
    .swiper_list4{
      position:absolute;
      width:100%;
      left:0;
      top:0;
      bottom:0;
    }
    .swiper_list4>h1{
      font-size:109px;
      width:100%;
      line-height:128px;
      text-align:center;
      margin: 48px 0 0 0 ;
      font-weight:bold;
      font-family:'Georgia'
    }
    .swiper_list4>p{
      font-size:26px;
      width:100%;
      text-align:center;
      margin:0;
      font-weight: bold;
      font-family:'DMSans-Medium'
    }
    .swiper_banner{
      margin-top:32px;
      height:480px;
      width:100%;
      display:flex;
    }
    .ic_prev{
      position:absolute;
      left:26px;
      top:50%;
      width: 45px;
      height:80px;
      margin-top:-22px; 
    }
    .ic_next{
      position:absolute;
      right:26px;
      top:50%;
      width: 45px;
      height:80px;
      margin-top:-22px; 
    }
    .swiper_banner_list{
      width:416px;
      display:inline-block;
      margin-left:32px;
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
      height:90px;
      bottom:0;
      background:rgba(0, 0, 0, 0.8);
      float:left;
      padding:16px;
      box-sizing:border-box;
    }
    .swiper_banner_list>div>span:nth-child(1){
      font-size: 22px;
      color:white;
      width:40%;
      line-height:22px;
      height:100%;
      display:inline-block;
      box-sizing:border-box;
      float:left;
      font-family:'DMSans-Medium'
    }
    .swiper_banner_list>div>span:nth-child(2){
      font-size: 19px;
      line-height:19px;
      width:60%;
      color:white;
      height:100%;
      display:inline-block;
      box-sizing:border-box;
      float:left;
      
    }
  }
  
</style>
