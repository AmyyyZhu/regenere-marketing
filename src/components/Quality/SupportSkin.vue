<template>
  <div class="flex w-screen">
    <div class="flex flex-col w-full justify-center md:px-[82px] px-[22px] md:my-16 my-8">
      <div
        class="text-center font-['Cormorant'] font-semibold md:text-[55px] text-[28px] leading-normal"
      >
        Skin Health Supported by Science
      </div>
      <div class="flex md:flex-row flex-col md:justify-center items-center md:mb-6">
        <div
          class="text-[#7b7b7b] text-center font-['Roboto] text-[14px] md:mr-[48px] md:mb-0 mb-2"
        >
          Face Renewal Treatment
        </div>
        <div class="flex">
          <div class="" v-for="number in 5">
            <img src="../../assets/Quality/star.svg" />
          </div>
        </div>
      </div>
      <Animation />
      <div class="uppercase md:-mt-[5%] text-center font-['DM Sans'] md:text-[20px] text-[16px]">Manufactured in a GMP-certified facility</div>
    </div>
  </div>
</template>

<script>
import Animation from './Animation.vue';
export default {
    components:{
        Animation,
    }
}
</script>
