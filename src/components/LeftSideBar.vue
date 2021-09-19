<template>
  <div>
    <div class="h-screen w-screen bg-black bg-opacity-30 absolute" v-if="modelValue"></div>
    <nav class="h-screen w-64 rounded-r-2xl bg-white absolute p-6" ref="nav" v-if="modelValue">
      <NavList />
    </nav>
  </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits()
const nav = ref(null)
onClickOutside(nav, () => emit('update:modelValue', false))
</script>