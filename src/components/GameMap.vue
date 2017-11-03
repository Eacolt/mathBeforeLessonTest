<template>
    <div>
      <div>Game Map</div>
      <div>Level{{$store.state.currentLevel}}</div>


      <div class="mapscene" :style="mapX">

          <img draggable="false" src="static/maps/bg.jpg" height="100%" />
          <LevelMonster v-for="(item,index) in levelMonsterList" key="index" :levelabledsrc="item.levelabledsrc" :leveldisabledsrc="item.leveldisabledsrc"
          :monstersrc="item.monstersrc" :stateOpen="item.stateOpen" :monsterRect="item.monsterRect" :levelRect="item.levelRect" :lightPos="item.lightPos" :stateNew="item.stateNew" :levelAbledY="item.levelAbledY" :showCompleteTip="item.showCompleteTip"
          :yetCompleteTip="item.yetCompleteTip" @CLICK_LEVEL="clicklevelme(item)" @PLAY_ANIME="playAnime" @PLAY_MODAL="playModal" @PLAY_YET_MODAL="playModalYet"/>

      </div>



    </div>
</template>
<script>
  export default require('./GameMapCode');

</script>
<style scoped="" lang="scss">


.mapscene{
  position: absolute;
  top:0px;
  width:100%;
  height:100%;


}
.levelbtn{
  position:absolute;
  display: block;
  width:2rem;
  height:2rem;
  border:2px solid red;
  top:0;
  left:2rem;
  opacity:0.5;
}

</style>
