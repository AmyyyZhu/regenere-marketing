<template>
  <div class="flex w-screen flex-col bg-[#fafafa]">
    <div
      class="flex flex-col w-full justify-center items-center md:px-[82px] px-[22px] md:my-16 my-8"
    >
      <div
        class="text-center font-['Cormorant'] font-semibold md:text-[55px] text-[28px] leading-normal"
      >
        Ingredient Innovation
      </div>
      <div
        class="max-w-[888px] mt-7 text-center font-['Roboto] md:tracking-[0.36px] tracking-[0.24px] md:text-[18px] text-[12px]"
      >
        A fully integrated skincare solution with more than 25 active
        ingredients, including peptides, antioxidants, phospholipids,
        humectants, and vitamins. The first fully customized peptide-based serum
        on the market.
      </div>
    </div>
    <Ingredient @readMore="readMore"/>
  </div>
</template>
<script>
import Ingredient from "./Ingredient.vue";
export default {
  components: {
    Ingredient,
  },
  methods: {
    readMore(mapKey) {
      this.$emit('readMore',mapKey)
    },
  },
};
</script>
