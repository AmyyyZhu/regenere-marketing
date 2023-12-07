<template>
  <div class="bg-[#e8e3e0] w-full">
    <div class="w-full md:my-16 my-8">
      <div class="md:px-[82px] px-[22px] flex justify-center flex-col">
        <div
          class="text-center font-['Cormorant'] md:mb-6 mb-3 font-semibold md:text-[55px] text-[28px] leading-normal"
        >
          How We Choose Our Ingredients
        </div>
        <div class="flex justify-center md:mb-[67px] mb-[19px]">
          <p
            class="md:text-[16px] text-[12px] text-center max-w-[932px] font-['Inter'] leading-normal not-italic"
          >
            We select scientifically validated ingredients that promote vitality
            and resilience, targeting a minimum of
            <span class="font-semibold">five skin-aging mechanisms</span> to
            maximize their combined benefits.
          </p>
        </div>
        <div class="flex justify-center md:mb-[55px] mb-[18px]">
          <Button :content="content" />
        </div>
        <div class="px-3 md:mb-3 mb-[27px]">
          <div class="h-[1px] bg-black"></div>
        </div>
        <div
          class="flex justify-between gap-y-[24px] flex-wrap md:mb-[30px] mb-[40px]"
        >
          <div
            class="flex items-center max-[768px]:w-[45%]"
            v-for="(noItem, index) in noGuran"
          >
            <div
              class="md:w-[60px] md:h-[60px] w-[36px] h-[36px] mr-[15px] shrink-0"
            >
              <img :src="imgs[index]" class="w-full h-full" />
            </div>
            <p class="font-normal md:text-[16px] text-[12px]">{{ noItem }}</p>
          </div>
        </div>
        <div class="flex justify-center">
          <p class="choose-bottom-text">
            Safety, toxicity tested and follows regulations and guidelines by
            FDA and ISO.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import img1 from "../../assets/Quality/NoMyco.svg";
import img2 from "../../assets/Quality/NoPara.svg";
import img3 from "../../assets/Quality/NoEnvi.svg";
import img4 from "../../assets/Quality/NoHeav.svg";
export default {
  components: {
    Button,
  },
  data() {
    return {
      content: "Order Now",
      noGuran: [
        "No Mycotoxins",
        "No parabens",
        "No Environmental Toxins",
        "No heavy metals",
      ],
      imgs: [img1, img2, img3, img4],
    };
  },
};
</script>

<style scoped>
.choose-bottom-text {
  font-size: 18px;
  text-align: center;
  font-style: normal;
  line-height: normal;
  background: var(
    --Gold-black,
    linear-gradient(92deg, #000 48.19%, #fbde00 110.11%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
