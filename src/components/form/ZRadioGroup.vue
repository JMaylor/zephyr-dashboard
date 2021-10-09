<template>
  <RadioGroup
    v-model="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    class="mt-1 flex flex-col sm:text-sm w-full"
  >
    <RadioGroupLabel class="pl-2 py-2 block h-8">{{ label }}</RadioGroupLabel>
    <div class="flex justify-around w-full">
      <RadioGroupOption
        as="template"
        v-for="item in items"
        :value="item"
        v-slot="{ active, checked }"
      >
        <div
          :class="[
            active ? 'ring-2  ring-teal-500' : '',
            checked
              ? 'bg-teal-800 text-zinc-100 '
              : 'bg-zinc-100 dark:bg-black ',
          ]"
          class="
            px-3
            py-2
            rounded-lg
            shadow-lg
            cursor-pointer
            focus:outline-none
          "
        >
          <RadioGroupLabel class="cursor-pointer">
            {{ item }}
          </RadioGroupLabel>
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script setup>
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";

defineProps({
  items: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  modelValue: {
    required: true,
  },
});

const plans = [
  {
    name: "Startup",
    ram: "12GB",
    cpus: "6 CPUs",
    disk: "160 GB SSD disk",
  },
  {
    name: "Business",
    ram: "16GB",
    cpus: "8 CPUs",
    disk: "512 GB SSD disk",
  },
  {
    name: "Enterprise",
    ram: "32GB",
    cpus: "12 CPUs",
    disk: "1024 GB SSD disk",
  },
];

function test(e) {
  console.log(e);
}
</script>
