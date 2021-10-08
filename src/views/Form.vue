<template>
  <form class="grid grid-cols-12 gap-3">
    <ZSelect
      class="
        col-span-12
        sm:col-span-6
        md:col-span-4
        lg:col-span-3
        xl:col-span-2
      "
      label="Person"
      :items="people"
      v-model="selectedPerson"
      itemText="name"
    />
  </form>
</template>

<script setup>
import { ref } from "vue";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

const selectedPerson = ref();
</script>
