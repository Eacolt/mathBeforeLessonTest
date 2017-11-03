<template>
  <div class="percentbar" :style="percentbarSetting" >
    <div class="innerbar" :style="getInnerpercentbar"></div>
      <div class="percentbar_mask" :style="getmask">
        <div class="gap_w"></div>
        <div class="lightbar"></div>
        <div class="gap_w"></div>
      </div>
      <div class="scores">{{rankscore}}</div>
  </div>
</template>
<script>
import {
  TweenMax,
  TimelineLite
} from "gsap";
export default {
  name: 'hello',
  props:{
    width:{
      type:Number,
      default:2
    },
    score:{
      type:String,
      default:''
    },
    height:{
      type:Number,
      default:0.3
    },
    color:{
      type:String,
      default:'#60e2ff'
    },

    innerHeight:{
      type:Number,
      default:0.24
    },
    currentNum:{
      type:Number,
      default:100
    },
    totalNum:{
      type:Number,
      default:100
    }
  },
  data () {
    return {
      rankscore:this.score,
      percentWIDTH:0.1
    }
  },
  computed:{
    setPercentWidth:{
      get(){
        return this.percentWIDTH+"rem"
      },
      set(value){
        this.percentWIDTH = value+"rem";
      }
    },
    getInnerpercentbar:function(){
      const self = this;
      let pers = (this.currentNum/this.totalNum)*this.width*0.965;
      let cc = pers+'rem';
      return {
        width:cc,
        top:'0.04rem',
        left:'0.056rem',
        backgroundColor:self.color,
        height:self.innerHeight+'rem',
        borderTopLeftRadius: this.height/2+'rem',
        borderBottomLeftRadius: this.height/2+'rem',
        borderTopRightRadius: this.height/2+'rem',
        borderBottomRightRadius: this.height/2+'rem'
      };
    },
    getmask:function(){
      const self = this;
      let pers = (this.currentNum/this.totalNum)*this.width*0.965;
      let cc = pers+'rem';
      return {
        width:cc,
        top:'0.04rem',
        left:'0.056rem',
        height:self.innerHeight+'rem',
        borderTopLeftRadius: this.height/2+'rem',
        borderBottomLeftRadius: this.height/2+'rem',
        borderTopRightRadius: this.height/2+'rem',
        borderBottomRightRadius: this.height/2+'rem'
      };
    },
    percentbarSetting:{
      get(){
        return {
          width:this.width+'rem',
          height:this.height+'rem',
          borderTopLeftRadius: this.height/2+'rem',
          borderBottomLeftRadius: this.height/2+'rem',
          borderTopRightRadius: this.height/2+'rem',
          borderBottomRightRadius: this.height/2+'rem',
        }
      }

    }
  },

  methods:{
    animate(){
      const self = this;
      let obj = {
        w:self.percentWIDTH
      }
      TweenMax.to(obj,1,{w:self.width,ease:Linear.easeIn,onUpdate:()=>{
        self.percentWIDTH = obj.w;
        console.log(self.wid)
      }})
    }
  },
  mounted(){
    //this.animate()
  }
}
</script>
<style scoped="">
  .innerbar{
    position: relative;
    width:.5rem;
    height:100%;

  }
  .percentbar_mask{
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    flex-direction: row;
    justify-content: center;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:.3rem;
    border-radius: .05rem;
    background:-webkit-gradient(linear, center top, center bottom, from(rgba(0,0,0,0)), to(rgba(111,111,111,0.4)),color-stop(42%, rgba(0,0,0,0)));
  }
  .gap_w{
    width: 0.1rem;
  }
  .percentbar{
    position:relative;
    background:-webkit-gradient(linear, center top, center bottom, from(#eac69a), to(#fef5df));
  }
  .lightbar{
    display: flex;
    position: relative;
    top:-0.04rem;
    width:100%;
    border-top:1px solid white;
    height:0.2rem;
    transform: scaleY(0.12);
    background:rgba(255,255,255,0.8);
    z-index: 999;
  }
  .scores{
    position: relative;
    top:0;
    font-size: 0.32rem;
    color:#f75a26;
    font-weight: bold;
    left: 3.2rem;
    top:-0.27rem;
    width:0.5rem;
    text-align: left;
  }
</style>
