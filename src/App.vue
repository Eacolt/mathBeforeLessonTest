<template>
<div id="app" >
  <img id="logo" src="static/logo.png">
  <router-view></router-view>

</div>
</template>
<script>
export default {
  name: 'app',
  props: {},
  mounted() {
    $(function() {
      // 自定义分享信息
      var shareConfig = {
        title: '入学测测试',
        desc: '在家也能做的幼升小入学测！做完还有能力评估报告，一起来看看吧！',
        img: "https://icourse.xesimg.com/test1/liuzhaoting/dragonLOGO.jpg",
      }
      wxShare(shareConfig);
    });
    var mql = window.matchMedia("(orientation: portrait)");
    //判断横屏;
    let screenState = "";
  //  window.addEventListener('orientationchange', updateOrientation, false);

    function updateOrientation() {
      setTimeout(()=>{
        // 如果有匹配，则我们处于垂直视角
        if (mql.matches) {
          // 直立方向
          screenState = "portrait";
        } else {
          //水平方向
           screenState = "landscape";
        }
        if(screenState=="portrait"){

          document.getElementById("app").style.transformOrigin = "center center";
          document.getElementById("app").style.left = "-39%";
          document.getElementById("app").style.top = "22%";
          document.getElementById("app").style.webkitTransform = " rotateZ(90deg)"


          console.log("is changed == portrait?")
          document.documentElement.style.fontSize = 100 * (window.clientWidth / 1080) + 'px';
          window.base = 100 * (window.clientWidth / 1080);
              console.log("竖屏情况")
        }else{

                document.getElementById("app").style.transformOrigin = "center center";
                document.getElementById("app").style.left = "0";
                document.getElementById("app").style.right = "0";
                document.getElementById("app").style.margin = "0 auto";
                document.getElementById("app").style.top = "0";
                document.getElementById("app").style.webkitTransform = " rotateZ(0deg)";
                document.documentElement.fontSize = 100 * (window.clientWidth / 1080) + 'px';
                window.base = 100 * (window.clientWidth / 1080);

        }
        console.log(screenState)
      },100)
    }
  // updateOrientation();

  }
}
</script>

<style lang="scss">
$globalWidth: 19.2rem;
$globalHeight: 10.8rem;
html {
    height: 100%;
}
body {
    height: 100%;
    overflow: hidden;
    background-size: cover;
    margin: 0;
    background: black;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-touch-callout: none;
    -webkit-touch-action-delay: none;
    -webkit-user-select: none;
    user-select: none;
    -webkit-text-size-adjust: none;
    -ms-text-size-adjust:none;
    -o-text-size-adjust:none;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    width: $globalWidth;
    height: $globalHeight;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center center;
    position: absolute;
    user-select: none;
    cursor: default;
    -webkit-text-size-adjust: none;
    -ms-text-size-adjust:none;
    -o-text-size-adjust:none;

}

#logo {
    width: 2rem;
    position: absolute;
    left: 0.2rem;
    bottom: 0.4rem;
    z-index: 999;
}
</style>
