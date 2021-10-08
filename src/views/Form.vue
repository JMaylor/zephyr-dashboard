<template>
  <form class="grid grid-cols-12 gap-x-3 gap-y-0">
    <ZSelect
      class="form-col"
      label="Title"
      :items="titles"
      v-model="user.title"
    />
    <ZInput class="form-col" label="Forename" v-model="user.forename" />
    <ZInput class="form-col" label="Surname" v-model="user.surname" />
  </form>
</template>

<script setup>
const titles = ["Mr", "Mrs", "Miss", "Ms", "Dr"];

const user = ref({
  title: null,
  forename: "",
  surname: "",
});
</script>

<style scoped>
.form-col {
  @apply col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2;
}
</style>
