<template>
  <div id="loadingDiv"><div class="loader-container"><span class="runner"></span></div><span class="loadingText"></span></div>
</template>
<script></script>
<style lang="scss" scoped>


#loadingDiv{
height:100%;
width:100%;
position:absolute;
overflow:hidden;

margin:0 auto;
left:0px;
right:0px;
opacity:1;
filter:alpha(opacity=80);
z-index:10000;
}
.loader-container {
    height: .4rem;
    width: 6.8rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -1rem;
    margin-left: -3.4rem;
    background-color: #999999;
    border-radius: .5rem;
    border:.05rem solid #ffffff;
    overflow: hidden;
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform-style:preserve-3d;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
}


.loader-container .runner {
    border-radius: .5rem .5rem .5rem .5rem;
    position: absolute;
    left:.1rem;
    height: 100%;
    width: 100%;
    background-image: -webkit-linear-gradient(left, #ffcf93, #f98d9d,#a392fb);
    background-image: -moz-linear-gradient(left, #ffcf93, #f98d9d,#a392fb);
    background-image: -o-linear-gradient(left, #ffcf93, #f98d9d,#a392fb);
    background-image: -ms-linear-gradient(left, #ffcf93, #f98d9d,#a392fb);
    background-image: linear-gradient(left, #ffcf93, #f98d9d,#a392fb);
    animation: loader 3s infinite linear ;
    -webkit-animation: loader 3s infinite linear ;
    -o-animation: loader 3s infinite linear ;
    -moz-animation: loader 3s infinite linear ;
}
.loadingText{
    display:block;
    position:absolute;
    margin:0 auto;
    text-align: center;
    left:40px;
    right:0px;
    top:52%;
    color:#849bfe;
    font-size:.7rem;
    font-weight: 900;
    font-family: Comic Sans MS;
    /*-webkit-text-stroke-width: .03rem;*/
    /*-webkit-text-stroke-color: #fff;*/
    text-shadow:#ffffff .03rem 0 0,#ffffff 0 .03rem 0,#ffffff -.03rem 0 0,#ffffff 0 -.03rem 0;
    -webkit-text-shadow:#ffffff .03rem 0 0,#ffffff 0 .03rem 0,#ffffff -.03rem 0 0,#ffffff 0 -.03rem 0;
    -moz-text-shadow:#ffffff .03rem 0 0,#ffffff 0 .03rem 0,#ffffff -.03rem 0 0,#ffffff 0 -.03rem 0;
}
@keyframes loader {
    0%{
        -webkit-transform: translate(-6.8rem);
    }
    50%{
        -webkit-transform: translate(0);
    }
    100%{
        -webkit-transform: translate(6.8rem);
    }
}

</style>
