import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper';
import Buttons from './Buttons.vue';
import PercentBar from './PercentBar.vue';
import Arrows from './Arrows.vue';
import RadarGraphic from './RadarGraphic.vue';

import {
  mapState,
  mapGetters
} from 'vuex';
export default {
  data: function() {
    return {
      anime1occur:true,
      anime2occur:false,
      swiperOption: {
        notNextTick: true,
        pagination: '.swiper-pagination',
        resistanceRatio: 0,
        direction: 'vertical',
        mousewheelControl: true,
        onTransitionEnd: function() {
          if (this.mySwiper.activeIndex == 1) {
            if(this.anime2occur)return;
            this.$refs.RadarGraphic.animeStart(this.point_arry)
            this.anime2occur = true;
          }
           if (this.mySwiper.activeIndex == 0) {
            if(this.anime1occur)return;
            //  TweenMax.staggerFrom(this.percentbarList,0.8,{currentNum:0,ease:Linear.easeIn},0.3)
            for (let i = 0; i < this.percentbarList.length; i++) {
              this.percentAnimeTo(this.percentbarList[i].currentNum, this.percentbarList, i, this)
            }
              this.anime1occur = true;
          }
        }.bind(this)
      },
      username: '小恐龙',
      score: '100',
      greatComments_str: "",
      badComments_str: "",
      commentUpper: true,
      commentDown: true,
      //这个是雷达图
      point_arry: [
        [0.3, 1],
        [0.3, 1],
        [0.3, 1],
        [0.2, 1],
        [0.5, 1],
        [0.8, 1]
      ],
      leftUlList: [{
          times: '第1讲',
          lesson: '比多比少问题',
          respons: '运算能力'
        },
        {
          times: '第2讲',
          lesson: '数独(二)',
          respons: '专注力'
        },
        {
          times: '第3讲',
          lesson: '代换推理',
          respons: '推理能力'
        },
        {
          times: '第4讲',
          lesson: '数表找规律',
          respons: '观察能力'
        },
        {
          times: '第5讲',
          lesson: '图形的剪拼',
          respons: '动手能力'
        },
        {
          times: '第6讲',
          lesson: '认识日历',
          respons: '时间管理能力'
        }, {
          times: '第7讲',
          lesson: '期末复习',
          respons: ''
        }
      ],
      rightUlList: [{
          times: '第1讲',
          lesson: '认识单位',
          respons: '运算能力'
        },
        {
          times: '第2讲',
          lesson: '我会测量',
          respons: '运算能力'
        },
        {
          times: '第3讲',
          lesson: '数字推理',
          respons: '推理能力'
        },
        {
          times: '第4讲',
          lesson: '多角度观察',
          respons: '空间感知能力'
        },
        {
          times: '第5讲',
          lesson: '表达力',
          respons: '表达力'
        },
        {
          times: '第6讲',
          lesson: '有序思考',
          respons: '逻辑推理能力'
        }, {
          times: '第7讲',
          lesson: '人民币的认识',
          respons: '运算能力'
        },
        {
          times: '第8讲',
          lesson: '有趣的时钟',
          respons: '时间管理能力'
        }, {
          times: '第9讲',
          lesson: '玩转立体七巧板',
          respons: '动手能力'
        },
        {
          times: '第10讲',
          lesson: '对折的学问',
          respons: '动手能力'
        }, {
          times: '第11讲',
          lesson: '数独',
          respons: '专注力'
        },
        {
          times: '第12讲',
          lesson: '期末复习',
          respons: ''
        }
      ],
      percentbarList: []
    }
  },
  computed: {
    ...mapGetters({
      getLevel: 'getAllLevelRank'
    }),
    toto: function() {
      return 666;
    },
    mySwiper() {
      return this.$refs.mySwiper.swiper
    },
    currentPage: {
      get() {
        return this.mySwiper.activeIndex
      }
    },
    radarPointArr: {
      get() {
        return this.point_arry
      },
      set(x) {
        return x;

      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    PercentBar,
    RadarGraphic,
    Arrows,
    Buttons
  },
  methods: {
    percentAnimeTo($terminal, $target, $index, $thisObj, $speed = 12, $vector = 1) {
      let starts = 0;
      let animeFrameCount = () => {
        let count = setTimeout(() => {
          if (starts > $terminal) {
            clearTimeout(count)
            return;
          }
          $target[$index].currentNum = starts;
          $thisObj.percentbarList = $target;
          starts += $vector;
          animeFrameCount();
        }, $speed);
      }
      animeFrameCount();

    }
  },
  mounted: function() {
    //const selfs = this;
    //  this.point_arry = [[1,1],[0.6,1],[0.8,1],[0.9,1],[0.9,1],[0.9,1]];
    //   this.$refs.RadarGraphic.animeStart(this.point_arry)
    // let percents = [
    //   {
    //     currentNum:100,
    //     score:"A",
    //     color:"red"
    //
    //   },
    //   {
    //     currentNum:60,
    //     score:"A",
    //     color:"red"
    //
    //   }
    // ];
    //  TweenMax.staggerFrom(percents,1,{currentNum:0,ease:Linear.easeIn},0)
    // let starto = 0;
    // let terminal = 80;
    //
    //  this.percentAnimeTo(100,percents,0,this)
    //  this.percentAnimeTo(50,percents,1,this)
    //
    //  return;
    const self = this;
    let _badComments_arr = [];
    let _greatComments_arr = []
    let comments = ['运算能力', '专注力', '推理能力', '观察能力', '动手能力', '时间管理'];

    let color_arr = ["#5ad9fb", "#f97454", "#fcad2d", "#aadc4b", "#ff83ce", "#a573f2"];
    let rankarr = [];
    let radararr = [];
    for (let i = 0; i < this.getLevel.length; i++) {
      let _rank = this.getLevel[i].rank;
      let _rate = Number(this.getLevel[i].rate).toFixed(2) * 100;
      rankarr.push({
        currentNum: (_rate == 0) ? 10 : _rate, //这个是判断雷达图直径长度的
        score: _rank, //这个是ABCD评分
        color: color_arr[i]
      });
      if (_rate < 85) {
        _badComments_arr.push('<span style="color:' + color_arr[i] + '">' + comments[i] + '</span>');
      } else {
        _greatComments_arr.push('<span style="color:' + color_arr[i] + '">' + comments[i] + '</span>');
      }
      radararr.push([rankarr[i].currentNum / 100, 1]);
    }
    if (_badComments_arr.length < 1) {
      self.commentDown = false;
    }
    if (_greatComments_arr.length < 1) {
      self.commentUpper = false;
    }
    self.badComments_str = _badComments_arr.join('，');
    self.greatComments_str = _greatComments_arr.join('，');
    self.percentbarList = rankarr;
    //百分比的动画运动
    for (let i = 0; i < self.percentbarList.length; i++) {
      self.percentAnimeTo(self.percentbarList[i].currentNum, self.percentbarList, i, this)
    }
    let newarr = [radararr[3], radararr[2], radararr[1], radararr[0], radararr[5], radararr[4]];
    self.point_arry = newarr;
    //获得分数;
    let score = self.$store.state.userAnswers;
    let summaryscore = [];
    score.forEach((item, index) => {
      item.forEach((item, index) => {
        summaryscore.push(item.score);
      })
    })
    let resultscore = Array.prototype.reduce.call(summaryscore, (pvalue, cvalue) => {
      return cvalue + pvalue;
    })
    self.score = resultscore + '';
  }
}
