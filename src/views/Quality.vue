<template>
  <div class="w-screen flex flex-col -z-10">
    <Banner v-if="!showReadMoreMobile" />
    <SupportSkin v-if="!showReadMoreMobile" id="theAnimation" ref="animation"/>
    <Innovation v-if="!showReadMoreMobile" @readMore="readMore" />
    <ChooseIngre v-if="!showReadMoreMobile" />
    <div
      class="md:fixed z-[999] flex justify-end w-screen md:-mt-[40px] h-screen readmore-back"
      id="mainPage"
      v-if="showReadMore || showReadMoreMobile"
    >
      <div class="md:h-[780px] md:mt-[60px] flex justify-center bg-white" :class="{'movein-animation': showReadMore}">
        <component
          :is="compMap[readMoreMapKey]"
          @closeReadMore="closeReadMore"
          @backTo="backTo"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Quality/Banner.vue";
import SupportSkin from "../components/Quality/SupportSkin.vue";
import Innovation from "../components/Quality/Innovation.vue";
import ChooseIngre from "../components/Quality/ChooseIngre.vue";
import Synake from "../components/Quality/Synake.vue";
import Snap8 from "../components/Quality/Snap8.vue";
import Argireline from "../components/Quality/Argireline.vue";
import Eyeseryl from "../components/Quality/Eyeseryl.vue";
import Uplevity from "../components/Quality/Uplevity.vue";
export default {
  components: {
    Banner,
    SupportSkin,
    Innovation,
    ChooseIngre,
    Synake,
    Snap8,
    Argireline,
    Eyeseryl,
    Uplevity,
  },
  data() {
    return {
      compMap: {
        "2_1": "Eyeseryl",
        "1_4": "Snap8",
        "1_6": "Argireline",
        "1_7": "Synake",
        "3_1": "Uplevity",
      },
      showReadMore: false,
      showReadMoreMobile: false,
      readMoreMapKey: "1_4",
      showAni: false,
    };
  },
  methods: {
    closeReadMore() {
      this.showReadMore = false;
    },
    readMore(mapKey) {
      this.readMoreMapKey = mapKey;
      let theWidth = window.innerWidth;
      if (theWidth > 768) {
        this.showReadMore = true;
        this.showReadMoreMobile = false;
      } else {
        this.showReadMoreMobile = true;
        this.showReadMore = false;
        window.scrollTo(0, 0);
      }
    },
    backTo() {
      this.showReadMoreMobile = false;
      this.showReadMore = false;
    },
    handleScroll(){
      let scrollDis = document.documentElement.scrollTop;
      if(scrollDis===0){
        return
      }else{
        let theAni = document.getElementById('theAnimation')
        if(scrollDis > theAni.offsetTop){
          if(this.showAni){
            return
          }else{
            this.$refs.animation.initAni();
            this.showAni = true;
          }
        }
      }
    }
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll')
  },
};
</script>

<style scoped>
.readmore-back{
  background: rgba(0, 0, 0, 0.25);
}
.movein-animation{
  animation: movein 1s;
}

@keyframes movein{
  0%{
    transform: translateX(930px);
  }

  100%{
    transform: translateX(0px);
  }
}
</style>
