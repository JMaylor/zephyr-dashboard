<template>Profile</template>

<script setup>
const user = ref(null);

async function fetchRandomUser() {
  user.value = await fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then(({ results: [user] }) => user);
}

onMounted(fetchRandomUser);
</script>
