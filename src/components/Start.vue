<template>
  <div class="container">
    <swiper ref="mySwiper" :options="swiperOption" class="swiper-box">
      <swiper-slide class="swiper-item">
          <img draggable="false" class="cartoon1" src="static/begin/cartoon.png" />
          <img draggable="false"  class="cartoon2" src="static/begin/cartoon2.png" />
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <img draggable="false"  class="cartoon3" src="static/begin/cartoon3.png" />
        <img draggable="false"  class="cartoon4" src="static/begin/cartoon4.png" />
        <img draggable="false"  class="cartoon5" src="static/begin/cartoon5.png" />
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <img draggable="false"  class="cartoon6" src="static/begin/cartoon6.png" />
        <img draggable="false" class="cartoon7"  src="static/begin/cartoon7.png" />
      </swiper-slide>
      <img ref="gotoBtn" v-show="gotoBtnShow" @click="gotoGame()" draggable="false" class="btnstart" src="static/begin/startbtn.png" />
    </swiper>

    <div id="loadingDiv">
        <div class="loader-container"><span class="runner"></span></div><span class="loadingText"></span>
    </div>
  </div>
</template>
<script>
  export default require('./StartCode')
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  img {
    width: 100%;
  }
  .container {
    height: 100%;
    width: 100%;
  }
  .btnstart{
    cursor: pointer;
    z-index: 2;
    position: absolute;
    display: block;
    right: 1.2rem;
    bottom: 0.8rem;
    width:3.31rem;
    height:1.60rem;

  }
  .swiper-box {
    position: absolute;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
  }
  .swiper-item {
    position: relative;
    height: 100%;
    text-align: center;
  }
  img{
    position: absolute;
    display: block;
  }
  .cartoon1{
    left:0;
    top:0;
    height:10.8rem;
  }
  .cartoon2{
    right:0;
    top:0;
    width:12.70rem;
    height:10.8rem;
  }
  .cartoon3{
    left:0;
    top:0;
    width:6.48rem;
    height:10.8rem;
  }
  .cartoon4{
    left:5.268rem;
    top:0;
    width:8.75rem;
    height:10.8rem;
  }
  .cartoon5{
    right:0;
    top:0;
    width:6.74rem;
    height:10.8rem;
  }
  .cartoon6{
    left:0;
    top:0;
    width:6.91rem;
    height:10.8rem;
  }
  .cartoon7{
    right:0;
    top:0;
    width:14.24rem;
    height:10.8rem;
  }
</style>
