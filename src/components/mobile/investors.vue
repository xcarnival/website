<template>
  <div class='investors'>
    <h1>Investors <br />& Partners</h1>
    <!-- <p>$2M Seed Funding Round</p> -->
    <b></b>
    <div class="investorsView">
      <div class='investorsView_box'>
        <div class='investorsView_box_2'><img src='../../assets/1.png' /></div>
        <div class='investorsView_box_2'><img src='../../assets/2.png' /></div>
        <div class='investorsView_box_2'><img src='../../assets/3.png' /></div>
        <div class='investorsView_box_2'><img src='../../assets/4.png' /></div>

        <div class='investorsView_box_2'><img src='../../assets/11.png' /></div>
        <div class='investorsView_box_2'><img src='../../assets/14.png' /></div>
        <div class='investorsView_box_2'><img src='../../assets/13.png' /></div>
        <div class='investorsView_box_2'><img src='../../assets/12.png' /></div>

        <div class='investorsView_box_2'><img src='../../assets/4sv.png' /></div>
        <div class='investorsView_box_2'><img src='../../assets/10.png' /></div>
        <div class='investorsView_box_2'><img src='../../assets/9.png' /></div>
        <div class='investorsView_box_2'><img src='../../assets/5.png' /></div>

        <div class='investorsView_box_2'><img src='../../assets/bsc.png' /></div>
        <div class='investorsView_box_2'><img src='../../assets/18.png' /></div>
        <div class='investorsView_box_2'><img src='../../assets/15.png' /></div>

        <div class='investorsView_box_2'><img src='../../assets/17.png' /></div>
        <div class='investorsView_box_2 investorsView_box_px'><img src='../../assets/gate.svg' /></div>
        <div class='investorsView_box_2'><img src='../../assets/solv.png' /></div>
        
      </div>
    </div>
  </div>
</template>

@import  "../../assets/Georgia.ttf";
@import  "../../assets/DMSans-Medium.ttf";

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
      position:absolute;
      left:0;
      top:0.66rem;
      bottom:0;
      overflow-x:hidden;
      overflow-y:scroll;
      
    }
    .investors>h1{
      width:calc(100% - 0.32rem);
      margin-left:0.16rem;
      font-size:0.36rem;
      line-height:0.4rem;
      font-weight:bold;
      text-align:left;
      font-family:'Georgia';
      margin-top:0.2rem;
    }
    .investors>p{
      color:#D6D6D6;
      font-size:0.16rem;
      margin: 0 0 0 0.16rem;
    }
    .investors>b{
      margin: 0.1rem 0;
      border-bottom:0.03rem solid black;
      display:block;
      width: 2.2rem;
    }
    .investorsView>h1{
      font-size:48px;
      width:100%;
      line-height:56px;
      text-align:center;
      margin: 35px 0 0 0 ;
      font-weight:bold;
      font-family:'Georgia'
    }
    .investorsView>p{
      font-size:11px;
      width:100%;
      text-align:center;
      margin:0;
      font-weight: bold;
      font-family:'DMSans-Medium'
    }
    .investorsView_box{
      width: calc(100% - 0.32rem);
      margin-left:0.16rem;
      display:flex;
      flex-wrap:wrap;
      justify-content:space-between;
      align-content: flex-start;
    }
    .investorsView_box>div{
      height: 0.56rem;
      display: inline-block;
      float:left;
      margin-top: 0.07rem;
      border:1px solid black;
      box-sizing:border-box;
    }
   
    .investorsView_box_2{
      width: calc(calc(100% - 0.16rem)/2);
    }
    .investorsView_box>div img{
      height:100%;
      width:100%;
      object-fit:scale-down;
    }
    .investorsView_box_px{
      padding: 10px 0;
    }
  
  
</style>
