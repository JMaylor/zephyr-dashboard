<template>
  <button
    v-wave
    class="w-10 h-10 focus:outline-none focus-visible:ring rounded-full"
  >
    <span
      v-if="icon"
      class="iconify w-full h-full p-2"
      :data-icon="icon"
    ></span>
    <slot />
  </button>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
  },
});
</script>
