<template>
  <header class="fixed bg-white shadow-md h-20 w-full flex justify-between px-4 items-center">
    <button
      class="text-gray-500 w-10 h-10 relative focus:outline-none focus-visible:ring rounded-full p-2 transition"
      @click="$emit('update:modelValue', !modelValue)"
    >
      <span class="sr-only">Open main menu</span>
      <div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span
          aria-hidden="true"
          class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
          :class="{ 'rotate-45': modelValue, ' -translate-y-1.5': !modelValue }"
        ></span>
        <span
          aria-hidden="true"
          class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
          :class="{ 'opacity-0': modelValue }"
        ></span>
        <span
          aria-hidden="true"
          class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
          :class="{ '-rotate-45': modelValue, ' translate-y-1.5': !modelValue }"
        ></span>
      </div>
    </button>
    <BrandLogo />
    <button
      class="text-gray-500 w-10 h-10 focus:outline-none focus-visible:ring rounded-full p-2 transition"
    >
      <span class="sr-only">Open main menu</span>
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
  </header>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})
</script>