<template>
  <div
    class="absolute lg:hidden w-full h-full z-40 bg-black bg-opacity-40"
    v-if="modelValue"
  ></div>
  <nav
    v-if="modelValue"
    ref="nav"
    class="border-r h-full fixed w-64 bg-yellow-500 z-50"
  >
    left nav drawer
  </nav>
</template>

<script setup>
import { breakpointsTailwind } from "@vueuse/core";

defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);
const nav = ref(null);

const breakpoints = useBreakpoints(breakpointsTailwind);
const lgAndLarger = breakpoints.greater("lg");
onClickOutside(nav, () => {
  if (!lgAndLarger.value) emit("update:modelValue", false);
});
</script>
