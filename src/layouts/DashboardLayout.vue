<template>
  <div class="flex min-h-full">
    <NavigationDrawer v-model="open" />
    <div
      class="flex flex-grow flex-col bg-red-500"
      :class="{ 'lg:pl-64': open }"
    >
      <AppTopBar v-model="open" @toggleDark="toggleDark" />
      <main class="flex-grow">
        <!-- <router-view /> -->
        main content
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
