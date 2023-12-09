<template>
  <div class="flex">
    <div
      class="md:min-h-[58px] flex md:flex-row flex-col gap-y-[24px] md:items-center"
    >
      <div
        class="min-w-[204px] md:h-full md:border-r flex items-center md:border-[#a4a4a4] md:mr-[20px]"
      >
        <p
          class="font-['DM Sans'] md:text-[24px] text-[14px] md:tracking-[0.48px] tracking-[0.28px]"
        >
          {{ pointTitle1.title }}
        </p>
      </div>
      <div class="flex mr-[26px]">
        <img src="../../assets/Quality/Ingrediant/Increase.svg" />
      </div>
      <div class="flex flex-col">
        <div class="text-[14px] font-normal">
          {{ pointTitle1.description[0] }}
        </div>
        <p class="text-[12px] text-[#7d7d7d]">
          <span class="text-[#d4b115]">{{ pointTitle1.description[1] }} </span>
          {{ pointTitle1.description[2] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pointTitle1: Object,
  },
};
</script>
