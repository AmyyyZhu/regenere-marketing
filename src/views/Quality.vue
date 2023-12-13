<template>
  <div class="w-screen flex flex-col -z-10">
    <Banner v-if="!showReadMoreMobile"/>
    <SupportSkin v-if="!showReadMoreMobile"/>
    <Innovation v-if="!showReadMoreMobile" @readMore="readMore"/>
    <ChooseIngre v-if="!showReadMoreMobile"/>
    <div class="md:fixed z-[999] md:mt-[150px] flex justify-center w-screen" id="mainPage" v-if="showReadMore || showReadMoreMobile">
      <div class="md:h-[780px] flex justify-center bg-white">
        <component :is="compMap[readMoreMapKey]" @closeReadMore="closeReadMore" @backTo="backTo"></component>
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
import Argireline from "../components/Quality/Argireline.vue"
import Eyeseryl from "../components/Quality/Eyeseryl.vue";
import Decorinyl from "../components/Quality/Decorinyl.vue"

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
    Decorinyl,
  },
  data() {
    return {
      compMap: {
        "2_1":"Eyeseryl",
        "1_4":"Snap8",
        "1_6":"Argireline",
        "1_7": "Synake",
        "3_2": "Decorinyl",
      },
      showReadMore: false,
      showReadMoreMobile: false,
      readMoreMapKey: "1_4",
    };
  },
  methods: {
    closeReadMore(){
      this.showReadMore = false
    },
    readMore(mapKey){
      this.readMoreMapKey = mapKey;
      let theWidth = window.innerWidth;
      if(theWidth> 768){
        this.showReadMore = true;
        this.showReadMoreMobile = false;
      }else{
        this.showReadMoreMobile = true;
        this.showReadMore = false;
        window.scrollTo(0,0)
      }
    },
    backTo(){
      this.showReadMoreMobile = false;
      this.showReadMore = false;
    }
  },
};
</script>
