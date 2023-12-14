<template>
  <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-1/2">
      <img src="/Home/shutterstock.png" >
    </div>
    <div class="flex items-center justify-center my-10 md:my-0">
      <div class="flex-row w-[82%] md:w-[68%]">
        <p class="text-start assess-title text-[14px] md:text-[18px]">
          At the 4-week interval, patients self-assessed the efficacy of Regenere Face and Eye serum:
        </p>
        <div v-for="item in assessList" :key="item" class="flex items-center assess-container">
          <p class="assess-percent text-[24px] min-w-[80px] md:text-[36px] md:min-w-[120px]">
            {{ item.assessPercent }}
          </p>
          <p class="assess-agree text-[12px] md:text-[16px]">
            {{ item.assessAgree }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const assessList = [
    {assessPercent: "97%", assessAgree: "agreed the skin had more volume and hydration"},
    {assessPercent: "100%", assessAgree: "agreed their skin was more firm and tight"},
    {assessPercent: "94%", assessAgree: "agreed the serum helped smooth fine lines and wrinkles"},
    {assessPercent: "100%", assessAgree: "agreed their skin was brighter and more radiant"},
    {assessPercent: "100%", assessAgree: "agreed their face had more glow in the morning"},
    {assessPercent: "97%", assessAgree: "agreed their under-eye puffiness was reduced"}
  ]
</script>
<style scoped>
.assess-title {
  color: #000;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
}

.assess-percent {
  color: #000;
  text-shadow: 0px 0px 10.349px rgba(0, 0, 0, 0.10);
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
}

.assess-agree {
  color: #000;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.assess-container {
  border-bottom: 1px solid #000; 
  padding-bottom: 10px; 
  margin-top: 5%;
}
</style>
