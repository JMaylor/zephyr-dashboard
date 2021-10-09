<template>
  <Form
    @submit="onSubmit"
    class="grid grid-cols-12 gap-3 mx-auto max-w-screen-xl"
  >
    <ZSelect
      class="form-col"
      label="Title"
      name="title"
      :items="titles"
      v-model="user.title"
    />
    <div class="form-col">
      <ZInput
        name="forename"
        label="Forename"
        v-model="user.forename"
      />
    </div>
    <div class="form-col">
      <ZInput
        name="surname"
        label="Surname"
        v-model="user.surname"
      />
    </div>
    <ZSelect
      class="form-col"
      label="Gender"
      :items="genders"
      name="gender"
      v-model="user.gender"
      itemText="text"
    />
    <div class="form-col">
      <ZInput
        label="Email"
        required
        v-model="user.email"
        name="email"
        :rules="validateEmail"
      />
    </div>
    <ZTextarea class="col-span-12" label="Bio" v-model="user.bio" />
    <button>Submit</button>
  </Form>
</template>

<script setup>
import { Form } from "vee-validate";

function onSubmit(values) {
  console.log(values);
}

const user = ref({
  title: null,
  forename: null,
  surname: null,
  gender: null,
  email: null,
  bio: null,
});

function validateEmail(value) {
  // if the field is empty
  if (!value) {
    return "This field is required";
  }
  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return "This field must be a valid email";
  }
  // All is good
  return true;
}

// options for inputs
const titles = ["Mr", "Mrs", "Miss", "Ms", "Dr"];
const genders = [
  { text: "Male", icon: "mdi:gender-male" },
  { text: "Female", icon: "mdi:gender-female" },
  { text: "Other", icon: "mdi:gender-non-binary" },
];
</script>

<style scoped>
.form-col {
  @apply col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3;
}
</style>
