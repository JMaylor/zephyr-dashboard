<template>
  <div>
    <label :for="id" class="pl-2 py-2 block h-8 sm:text-sm">{{ label }}</label>
    <textarea
    placeholder="Tell me something about you!"
      ref="textarea"
      rows="3"
      :id="id"
      @input="$emit('update:modelValue', $event.target.value)"
      class="
        resize-none
        transition
        w-full
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
import { watch } from "@vue/runtime-core";
import autosize from "autosize";

const props = defineProps({
  label: {
    type: String,
    required: false,
  },
  modelValue: {
    required: true,
  },
});

const textarea = ref();
watch(
  () => props.modelValue,
  () => autosize(textarea.value)
);

const id = nanoid();
</script>
