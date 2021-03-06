import {
  TweenMax,
  TimelineLite
} from "gsap";
import Utils from './Utils';
export default {
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        mousewheelControl: true,
        resistanceRatio: 0,
        followFinger:false
      },
      gotoBtnShow: false,
      soundWords: ""
    }
  },
  computed: {},
  mounted() {
    const self = this;
    Utils.debug = false;
    createjs.Sound.alternateExtensions = ["mp3"];
    var queueManifest = new createjs.LoadQueue(false);
    var queue = new createjs.LoadQueue(false);
    let soundCount = 0;
    var myresult = null;

    queue.installPlugin(createjs.Sound)
    createjs.Sound.registerSound("static/audio/bgmusic.mp3", "bg_sound");
    createjs.Sound.registerSound("static/audio/success.mp3", "success_mp3");
    createjs.Sound.registerSound("static/audio/button.mp3", "button_mp3");
    createjs.Sound.registerSound("static/audio/cartoon_sd1.mp3", "cartoon_sd1_mp3");
    createjs.Sound.registerSound("static/audio/cartoon_sd2.mp3", "cartoon_sd2_mp3");

    //加载资源配置文件manifest;
    queueManifest.on("fileload", handleFileLoaded);
    queueManifest.on("fileerror", handleFileError);
    function handleFileError(evt) {
      console.warn(evt);
    }
    queueManifest.on("complete", handleFileComplete);
    queueManifest.loadManifest("static/assetsManifest.json");
    function handleFileLoaded(event) {
      myresult = event.result;
    }
    function handleFileComplete(event) {
      //加载所有资源
      queue.loadManifest(myresult);
      queue.on("complete", (event) => {
        setTimeout(() => {
          document.querySelector("#loadingDiv").style.display = "none";
          self.gameStart();
        }, 500)
      });
    }
  },
  methods: {
    gotoGame() {
      this.$router.push('/gamemap');
      createjs.Sound.play("bg_sound", {
        loop: -1
      })
    },
    gameStart() {
      //得到swiper对象
      const self = this;
      let gotoBtn = this.$refs.gotoBtn;
      let swiper = this.$refs.mySwiper.swiper,
        swiperNode = (name) => this.$refs.mySwiper.$el.getElementsByClassName(name)[0],
        swiperArr = [swiperNode("cartoon1"), swiperNode("cartoon2"), swiperNode("cartoon3"), swiperNode("cartoon4"), swiperNode("cartoon5"), swiperNode("cartoon6"), swiperNode("cartoon7")]
      swiper.disableMousewheelControl();
      swiper.disableTouchControl();
      swiperArr.forEach((item) => {
        item.style.opacity = 0;
      });
      function windowOnResize() {
        swiper.update(true);
        swiper.onResize()
    //  console.log("swiper更改")
      }
      let wrapspeed = 700;
      //定义动画@_swiperArr卡通动画对象,@index动画的索引位置
      let swiperAnime = ($index, $complete, $time = 300, $delay = 200) => {
        Velocity(swiperArr[$index], {
          opacity: 1
        }, {
          delay: $delay,
          duration: $time,
          complete: $complete
        });
      };
      let tl = new TimelineLite()
      tl.add(TweenMax.to(swiperArr[0], 0.8, {
        opacity: 1,
        onStart: function() {
          //      createjs.Sound.play()
          createjs.Sound.play("cartoon_sd1_mp3");
        }
      }));
      tl.add(TweenMax.to(swiperArr[1], 0.8, {
        opacity: 1,
        onComplete: () => {
          setTimeout(() => {
            swiper.slideTo(1, wrapspeed, false)
          }, 1000)
        }
      }));
      tl.add(TweenMax.to(swiperArr[2], 0.8, {
        opacity: 1
      }), "+=1.2");
      tl.add(TweenMax.to(swiperArr[3], 0.8, {
        opacity: 1
      }));
      tl.add(TweenMax.to(swiperArr[4], 0.8, {
        opacity: 1,
        onComplete: () => {
          setTimeout(() => {
            swiper.slideTo(2, wrapspeed, false)
          }, 1300)
        }
      }));
      tl.add(TweenMax.to(swiperArr[5], 0.8, {
        opacity: 1

      }), "+=1.5");
      tl.add(TweenMax.to(swiperArr[6], 0.8, {
        opacity: 1,
        onStart: function() {
          self.gotoBtnShow = true;
          self.soundWords = createjs.Sound.play("cartoon_sd2_mp3");
          self.soundWords.on("complete", () => {
            swiper.enableMousewheelControl();
            swiper.enableTouchControl();
          })
        }
      }));
      tl.pause()
      setTimeout(() => {
        tl.resume();
      }, 300)
      //按钮动画;
      let tl_btn = new TimelineLite();
      tl_btn.add(TweenMax.to(swiperNode("btnstart"), 0.4, {
        scale: "1.2",
        repeat: -1,
        yoyo: true
      }));
      swiperNode("btnstart").addEventListener('mouseenter', () => {
        tl_btn.pause();
      })
      swiperNode("btnstart").addEventListener('mouseleave', () => {
        tl_btn.resume();
      })
      window.addEventListener("resize", windowOnResize);
      window.addEventListener("orientationchange", windowOnResize);
      gotoBtn.addEventListener("click", () => {
        self.soundWords.stop()
        window.removeEventListener("resize", windowOnResize);
        window.removeEventListener("orientationchange", windowOnResize);
      })

    }
  }

};
