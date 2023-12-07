<template>
  <div class="flex items-center justify-center bg-black rounded-sm">
    <div class="px-[36px] py-[10px] text-center text-white text-[14px] font-['DM Sans'] tracking-[0.28px]">{{ content }}</div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
    },
  },
};
</script>
