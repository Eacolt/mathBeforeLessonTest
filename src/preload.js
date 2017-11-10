class Preload {
  constructor() {
    this.fontSize = 0;
    this.loadingDiv = null;
  }
  getKeyFrame(rule) {
    var ss = document.styleSheets;
    for (var i = 0; i < ss.length; ++i) {
      for (var j = 0; j < ss[i].cssRules.length; ++j) {
        if (ss[i].cssRules[j].type == window.CSSRule.KEYFRAMES_RULE &&
          ss[i].cssRules[j].name == rule) {
          return ss[i].cssRules[j];
        }
      }
      return null;
    }
  }
  //适配方法
  initAdaption() {
    var self = this;
    var docEl = document.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function() {
        window.clientWidth = docEl.clientWidth;
        window.clientHeight = docEl.clientHeight;
        if (!window.clientWidth) return;
        var aspectRatio = window.clientWidth / window.clientHeight;
        if (aspectRatio > 1920 / 1080) {


          // document.getElementById("app").style.transformOrigin = "center center";
          // document.getElementById("app").style.left = "0"
          // document.getElementById("app").style.right = "0"
          // document.getElementById("app").style.margin = "0 auto"
          // document.getElementById("app").style.top = "0"
          // document.getElementById("app").style.webkitTransform = " rotateZ(0deg)"
          //强制横屏

          docEl.style.fontSize = 100 * (window.clientHeight / 1080) + 'px';
          window.base = 100 * (window.clientHeight / 1080);

        } else {

          // document.getElementById("app").style.transformOrigin = "center center";
          // document.getElementById("app").style.left = "-39%"
          // document.getElementById("app").style.top = "22%"
          // document.getElementById("app").style.webkitTransform = " rotateZ(90deg)"
          //强制横屏
          docEl.style.fontSize = 100 * (window.clientWidth / 1920) + 'px';
          window.base = 100 * (window.clientWidth / 1920);
          // 判断是否为移动设备，提示旋转屏幕
        }
        // docEl.style.fontSize = 100 * (window.clientHeight / 1080) + 'px';
        // window.base = 100 * (window.clientHeight / 1080);
      //  var kfy = self.getKeyFrame('loader');


        // if (parseInt(document.documentElement.style.fontSize) < 25) {
        //   self.fontSize = 40;
        // } else if (parseInt(document.documentElement.style.fontSize) > 48) {
        //   self.fontSize = 40;
        // } else {
        //   self.fontSize = parseInt(document.documentElement.style.fontSize);
        // }

        // let allfontsize = document.documentElement.style.fontSize;
        // let transMin = self.fontSize * -0.3 + "rem";
        // let transMax = self.fontSize * 0.3 + "rem";
        // let myrule = "0% {-webkit-transform:translate(" + transMin + ")}";
        // let myrule2 = "100% {-webkit-transform:translate(" + transMax + ")}";
        // kfy.deleteRule('0%');
        // kfy.deleteRule('100%');
        // kfy.appendRule(myrule);
        // kfy.appendRule(myrule2);

      };
    window.addEventListener(resizeEvt, recalc, false);
    recalc()
  }
}
export default Preload;
