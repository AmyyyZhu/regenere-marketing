<template>
  <div class="w-screen flex relative">
    <div
      class="-z-10 md:max-h-[791px] max-h-[490px] flex justify-center overflow-hidden"
    >
      <div class="w-full flex items-center justify-center">
        <img src="../../assets/Quality/BannerBack.jpeg" class="w-full min-w-[760px]" />
      </div>
    </div>
    <div
      class="z-20 md:px-[82px] absolute flex h-full max-h-[1440px] w-full px-[22px]"
    >
      <div class="flex flex-col w-full items-center">
        <div
          class="uppercase text-center md:mt-[94px] md:text-[16px] mt-[36px] text-[12px]"
        >
          our qUALITY
        </div>
        <div
          class="font-semibold md:text-[20px] md:leading-[24px] md:mt-[36px] max-w-[600px] text-[14px] mt-4 text-center"
        >
          The 1st Custom Peptide-based Serum That Addresses 5+ Mechanism of Skin
          Aging
        </div>
        <Button :content="content" class="md:mt-[35px] mt-9"></Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  data() {
    return {
      content: "Order Now",
    };
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
</style>
