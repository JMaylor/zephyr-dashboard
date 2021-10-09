<template>
  <div class="z-input mt-1">
    <label :for="id" class="pl-2 py-2 block h-8 sm:text-sm">{{ label }}</label>
    <input
      :id="id"
      @input="$emit('update:modelValue', $event.target.value)"
      class="
        w-full
        transition
        py-2
        px-3
        text-left
        bg-zinc-50
        dark:bg-black
        rounded-lg
        shadow-lg
        focus:outline-none
        focus:ring-2
        ring-opacity-75
        ring-teal-800
        dark:ring-teal-500
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

const id = nanoid();
</script>
