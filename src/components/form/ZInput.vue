<template>
  <div class="z-input mt-1">
    <label class="pl-2 py-2 block h-8 sm:text-sm">{{ label }}</label>
    <input
      @input="$emit('update:modelValue', $event.target.value)"
      class="
        w-full
        py-2
        px-3
        text-left
        bg-zinc-50
        dark:bg-black
        rounded-lg
        shadow-lg
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-opacity-75
        focus-visible:ring-teal-800
        dark:focus-visible:ring-teal-500
        sm:text-sm
      "
    />
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: false,
  },
  modelValue: {
    required: true,
  },
});
</script>
