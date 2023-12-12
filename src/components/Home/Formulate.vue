<template>
  <div class="flex flex-col m-auto w-[80%]">
    <p class="what-inside mt-10 mb-5 text-[14px] md:text-[32px]">What's inside?</p>
    <div class="border-t-[1px] border-[#A4A4A4]">
      <div
        v-for="(f, i) in formulations"
        :key="i"
        class="border-b-[1px] border-[#A4A4A4] py-4 md:py-5"
      >
        <div class="flex flex-row justify-between items-center">
          <div class="formulate-title font-inter text-[14px] md:text-[20px]">
            {{ f.title }}
          </div>
          <div
            @click="showFormulation[i] = !showFormulation[i]"
            class="py-1 px-2 cursor-pointer text-[20px] md:text-[28px] leading-[12px] md:leading-[16px] text-[#A4A4A4]"
          >
            <span v-if="!showFormulation[i]">+</span
            ><span v-else>
              <hr class="w-3 md:w-4" style="border: 1.8px solid #A4A4A4"
            /></span>
          </div>
        </div>
        <p 
          v-if="showFormulation[i]" 
          class="formulate-content text-[12px] md:text-[16px] mt-8" 
          v-for="(line, lineIndex) in f.content" :key="lineIndex"
          :class="{ 'gradient-gold-text': lineIndex === 1 }"
        >
          {{ line }}
        </p>
      </div>
    </div>
    <div>
      <p class="what-inside mb-2 md:mb-5 mt-[66px] text-[14px] md:text-[32px]">Absolutely free of</p>
      <div class="flex flex-wrap justify-between md:justify-around border-t-[1px] border-[#A4A4A4] pt-7 font-inter text-[12px] md:text-[16px] gap-y-[24px]">
        <div class="w-1/2 md:w-1/4 flex flex-col items-center justify-center">
          <img class="mb-6" src="/Home/mycotoxins.svg">
          <p class="text-center">Mycotoxins</p>
        </div>
        <div class="w-1/2 md:w-1/4 flex flex-col items-center justify-center">
          <img class="mb-6" src="/Home/parabens.svg">
          <p class="text-center">Parabens</p>
        </div>
        <div class="w-1/2 md:w-1/4 flex flex-col items-center justify-center">
          <img class="mb-6" src="/Home/en-toxins.svg">
          <p class="text-center">Environmental Toxins</p>
        </div>
        <div class="w-1/2 md:w-1/4 flex flex-col items-center justify-center">
          <img class=" mb-6" src="/Home/heavy-metals.svg">
          <p class="text-center">Heavy Metals</p>
        </div>
      </div>
      <p class="text-center gradient-gold-text mt-[50px] font-inter text-[12px] md:text-[18px]">
        Safety, toxicity tested and follows regulations and guidelines by FDA and ISO.
      </p>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref, nextTick } from 'vue';
const showFormulation = reactive({ 0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false });
const formulations = [
  {
    title: 'Anti-wrinkle peptides',
    content: [
      'Key benefits: Peptides with effects similar to Botox help smooth wrinkles while preserving facial expressions. These effects are quick to appear, long-lasting, and reversible. Visible wrinkle reduction can be seen in just 4 weeks. It also enhances collagen production and prevents its breakdown.',
      'Found in: Inyline®, Tripeptide 29®, Hexapeptide - 11®, SNAP 8®, Palmytoyl Pentapeptide 4®, Argireline®, Synake®',
    ]
    },
  {
    title: 'Anti-inflammatory peptides',
    content: [
      `Key benefits:These peptides reduce redness, lessen skin erythema, aid in restoring skin's barrier function, strengthen the skin's natural defenses. In lab tests, they been shown to boost β-defensins expression and shield the skin from damaging external factors.`,
      'Found in: Bacillus Extract®'
    ]
    },
  {
    title: 'Anti-sagging peptides',
    content: [
      `Key benefits: These peptides lift and reshape facial contours while promoting elastin growth. They've been shown to enhance skin tone, firmness, and flexibility in just two months. These peptides also improve nutrient distribution, combat early aging signs, and organize collagen to rejuvenate skin suppleness. In lab tests, they've been shown to support better fibril formation, control fibril dimensions, and help rebuild the skin's deeper layers, boosting its resilience against aging.`,
      'Found in: Uplevity®, Decorinyl®, Pentapeptide 3®, Adifyline®, Tripeptide 5®, Syntacks®, GHK Cu®'
    ]
  },
  {
    title: 'Under-eye peptide',
    content: [
      `Key benefits: After just 14 days, these peptides were shown to reduce the volume of undereye bags, diminish dark circles, and smooth the under-eye area for both men and women.`,
      'Found in: Eyeseryl®, Pentapeptide 18®, Dipeptide 2®'
    ]
  },
  {
    title: 'Photo-aging/brightening peptides',
    content: [
      `Key benefits: These peptides protects skin from sun-related aging and safeguard DNA integrity. In lab tests, they've been shown to rejuvenate cells by over a decade. Essential in reducing UV damage signs.`,
      'Found in: Reproage®, Nonapeptide- 1®, DAP - Tripeptide 33®'
    ]
  },
  {
    title: 'Antioxidants',
    content: [
      `Key benefits: These peptides provide antioxidant protection and promote thorough detoxification. Within just 14 days, they improve skin appearance by neutralizing harmful free radicals. They offer comprehensive protection against damaging ROS and RNS free radicals, as well as RCS reactive molecules.`,
      'Found in: Beta Glucan®'
    ]
  },
];
</script>
<style scoped>
.formulate-title {
  color: #000;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.4px;
}

.formulate-content {
  color: #000;
  font-family: 'DM Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.gradient-gold-text {
  background: var(--Gold-black, linear-gradient(92deg, #000 48.19%, #FBDE00 110.11%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.what-inside {
  color: #9A7D35;
  font-family:'DM Sans';
  /* font-size: 32px; */
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  /* border-bottom: 1px solid #A4A4A4;
  padding-bottom: 12px; */
}
</style>