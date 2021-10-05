<template>
  <header
    class="
      bg-green-500
      dark:bg-gray-600
      border-b
      sticky
      top-0
      flex
      justify-between
      px-4
      z-30
      items-center
    "
  >
    <div class="flex space-x-4 items-center">
      <button
        class="
          w-10
          h-10
          relative
          focus:outline-none
          focus-visible:ring
          rounded-full
        "
        @click="$emit('update:modelValue', !modelValue)"
      >
        <span class="sr-only">Open main menu</span>
        menu
      </button>
      <button @click="$emit('toggleDark')">
        <span class="iconify" data-icon="fa:home"></span>
      </button>
    </div>
    <BrandLogo class="absolute left-1/2 transform -translate-x-1/2" />
    <ul class="flex space-x-6">
      notifications, cog, user
    </ul>
  </header>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});
</script>
