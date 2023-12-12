<template>
  <div class="w-full bg-black">
    <div
      class="hidden md:flex w-[90%] m-auto h-[66px] bg-black items-center title-font justify-between"
    >
      <div class="flex items-center flex w-full">
        <div class="flex text-[16px] text-white mt-1 gap-x-12 lg:gap-x-14">
          <a
            v-for="(nav, i) in menu"
            :key="i"
            :href="nav.href"
            :class="selected === nav.label ? 'font-semibold' : ''"
            >{{ nav.label }}</a
          >
        </div>
        <div class="text-[28px] font-bold nutripro-font text-white mx-auto">
          <a href="#/">
            <img class="h-[40px]" src="/Header/headerLogo.png"> 
          </a>
        </div>
      </div>
      <a href="https://www.vibrant-wellness.com/Signup"><div class="get-started text-white underline">
        Get Started
      </div></a>
    </div>
  </div>
  <div
    class="flex flex-col md:hidden bg-black"
    :class="showMenu ? 'h-[100vh] transition-animation' : 'h-[64px]'"
  >
    <div class="flex w-[88%] mx-auto basis-[64px] shrink-0 grow-0 flex items-center justify-between">
      <div class="font-bold text-white text-[20px] nutripro-font">
        <a href="#/">
          <img class="h-[40px] m-auto" src="/Header/headerLogo.png"> 
        </a>
      </div>
      <img
        v-if="!showMenu"
        class="cursor-pointer"
        @click="showMenu = true"
        src="/Header/menu.svg"
      />
      <img
        v-else
        class="cursor-pointer w-[18px]"
        @click="showMenu = false"
        src="/Header/cross.svg"
      />
    </div>
    <div
      v-if="showMenu"
      class="flex flex-col text-white font-medium text-[14px] flex w-[88%] mx-auto"
      ref="target"
    >
      <a
        v-for="(nav, i) in menu"
        :key="i"
        @click="showMenu = false"
        class="py-4 border-b-[1px] border-[#E5E5E5] hover:text-[16px] hover:font-bold"
        :href="nav.href"
      >
        {{ nav.label }}
      </a>
    </div>
    <div class="w-full flex justify-center mt-8">
      <a href="https://www.vibrant-wellness.com/Signup"><div class="get-started text-white underline">
        Get Started
      </div></a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
const showMenu = ref(false);
const menu = [
  { href: '#/', label: 'Home' },
  { href: '#/quality', label: 'Quality' },
];
const props = defineProps({ selected: String });

const target = ref(null);
onClickOutside(target, () => (showMenu.value = false));
</script>

<style>
.get-started {
  border-radius: 2px;
  border: 1px solid white;
  width: 160px;
  height: 36px;
  display: flex;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
