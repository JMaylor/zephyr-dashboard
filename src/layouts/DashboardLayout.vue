<template>
  <div class="bg-blueGray-200 min-w-screen min-h-screen h-full">
    <HeaderBar v-model="open" />
    <LeftSideBar v-model="open" />
  </div>
</template>

<script setup>
const open = ref(false)
</script>