<template>
  <div class="min-h-full flex flex-col justify-between space-y-8 p-4">
    <ul class="space-y-4">
      <li v-for="item in links">
        <router-link :to="item.to" class="flex items-center">
          <span class="iconify h-6 w-6 mr-4" :data-icon="item.icon"></span>
          {{ item.text }}
        </router-link>
      </li>
    </ul>
    <ul class="space-y-4">
      <li v-for="item in bottomLinks">
        <router-link :to="item.to" class="flex items-center">
          <span class="iconify h-6 w-6 mr-4" :data-icon="item.icon"></span>
          {{ item.text }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const links = [
  {
    text: 'Home',
    to: '/',
    icon: 'heroicons-outline:home'
  },
]

const bottomLinks = [
  {
    text: 'Logout',
    to: '/auth',
    icon: 'heroicons-outline:logout'
  },
]
</script>