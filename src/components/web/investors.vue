<template>
  <div class='investors'>
    <div class="investorsView">
      <h1>Investors & Partners</h1>
      <p>$2M Seed Funding Round</p>
      <div class='investorsView_box'>
        <div class='investorsView_box_4'><img src='../../assets/investors/1.png' /></div>
        <div class='investorsView_box_4'><img src='../../assets/investors/2.png' /></div>
        <div class='investorsView_box_4'><img src='../../assets/investors/3.png' /></div>
        <div class='investorsView_box_4'><img src='../../assets/investors/4.png' /></div>
        <div class='investorsView_box_4'><img src='../../assets/investors/5.png' /></div>
        <div class='investorsView_box_4'><img src='../../assets/investors/6.png' /></div>
        <div class='investorsView_box_4'><img src='../../assets/investors/7.png' /></div>
        <div class='investorsView_box_4'><img src='../../assets/investors/8.png' /></div>
        <div class='investorsView_box_4'><img src='../../assets/investors/9.png' /></div>
        <div class='investorsView_box_4'><img src='../../assets/investors/10.png' /></div>
        <div class='investorsView_box_4'><img src='../../assets/investors/11.png' /></div>
        <div class='investorsView_box_4'><img src='../../assets/investors/12.png' /></div>
        <div class='investorsView_box_2'><img src='../../assets/investors/13.png' /></div>
        <div class='investorsView_box_2'><img src='../../assets/investors/14.png' /></div>
      </div>
    </div>
  </div>
</template>

@import  "../../assets/font/Georgia.ttf";
@import  "../../assets/font/DMSans-Medium.ttf";

<script>

export default {
  name: 'investors',
  props: {
    
  },
  components:{
    // Swiper
  }
}
</script>

<style scoped>
  .investors{
    width:100%;
    bottom:0;
    left:0;
    top:0;
    position:absolute;
    margin:0;
    padding:0;
    float:left;
  }
  
  .investorsView{
    position:absolute;
    width:100%;
    left:0;
    top:0;
    bottom:0;
  }
  .investorsView>h1{
    font-size:6.8rem;
    width:100%;
    line-height:8rem;
    text-align:center;
    margin: 5rem 0 0 0 ;
    font-weight:bold;
    font-family:'Georgia'
  }
  .investorsView>p{
    font-size:16px;
    width:100%;
    text-align:center;
    margin:0;
    font-weight: bold;
    font-family:'DMSans-Medium'
  }
  .investorsView_box{
    margin:2rem auto;
    width:80rem;
    height:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-content: flex-start;
  }
  .investorsView_box>div{
    height: 8rem;
    display: inline-block;
    float:left;
    margin-top: 1rem;
    border:1px solid black;
    box-sizing:border-box;
  }
  .investorsView_box_4{
    width: calc(calc(100% - 3rem)/4);
  }
  .investorsView_box_2{
    width: calc(calc(100% - 1rem)/2);
  }
  .investorsView_box>div img{
    height:100%;
    width:100%;
    object-fit:scale-down;
  }
  
</style>
