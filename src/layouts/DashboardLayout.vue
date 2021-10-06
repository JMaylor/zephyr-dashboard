<template>
  <div class="flex min-h-full transition-colors">
    <NavigationDrawer v-model="open" />
    <div
      class="
        flex flex-grow flex-col
        transition-spacing
        bg-zinc-100
        dark:bg-zinc-900
        text-zinc-900
        dark:text-zinc-100
      "
      :class="{ 'lg:pl-64': open }"
    >
      <AppTopBar v-model="open" @toggleDark="toggleDark" />
      <main class="flex-grow p-4">
        <router-view />
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import { breakpointsTailwind } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const lgAndLarger = breakpoints.greater("lg");

const open = ref(lgAndLarger.value ? true : false);
const route = useRoute();
watch(route, () => {
  if (!lgAndLarger.value) open.value = false;
});

const isDark = useDark();
const toggleDark = useToggle(isDark);
provide("isDark", isDark);
</script>
