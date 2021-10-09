<template>
  <label :for="id" class="pl-2 py-2 block h-8 sm:text-sm"
    >{{ label
    }}<span v-if="required" class="text-red-500 font-medium">*</span></label
  >
  <Field
    v-bind="$attrs"
    :id="id"
    :name="name"
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
      focus:outline-none focus:ring-2
      ring-opacity-75 ring-teal-800
      dark:ring-teal-500
      sm:text-sm
    "
  />
  <span class="pl-2 block h-8 sm:text-sm text-red-500">
    <ErrorMessage :name="name" />
  </span>
</template>

<script setup>
import { Field, ErrorMessage } from "vee-validate";

defineProps({
  label: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    required: true,
  },
});

const id = nanoid();
</script>
