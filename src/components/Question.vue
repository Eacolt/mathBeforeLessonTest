<template>
  <div v-if="currentLevel>=0" class="container">
    <!--背景-->
    <img draggable="false" class="full" src="static/img/questionBg.jpg">
    <img draggable="false" class="avatar" :src="avatarLogo"/>
    <!--题目-->
    <div class="describe"
         :style="{
            'fontSize':questionContent.describe.length>30?'0.32rem':'0.4rem',

          }"
    >
      {{questionContent.describe}}
    </div>
    <!--答题时间-->
    <div class="time">{{formattedTime}}</div>
    <!--题干-->
    <img draggable="false" class="stem" :src="path+'stem.png'">
    <!--选项-->
    <div class="optionContainer">
      <div class="option" v-for="index in questionContent.option">
        <!--这里value='index-1'，因为v-for以1为初始值-->
        <input type="radio"
               :id="'option'+index"
               :value="index-1"
               v-model="userAnswer"
        >
        <label :for="'option'+index">
          <transition
            v-on:enter="enter",
            :css="false"
          >
            <img draggable="false" v-if="isSelected(index-1)"
                 :src="getLabelImgSelectedPath(index-1)"
            >
          </transition>
          <img draggable="false" v-if="!isSelected(index-1)" :src="getLabelImgNormalPath(index-1)">
        </label>
      </div>
    </div>

    <button
      class="nextBtn"
      v-show="!complete"
      @click="submit">
    </button>
    <button v-show="complete"
            class="nextBtn"
            @click="submit"
    >
    </button>
    <div v-show="passedLevel" class="passed full">
      <div class="modal"></div>
      <div class="center">
        <img draggable="false" class="avatarLight" src="static/img/passlight.png"/>
        <img draggable="false"  class="avatarPassLevel"  :src="passLevelBg"/>
        <!-- <img draggable="false" class="avatarPassLevel" :src="avatarLogo"/> -->
        <p class="rank">{{currentLevelName}}:{{rank ? rank.rank : ''}}</p>
        <p class="levelDescribe">{{complete ? lastLevelDescribe : nextLevelDescribe}}</p>
        <button v-show="!complete" @click="backToMap()"></button>
        <button  v-show="complete"></button>
        <img draggable="false" v-show="complete" @click="$router.push('./summary')"  class="getsummaryBtn" src="../assets/getsumbtn.png"/>
      </div>
    </div>
  </div>
  <div v-else style="color: white">没有当前关卡数据</div>
</template>
<script>
  export default require('./QuestionCode')
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  $fontStrokeColor: #097409;
  $globalWidth: 19.2rem;
  $globalHeight: 10.8rem;
  @mixin imgButton($prefix) {
    background: url('#{$prefix}Normal.png') no-repeat;
    background-size: cover;
    border: 0px;
    cursor: pointer;
    &:hover {
      background: url('#{$prefix}Over.png') no-repeat;
      background-size: cover;
    }
    &:active {
      background: url('#{$prefix}Down.png') no-repeat;
      background-size: cover;
    }
    outline: none;
  }
  .container {
    height: 100%;
  }
  .getsummaryBtn{
    cursor: pointer;
    position: absolute;
    width:2.24rem;
    height:auto;
    transform: translate(-50%,0);
    top:2.56rem;
  }
  //左下角动物头像
  .avatar{
    position: absolute;
    display: block;
    width:3rem;
    height:3rem;
    left:0.5rem;
    bottom:0.4rem;
  }
  //跳转界面的动物头像
  .avatarPassLevel{
    position: absolute;
    display: block;
    width:6rem;
    transform: translate(-50%,-50%);
  }
  .avatarLight{
    position: absolute;
    z-index: 0;
    transform: translate(-50%,-86%);
    width:10.5rem;
  }
  .center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .full {
    left: 0px;
    top: 0px;
    width: $globalWidth;
    height: $globalHeight;
  }
  .passed {
    position: absolute;
    color: white;
    /*下一关按钮*/
    button {
      position: absolute;
      left: 48%;
      transform: translate(-50%);
      bottom: 1rem;
      width: 2.21rem;
      height: 0.89rem;
      top:2.6rem;
      @include imgButton('../assets/nextLevel')
    }
    .modal {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.8);
    }
    .rank {
      text-align: center;
      left: 48%;
      transform: translate(-50%);
      top: 1.05rem;
      font-size: 0.36rem;
      position: absolute;
      margin: 0px;
      color: red;
      width:3rem;
      font-weight: bold;
    }
    .levelDescribe {
      text-align: center;
      left: 48%;
      transform: translate(-50%);
      top: 1.8rem;
      font-size: 0.36rem;
      position: absolute;
      margin: 0px;
      color: sienna;
      width:3.5rem;
    }
  }
  .nextBtn {
    bottom: 0.9rem;
    right: 0.6rem;
    position: absolute;
    width: 2rem;
    height: 0.8rem;
    @include imgButton('../assets/nextQuestion')
  }
  .describe {
    font-size: 0.4rem;
    color: white;
    position: absolute;
    left: 2.4rem;
    top: 0.25rem;
    width:12.3rem
  }
  .time {
    color: white;
    font-size: 0.4rem;
    position: absolute;
    right: 2.6rem;
    top: 0.25rem
  }
  .stem {
    position: absolute;
    width: 11rem;
    left: 4rem;
    top: 1.6rem;
  }
  .optionContainer {
    display: flex;
    justify-content: center;
    bottom: 0.4rem;
    position: absolute;
    width: $globalWidth;
    .option {
      margin: 0 0.5rem;
      img {
        width: 3.32rem;
      }
      input {
        display: none;
      }
      label {
        cursor: pointer;
      }
    }
  }
</style>
