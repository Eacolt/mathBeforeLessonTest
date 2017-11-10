// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import Preload from './preload';
import 'babel-polyfill'
const VueAwesomeSwiper = require('vue-awesome-swiper');
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  },
  mounted() {

    let preload = new Preload();
    //初始化Preload
    preload.initAdaption();
    let maskDom = null;
    let maskDomShow = true;
    let closebtn = null;

    if ("matchMedia" in window) {
      var mql = window.matchMedia('(orientation: portrait)');

      function handleOrientationChange(mql) {
        if (mql.matches) {
          //  alert("当前竖屏")
          if (!maskDom && maskDomShow) {
            maskDom = document.createElement("div");
            maskDom.style.position = "absolute";
            maskDom.style.top = "0";
            maskDom.style.left = "0";
            maskDom.style.width = "100%";
            maskDom.style.height = "100%";
            maskDom.style.backgroundColor = "rgba(0,0,0,0.7)"
            document.body.appendChild(maskDom);
            let context = document.createElement("div");
            context.style.position = "absolute";
            context.style.fontFamily = "Microsoft YaHei";
            context.style.fontSize = "0.65rem";


            context.style.color = "white";
            context.style.top = "1.5rem";
            context.style.paddingLeft = "1.5rem";

            context.innerHTML = "<div style='line-height:2.6rem;'><b style='font-size:125%;'>横屏观看不了?</b></div>" +
              "<div style='line-height:1.2rem;'>1.检查是否“开启自动旋转/关闭方向锁定”</div><div>2.打开微信设置-通用-开启横屏模式</div>";
            maskDom.appendChild(context);

            // closebtn = document.createElement("div");
            // closebtn.style.position = "absolute"
            // closebtn.style.background = "url(static/img/iknow.png) no-repeat";
            // closebtn.style.backgroundSize = "contain";
            //
            // closebtn.style.width = "4.21rem";
            // closebtn.style.height = "1.87rem";
            // closebtn.style.marginLeft = "7rem";
            // closebtn.style.marginTop = "1rem";
            // context.appendChild(closebtn);
            maskDom.addEventListener("touchstart", maskDomShow_handel)

            function maskDomShow_handel() {
              maskDomShow = false;

              maskDom.removeEventListener("click", maskDomShow_handel);
              document.body.removeChild(maskDom);
              maskDom = null;
            }
          }
        } else {
          if (maskDom) {
            document.body.removeChild(maskDom);

            maskDom = null;
          }
        }
      }
      /////////////////////////////////////
      // 输出当前屏幕模式
      handleOrientationChange(mql);
      // 监听屏幕模式变化
      mql.addListener(handleOrientationChange);
    } else {
      console.log("get in orientationchange")
      var evt = "onorientationchange" in window ? "orientationchange" : "resize";
      window.addEventListener(evt, function() {
        var width = document.documentElement.clientWidth;
        var height = document.documentElement.clientHeight;
        if (width > height) {
          if (maskDom) {
            document.body.removeChild(maskDom);

            maskDom = null;
          }
          //  console.log("landscape")
        } else {
          //  console.log("portrait")
          //  alert("当前竖屏")
          if (!maskDom && maskDomShow) {
            maskDom = document.createElement("div");
            maskDom.style.position = "absolute";
            maskDom.style.top = "0";
            maskDom.style.left = "0";
            maskDom.style.width = "100%";
            maskDom.style.height = "100%";
            maskDom.style.backgroundColor = "rgba(0,0,0,0.7)"
            document.body.appendChild(maskDom);
            let context = document.createElement("div");
            context.style.position = "absolute";
            context.style.fontFamily = "Microsoft YaHei";
            context.style.fontSize = "0.65rem";


            context.style.color = "white";
            context.style.top = "1.5rem";
            context.style.paddingLeft = "1.5rem";

            context.innerHTML = "<div style='line-height:2.6rem;'><b style='font-size:125%;'>横屏观看？</b></div>" +
              "<div style='line-height:1.2rem;'>1.手机解锁方向锁定...</div><div>2.打开微信设置-通用-开启横屏模式 ...</div>";
            maskDom.appendChild(context);

            closebtn = document.createElement("div");
            closebtn.style.position = "absolute"
            closebtn.style.background = "url(static/img/iknow.png) no-repeat";
            closebtn.style.backgroundSize = "contain";

            closebtn.style.width = "4.21rem";
            closebtn.style.height = "1.87rem";
            closebtn.style.marginLeft = "7rem";
            closebtn.style.marginTop = "1rem";
            context.appendChild(closebtn);
            closebtn.addEventListener("touchstart", maskDomShow_handel)

            function maskDomShow_handel() {
              maskDomShow = false;

              closebtn.removeEventListener("click", maskDomShow_handel);
              document.body.removeChild(maskDom);
              maskDom = null;
            }
          }
        }
      }, false);

    }





  }
})
