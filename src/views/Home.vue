<template>
  <div class="relative">
    <img class="w-full bg-cover" src="/Home/shutterImage.png">
    <p class="w-full absolute top-[83%] text-center font-cormorant bg-[#FAFAFA] py-3 text-[18px] md:text-[48px]">
      {{ isPhone ? 'Revitalize Your Skin with régénère:' : 'Revitalize your skin with custom peptide-based solution.' }}
      <span v-if="isPhone" class="text-[20px] italic"><br>The Customized Peptide Powerhouse</span>
    </p>
  </div>
  <div class="flex flex-col md:flex-row">
    <img src="/Home/mask.png" class="w-full md:w-[30%]">
    <div class="flex flex-1 flex-col w-[70%] m-auto pb-10">
      <TestSteps />
    </div>
  </div>
  <div class="flex flex-col items-baseline justify-center bg-[#FAFAFA] py-[60px] md:py-[100px] md:flex-row">
    <div class="flex flex-col w-full items-center md:w-[30%]">
      <p class="font-cormorant text-[28px] md:text-[55px]">Formulation</p>
      <div class="flex items-center gap-x-2 md:gap-x-5">
        <img src="/Home/us-map.svg">
        <p class="font-inter text-[14px] md:text-[16px]">Made in USA Fresh and Clean</p>
      </div>
    </div>
    <div class="flex flex-1 flex-col">
      <Formulate />
    </div>
  </div>
  <UsingRegenere />
  <Journey />
  <Assess />
  <RegenereDifference />
  <Routine />

</template>
<script setup>
import TestSteps from '../components/Home/TestSteps.vue';
import Assess from '../components/Home/Assess.vue'
import Formulate from '../components/Home/Formulate.vue'
import UsingRegenere from '../components/Home/UsingRegenere.vue';
import Routine from '../components/Home/Routine.vue';
import RegenereDifference from '../components/Home/RegenereDifference.vue';
import Journey from '../components/Home/Journey.vue';

import { ref, watch, onMounted } from 'vue';

const isPhone = ref(window.innerWidth <= 768); // Assuming 768px is the breakpoint for phones

const handleResize = () => {
  isPhone.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});
</script>
<style scoped>
</style>