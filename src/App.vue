<template>
<div id="app">
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
        desc: '这里是我入学测的点击，不用管它',
        img: "http://zt.xueersi.com/mzhejiangy1/images/share.jpg",
      }
      wxShare(shareConfig);
    })
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
    position: absolute;
    user-select: none;
    cursor: default;

}

#logo {
    width: 2rem;
    position: absolute;
    left: 0.2rem;
    bottom: 0.4rem;
    z-index: 999;
}
</style>
