<template>
  <div class='index_bg'>
    <div class='index_box'>
      <div class='index_circle_left'></div>
      <div class='index_text'>
        <ul>
          <li>Metaverse Assets </li>
          <li>Liquidation Aggregator </li>
          <li>for Everyone</li>
        </ul>
        <div @click='openPDF'>
          Learn More >
        </div>
      </div>
      <div class='index_circle_box'>
        <div class='index_circle_right'></div>
        <img src="../../assets/gold1.png" class='index_circle_gold1' />
        <img src="../../assets/gold2.png" class='index_circle_gold2' />
        <img src="../../assets/gold3.png" class='index_circle_gold3' />
        <img src="../../assets/gold4.png" class='index_circle_gold4' />
      </div>
    </div>
  </div>
</template>

@import  "../../assets/Georgia.ttf";
@import  "../../assets/DMSans-Medium.ttf";

<script>

export default {
  name: 'index',
  methods: {
    openPDF(){
      window.open('https://xcarnival.fi/assets/doc/lightpaper.pdf')
    }
  },
}
</script>

<style scoped>
  .index_bg{
    width:100%;
    background:black;
    position:absolute;
    left:0;
    top:0;
    bottom:0;
    z-index:0;
    overflow:hidden;
    text-align:center
  }
  
  @media  (max-width: 1680px){
    .index_box{
      margin-top:6rem;
      width:1200px;
      height:792px;
      float:left;
      position:absolute;
      top:50%;
      margin-top:-396px;
      left:50%;
      margin-left:-600px;
    }
    .index_text{
      color:white;
      margin-top: 238px;
    }
    .index_text ul{
      text-align:left;
      padding:0;
      margin:0;
    }
    .index_text li{
      list-style-type:none;
      font-size: 58px;
      line-height: 73px;
      font-weight:bold;
      font-family:'Georgia';
    }
    .index_text>div{
      float:left;
      width: 100px;
      height: 30px;
      background: #FE4905;
      border-radius: 8px;
      line-height: 30px;
      font-size: 12px;
      cursor: pointer;
      text-align: center;
      z-index:1;
      margin-top:20px;
      font-family:'DMSans-Medium';
    }
    .index_circle_box{
        position:absolute;
        width: 389px;
        height: 389px;
        right: 150px;
        bottom: 150px;
      }
      .index_circle_right{
        position: absolute;
        left:0;
        top: -60px;
        width: 389px;
        height: 389px;
        border-radius: 194.5px;
        background: #FE4905;
        filter: blur(120px);
        
      }
      .index_circle_gold1{
        position:absolute;
        width:209px;
        height:209px;
        top: 16px;
        left: 116px;
      }
      .index_circle_gold2{
        position: absolute;
        width: 368px;
        height: 308px;
        left: 10px;
        bottom: -120px;
      }
      .index_circle_gold3{
        position: absolute;
        width:209px;
        height:209px;
        top: -100px;
        right: -80px;
      }
      .index_circle_gold4{
        position: absolute;
        width: 353px;
        height: 403px;
        bottom: -50px;
        right: -220px;
      }
  }
  @media screen and (min-width: 1680px) and (max-width: 1960px){
    .index_box{
      margin-top:6rem;
      width:1680px;
      height:1109px;
      float:left;
      position:absolute;
      top:50%;
      margin-top:-554px;
      left:50%;
      margin-left:-840px;
    }
    .index_text{
      color:white;
      margin-top: 333px;
    }
    .index_text ul{
      text-align:left;
      padding:0;
      margin:0;
    }
    .index_text li{
      list-style-type:none;
      font-size: 81px;
      line-height: 102px;
      font-weight:bold;
      font-family:'Georgia';
    }
    .index_text>div{
      float:left;
      width: 140px;
      height: 42px;
      background: #FE4905;
      border-radius: 11px;
      line-height: 42px;
      font-size: 17px;
      cursor: pointer;
      text-align: center;
      z-index:1;
      margin-top:28px;
      font-family:'DMSans-Medium';
    }
    .index_circle_box{
        position:absolute;
        width: 545px;
        height: 545px;
        right: 210px;
        bottom: 210px;
      }
      .index_circle_right{
        position: absolute;
        left:0;
        top: -84px;
        width: 545px;
        height: 545px;
        border-radius: 272px;
        background: #FE4905;
        filter: blur(168px);
        
      }
      .index_circle_gold1{
        position:absolute;
        width:293px;
        height:293px;
        top: 22px;
        left: 162px;
      }
      .index_circle_gold2{
        position: absolute;
        width: 515px;
        height: 431px;
        left: 14px;
        bottom: -168px;
      }
      .index_circle_gold3{
        position: absolute;
        width:293px;
        height:293px;
        top: -140px;
        right: -112px;
      }
      .index_circle_gold4{
        position: absolute;
        width: 494px;
        height: 564px;
        bottom: -70px;
        right: -308px;
      }
    
  }
  @media (min-width: 1960px){
    .index_box{
      margin-top:6rem;
      width:1920px;
      height:1267px;
      float:left;
      position:absolute;
      top:50%;
      margin-top:-634px;
      left:50%;
      margin-left:-960px;
    }
    .index_text{
      color:white;
      margin-top: 381px;
    }
    .index_text ul{
      text-align:left;
      padding:0;
      margin:0;
    }
    .index_text li{
      list-style-type:none;
      font-size: 93px;
      line-height: 117px;
      font-weight:bold;
      font-family:'Georgia';
    }
    .index_text>div{
      float:left;
      width: 160px;
      height: 48px;
      background: #FE4905;
      border-radius: 13px;
      line-height: 48px;
      font-size: 19px;
      cursor: pointer;
      text-align: center;
      z-index:1;
      margin-top:32px;
      font-family:'DMSans-Medium';
    }
    .index_circle_box{
        position:absolute;
        width: 622px;
        height: 622px;
        right: 240px;
        bottom: 240px;
      }
      .index_circle_right{
        position: absolute;
        left:0;
        top: -96px;
        width: 622px;
        height: 622px;
        border-radius: 311px;
        background: #FE4905;
        filter: blur(192px);
        
      }
      .index_circle_gold1{
        position:absolute;
        width:334px;
        height:334px;
        top: 26px;
        left: 186px;
      }
      .index_circle_gold2{
        position: absolute;
        width: 589px;
        height: 493px;
        left: 16px;
        bottom: -192px;
      }
      .index_circle_gold3{
        position: absolute;
        width:334px;
        height:334px;
        top: -160px;
        right: -128px;
      }
      .index_circle_gold4{
        position: absolute;
        width: 565px;
        height: 645px;
        bottom: -80px;
        right: -352px;
      }
  }
  
</style>
