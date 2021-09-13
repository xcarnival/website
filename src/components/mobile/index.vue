<template>
  <div class='index_bg'>
    <div class='index_box'>
      <!-- <div class='index_text'>
        <ul>
          <li>Metaverse Assets </li>
          <li>Liquidation Aggregator </li>
          <li>for Everyone</li>
        </ul>
        <div @click='openPDF'>
          Light Paper >
        </div>
      </div> -->
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
      window.open('https://xcarnival.fi/assets/doc/lightpaper.pdf')
    }
  },
}
</script>

<style scoped>
  .index_bg{
    width:100%;
    position:absolute;
    left:0;
    top:21rem;
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
    width: 90rem;
    height: 90rem;
    left: -45rem;
    bottom: -45rem;
    border-radius:45rem;
    background: #FE4905;
    filter: blur(19rem);
  }
  .index_circle_right{
    position: absolute;
    right:-44rem;
    top: -44rem;
    width: 132rem;
    height: 132rem;
    border-radius: 66rem;
    background: #FE4905;
    filter: blur(19rem);
  }
  .index_circle_box>img{
    position:absolute;
  }
  .index_circle_box .index_circle_gold1{
    width:57rem;
    height:57rem;
    left:-17rem;
    top:20rem;
  }
  .index_circle_box .index_circle_gold2{
    width:95rem;
    height:95rem;
    left:-40rem;
    bottom:20rem;
  }
  .index_circle_box .index_circle_gold3{
    width:54rem;
    height:54rem;
    top:0;
    right:-5rem;
  }
  .index_circle_box .index_circle_gold4{
    width:98rem;
    height:98rem;
    bottom: 50rem;
  }
  
  
</style>
