<template>
  <div>
    <div class='index_bg'>
      <div class='index_circle_left'></div>
      <div class='index_text'>
        <ul>
          <li>Metaverse Assets </li>
          <li>Liquidation Aggregator </li>
          <li>for Everyone</li>
        </ul>
        <div>
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

@import  "../../assets/font/Georgia.ttf";
@import  "../../assets/font/DMSans-Medium.ttf";

<script>

export default {
  name: 'index',
  props: {
    
  }
}
</script>

<style scoped>
  .index_bg{
    width:100%;
    background:black;
    position:absolute;
    left:0;
    top:6rem;
    bottom:0;
    z-index:0;
    overflow:hidden;
  }
  .index_circle_left{
    position: absolute;
    width: 24rem;
    height: 24rem;
    left: -7.5rem;
    bottom: -7.5rem;
    border-radius:120px;
    background: #FE4905CC;
    filter: blur(120px);
    
  }
  .index_circle_box{
    position:absolute;
    width: 38.9rem;
    height: 38.9rem;
    right: 15rem;
    bottom: 5rem;
  }
  .index_circle_right{
    position: absolute;
    left:0;
    top: -6rem;
    width: 38.9rem;
    height: 38.9rem;
    border-radius: 19.45rem;
    background: #FE4905;
    filter: blur(12.7rem);
    
  }
  .index_circle_gold1{
    position:absolute;
    width:20.9rem;
    height:20.9rem;
    top: 5.6rem;
    left: 11.6rem;
  }
  .index_circle_gold2{
    position: absolute;
    width: 36.8rem;
    height: 30.8rem;
    left: 1rem;
    bottom: -12rem;
  }
  .index_circle_gold3{
    position: absolute;
    width:20.9rem;
    height:20.9rem;
    top: -8rem;
    right: -8rem;
  }
  .index_circle_gold4{
    position: absolute;
    width: 35.3rem;
    height: 40.3rem;
    bottom: -5rem;
    right: -22rem;
  }
  .index_text{
    color:white;
    margin-left: 75px;
    margin-top: 12.8rem;
  }
  .index_text ul{
    text-align:left;
    padding:0;
    margin:0;
  }
  .index_text li{
    list-style-type:none;
    font-size: 6.4rem;
    line-height: 7.3rem;
    font-weight:bold;
    font-family:'Georgia';
  }
  .index_text>div{
    float:left;
    width: 10rem;
    height: 3rem;
    background: #FE4905;
    border-radius: 0.8rem;
    line-height: 3rem;
    font-size: 1.2rem;
    cursor: pointer;
    text-align: center;
    z-index:1;
    margin-top:2rem;
    font-family:'DMSans-Medium';
  }
</style>
