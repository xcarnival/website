<template>
  <div class='aboutUs'>
    <div class="swiper_list4">
      <h1>Investors & Partners</h1>
      <p>$2M Seed Funding Round</p>
      
    </div>
  </div>
</template>

@import  "../../assets/font/Georgia.ttf";
@import  "../../assets/font/DMSans-Medium.ttf";

<script>

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
    margin: 5rem 0 0 0 ;
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
  .advisors_list{
    width: calc(100% - 14rem);
    margin-left: 5rem;
    background:yellow;
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
</style>
