<template>
  <div class='index_bg'>
    <div class='index_box'>
      <div class='index_text'>
        <ul>
          <li>The Metaverse</li>
          <li>Assets</li>
          <li>Liquidation</li>
          <li>Aggregator</li>
          <li>for Everyone</li>
        </ul>
        <div @click='openPDF'>
          Light Paper >
        </div>
      </div>
      <div class='index_circle_box'>
        <div class='index_circle_left'></div>
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
      window.open('https://xcarnival.fi/doc/litepaper.pdf')
    }
  },
}
</script>

<style scoped>
  .index_bg{
    width:100%;
    position:absolute;
    left:0;
    top:0;
    bottom:0;
    z-index:0;
    overflow:hidden;
    text-align:center;
  }
  .index_circle_box{
    position:absolute;
    width:100%;
    top:0;
    bottom:0;
    background:black;
  }
  .index_circle_left{
    position: absolute;
    width: 3rem;
    height: 3rem;
    left: -1.5rem;
    bottom: -1.5rem;
    border-radius:1.5rem;
    background: #FE4905;
    filter: blur(0.6rem);
    opacity:0.5;
  }
  .index_circle_right{
    position: absolute;
    right:-1.5rem;
    top: 0;
    width: 4rem;
    height: 4rem;
    border-radius: 62rem;
    background: #FE4905;
    filter: blur(0.6rem);
    opacity:0.5;
  }
  .index_circle_box>img{
    position:absolute;
  }
  .index_circle_box .index_circle_gold1{
    width:2rem;
    height:2rem;
    left:-0.5rem;
    top:1.5rem;
  }
  .index_circle_box .index_circle_gold2{
    width: 3.2rem;
    height: 3.2rem;
    left: -1rem;
    bottom: 0.5rem;
  }
  .index_circle_box .index_circle_gold3{
    width: 1.86rem;
    height: 1.86rem;
    top:0.66rem;
    right:-0.26rem;
  }
  .index_circle_box .index_circle_gold4{
    width:3.24rem;
    height:3.24rem;
    bottom: 1rem;
    right:-1rem;
  }
  .index_text{
    position:absolute;
    top:0;
    bottom:0;
    width:100%;
    height:100%;
    background:rgb(0 0 0 / 60%);
    z-index:1;
  }
  .index_text ul{
    color:white;
    margin-top:2rem;
  }
  .index_text ul li{
    font-family:'Georgia';
    font-size: 0.36rem;
    line-height: 0.45rem;
    font-weight: bold;
  }
  .index_text>div{
    height:0.3rem;
    color:white;
    font-size:0.14rem;
    font-family:'DMSans-Medium';
    padding: 0 0.1rem;
    background: #FE4905;
    border-radius: 0.1rem;
    display:inline-block;
    margin-top:0.4rem;
    font-weight:bold;
    line-height:0.3rem;
  }
  
</style>
