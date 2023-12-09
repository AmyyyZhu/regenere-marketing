<template>
  <div
    v-if="width > 768"
    class="px-[44px]"
  >
    <div class="font-bold text-[40px] tracking-[0.8px] mb-[44px] mt-[86px]">{{ title }}</div>
  </div>
  <div class="border-b border-[#e6e6e6]" v-else>
    <div class="flex relative my-[18px] px-[28px] items-center">
      <div class="flex justify-center w-full">
        <div class="font-bold text-[20px] tracking-[0.4px]">
          {{ title }}
        </div>
      </div>
      <div class="absolute cursor-pointer">
        <img
          src="../../assets/Quality/Ingrediant/BackArrow.svg"
          @click="backTo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useWindowSize } from "@vueuse/core";
export default {
  setup() {
    const { width, height } = useWindowSize();
    return { width, height };
  },
  props: {
    title: String,
  },
  methods: {
    backTo() {
      this.$emit("backTo");
    },
  },
};
</script>
