<template>
  <div v-if="user">
    <img
      :src="`https://avatars.dicebear.com/api/avataaars/${user.name.first}.svg?radius=50`"
      alt="avatar"
      class="w-72 h-72 drop-shadow"
    />
  </div>
</template>

<script setup>
const user = ref(null);

fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then(({ results }) => (user.value = results[0]));
</script>
