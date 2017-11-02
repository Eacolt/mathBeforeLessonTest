
const dateFormat = require('dateformat');
const {mapState, mapGetters} = require('vuex');
const Velocity = require('velocity-animate')
let time;
export default {
  data() {
    return {
      userAnswer: null,
      passedTime: 0,
      passedLevel: false,
      avatarLogo:"static/img/avatar1.png",
      passLevelBg:"static/img/passbg1.png",
    }
  },
  computed: {

    formattedTime: {
      get() {
        if (this.passedTime === 0) return '00:00';
        return dateFormat(this.passedTime * 1000, 'MM:ss');
      }
    },
    ...mapState(['lastLevelDescribe', 'nextLevelDescribe','currentLevel']),
    ...mapGetters({
      complete: 'complete',
      path: 'staticPath',
      lastQuestion: 'lastQuestion',
      currentLevelLastQuestion: 'currentLevelLastQuestion',
      rank: 'currentLevelRank',
      questionContent: 'currentQuestionContent',
      currentLevelName: 'currentLevelName'
    })
  },
  methods: {
    backToMap(){
      this.$router.push('./gameMap');
      createjs.Sound.play("button_mp3");
    },
    getLabelImgPath(index) {
      if (this.isSelected(index)) {
        return this.path + 'selected_' + index + '.png';
      } else {
        return this.path + 'option_' + index + '.png';
      }
    },
    getLabelImgNormalPath(index) {
      return this.path + 'option_' + index + '.png';
    },
    getLabelImgSelectedPath(index) {
      return this.path + 'selected_' + index + '.png';
    },
    isSelected(index) {
      return this.userAnswer === index;
    },
    /**
     * 提交和下一题的分开的两个步骤
     * 1. 如果不是当前关卡最后一题，提交和下一题同步执行
     * 2. 如果是当前关卡最后一题，先提交，弹出"恭喜过关"面板，在该面板上点击"下一题"按钮，触发下一题
     */
    submit() {
      this.$store.dispatch('submit', {userAnswer: [this.userAnswer], passedTime: this.passedTime})
      if (this.currentLevelLastQuestion) {
        this.passedLevel = true;
        createjs.Sound.play("success_mp3");
      } else {
        this.toNext();
      }
    },
    toNext() {
      this.passedLevel = false;
      this.passedTime = 0;
      this.userAnswer = null;
       this.$store.dispatch('toNext');
       createjs.Sound.play("button_mp3");

    //  this.$router.push('./gameMap')
    },
    enter(el,done) {
      Velocity(el, {scale: 1.1}, {duration: 2000,easing:'spring'})
    },

  },
  mounted() {

    const self = this;
    switch (this.currentLevelName) {
      case "运算能力":
        self.avatarLogo = "static/img/avatar1.png";
        self.passLevelBg = "static/img/passbg1.png";
        break;
        case "专注力":
            self.avatarLogo = "static/img/avatar2.png"
              self.passLevelBg = "static/img/passbg2.png";
        break;
        case "推理能力":
            self.avatarLogo = "static/img/avatar3.png"
              self.passLevelBg = "static/img/passbg3.png";
        break;
        case "观察能力":
            self.avatarLogo = "static/img/avatar4.png";
              self.passLevelBg = "static/img/passbg4.png";
        break;
        case "动手能力":
            self.avatarLogo = "static/img/avatar5.png";
              self.passLevelBg = "static/img/passbg5.png";
        break;
        case "时间管理能力":
            self.avatarLogo = "static/img/avatar5.png";
            self.passLevelBg = "static/img/passbg5.png";
        break;
      default:
        break;

    }
    time = setInterval(() => {
      //弹出通关面板，不再判断
      if (this.passedLevel) return;
      if(this.currentLevel<0)return;
      this.passedTime++;
      if (this.passedTime >= this.$store.getters.answerTime) {
        this.submit();
      }
    }, 1000);
  },
  update(){

  },
  destroyed() {
    if (time) {
      clearInterval(time)
    }
  }
}
