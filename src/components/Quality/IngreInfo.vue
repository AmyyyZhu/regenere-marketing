<template>
  <div class="flex flex-col">
    <div class="flex justify-between">
      <div
        class="w-[32%] flex flex-col justify-center"
        v-for="(singleOne, index) in wholeData.slice(0, 3)"
        :style="{
          opacity: index === indexSelect || indexSelect === 7 ? 1 : 0.4,
          'background-color': index === indexSelect ? white : grey,
        }"
      >
        <div class="w-full"><img :src="imgs[index]" /></div>
        <div class="flex flex-col px-4">
          <div
            class="font-['DM Sans'] text-[20px] font-bold tracking-[0.4px] mt-2 mb-[17px]"
          >
            {{ singleOne.name }}
          </div>
          <div
            class="underline mb-[37px] font-['DM Sans'] text-[18px] cursor-pointer tracking-[0.36px]"
            v-if="index === indexSelect"
            @click="changeDetail(index)"
          >
            Show Less
          </div>
          <div
            class="underline mb-[37px] font-['DM Sans'] text-[18px] cursor-pointer tracking-[0.36px]"
            v-else
            @click="changeDetail(index)"
          >
            Show More
          </div>
        </div>
      </div>
    </div>

    <div class="w-full bg-white" v-if="firstRow">
      <div class="px-[38px] mt-[36px] mb-[120px] flex flex-col">
        <div class="px-2 font-['DM Sans'] text-[16px] mb-[30px]">
          {{ wholeData[indexSelect].desciption }}
        </div>
        <div class="px-4">
          <div class="h-[0.5px] bg-black mb-20"></div>
        </div>
        <div class="flex flex-row justify-between gap-y-[37px] flex-wrap">
          <div
            class="w-[30%] flex flex-col"
            v-for="ingreDes,index2 in wholeData[indexSelect].innovation"
          >
            <div class="flex mb-3">
              <div class="ingre-detail-des-title">{{ ingreDes.title }}</div>
            </div>
            <div class="font-[16px] mb-4">{{ ingreDes.descrip }}</div>
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

    <div class="flex justify-between">
      <div
        class="w-[32%] flex flex-col justify-center"
        v-for="(singleOne, index) in wholeData.slice(3, 6)"
        :style="{
          opacity: index === indexSelect - 3 || indexSelect===7 ? 1 : 0.4,
          'background-color': index === indexSelect - 3 ? white : grey,
        }"
      >
        <div class="w-full"><img :src="imgs[index + 3]" /></div>
        <div class="flex flex-col px-4">
          <div
            class="font-['DM Sans'] text-[20px] font-bold tracking-[0.4px] mt-2 mb-[17px]"
          >
            {{ singleOne.name }}
          </div>
          <div
            class="underline mb-[37px] font-['DM Sans'] text-[18px] cursor-pointer tracking-[0.36px]"
            v-if="index === indexSelect - 3"
            @click="changeDetail(index+3)"
          >
            Show Less
          </div>
          <div
            class="underline mb-[37px] font-['DM Sans'] text-[18px] cursor-pointer tracking-[0.36px]"
            v-else
            @click="changeDetail(index+3)"
          >
            Show More
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-white" v-if="secondRow">
      <div class="px-[38px] mt-[36px] mb-[120px] flex flex-col">
        <div class="px-2 font-['DM Sans'] text-[16px] mb-[30px]">
          {{ wholeData[indexSelect].desciption }}
        </div>
        <div class="px-4">
          <div class="h-[0.5px] bg-black mb-20"></div>
        </div>
        <div class="flex flex-row justify-between gap-y-[37px] flex-wrap">
          <div
            class="w-[30%] flex flex-col"
            v-for="ingreDes,index2 in wholeData[indexSelect].innovation"
          >
            <div class="flex mb-3">
              <div class="ingre-detail-des-title">{{ ingreDes.title }}</div>
            </div>
            <div class="font-[16px] mb-4">{{ ingreDes.descrip }}</div>
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
export default {
  mounted() {},
  methods: {
    changeDetail(index) {
      if(index < 3){
        if(this.indexSelect !==index){
            this.indexSelect = index;
            this.firstRow = true;
            this.secondRow = false
        }else{
            this.indexSelect = 7;
            this.firstRow = false
        }
      }else{
        if(this.indexSelect !==index){
            this.indexSelect = index;
            this.secondRow = true;
            this.firstRow = false;
        }else{
            this.indexSelect = 7;
            this.secondRow = false
        }
      }
    },
    readMore(index){
      let mapKey = String(this.indexSelect + 1) + '_' + String(index+1);
      this.$emit('readMore',mapKey)
    }
  },
  props:{
    wholeData: Array,
  },
  data() {
    return {
      indexSelect: 0,
      white: "white",
      grey: "#fafafa",
      firstRow: true,
      secondRow: false,
      imgs: [img1, img2, img3, img4, img5, img6],
    };
  },
};
</script>

<style scoped>
.ingre-detail-des-title {
  font-family: "DM Sans";
  font-size: 18px;
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
