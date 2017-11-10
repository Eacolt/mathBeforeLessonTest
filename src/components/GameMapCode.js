// <<<<<<< HEAD
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import LevelMonster from './LevelMonster.vue';
const Velocity = require('velocity-animate')

import {mapState, mapGetters} from 'vuex';
export  default {

    data(){
      return {
        mapX:{
          transform:"translate(0,0)"
        },
        swiperOption: {
          notNextTick: true,
           pagination: '.swiper-pagination',
           resistanceRatio:0,
           direction:'vertical',
           mousewheelControl:true
        },
        levelMonsterList:[
          //Monster 1
          {
            monstersrc:"static/maps/monster_1.png",
            leveldisabledsrc:"#",
            levelabledsrc:"static/maps/level1.png",
            stateOpen:true,
            monsterRect:{
              x:'0.5rem',
              y:'-0.4rem',
              w:'3.09rem',
              h:'2.66rem'
            },
            levelRect:{
              x:'1.9rem',
              y:'2.9rem',
              w:'3.99rem',
              h:'3.06rem'

            },
            lightPos:{
              x:'-0.3rem',
              y:'-1.2rem'
            },
            stateNew:false,
            showCompleteTip:false,
            yetCompleteTip:true,
          },
          //Monster2
          {
            monstersrc:"static/maps/monster_2.png",
            leveldisabledsrc:"static/maps/level2_gray.png",
            levelabledsrc:"static/maps/level2.png",
            stateOpen:false,
            monsterRect:{
              x:'0.5rem',
              y:'0',
              w:'2.48rem',
              h:'2.18rem'
            },
            levelRect:{
              x:'8.4rem',
              y:'1.7rem',
              w:'3.32rem',
              h:'3.08rem'

            },
            lightPos:{
              x:'-0.68rem',
              y:'-1.2rem'
            },
            showCompleteTip:false,
            yetCompleteTip:true,
          },
          //monster_3
          {
            monstersrc:"static/maps/monster_3.png",
            leveldisabledsrc:"static/maps/level3_gray.png",
            levelabledsrc:"static/maps/level3.png",
            stateOpen:false,
            monsterRect:{
              x:'0.7rem',
              y:'-0.02rem',
              w:'2.67rem',
              h:'2.73rem'
            },
            levelRect:{
              x:'13.74rem',
              y:'4.4rem',
              w:'3.99rem',
              h:'3.14rem'

            },
            lightPos:{
              x:'-0.42rem',
              y:'-1rem'
            },
            levelAbledY:'1.58rem',
            showCompleteTip:false,
                yetCompleteTip:true,
          },

          //monster4
          {
            monstersrc:"static/maps/monster_4.png",
            leveldisabledsrc:"static/maps/level4_gray.png",
            levelabledsrc:"static/maps/level4.png",
            stateOpen:false,
            monsterRect:{
              x:'0.51rem',
              y:'-0.06rem',
              w:'2.20rem',
              h:'2.27rem'
            },
            levelRect:{
              x:'22.1rem',
              y:'0.62rem',
              w:'3.32rem',
              h:'3.03rem'

            },
            lightPos:{
              x:'-0.94rem',
              y:'-1.2rem'
            },
            levelAbledY:'1.2rem',
            showCompleteTip:false,
            yetCompleteTip:true,
          },
          //monster5
          {
            monstersrc:"static/maps/monster_5.png",
            leveldisabledsrc:"static/maps/level5_gray.png",
            levelabledsrc:"static/maps/level5.png",
            stateOpen:false,
            monsterRect:{
              x:'0.91rem',
              y:'-0.06rem',
              w:'2.27rem',
              h:'2.36rem'
            },
            levelRect:{
              x:'26.8rem',
              y:'4.2rem',
              w:'3.99rem',
              h:'3.16rem'

            },
            lightPos:{
              x:'-0.54rem',
              y:'-1.3rem'
            },
            levelAbledY:'1.2rem',
            showCompleteTip:false,
            yetCompleteTip:true,
          },
          //monster6
          {
            monstersrc:"static/maps/monster_5.png",
            leveldisabledsrc:"static/maps/level6_gray.png",
            levelabledsrc:"static/maps/level6.png",
            stateOpen:false,
            monsterRect:{
              x:'1.42rem',
              y:'-0.06rem',
              w:'2.27rem',
              h:'2.36rem'
            },
            levelRect:{
              x:'32.3rem',
              y:'0.94rem',
              w:'5.06rem',
              h:'3.02rem'

            },
            lightPos:{
              x:'0',
              y:'-1.3rem'
            },
            levelAbledY:'1.2rem',
            showCompleteTip:false,
              yetCompleteTip:true,
          },
        ]

      }
    },
    computed:{
      mymonstersrc:function(){
        return "static/maps/monster_1.png"
      },
          ...mapState(['currentLevel'])
    },
    components:{
      LevelMonster
    },
    methods:{
      touchTest(){
      //  event.preventDefault()
      },
      clicklevelme(item){

        if(!item.stateOpen)return;//灰色的不能点
        if(item.showCompleteTip)return;//如果已经玩过了，不执行,stateOpen表示怪物颜色不为灰色
        this.toNext();
      },
      playAnime(self){
          let obj = self;
          let mytop = obj.style.top;
          let upmytop = (parseInt(mytop)-0.6)+'rem';
           Velocity(obj, {top:"-=0.2rem"}, {duration: 600,easing:'ease',loop:true,complete:()=>{
             //self.showLight = !self.showLight

           }})
      },
      playModal(self,stateTips){

        //如果已经可以显示已经完成游戏状态时候，触发提示文字动画：
        if(self  ){
          let obj = self;
          if(obj.style.opacity!=0)return;
          obj.style.opacity = 0;

          Velocity(obj, {top:"-=0.4rem",opacity:1}, {duration: 300,easing:'ease',delay:0,complete:()=>{
            Velocity(obj, {opacity:0}, {duration: 300,easing:'ease',delay:1000,complete:()=>{

                Velocity(obj,{top:"+=0.4rem"},{duration:1})
            }})
          }})
        }

      },
      //提示已完成提示框
      playModalYet(self){


        //如果已经可以显示已经完成游戏状态时候，触发提示文字动画：
        if(self){
          let obj = self;
          if(obj.style.opacity!=0)return;
          obj.style.opacity = 0;

          Velocity(obj, {top:"-=0.4rem",opacity:1}, {duration: 300,easing:'ease',delay:0,complete:()=>{
            Velocity(obj, {opacity:0}, {duration: 300,easing:'ease',delay:1000,complete:()=>{

                Velocity(obj,{top:"+=0.4rem"},{duration:1})
            }})
          }})
        }

      },
      toNext(){
        this.$store.dispatch('toNext');
        this.$router.push('/question');
      }
    },
    mounted(){
      const self = this;
      let currentLevelNum = this.$store.state.currentLevel+1;
      let passedLevelNum = 0;


      let currentLevelArr = ['运算能力'];
      let xpos = 0;
      let levelPos=[
        {
          x:"0"
        },
        {
          x:"-2rem"
        },
        {
          x:"-13rem"
        },
        {
          x:"-15rem"
        },
        {
          x:"-19.2rem"
        }
      ]
      self.mapX = {
        transform:"translate(0,0)"
      }

      for(let i=0;i<currentLevelNum;i++){
         this.levelMonsterList[i].showCompleteTip = true;
        this.levelMonsterList[i].stateOpen = true;
        this.levelMonsterList[i].stateNew=false;
        this.levelMonsterList[currentLevelNum].stateOpen = true;
      }
       //下一关currentLevelNum:stateNew发光显示
        this.levelMonsterList[currentLevelNum].stateNew = true;
      switch (currentLevelNum) {
        case 3:
          self.mapX = {
            transform:"translate("+levelPos[0].x+",0px)"
          }
          case 4:
            self.mapX = {
              transform:"translate("+levelPos[2].x+",0px)"
            }
            case 5:
              self.mapX = {
                transform:"translate("+levelPos[4].x+",0px)"
              }
          break;
        default:

      }


    }

}
