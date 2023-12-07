<template>
  <div class="w-screen flex flex-col">
    <Banner />
    <SupportSkin />
    <Innovation />
    <ChooseIngre />
  </div>
</template>

<script>
import Banner from "../components/Quality/Banner.vue";
import SupportSkin from "../components/Quality/SupportSkin.vue";
import Innovation from "../components/Quality/Innovation.vue";
import ChooseIngre from "../components/Quality/ChooseIngre.vue";
export default {
  components: {
    Banner,
    SupportSkin,
    Innovation,
    ChooseIngre,
  },
};
</script>
