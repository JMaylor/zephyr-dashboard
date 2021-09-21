<template>
  <div
    class="bg-blueGray-200 dark:bg-black text-coolGray-700 dark:text-white min-w-screen min-h-screen h-full"
    :class="{ dark: isDark }"
  >
    <HeaderBar v-model="open" @toggleDark="toggleDark" />
    <LeftSideBarSmall v-model="open" v-if="!lgAndLarger" />
    <LeftSideBarLarge v-else :open="open" />

    <div
      class="pt-24 p-4 transition-all space-y-4 flex flex-col min-h-screen"
      :class="{ 'lg:ml-72 lg:pl-8': open && lgAndLarger }"
    >
      <main class="flex-grow">
        <slot />
      </main>
      <footer class="w-full pt-2 border-t border-gray-300 text-center">Hi I'm the footer</footer>
    </div>
  </div>
</template>

<script setup>
import { breakpointsTailwind } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const lgAndLarger = breakpoints.greater('lg')

const open = ref(false)

const isDark = useDark()
const toggleDark = useToggle(isDark)
provide('isDark', isDark)
</script>