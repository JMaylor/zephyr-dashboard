<template>
  <router-view />
</template>

<script setup>
const isDark = useDark();
</script>

<style>
html,
body,
#app {
  @apply h-full;
}
</style>
