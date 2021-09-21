<template>
  <div class="relative md:hidden" ref="metaMenu">
    <button
      @click="showMetaMenu = !showMetaMenu"
      class=" w-10 h-10 focus:outline-none focus-visible:ring rounded-full p-2 transition"
    >
      <span class="sr-only">Open secondary menu</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
        />
      </svg>
    </button>
    <ul
      v-if="showMetaMenu"
      class="absolute top-16 right-0 p-4 rounded-lg bg-white dark:bg-trueGray-800 shadow-md space-y-4 z-50"
    >
      <CalendarIcon class="h-6" />
      <CogIcon class="h-6" />
      <UserIcon class="h-6" />
    </ul>
  </div>
  <ul class="hidden md:flex p-4 space-x-6 ">
    <CalendarIcon class="h-6" />
    <CogIcon class="h-6" />
    <UserIcon class="h-6" />
  </ul>
</template>

<script setup>
import { CalendarIcon, CogIcon, UserIcon } from '@heroicons/vue/outline'

const showMetaMenu = ref(false)
const metaMenu = ref(null)
onClickOutside(metaMenu, () => showMetaMenu.value = false)
</script>