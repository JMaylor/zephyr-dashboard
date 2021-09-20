<template>
  <header
    class="fixed top-0 bg-white dark:bg-blueGray-700 text-blueGray-700 dark:text-gray-200 shadow-md h-20 w-full flex justify-between px-4 items-center z-30"
  >
    <div class="flex space-x-4 items-center">
      <button
        class=" w-10 h-10 relative focus:outline-none focus-visible:ring rounded-full p-2 transition-transform"
        @click="$emit('update:modelValue', !modelValue)"
      >
        <span class="sr-only">Open main menu</span>
        <div
          class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <span
            aria-hidden="true"
            class="block absolute h-0.5 w-5 bg-current transform transition ease-in-out"
            :class="{ 'rotate-45': modelValue, ' -translate-y-1.5': !modelValue }"
          ></span>
          <span
            aria-hidden="true"
            class="block absolute h-0.5 w-5 bg-current transform transition ease-in-out"
            :class="{ 'opacity-0': modelValue }"
          ></span>
          <span
            aria-hidden="true"
            class="block absolute h-0.5 w-5 bg-current transform transition ease-in-out"
            :class="{ '-rotate-45': modelValue, ' translate-y-1.5': !modelValue }"
          ></span>
        </div>
      </button>
      <button @click="$emit('toggleDark')">
        <SunIcon class="h-6 w-6 dark:hidden" />
        <MoonIcon class="h-6 w-6 hidden dark:block" />
      </button>
    </div>
    <BrandLogo class="absolute left-1/2 transform -translate-x-1/2" />
    <MetaMenu />
  </header>
</template>

<script setup>
import { MoonIcon, SunIcon } from '@heroicons/vue/outline'

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})
</script>