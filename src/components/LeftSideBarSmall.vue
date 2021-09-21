<template>
  <div>
    <transition enter-from-class="opacity-0" leave-to-class="opacity-0">
      <div class="h-screen w-screen bg-black bg-opacity-30 fixed transition-all z-40" v-if="modelValue"></div>
    </transition>

    <transition
      enter-from-class="-translate-x-full opacity-0"
      leave-to-class="-translate-x-full opacity-0"
    >
      <nav
        class="overflow-y-auto h-screen w-72 rounded-r-2xl bg-white dark:bg-blueGray-700 fixed top-0 left-0 transition-all z-50"
        ref="nav"
        v-if="modelValue"
      >
        <NavList />
      </nav>
    </transition>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits()
const nav = ref(null)
onClickOutside(nav, () => emit('update:modelValue', false))
</script>
