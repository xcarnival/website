<template>
  <div class='discover'>
    <h1>Discover</h1>
    <p>News</p>
    <b></b>
    <div class='ic_swiper_button ic_prev'><img src="../../assets/ic_prev.png" @click="prev" /></div>
    <div class='ic_swiper_button ic_next'><img src="../../assets/ic_next.png" @click="next" /></div>
    <swiper ref="mySwiper" :options="swiperOptions" class='swiper_banner swiper_box swiper-no-swiping' >
      <swiperSlide>
        <div class="swiper_banner_list" @click='goNews(2)'>
          <img src='../../assets/discover1.jpg' />
          <div>
            <span>Jun 28, 2021</span>
            <span>XCarnivfoutal lists on CMC, celebrating with airdrops</span>
          </div>
        </div>
      </swiperSlide>
      <swiperSlide>
        <div class="swiper_banner_list" @click='goNews(2)'>
          <img src='../../assets/discover2.jpg' />
          <div>
            <span>Jun 17, 2021</span>
            <span>XCarnival interview: the world needs better synthetic assets </span>
          </div>
        </div>
      </swiperSlide>
      <swiperSlide>
        <div class="swiper_banner_list" @click='goNews(3)'>
          <img src='../../assets/discover3.jpg' />
          <div>
            <span>Jun 10, 2021</span>
            <span>XCarnival Secures $2 Million Seed Investment</span>
          </div>
        </div>
      </swiperSlide>
      <swiperSlide>
        <div class="swiper_banner_list" @click='goNews(3)'>
          <img src='../../assets/discover4.jpg' />
          <div>
            <span>Jun 09, 2021</span>
            <span>XCarnival wins BSC Hackthon</span>
          </div>
        </div>
      </swiperSlide>
    </swiper>
  </div>
</template>

@import  "../../assets/Georgia.ttf";
@import  "../../assets/DMSans-Medium.ttf";

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'discover',
  data(){
    return {
      swiperOptions: {
        notNextTick: true,
        loop:true,
        speed: 1000,
        lazyLoading:true,
        autoplay:true,
        direction: 'horizontal',
        grabCursor : true,
        on:{
         
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
      }
    }
  },
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
    },
    next(){
      this.swiper.slideNext()
    },
    prev(){
      this.swiper.slidePrev()
    },
    swiperMove(){

    },
    swiperEnd(){

    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    
    console.log(this.swiper)
    
  },
  components:{
    swiper, swiperSlide
  }
}
</script>

<style scoped>
    .discover{
      width:100%;
      position:absolute;
      left:0;
      top:0.66rem;
      bottom:0;
      overflow-x:hidden;
      overflow-y:scroll;
    }
    .discover>h1{
      width:calc(100% - 0.32rem);
      margin-left:0.16rem;
      font-size:0.36rem;
      line-height:0.4rem;
      font-weight:bold;
      text-align:left;
      font-family:'Georgia';
      margin-top:0.2rem;
    }
    .discover>p{
      color:#D6D6D6;
      font-size:0.16rem;
      margin: 0 0 0 0.16rem;
    }
    .discover>b{
      margin: 0.1rem 0;
      border-bottom:0.03rem solid black;
      display:block;
      width: 2.2rem;
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
      margin-top:0.3rem;
      height:5rem;
      width:100%;
      display:flex;
      width:calc(100% - 0.32rem);
      margin-left:0.16rem;
      overflow:hidden;
    }
    
    .swiper_banner_list{
      width:100%;
      display:inline-block;
      height:100%;
      position:relative;
    }
    .swiper_banner_list>img{
      width:100%;
      height:100%;
      object-fit:cover;
    }
    .swiper_banner_list>div{
      position:absolute;
      width:100%;
      height:0.72rem;
      bottom:0;
      background:rgba(0, 0, 0, 0.8);
      float:left;
      padding:0.07rem;
      box-sizing:border-box;
    }
    .swiper_banner_list>div>span:nth-child(1){
      font-size: 0.18rem;
      color:white;
      width:40%;
      line-height:0.5rem;
      height:100%;
      display:inline-block;
      box-sizing:border-box;
      float:left;
      font-family:'DMSans-Medium';
      font-weight:bold;
    }
    .swiper_banner_list>div>span:nth-child(2){
      font-size: 0.14rem;
      line-height:0.3rem;
      width:60%;
      color:white;
      font-family:'DMSans-Medium';
      height:100%;
      display:inline-block;
      box-sizing:border-box;
      float:left;
    }
    .swiper-button{
      color:white;
      border:none;
      background:none;
    }
    .swiper-button:active{
      border:none;
      background:none;
    }
    .ic_swiper_button{
      position:absolute;
      width: 0.6rem;
      height:0.6rem;
      z-index:2;
      top:50%;
      line-height:0.6rem;
      text-align:center;
    }
    .ic_swiper_button>img{
      width:0.12rem;
      height:0.2rem;
      z-index:2;
    }
    .ic_prev{
      left:0;
    }
    .ic_next{
      right:0;
    }
</style>
