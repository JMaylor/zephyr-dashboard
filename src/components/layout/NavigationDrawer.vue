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
        nav-container
        bg-cover
        shadow-lg
        dark:shadow-none
        bg-zinc-900
        text-zinc-100
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
      <div class="divide-y divide-zinc-100">
        <a
          v-wave
          href="https://maylor.io"
          target="_blank"
          class="nav-button mb-4"
          >maylor.io<span
            class="iconify ml-2"
            data-icon="heroicons-outline:external-link"
          ></span
        ></a>
        <nav class="pt-4 space-y-2 flex flex-col">
          <router-link
            v-for="{ text, to, icon } in navLinks"
            v-wave
            class="nav-button"
            exact-active-class="bg-teal-800 text-zinc-100"
            :to="to"
          >
            <span class="iconify w-6 h-6 mr-2" :data-icon="icon"></span>
            <span>{{ text }}</span>
          </router-link>
        </nav>
      </div>
      <router-link
        v-wave
        class="nav-button"
        exact-active-class="bg-teal-800 text-zinc-100"
        to="/"
      >
        <span class="iconify w-6 h-6 mr-2" data-icon="heroicons-outline:logout"></span>
        <span>Sign Out</span>
      </router-link>
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

// TODO - switch focus to nav drawer when it is opened with keyboard ?

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
  {
    text: "Calendar",
    to: "/dashboard/calendar",
    icon: "heroicons-outline:calendar",
  },
  {
    text: "Table",
    to: "/dashboard/table",
    icon: "heroicons-outline:table",
  },
  {
    text: "Profile",
    to: "/dashboard/profile",
    icon: "heroicons-outline:user",
  },
];
</script>

<style scoped>
.nav-container {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://images.unsplash.com/photo-1632213702844-1e0615781374?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80");
}

.nav-button {
  @apply p-4 rounded transition-colors flex items-center focus:outline-none focus:ring-1 focus:ring-teal-500;
}
</style>
