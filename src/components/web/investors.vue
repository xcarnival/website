<template>
  <div class='investors'>
    <div class="investorsView">
      <h1>Investors & Partners</h1>
      <!-- <p>$2M Seed Funding Round</p> -->
      <div class='investorsView_box'>
        <div class='investorsView_box_4'><img src='../../assets/1.png' /></div>
        <div class='investorsView_box_4'><img src='../../assets/2.png' /></div>
        <div class='investorsView_box_4'><img src='../../assets/3.png' /></div>
        <div class='investorsView_box_4'><img src='../../assets/4.png' /></div>

        <div class='investorsView_box_4'><img style='height:80%;margin-top:5%' src='../../assets/METASENSE.svg' /></div>
        <div class='investorsView_box_4'><img src='../../assets/11.png' /></div>
        <div class='investorsView_box_4'><img src='../../assets/14.png' /></div>
        <div class='investorsView_box_4'><img src='../../assets/13.png' /></div>

        <div class='investorsView_box_4'><img src='../../assets/12.png' /></div>
        <div class='investorsView_box_4'><img src='../../assets/4sv.png' /></div>
        <div class='investorsView_box_4'><img src='../../assets/10.png' /></div>
        <div class='investorsView_box_4'><img src='../../assets/9.png' /></div>

        <div class='investorsView_box_4'><img src='../../assets/5.png' /></div>
        <div class='investorsView_box_4'><img src='../../assets/bsc.png' /></div>
        <div class='investorsView_box_4'><img src='../../assets/18.png' /></div>
        <div class='investorsView_box_4'><img src='../../assets/15.png' /></div>

        <div class='investorsView_box_4 investorsView_box_px'><img src='../../assets/alpha.png' /></div>
        <div class='investorsView_box_4 investorsView_box_px'><img src='../../assets/17.png' /></div>
        <div class='investorsView_box_4 investorsView_box_px'><img src='../../assets/gate.svg' /></div>
        <div class='investorsView_box_4'><img src='../../assets/solv.png' /></div>
        
        
        
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
    .investorsView_box_4{
      width: calc(calc(100% - 21px)/4);
    }
    .investorsView_box_px{
      padding:10px 0;
    }
    .investorsView_box_3{
      width: calc(calc(100% - 14px)/3);
    }
    .investorsView_box_2{
      width: calc(calc(100% - 7px)/2);
    }
    .investorsView_box_1{
      width: 100%;
    }
  @media (max-width: 1200px){
  .investors{
      width:840px;
      height:420px;
      position:relative;
      left:50%;
      margin-left:-420px;
      overflow:hidden;
      top:50%;
      margin-top:-210px;
    }
    
    .investorsView{
      position:absolute;
      width:100%;
      left:0;
      top:0;
      bottom:0;
    }
    .investorsView>h1{
      font-size:48px;
      width:100%;
      line-height:56px;
      text-align:center;
      
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
      margin:14px auto;
      width:560px;
      height:100%;
      display:flex;
      flex-wrap:wrap;
      justify-content:space-between;
      align-content: flex-start;
    }
    .investorsView_box>div{
      height: 56px;
      display: inline-block;
      float:left;
      margin-top: 7px;
      border:1px solid black;
      box-sizing:border-box;
    }
    
    .investorsView_box>div img{
      height:100%;
      width:100%;
      object-fit:scale-down;
    }
  }
  @media screen and (min-width: 1200px) and (max-width: 1680px){
    .investors{
      width:1200px;
      height:600px;
      position:relative;
      left:50%;
      margin-left:-600px;
      overflow:hidden;
      top:50%;
      margin-top:-300px;
    }
    
    .investorsView{
      position:absolute;
      width:100%;
      left:0;
      top:0;
      bottom:0;
    }
    .investorsView>h1{
      font-size:68px;
      width:100%;
      line-height:80px;
      text-align:center;
      
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
      margin:20px auto;
      width:800px;
      height:100%;
      display:flex;
      flex-wrap:wrap;
      justify-content:space-between;
      align-content: flex-start;
    }
    .investorsView_box>div{
      height: 80px;
      display: inline-block;
      float:left;
      margin-top: 10px;
      border:1px solid black;
      box-sizing:border-box;
    }
    .investorsView_box_4{
      width: calc(calc(100% - 30px)/4);
    }
    .investorsView_box_2{
      width: calc(calc(100% - 10px)/2);
    }
    .investorsView_box>div img{
      height:100%;
      width:100%;
      object-fit:scale-down;
    }
  }
  @media screen and (min-width: 1680px) and (max-width: 1960px){
    .investors{
      width:1680px;
      height:840px;
      position:relative;
      left:50%;
      margin-left:-840px;
      overflow:hidden;
      top:50%;
      margin-top:-420px;
    }
    
    .investorsView{
      position:absolute;
      width:100%;
      left:0;
      top:0;
      bottom:0;
    }
    .investorsView>h1{
      font-size:95px;
      width:100%;
      line-height:112px;
      text-align:center;
      
      font-weight:bold;
      font-family:'Georgia'
    }
    .investorsView>p{
      font-size:22px;
      width:100%;
      text-align:center;
      margin:0;
      font-weight: bold;
      font-family:'DMSans-Medium'
    }
    .investorsView_box{
      margin:28px auto;
      width:1120px;
      height:100%;
      display:flex;
      flex-wrap:wrap;
      justify-content:space-between;
      align-content: flex-start;
    }
    .investorsView_box>div{
      height: 112px;
      display: inline-block;
      float:left;
      margin-top: 14px;
      border:1px solid black;
      box-sizing:border-box;
    }
    .investorsView_box_4{
      width: calc(calc(100% - 42px)/4);
    }
    .investorsView_box_2{
      width: calc(calc(100% - 14px)/2);
    }
    .investorsView_box>div img{
      height:100%;
      width:100%;
      object-fit:scale-down;
    }
  }
  @media (min-width: 1960px){
    .investors{
      width:1920px;
      height:960px;
      position:relative;
      left:50%;
      margin-left:-960px;
      overflow:hidden;
      top:50%;
      margin-top:-480px;
    }
    
    .investorsView{
      position:absolute;
      width:100%;
      left:0;
      top:0;
      bottom:0;
    }
    .investorsView>h1{
      font-size:109px;
      width:100%;
      line-height:128px;
      text-align:center;
      
      font-weight:bold;
      font-family:'Georgia'
    }
    .investorsView>p{
      font-size:26px;
      width:100%;
      text-align:center;
      margin:0;
      font-weight: bold;
      font-family:'DMSans-Medium'
    }
    .investorsView_box{
      margin:32px auto;
      width:1280px;
      height:100%;
      display:flex;
      flex-wrap:wrap;
      justify-content:space-between;
      align-content: flex-start;
    }
    .investorsView_box>div{
      height: 128px;
      display: inline-block;
      float:left;
      margin-top: 16px;
      border:2px solid black;
      box-sizing:border-box;
    }
    .investorsView_box_4{
      width: calc(calc(100% - 48px)/4);
    }
    .investorsView_box_2{
      width: calc(calc(100% - 16px)/2);
    }
    .investorsView_box>div img{
      height:100%;
      width:100%;
      object-fit:scale-down;
    }
  }
  
  
</style>
