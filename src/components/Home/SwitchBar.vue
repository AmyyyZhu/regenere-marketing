<template>
  <div class="flex flex-row w-full justify-evenly pb-10">
    <div v-for="(point, i) in points" @click="onSelected(i)" :key="i">
      <div class="m-1 flex flex-col md:flex-row items-center gap-x-2 cursor-pointer">
        <div
          v-if="i === selected"
          class="home-switch-bar-choice-selected-animation w-[22px] md:w-[35px] h-[22px] md:h-[35px]"
        ></div>
        <div
          v-if="i === selected"
          class="home-switch-bar-choice-selected-animation w-[22px] md:w-[35px] h-[22px] md:h-[35px] animation-delay-1"
        ></div>
        <div
          class="flex flex-row items-center justify-center w-[40px] h-[40px] md:w-[30px] md:h-[30px] md:w-[35px] h-[22px] md:h-[35px] rounded-[50%] border border-solid border-1 text-[27px] md:text-[20px] mb-3 md:mb-0"
          :class="{ 'gold-bg text-white': i === selected, 'bg-opacity text-[#C9A54A] border-[#C9A54A]': i !== selected }"
        >
          {{ point.title }}
        </div>
        <p class="text-[14px] md:text-[16px]">
          {{ point.description }}
        </p>
        <div
          class="home-switch-bar-text-position flex flex-row items-center title-font mx-[-7vw] md:mx-[-100px] text-center text-[12px] md:text-[14px]"
        >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.timer = setInterval(() => {
      this.countOneSecond();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  props: {
    points: {
      type: Array,
    },
    disableAutoSelected: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    points(value, oldValue) {
      this.onSelected(0);
    },
  },
  created() {
    this.onSelected(0);
  },
  data() {
    return {
      timer: null,
      selected: '',
      counter: 0,
    };
  },
  methods: {
    onSelected(choice) {
      this.selected = choice;
      this.counter = 0;
      this.$emit('handleChoice', this.selected);
    },
    countOneSecond() {
      this.counter++;
      if (this.counter > this.points[Number(this.selected)].duration) {
        this.moveRightFourSeconds();
      }
    },
    moveRightFourSeconds() {
      if (!this.disableAutoSelected) {
        this.counter = 0;
        this.onSelected((this.selected + 1) % this.points.length);
      }
    },
  },
};
</script>

<style>
.home-switch-bar-text-position {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 12px;
}

.home-switch-bar-choice-selected-animation {
  position: absolute;
  border-radius: 50%;
  top: 0px;
  left: 0;
  right: 0;
  margin: auto;
}

@keyframes example {
  0% {
    scale: 1;
  }
  80% {
    scale: 1.6;
  }
  81% {
    scale: 0;
  }
  100% {
    scale: 0;
  }
}

.home-switch-bar-choice-text-selected {
  width: 0px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  background: #C9A54A;
}

.animation-delay-1 {
  animation-delay: 1s;
}

.gold-bg {
  background: url('/Home/gold-bg.png'), lightgray 50% / cover no-repeat;
  background-position: center;
  max-width: 80%;
}
</style>
