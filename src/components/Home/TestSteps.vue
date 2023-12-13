<template>
  <div class="flex w-full items-center justify-evenly gap-x-8 pt-10">
    <div class="circle flex-none w-[100px] h-[100px] my-8 md:w-[250px] md:h-[250px]">
      <p class="number-1 text-[100px] md:text-[267.574px]">1</p>
      <p class="number-content w-full text-[12px] md:text-[28px]">Skin<br>Genetic Test</p>
    </div>
    <div class="max-w-[210px] md:max-w-[470px]">
      <p class="number-title text-[14px] md:text-[24px]">Skin Genetic Test</p>
      <p class="number-descrip text-[12px] md:text-[24px]">We ship saliva test kit to you. Collect saliva as per instructions and ship the kit back to the lab.</p>
    </div>
  </div>

  <div class="flex w-full items-center justify-evenly gap-x-8">
    <div class="circle flex-none w-[100px] h-[100px] my-8 md:w-[250px] md:h-[250px]">
      <p class="number-1 text-[100px] md:text-[267.574px]">2</p>
      <p class="number-content w-full text-[12px] md:text-[28px]">Skin Assessment</p>
    </div>
    <div class="max-w-[210px] md:max-w-[470px]">
      <p class="number-title text-[14px] md:text-[24px]">Skin Assessment</p>
      <p class="number-descrip text-[12px] md:text-[24px]">Patient will take an in-depth skincare quiz and upload a recent photo.</p>
    </div>
  </div>

  <div class="flex w-full items-center justify-evenly gap-x-8">
    <div class="circle flex-none w-[100px] h-[100px] my-8 md:w-[250px] md:h-[250px]">
      <p class="number-1 text-[100px] md:text-[267.574px]">3</p>
      <p class="number-content w-full text-[12px] md:text-[28px]">Personalized Skincare</p>
    </div>
    <div class="max-w-[210px] md:max-w-[470px]">
      <p class="number-title text-[14px] md:text-[24px]">Personalized Skincare</p>
      <p class="number-descrip text-[12px] md:text-[24px]"> We formulate a skincare solution based on the genetic test and skin assessment.</p>
    </div>
  </div>
</template>
<script setup>

</script>

<style scoped>
 
.circle {
  position: relative;
  border-radius: 50%;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.number-1 {
  color: rgba(242, 242, 242, 0.40);
  /* font-size: 267.574px; */
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  font-family: 'Inter';
}

.number-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the small text both horizontally and vertically */
 
  color: #000;
  text-align: center;
  /* font-size: 28px; */
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  text-align: center;
  font-family: 'Inter';
}

.number-title {
  color: #000;
  /* font-size: 24px; */
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 10px;
  font-family: 'Inter';
}

.number-descrip {
  color: #000;
  /* font-size: 24px; */
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  max-width: 470px;
  font-family: 'Inter';
}

</style>