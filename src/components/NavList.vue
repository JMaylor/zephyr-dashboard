<template>
  <div class="h-full flex flex-col">
    <ul class="flex-grow space-y-4">
      <li v-for="item in links" class="space-x-4 flex items-center">
        <router-link :to="item.to">{{ item.text }}</router-link>
      </li>
    </ul>
    <ul>
      <li v-for="item in bottomLinks">
        <template v-if="item.children">
          <li class="uppercase text-gray-500 font-medium">{{ item.text }}</li>
          <li v-for="child in item.children" class="pl-8">
            <router-link :to="child.to">{{ child.text }}</router-link>
          </li>
        </template>
        <router-link v-else :to="item.to">{{ item.text }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const links = [
  {
    text: 'Home',
    to: '/',
    icon: 'i-heroicons-outline-user'
  },
  {
    text: 'Home',
    to: '/'
  },
  {
    text: 'Home',
    to: '/'
  },

]

const bottomLinks = [
  {
    text: 'Home',
    to: '/'
  },
  {
    text: 'Logout',
    to: '/auth'
  }
]
</script>

<style scoped>
li {
  @apply mb-4;
}
</style>