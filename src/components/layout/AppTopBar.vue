<template>
  <header class="sticky top-0 flex justify-between p-4 z-30 items-center backdrop-blur">
    <div class="flex space-x-4 items-center">
      <z-icon-button
        @click="$emit('update:modelValue', !modelValue)"
        icon="heroicons-outline:menu"
      />
      <z-icon-button @click="$emit('toggleDark')">
        <span
          class="iconify w-full h-full p-2 dark:hidden"
          data-icon="heroicons-outline:sun"
        ></span>
        <span
          class="iconify w-full h-full p-2 hidden dark:block"
          data-icon="heroicons-outline:moon"
        ></span>
      </z-icon-button>
    </div>
    <div class="flex space-x-4 items-center">
      <notifications-popover />
      <z-icon-button icon="heroicons-outline:cog" />
      <z-icon-button
        component="router-link"
        exact-active-class="bg-teal-800 text-zinc-100"
        to="/dashboard/profile"
        icon="heroicons-outline:user"
      />
    </div>
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
