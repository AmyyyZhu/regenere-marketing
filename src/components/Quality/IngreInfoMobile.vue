<template>
  <div class="flex px-[36px] flex-col overflow-hidden">
    <div
      class="flex justify-start gap-x-[20px] transition"
      @touchstart="handleStart"
      @touchmove="handleMove"
      @touchend="handleEnd"
      :style="{'transform': `translate(${-(screenWidth-72+20)*indexSelect+moveX-startX}px)`}"
    >
      <div
        class="w-[100%] shrink-0 flex flex-col justify-center"
        v-for="(singleOne, index) in wholeData"
        :style="{
          opacity: index === indexSelect ? 1 : 0.4,
          'background-color': index === indexSelect ? white : grey,
        }"
      >
        <div class="w-full"><img :src="imgs[index]" /></div>
        <div class="flex flex-col px-4">
          <div
            class="font-['DM Sans'] text-[14px] font-bold tracking-[0.4px] mt-2 mb-[17px]"
          >
            {{ singleOne.name }}
          </div>
          <div
            class="underline mb-[37px] font-['DM Sans'] text-[14px] cursor-pointer tracking-[0.36px]"
            v-if="showDetail"
            @click="showDetail = false"
          >
            Show Less
          </div>
          <div
            class="underline mb-[37px] font-['DM Sans'] text-[14px] cursor-pointer tracking-[0.36px]"
            v-else
            @click="showDetail = true"
          >
            Show More
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-white" v-if="showDetail">
      <div class="px-[10px] mt-[36px] mb-[120px] flex flex-col">
        <div class="px-2 font-['DM Sans'] text-[12px] mb-[30px]">
          {{ wholeData[indexSelect].desciption }}
        </div>
        <div class="px-4">
          <div class="h-[0.5px] bg-black mb-20"></div>
        </div>
        <div class="flex flex-col justify-between gap-y-[37px]">
          <div
            class="flex flex-col"
            v-for="ingreDes,index2 in wholeData[indexSelect].innovation"
          >
            <div class="flex mb-3">
              <div class="ingre-detail-des-title">{{ ingreDes.title }}</div>
            </div>
            <div class="text-[12px] mb-4">{{ ingreDes.descrip }}</div>
            <div class="flex cursor-pointer" v-if="ingreDes.more" @click="readMore(index2)">
              <div
                class="underline font-['DM Sans'] tracking-[0.28px] text-[14px]"
              >
                Read More
              </div>
              <img src="../../assets/Quality/arrowup.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../../assets/Quality/Ingrediant/Main1.png";
import img2 from "../../assets/Quality/Ingrediant/Main2.png";
import img3 from "../../assets/Quality/Ingrediant/Main3.png";
import img4 from "../../assets/Quality/Ingrediant/Main4.png";
import img5 from "../../assets/Quality/Ingrediant/Main5.png";
import img6 from "../../assets/Quality/Ingrediant/Main6.png";
import { useWindowSize } from "@vueuse/core";
export default {
  props: {
    wholeData: Array,
  },
  data() {
    return {
      imgs: [img1, img2, img3, img4, img5, img6],
      indexSelect: 0,
      startX: 0,
      moveX: 0,
      endX: 0,
      screenWidth: 0,
      difsScreen: 0,
      white: "white",
      grey: "#fafafa",
      showDetail : true,
    };
  },
  setup() {
    const { width, height } = useWindowSize();
    return { width, height };
  },
  methods: {
    handleStart(event) {
      this.startX = event.touches[0].screenX;
      this.moveX = event.touches[0].screenX;
      this.screenWidth = window.innerWidth;
    },
    handleMove(event) {
      this.screenWidth = window.innerWidth;
      this.moveX = event.touches[0].screenX;
    },
    handleEnd(event) {
      if(this.moveX - this.startX < -30){
        this.indexSelect = Math.min(5,this.indexSelect+1)
      }else if(this.moveX - this.startX > 30){
        this.indexSelect = Math.max(0,this.indexSelect-1)
      }
      this.startX = 0;
      this.endX = 0;
      this.moveX = 0;
    },

    readMore(index){
      let mapKey = String(this.indexSelect + 1) + '_' + String(index + 1)
      this.$emit('readMore',mapKey)
    }
  },
  mounted() {
  },
};
</script>

<style scoped>
.ingre-detail-des-title {
  font-family: "DM Sans";
  font-size: 14px;
  font-weight: 500;
  background: var(
    --Gold-black,
    linear-gradient(92deg, #000 48.19%, #fbde00 110.11%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
