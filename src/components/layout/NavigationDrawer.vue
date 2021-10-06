<template>
  <!-- background blur on smaller screens -->
  <transition enter-from-class="opacity-0" leave-to-class="opacity-0">
    <div
      class="
        absolute
        transition-opacity
        lg:hidden
        w-full
        h-full
        z-40
        bg-black bg-opacity-50
        backdrop-filter backdrop-blur-sm
      "
      v-if="modelValue"
    ></div>
  </transition>

  <!-- nav drawer -->
  <transition
    enter-from-class="transform -translate-x-full"
    leave-to-class="transform -translate-x-full"
  >
    <div
      v-if="modelValue"
      ref="navContainer"
      class="
        shadow-2xl
        dark:shadow-none
        border-zinc-100
        h-full
        fixed
        w-64
        z-50
        transition-transform
        p-4
        flex flex-col
        justify-between
      "
    >
      <div class="divide-y divide-zinc-800 dark:divide-zinc-200">
        <a href="https://maylor.io" target="_blank" class="block pb-4"
          >maylor.io</a
        >
        <nav class="pt-4 space-y-2 flex flex-col">
          <router-link
            v-for="{ text, to, icon } in navLinks"
            v-wave
            class="p-4 rounded transition-colors flex"
            exact-active-class="bg-teal-800 text-zinc-200"
            :to="to"
          >
            <span class="iconify w-6 h-6 mr-2" :data-icon="icon"></span>
            <span>{{ text }}</span></router-link
          >
        </nav>
      </div>
      <div>nav footer</div>
    </div>
  </transition>
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
const navContainer = ref(null);

const breakpoints = useBreakpoints(breakpointsTailwind);
const lgAndLarger = breakpoints.greater("lg");
onClickOutside(navContainer, () => {
  if (!lgAndLarger.value) emit("update:modelValue", false);
});

const navLinks = [
  {
    text: "Home",
    to: "/dashboard",
    icon: "heroicons-outline:home",
  },
  {
    text: "About",
    to: "/dashboard/about",
    icon: "heroicons-outline:information-circle",
  },
];
</script>
