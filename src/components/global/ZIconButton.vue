<template>
  <component :is="component"
    v-wave
    class="w-10 h-10 focus:outline-none focus-visible:ring focus-visible:ring-teal-500 rounded-full transition-colors"
  >
    <span
      v-if="icon"
      class="iconify w-full h-full p-2"
      :data-icon="icon"
    ></span>
    <slot />
  </component>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
  },
  component: {
    type: String,
    default: "button",
  },
});
</script>
