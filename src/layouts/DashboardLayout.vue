<template>
  <div class="bg-blueGray-200 min-w-screen min-h-screen h-full">
    <HeaderBar v-model="open" />
    <LeftSideBarSmall v-model="open" v-if="!lgAndLarger" />
    <LeftSideBarLarge v-else :open="open"/>

    <!-- main and footer -->
    <div class="pt-24 p-4 transition-all space-y-4" :class="{ 'lg:ml-72 lg:pl-8': open && lgAndLarger }">
      <main>
        <slot />
      </main>
      <footer class="w-full pt-2 border-t border-gray-300 text-center">Hi I'm the footer</footer>
    </div>
  </div>
</template>

<script setup>
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const lgAndLarger = breakpoints.greater('lg')

const open = ref(false)
</script>