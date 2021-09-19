<template>
  <ul>
    <li v-for="item in links">
      <template v-if="item.children">
        <li class="uppercase text-gray-500 font-medium">{{ item.text }}</li>
        <li v-for="child in item.children" class="pl-8">
          <router-link :to="child.to">{{ child.text }}</router-link>
        </li>
      </template>
      <router-link v-else :to="item.to">{{ item.text }}</router-link>
    </li>
  </ul>
</template>

<script setup>
const links = [
  {
    text: 'Main',
    children: [
      {
        text: 'Home',
        to: '/'
      },
    ]
  },
  {
    text: 'Login',
    to: '/auth'
  },
]
</script>

<style scoped>
li {
  @apply mb-4;
}
</style>