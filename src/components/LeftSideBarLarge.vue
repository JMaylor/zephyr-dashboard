<template>
  <transition
    enter-from-class="-translate-x-full opacity-0"
    leave-to-class="-translate-x-full opacity-0"
  >
    <nav
      class="h-header w-72 bg-white m-4 p-4 overflow-y-auto rounded-2xl shadow-md fixed left-0 bottom-0 transition-all"
      v-if="open"
    >
      <NavList />
    </nav>
  </transition>
</template>

<script setup>
defineProps({
  open: {
    type: Boolean,
    required: true
  }
})
</script>
