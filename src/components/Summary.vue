<template>
       <swiper :options="swiperOption"  ref="mySwiper" style="height:10.8rem;">

             <!-- 这部分放你要渲染的那些内容 -->
             <swiper-slide class="scene1"  >
                   <img draggable="false" style="position:absolute;left:0;top:0;width:100%;height:auto;" src="static/summary_bg1.jpg"/>
                     <div class="areabar">
                     <PercentBar v-for="(item,key,index) in percentbarList" :key="index" :width='3.13'  :color='item.color' :height='0.33' :currentNum='item.currentNum' :score="item.score" :totalNum='100' style="margin-bottom:0.32rem"/>
                   </div>
                   <div class="userinfoband">
                      <div class='username'>{{username}}</div>
                      <div class='score'>{{score}}分</div>
                   </div>
                   <Arrows :posx="0"/>
             </swiper-slide>
             <swiper-slide class="scene2">
                  <img draggable="false" style="position:absolute;left:0;top:0;width:100%;height:auto;" src="static/summary_bg2.jpg"/>
                 <Arrows :posx="-4.6" :posy="1.2"  />
                   <div class="congratulationList">
                     恭喜宝贝，顺利完成本次测评。<br/>宝贝的<br/>
                     <span v-html="greatComments_str"></span><span v-if="commentUpper">很强，要继续保持哦！</span>
                        <div  style="height:0.15rem" v-if="commentUpper"></div>
                     <span v-html="badComments_str"></span><span v-if="commentDown">有待提高，要重视培养喽~~</span>
                         <div style="height:0.15rem;" v-if="commentDown"> </div>
                         点击右上角，进行分享，邀请小伙伴一起参加测评吧~
                   </div>
                     <RadarGraphic  ref="RadarGraphic"  :point_Array="point_arry"/>
             </swiper-slide>
             <swiper-slide class="scene3">
                  <img draggable="false" style="position:absolute;left:0;top:0;width:100%;height:auto;" src="static/summary_bg3.jpg"/>
               <div class="lessonTestLeft">
                 <img class="header" draggable="false" src="static/img/lsntitle_l.png"/>
                 <div class="title">
                    <div>讲次</div>
                    <div>课程内容</div>
                    <div>应对能力</div>
                 </div>
                 <div   class="scheduleLists" v-for="(item,index) in leftUlList" :key="index">
                    <div>{{item.times}}</div>
                    <div>{{item.lesson}}</div>
                    <div>{{item.respons}}</div>
                 </div>

               </div>

               <div class="lessonTestRight">

                  <img class="header" draggable="false" src="static/img/lsntitle_r.png"/>
                 <div class="title">
                    <div>讲次</div>
                    <div>课程内容</div>
                    <div>应对能力</div>
                 </div>
                 <div class="scheduleLists" v-for="(item,index) in rightUlList" :key="index" >
                   <div >{{item.times}}</div>
                   <div >{{item.lesson}}</div>
                   <div >{{item.respons}}</div>
                 </div>
               </div>

              <div class='button2'></div>
             </swiper-slide>
         </swiper>

</template>

<script>
  export default require('./SummaryCode')
</script>
<style scoped="" lang="scss">
  $testfontSize: 0.5rem;
  $con_txsize: 0.4rem; //恭喜面板字体
  //课程表单元格子宽度
  $clsUnit_color1:#ffebcd;
  $clsUnit_color2:#ffe3b8;
  $clsLeft_1_w:1.03rem;
  $clsLeft_2_w:2.85rem;
  $clsLeft_3_w:1.81rem;

  $clsRight_1_w:1.03rem;
  $clsRight_2_w:2.85rem;
  $clsRight_3_w:1.81rem;

  $clsLeft_unit_h:0.57rem;
  $clsRight_unit_h:0.33rem;
  $classSchedule_h:4.92rem;
  $classSchedule_l_w:$clsLeft_1_w+$clsLeft_2_w+$clsLeft_3_w;//课程表板块
  $classSchedule_r_w:$clsRight_1_w+$clsRight_2_w+$clsRight_3_w;
  $classSchedule_l_h:$classSchedule_h/7;
  $classSchedule_r_h:$classSchedule_h/12;
  .areabar {
    position: absolute;
    top: 4.45rem;
    right: 4.93rem;
    width: 3.13rem;
    height: 4.37rem;
  }
  .userinfoband {
    position: relative;
    width: 4.9rem;
    height: 6.8rem;
    left: 3.6rem;
    top: 2.7rem;
    .username {
      position: absolute;
      text-align: center;
      line-height: auto;
      width: 2rem;
      top: 4.66rem;
      left: 2rem;
      color: white;
      font-size: 0.4rem;
    }
    .score {
      position: absolute;
      text-align: center;
      line-height: auto;
      width: 1.6rem;
      top: 5.56rem;
      left: 2rem;
      color: white;
      font-size: 0.44rem;
    }
  }
  .congratulationList {
    position: absolute;
    top: 2rem;
    left: 9.88rem;
    width: 5.7rem;
    height: 2rem;
    word-break: break-all;
    font-size: 0.3rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    box-sizing: border-box;
    text-align:justify;
    line-height: 0.48rem;
    color:#9a592a;
  }
 .lessonTestLeft{
   position: absolute;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   width:5.71rem;
   height:4.9rem;
   left:3.58rem;
   top:1.9rem;
   .header{
     position: relative;
     height:0.53rem;
     width:100%;
     background-size: 100% 100%;
   }
   .title{
     display: flex;

     position: relative;
     height:0.37rem;
     width:100%;
     background:#d7b683;
     font-size: 0.25rem;
     line-height: 0.28rem;
     font-weight: 600;
     color:white;
     box-sizing: border-box;
     div{
       display: flex;
       justify-content: center;
       align-items: center;
       flex-grow: 1;
       flex-wrap: nowrap;
     }
     div:nth-child(1){
       width:$clsLeft_1_w;
       border-right:1px solid white;
     };
     div:nth-child(2){
       width:$clsLeft_2_w;
        border-right:1px solid white;
     }
     div:nth-child(3){
       width:$clsLeft_3_w;
     }
   }
   .scheduleLists{
      display: flex;
      flex-direction: row;
      color:white;
      color:#9a592a;
      background:#ffe3b8;
      overflow: hidden;
      font-weight: 700;
      height:$clsLeft_unit_h;
      div{
        display: flex;
        justify-content: center;
        flex-grow: 1;
        overflow: hidden;
        font-size:0.22rem;
        flex-wrap: nowrap;
        line-height: $clsLeft_unit_h;
      }
      div:nth-child(1){
        display: flex;
        width:$clsLeft_1_w;
        border-right:1px solid #d7b683;
        overflow: hidden;
      };
      div:nth-child(2){
        width:$clsLeft_2_w;
         border-right:1px solid #d7b683;
      }
      div:nth-child(3){
        width:$clsLeft_3_w;
      }
   }
   .scheduleLists:nth-child(2n){
     background:#ffebcd;
   }

 }
 .lessonTestRight{
   position: absolute;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   width:5.71rem;
   height:4.9rem;

   left:9.83rem;
   top:1.9rem;
   .header{
     position: relative;
     height:0.53rem;
     width:100%;
     background-size: 100% 100%;

   }
   .title{
     display: flex;

     position: relative;
     height:0.37rem;
     width:100%;
     background:#d7b683;
     font-size: 0.25rem;
     line-height: 0.28rem;
     font-weight: 600;
     color:white;
     box-sizing: border-box;
     div{
       display: flex;
       justify-content: center;
       align-items: center;
       flex-grow: 1;
       flex-wrap: nowrap;
     }
     div:nth-child(1){
       width:$clsLeft_1_w;
       border-right:1px solid white;
     };
     div:nth-child(2){
       width:$clsLeft_2_w;
        border-right:1px solid white;
     }
     div:nth-child(3){
       width:$clsLeft_3_w;
     }
   }
   .scheduleLists{
      display: flex;
      flex-direction: row;
      color:white;
      color:#9a592a;
      background:#ffe3b8;
      overflow: hidden;
      font-weight: 700;
      height:$clsRight_unit_h;
      div{
        display: flex;
        justify-content: center;
        flex-grow: 1;
         height:inherit;
        overflow: hidden;
        font-size:0.2rem;
        flex-wrap: nowrap;
        line-height::$clsRight_unit_h;
      }
      div:nth-child(1){
        display: flex;
        width:$clsLeft_1_w;
        border-right:1px solid #d7b683;
        overflow: hidden;
      };
      div:nth-child(2){
        width:$clsLeft_2_w;
         border-right:1px solid #d7b683;
      }
      div:nth-child(3){
        width:$clsLeft_3_w;
      }
   }
   .scheduleLists:nth-child(2n){
     background:#ffebcd;
   }

 }
.button1{
  position: absolute;
  width:2.8rem;
  height:1.04rem;
  background:url(../assets/sharebtn.png) no-repeat;
  background-size: 100% 100%;
  margin:0 auto;
  left:0;
  right:0;
  top:7.8rem;
  cursor: pointer;
}
.button2{
  position: absolute;
  width:2.8rem;
  height:1.04rem;
  background:url(../assets/testbtn.png) no-repeat;
  background-size: 100% 100%;
  margin:0 auto;
  left:0;
  right:0;
  top:7.2rem;
  cursor: pointer;
}
.scene1,.scene2,.scene3{
position: relative;
height:10.8rem;
}
.gap{
  height:0.32rem;
}
</style>
