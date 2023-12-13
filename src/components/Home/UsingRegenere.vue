<template>
  <div
    class="content-width content-height flex flex-col items-center bg-[#E8E3E0] relative py-[90px]"
  >
    <div class="font-cormorant text-[28px] md:text-[55px]">
      Using Régénère is Simple 
    </div>
    <div class="flex w-[90%] bg-light-yellow md:w-[464px] p-1 items-center rounded-[28px] my-7 md:my-9">
      <div
        v-for="(tab, i) in tabs"
        :key="i"
        class="w-1/2 text-[12px] md:text-[15px] font-medium flex items-center justify-center cursor-pointer"
        :class="[selectedTab === i ? 'selected-tap' : '']"
        @click="selectedTab = i"
      >
        {{ tab }}
      </div>
    </div>
    <div class="flex w-full flex-col md:flex-row w-full min-h-[533px]">
      <div class="w-full md:w-[30%] text-center font-inter">
        <div v-if="selectedTab === 0">
          <div class="flex flex-col-reverse md:flex-col items-center justify-center">
            <img class="image-transition w-[60%] my-5 min-h-[200px] md:w-full md:my-0 md:min-h-[440px]" src='/Home/using-skin-care-serum.png'>
            <div>
              <div class="text-[14px] md:text-[18px] mb-4">Skin Care Serum</div>
              <div class="text-[12px] md:text-[16px]">
                Face  Serum | Eye Serum <br> Apply at night
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="flex flex-col-reverse md:flex-col items-center justify-center">
            <img class="image-transition w-[60%] min-h-[200px] md:w-full md:min-h-[400px]" src='/Home/using-skin-care-suplm.png'>
            <div>
              <p class="ext-[14px] md:text-[18px] mb-5">Skin Care Supplement</p>
              <p class="text-[12px] md:text-[16px] mb-1">60 capsules per bottle <br>
                Take 2 capsules orally daily
              </p>
              <p class="text-[12px] md:text-[16px] text-[#A3870D] underline">View Supplement Facts</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-1 flex-col justify-center">
        <switch-bar
          :points="content[selectedTab].points"
          @handleChoice="handleChoice"
          :disableAutoSelected=true
        ></switch-bar>
        <div class="flex w-full justify-center">
        <div class="flex using-serum-container w-[90%] max-h-[300px] md:w-[801px] md:h-[197px]" ref="target">
          <div
            class="flex transition-animation"
            :style="{
              width: `${content[selectedTab].points.length * 100}%`,
              'margin-left': `-${selected * 100}%`,
            }"
          >
            <div
              v-for="(point, i) in content[selectedTab].context"
              :key="i"
              class="flex w-full overflow-x-hidden"
            >
              <div class="flex flex-row items-center shrink-0 grow-0">
                <p class="step-gold-text text-[60px] md:text-[87px] px-[30px]">
                  {{ point.title }}
                </p>
                <div class="flex-col basis-[210px] py-[30px] md:basis-[660px] overflow-y-hidden">
                  <p v-if="!(point.isSupplement)" class="text-[12px] md:text-[16px]">
                    {{ point.text }}
                  </p>
                  <div v-else-if="point.isSupplement &&  point.title === '1'" class="flex flex-col w-full">
                    <p class="text-[12px] md:text-[16px]"> {{ point.text }} </p>
                    <div class="flex justify-around mt-1">
                      <div>
                        <img class="w-[30px] md:w-[40px] m-auto mb-3 mt-5" src="/Home/vegan.svg">
                        <p class="text-[10px] md:text-[14px] tracking-tighter">Vegan Friendly</p>
                      </div>
                      <div>
                        <img class="w-[30px] md:w-[40px] m-auto mb-3 mt-5" src="/Home/gluten-free.svg">
                        <p class="text-[10px] md:text-[14px] tracking-tighter">Gluten Free</p>
                      </div>
                      <div>
                        <img class="w-[30px] md:w-[40px] m-auto mb-3 mt-5" src="/Home/no-gmo.svg">
                        <p class="text-[10px] md:text-[14px] tracking-tighter">Non GMO</p>
                      </div>
                    </div>
                  </div>
                  <ul v-else-if="point.isSupplement && point.title === '2'" class="flex-col bullet-point text-[12px] md:text-[16px]">
                    <li class="mb-2 md:mb-4">
                      {{ point.text[0] }}
                    </li>
                    <li>
                      {{ point.text[1] }}
                    </li>
                  </ul>
                  <div v-else-if="point.isSupplement && point.title === '3'">
                    <div v-for="p in point.text" :key="p" class="flex items-baseline font-inter text-[10px] md:text-[14px]">
                      <p class="flex shrink-0 w-[100px] md:min-w-[130px] mr-1 md:mr-6 font-medium mb-1.5">
                        {{ p.ingredientName }}
                      </p>
                      <p class="md:basis-[500px] text-[#4A4A4A]">
                        {{ p.ingredientEffects }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SwitchBar from './SwitchBar.vue';
import { ref, watchEffect } from 'vue';
import { useMouseInElement, useElementVisibility } from '@vueuse/core';

const tabs = ['Skin Care serum', 'Skin Care Supplement'];
const content = [
  {
    points: [
      {
        title: '1',
        description: `Cleanse`,
        duration: 23,
      },
      { title: '2', description: 'Face Serum', duration: 9 },
      {
        title: '3',
        description: 'Eye Serum',
        duration: 16,
      },
    ],
    context: [
      {
        title: '1',
        text: "Cleanse your face and dab dry with a clean towel.",
      },
      {
        title: '2',
        text: "Use the dropper to apply the face serum (0.5 to 1 ml per application) across your face and neck and gently massage into your skin using circular motions to ensure even coverage.",
      },
      {
        title: '3',
        text: "Gently apply eye serum around and under the eye for complete coverage. Wait till it's completely absorbed. Do not wash off or rub with a towel.",
      },
    ],
  },
  {
    points: [
      { title: '1', description: `Why you'll love it`, duration: 9 },
      { title: '2', description: 'How to use', duration: 16 },
      { title: '3', description: 'Ingredients', duration: 9 },
    ],
    context: [
      {
        title: '1',
        text: 'Take a proactive approach to skincare with potent antioxidants and vasodilators that may aid in serum absorption.',
        isSupplement: true
      },
      {
        title: '2',
        text: [
          "Take 2 capsules per day.",
          "Store your bottle in a cool, dry place that you visit daily"
        ],
        isSupplement: true
      },
      {
        title: '3',
        text: [
          {ingredientName:'N-acetylcysteine', ingredientEffects: 'Essential for making glutathione, a powerful antioxidant'},
          {ingredientName:'Lysine', ingredientEffects: 'Helps build collagen in the skin'},
          {ingredientName:'L-Citrulline', ingredientEffects: 'Increases nitric oxide in the body to enhance artery function, promoting better blood flow.'},
          {ingredientName:'L-Arginine', ingredientEffects: 'Helps boost collagen production'},
          {ingredientName:'Beet root powder', ingredientEffects: 'Contains Vitamin C, iron, phosphorus, and protein that together help prevent hyperpigmentation.'},
        ],
        isSupplement: true
      },
    ],
  },
];

const selectedTab = ref(0);

const selected = ref(3);
const handleChoice = (i) => {
  selected.value = i;
};

const disableAutoSelected = ref(false);

const playing = ref(false);

const target = ref(null);

const { isOutside } = useMouseInElement(target);

const targetIsVisible = useElementVisibility(target);

watchEffect(() => {
  if (targetIsVisible.value) {
    disableAutoSelected.value = false;
  } else {
    disableAutoSelected.value = true;
  }
});
</script>

<style>
.transition-animation {
  transition: 0.5s;
}

.selected-tap {
  background: black;
  color: white;
  border-radius: 28px;
  height: 42px;
}

#box {
  position: absolute;
  width: 200px;
  height: 200px;
}
#demo {
  width: 50%;
  height: 100%;
  right: 0px;
  position: absolute;
  overflow: hidden;
  transform-origin: left center;
  animation: cliprotate 8s infinite;
  -webkit-animation: cliprotate 8s infinite;
}
.circlehalf {
  box-sizing: border-box;
  height: 100%;
  right: 0px;
  position: absolute;
  border: solid 2px transparent;
  border-color: black;
  border-radius: 50%;
  width: 200%;
  animation: rotate 8s linear infinite;
  -webkit-animation: rotate 8s linear infinite;
}


@-webkit-keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(360deg);
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(360deg);
  }
}

.using-serum-container {
  /* max-width: 801px;
  max-height: 197px; */
  /* flex-shrink: 0; */
  border-radius: 30px;
  background: #FFF;
  box-shadow: 0px 15px 40px 0px rgba(206, 208, 209, 0.25);
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;

  flex-wrap: wrap
}

.step-gold-text {
  text-align: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: url('/Home/gold-bg.png'), lightgray 50% / cover no-repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #C9A54A;
  background-position: center;
}

.center-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
}

.bullet-point {
      list-style: none;
      padding-left: 0;
    }

.bullet-point li::before {
  content: "\2022"; 
  display: inline-block;
  width: 1em;
  margin-right: 0.5em; 
  color: #000; 
}

.image-transition {
  opacity: 1;
  transition: opacity 1s ease-in-out;
}
</style>
