<template>
  <div class="flex justify-center items-end max-w-[1060px] max-h-[780] relative">
    <div class="-z-10 relative flex justify-center items-end w-full h-full mt-[16%]">
      <img src="../../assets/Quality/Animation/Back.png" class=""/>
    </div>
    <div class="absolute justify-center flex z-30 bottle-position">
      <img src="../../assets/Quality/Bottle.png" />
    </div>
    <div class="absolute justify-center flex z-10 init-head-position" :class="{'animation-head1': showAni}">
      <img src="../../assets/Quality/Animation/Head.png" />
    </div>
    <div class="absolute justify-center flex z-20 init-comp-position" :class="{'animation-comp1': showAni}">
      <img src="../../assets/Quality/Animation/Comp1.svg" />
    </div>
    <div class="absolute justify-center flex z-20 init-comp-position" :class="{'animation-comp2': showAni}">
      <img src="../../assets/Quality/Animation/Comp2.svg" />
    </div>
    <div class="absolute justify-center flex z-20 init-comp-position" :class="{'animation-comp3': showAni}">
      <img src="../../assets/Quality/Animation/Comp3.svg" />
    </div>
    <div class="absolute justify-center flex z-20 init-comp-position" :class="{'animation-comp4': showAni}">
      <img src="../../assets/Quality/Animation/Comp4.svg" />
    </div>
    <div class="absolute justify-center flex z-20 init-comp-position" :class="{'animation-comp5': showAni}">
      <img src="../../assets/Quality/Animation/Comp5.svg" />
    </div>
    <div class="absolute justify-center flex z-20 init-comp-position" :class="{'animation-comp6': showAni}">
      <img src="../../assets/Quality/Animation/Comp6.png" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAni: false,
    }
  },
  methods: {
    setAni(){
      this.showAni = true;
    }
  },
}
</script>

<style scoped>
.bottle-position {
  bottom: 5%;
  height: 60%;
  right: 24%;
}
.init-comp-position {
  bottom: 60%;
  width: 0%;
  right: 43%;
}
.init-head-position {
  bottom: 10%;
  height: 80%;
  right: 14%;
}

.animation-head1{
  animation: headmove infinite 20s;
}
@keyframes headmove{
  8%{
    transform: none;
    animation-timing-function: ease-in;
  }

  12%{
    transform: translateY(-35%);
    animation-timing-function: ease-out;
  }

  16%{
    transform: translate(24%,-25%) rotate(65deg);
  }

  84%{
    transform: translate(24%,-25%) rotate(65deg);
    animation-timing-function: ease-in;
  }
  
  88%{
    transform: translateY(-35%);
    animation-timing-function: ease-out;
  }

  92%{
    transform: none;
  }
}
.animation-comp1{
  animation: comp1 infinite 20s;
}
@keyframes comp1 {
  16%{
    transform: translateY(0);
    animation-timing-function: ease-out;
    width: 0%;
  }
  26%{
    transform: translate(-160%, -30%);
    width: 22%;
  }
  50%{
    transform: translate(-166%, -33%);
    width: 22%;
  }
  74%{
    transform: translate(-160%, -30%);
    width: 22%;
  }
  84%{
    transform: translateY(0);
    width: 0%;
  }
}

.animation-comp2{
  animation: comp2 infinite 20s;
}
@keyframes comp2 {
  16%{
    transform: translateY(0);
    animation-timing-function: ease-out;
    width: 0%;
  }
  26%{
    transform: translate(-45%, -50%);
    width: 22%;
  }
  54%{
    transform: translate(-43%, -54%);
    width: 22%;
  }
  74%{
    transform: translate(-45%, -50%);
    width: 22%;
  }
  84%{
    transform: translateY(0);
    width: 0%;
  }
}

.animation-comp3{
  animation: comp3 infinite 20s;
}
@keyframes comp3 {
  16%{
    transform: translateY(0);
    animation-timing-function: ease-out;
    width: 0%;
  }
  26%{
    transform: translate(100%, -40%);
    width: 22%;
  }
  49%{
    transform: translate(106%, -44%);
    width: 22%;
  }
  74%{
    transform: translate(100%, -40%);
    width: 22%;
  }
  84%{
    transform: translateY(0);
    width: 0%;
  }
}

.animation-comp4{
  animation: comp4 infinite 20s;
}
@keyframes comp4 {
  16%{
    transform: translateY(0);
    animation-timing-function: ease-out;
    width: 0%;
  }
  26%{
    transform: translate(-180%, 140%);
    width: 22%;
  }
  52%{
    transform: translate(-182%, 138%);
    width: 22%;
  }
  74%{
    transform: translate(-180%, 140%);
    width: 22%;
  }
  84%{
    transform: translateY(0);
    width: 0%;
  }
}

.animation-comp5{
  animation: comp5 infinite 20s;
}
@keyframes comp5 {
  16%{
    transform: translateY(0);
    animation-timing-function: ease-out;
    width: 0%;
  }
  26%{
    transform: translate(-125%, 65%);
    width: 22%;
  }
  47%{
    transform: translate(-123%, 67%);
    width: 22%;
  }
  74%{
    transform: translate(-125%, 65%);
    width: 22%;
  }
  84%{
    transform: translateY(0);
    width: 0%;
  }
}

.animation-comp6{
  animation: comp6 infinite 20s;
}
@keyframes comp6 {
  16%{
    transform: translateY(0);
    animation-timing-function: ease-out;
    width: 0%;
  }
  26%{
    transform: translate(-30%, 35%);
    width: 22%;
  }
  54%{
    transform: translate(-33%, 33%);
    width: 22%;
  }
  74%{
    transform: translate(-30%, 35%);
    width: 22%;
  }
  84%{
    transform: translateY(0);
    width: 0%;
  }
}
</style>
