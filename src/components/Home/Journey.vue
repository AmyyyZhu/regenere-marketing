<template>
<div class="flex justify-center my-[60px] xl:my-[170px]">
  <div class="flex w-[90%] xl:w-[85%] items-center flex justify-between xl:justify-evenly flex-col xl:flex-row">
    <div class="flex flex-col">
      <p class="font-cormorant text-[28px] md:text-[55px] xl:w-[400px] mb-4 xl:mb-[50px] text-center xl:text-start">Your Régénère Journey</p>
      <p class="font-roboto text-[12px] md:text-[16px] w-full xl:max-w-[355px]">Many users report noticeable improvements within 10 days. While individual results may vary, with daily use, the peptides actively enhance your skin from within.</p>
    </div>
    <div class="flex flex-grow items-center justify-end min-w-[320px] mt-10 max-w-[800px]">
      <div class="flex flex-shrink-0 leading-tight w-[191px] h-[119px] xl:w-[474px] xl:h-[300px] gold-grad-border items-center justify-center">
        <p class="w-[160px] h-[78px] xl:w-[400px] xl:h-[200px] font-roboto text-[10px] xl:text-[20px] text-transparent bg-clip-text bg-gradient-to-br from-black to-gold">{{ this.content[selectedButton] }}</p>
      </div>
      <div class="flex-grow flex-col justify-end font-dm-sans text-[18px] xl:text-[45px]">
        <div class="flex justify-end items-center">
          <div v-if="selectedButton === 'Button 1'" class="line flex-1"></div>
          <div v-else class='flex-1'></div>
          <p class="flex-shrink-0 ml-[10%] text-[#A4A4A4] cursor-pointer tracking-wider" :class="{ selected: selectedButton === 'Button 1' }" @click="selectButton('Button 1')" @mouseover="hoverButton('Button 1')" @mouseout="clearHover()">1 Week</p>
        </div>
        <div class="flex justify-end items-center">
          <div v-if="selectedButton === 'Button 2'" class="line flex-1"></div>
          <div v-else class='flex-1'></div>
          <p class="flex-shrink-0 ml-[10%] text-[#A4A4A4] cursor-pointer tracking-wider" :class="{ selected: selectedButton === 'Button 2' }" @click="selectButton('Button 2')" @mouseover="hoverButton('Button 2')" @mouseout="clearHover()">2 Weeks</p>
        </div>
        <div class="flex justify-end items-center">
          <div v-if="selectedButton === 'Button 3'" class="line2 flex-1"></div>
          <div v-else class='flex-1'></div>
          <p class="flex-shrink-0 ml-[10%] text-[#A4A4A4] cursor-pointer tracking-wider" :class="{ selected: selectedButton === 'Button 3' }" @click="selectButton('Button 3')" @mouseover="hoverButton('Button 3')" @mouseout="clearHover()">4 Weeks</p>
        </div>
        <div class="flex justify-end items-center">
          <div v-if="selectedButton === 'Button 4'" class="line2 flex-1"></div>
          <div v-else class='flex-1'></div>
          <p class="flex-shrink-0 ml-[10%] text-[#A4A4A4] cursor-pointer tracking-wider" :class="{ selected: selectedButton === 'Button 4' }" @click="selectButton('Button 4')" @mouseover="hoverButton('Button 4')" @mouseout="clearHover()">Beyond</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      selectedButton: 'Button 1',
      content:{
        'Button 1':'Many users report a healthier, hydrated complexion and a significant reduction in dark under-eye circles.',
        'Button 2':'Many users observe clear skin enhancements: hyper-pigmentation lightening, reduced redness, decreased under-eye puffiness and fading of fine lines and wrinkles.',
        'Button 3':'Users report visible smoothing of deep wrinkles, enhanced skin texture and appearance, increased volume in nasolabial folds (also known as "smile lines",) and a noticeable lifting effect.',
        'Button 4':'Continued use delivers enduring benefits to your skin from within.'
      },
      isHovered: false,
    };
  },
  methods: {
    selectButton(text) {
      this.selectedButton = text;
    },
    // hoverButton(text) {
    //   if (!this.isHovered) {
    //     this.selectedButton = text;
    //   }
    //   this.isHovered = true;
    // },
    // clearHover() {
    //   this.isHovered = false;
    // },
  },
}
</script>
<style scoped>
.line {
  height: 1px;
  background: var(--Gold-black, linear-gradient(120deg, #746009 28.19%, #FBDE00 110.11%));
  transition: width 2s background-color 4s;
}

.line2 {
  height: 1px;
  background: var(--Gold-black, linear-gradient(120deg, #b19b1d 28.19%, #dbb22b 110.11%));
  transition: width 2s background-color 4s;
}

.selected {
  font-weight: bold;
  color: black;
}

.gold-grad-border {
  position: relative;
}

.gold-grad-border::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 11px; 
  padding: 1px; 
  background: linear-gradient(138deg, #000 48.19%, #FBDE00 110.11%); 
  -webkit-mask: 
     linear-gradient(#fff 0 0) content-box, 
     linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude; 
}
</style>