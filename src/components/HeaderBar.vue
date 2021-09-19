<template>
  <header class="fixed top-0 bg-white shadow-md h-20 w-full flex justify-between px-4 items-center">
    <button
      class="text-gray-500 w-10 h-10 relative focus:outline-none focus-visible:ring rounded-full p-2 transition"
      @click="$emit('update:modelValue', !modelValue)"
    >
      <span class="sr-only">Open main menu</span>
      <div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
    <BrandLogo />
    <MetaMenu />
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