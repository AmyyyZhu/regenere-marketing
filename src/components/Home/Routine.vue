<template>
  <div class="bg-[#E8E3E0] py-[50px] md:py-[96px]">
    <div class="w-[88%] mx-auto flex items-center flex-col md:flex-row">
      <div class="text-center md:w-[35%] md:text-start">
        <p class="font-cormorant text-[28px] md:text-[50px] mb-4 font-medium uppercase">
          <span>The Clinically <br> Proven Skin <br> </span>
          <img class="mx-auto w-[28px] md:w-[50px] md:ml-0" src="/Home/plus.svg">
          <span>Wellness <br class="hidden md:block"> Routine</span>
        </p>
        <p class="font-dm-sans text-[12px] text-start md:text-[16px] md:w-[280px]">
          Regenere's extensive clinical studies demonstrate the exceptional efficacy of the Regenere portfolio of products and protocols. Capturing real results from real patients, our scientific analyses demonstrate our ongoing commitment to the Regenere philosophy that skin health can and should be supported by science.
        </p>
      </div>
      <div class="hidden md:flex flex-1 justify-center">
        <div class="ml-[10px] mr-[40px]">
          <img class="bg-white mb-4" src="/Home/routine-suplm.png">
          <p class="font-cormorant text-[14px] md:text-[18px] mb-1">Skin Care Supplement</p>
          <p class="font-roboto text-[12px] md:text-[14px] text-[#7B7B7B] mb-3">60 capsules per bottle | 2 capsules per day</p>
          <img src="/Home/star.svg">
        </div>
        <div class="mr-[40px]">
          <img class="bg-white mb-4" src="/Home/routine-eye-serum.png">
          <p class="font-cormorant text-[14px] md:text-[18px] mb-1">Régénère Eye Serum</p>
          <p class="font-roboto text-[12px] md:text-[14px] text-[#7B7B7B]">Face Renewal Treatment</p>
        </div>
        <div>
          <img class="bg-white mb-4" src="/Home/routine-face-serum.png">
          <p class="font-cormorant text-[14px] md:text-[18px] mb-1">Régénère Face Serum</p>
          <p class="font-roboto text-[12px] md:text-[14px] text-[#7B7B7B]">Face Renewal Treatment</p>
        </div>
      </div>
      <div class="md:hidden flex flex-col overflow-x-hidden ml-[6%]">
        <div class="flex my-4 transition-animation" 
          :style="{
            width: `${60}%`,
            'margin-left': `-${selected * 50}%`,
          }">
          <div class="w-full shrink-0 grow-0 mr-[12%]">
            <img class="bg-white mb-2" src="/Home/routine-suplm.png">
            <p class="font-cormorant text-[14px] md:text-[18px] mb-1">Skin Care Supplement</p>
            <p class="font-roboto text-[12px] text-[#7B7B7B] mb-3">60 capsules per bottle | 2 capsules per day</p>
            <img src="/Home/star.svg">
          </div>
          <div class="w-full shrink-0 grow-0 mr-[12%]">
            <img class="bg-white mb-2" src="/Home/routine-eye-serum.png">
            <p class="font-cormorant text-[14px] md:text-[18px] mb-1">Skin Care Supplement</p>
            <p class="font-roboto text-[12px] text-[#7B7B7B] mb-3">60 capsules per bottle | 2 capsules per day</p>
          </div>
          <div class="w-full shrink-0 grow-0 mr-[12%]">
            <img class="bg-white mb-2" src="/Home/routine-face-serum.png">
            <p class="font-cormorant text-[14px] md:text-[18px] mb-1">Skin Care Supplement</p>
            <p class="font-roboto text-[12px] text-[#7B7B7B] mb-3">60 capsules per bottle | 2 capsules per day</p>
          </div>
        </div>
        <div class="flex justify-between mr-[6%] my-5">
          <img v-if="!leftArrowGrey" @click="onPrev" src="/Home/prev-page-arrow-black.svg">
          <img v-else src="/Home/prev-page-arrow-grey.svg">
          
          <img v-if="!rightArrowGrey" @click="onNext" src="/Home/next-page-arrow-black.svg">
          <img v-else src="/Home/next-page-arrow-grey.svg">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected:0,
      rightArrowGrey:false,
      leftArrowGrey:true
    };
  },
  methods: {
    onNext() {
      this.selected += 1
    },

    onPrev() {
      this.selected -= 1
    }
  },
  watch: {
    selected(value, oldValue) {
      if(value >=2) {
        this.rightArrowGrey = true
      } else if(value <=0) {
        this.leftArrowGrey = true
      } else {
        this.rightArrowGrey = false
        this.leftArrowGrey = false
      }
    },
  },
}
</script>
<style scoped>
.transition-animation {
  transition: 0.5s;
}
</style>