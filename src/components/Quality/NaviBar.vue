<template>
  <div class="flex flex-col gap-y-[24px]">
    <div class="flex flex-col" v-for="singleCate in navi">
      <div class="font-['DM Sans'] text-[12px] text-[#4a4a4a] uppercase mb-1">
        {{ singleCate.title }}
      </div>
      <div class="flex flex-col gap-y-[7px]">
        <div
          class="font-['DM Sans'] cursor-pointer text-[14px]"
          @click="naivTo(item)"
          v-for="item in singleCate.item"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navi: Array,
  },
  methods: {
    naivTo(item) {
      this.$emit("naviTo", item);
    },
  },
};
</script>
