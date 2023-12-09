<template>
  <div class="w-screen flex flex-col -z-10">
    <Banner v-if="!showReadMoreMobile"/>
    <SupportSkin v-if="!showReadMoreMobile"/>
    <Innovation v-if="!showReadMoreMobile"/>
    <ChooseIngre v-if="!showReadMoreMobile"/>
    <div class="fixed z-[999] flex justify-center w-screen" v-if="showReadMore || showReadMoreMobile">
      <div class="h-[780px] flex justify-center bg-white">
        <component :is="compMap['1_7']" @closeReadMore="closeReadMore"></component>
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
export default {
  components: {
    Banner,
    SupportSkin,
    Innovation,
    ChooseIngre,
    Synake,
  },
  data() {
    return {
      compMap: {
        "1_7": "Synake",
      },
      showReadMore: true,
      showReadMoreMobile: false,
    };
  },
  methods: {
    closeReadMore(){
      this.showReadMore = false
    }
  },
};
</script>
