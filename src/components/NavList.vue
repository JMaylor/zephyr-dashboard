<template>
  <div class="min-h-full flex flex-col justify-between space-y-8">
    <ul>
      <li v-for="item in links">
        <router-link :to="item.to" class="flex items-center p-4" >
          <span class="iconify h-6 w-6 mr-4" :data-icon="item.icon"></span>
          {{ item.text }}
        </router-link>
      </li>
    </ul>
    <ul>
      <li v-for="item in bottomLinks">
        <router-link :to="item.to" class="flex items-center  p-4">
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
    to: '/dashboard',
    icon: 'heroicons-outline:home'
  },
]

const bottomLinks = [
  {
    text: 'Logout',
    to: '/',
    icon: 'heroicons-outline:logout'
  },
]
</script>

<style>
.router-link-active {
  @apply font-bold;
}
</style>