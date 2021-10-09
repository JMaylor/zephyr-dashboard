<template>
  <form class="grid grid-cols-12 gap-3 mx-auto max-w-screen-xl">
    <ZSelect
      class="form-col"
      label="Title"
      :items="titles"
      v-model="user.title"
    />
    <ZInput class="form-col" label="Forename" v-model="user.forename" />
    <ZInput class="form-col" label="Surname" v-model="user.surname" />
    <ZSelect
      class="form-col"
      label="Gender"
      :items="genders"
      v-model="user.gender"
    />
  </form>
</template>

<script setup>
const titles = ["Mr", "Mrs", "Miss", "Ms", "Dr"];
const genders = ["Male", "Female", "Other"];

const user = ref({
  title: null,
  forename: null,
  surname: null,
  gender: null,
});
</script>

<style scoped>
.form-col {
  @apply col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3;
}
</style>
