<template>
  <div class='aboutUs'>
    <div class="swiper_list4">
      <h1>Team</h1>
      <p>Our most professional team</p>
      <div class='advisors_list'>
        <div>
          <img src='../../assets/advisors1.png' />
        </div>
        <div>
          <img src='../../assets/advisors2.png' />
        </div>
        <div>
          <img src='../../assets/advisors3.png' />
        </div>
        <div>
          <img src='../../assets/advisors4.png' />
        </div>
        <div>
          <img src='../../assets/advisors5.png' />
        </div>
        <div>
          <img src='../../assets/advisors6.png' />
        </div>
      </div>
    </div>
  </div>
</template>

@import  "../../assets/font/Georgia.ttf";
@import  "../../assets/font/DMSans-Regular.ttf";
@import  "../../assets/font/DMSans-Medium.ttf";

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
    margin:0;
    padding:0;
    float:left;
  }
  .swiper_list{
    width:100%;
   
  }
  .swiper_list>div{
    position:relative;
    width:50%;
    float:left;
    display:inline-block;
    height:100%;
    box-sizing:border-box;
  }
  
  .swiper_list4>h1{
    font-size:6.8rem;
    width:100%;
    text-align:center;
    margin: 3rem 0 0 0 ;
    line-height:7rem;
    font-family:'Georgia';
  }
  .swiper_list4>p{
    font-size:16px;
    width:100%;
    text-align:center;
    margin:0;
    font-family:'DMSans-Medium';
  }
  .advisors_list{
    width: calc(100% - 14rem);
    margin-left: 5rem;
    top:12rem;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-between;
  }
  .advisors_list>div img{
    width:100%;
    height:100%;
    object-fit:cover;
  }
  .advisors_list>div{
    width: calc(calc(100% - 20px)/3);
    height: 49%;
    margin-top:1%;
  }
</style>
