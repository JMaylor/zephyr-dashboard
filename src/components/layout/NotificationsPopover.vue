<template>
  <Popover class="flex relative">
    <PopoverButton
      v-wave
      class="
        relative
        w-10
        h-10
        focus:outline-none
        focus-visible:ring focus-visible:ring-teal-500
        rounded-full
        transition-colors
      "
    >
      <span
        class="iconify w-full h-full p-2"
        data-icon="heroicons-outline:bell"
      ></span>
      <div
        v-if="notifications.length > 0"
        class="
          absolute
          right-1
          top-1
          w-4
          h-4
          bg-red-600
          rounded-full
          text-xs text-zinc-100
        "
      >
        3
      </div>
    </PopoverButton>
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel
        class="
          absolute
          top-12
          -right-28
          w-96
          bg-teal-800
          text-zinc-100
          rounded
          shadow-lg
          p-4
          flex flex-col
          space-y-2
        "
      >
        <h3 class="font-bold">Notifications</h3>
        <div v-if="notifications.length > 0" class="divide-y space-y-2">
          <div v-for="{ text } in notifications" class="pt-2">{{ text }}</div>
        </div>
        <template v-else>no notifications</template>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

const notifications = [
  {
    text: "Your password will be expire in 3 days.",
  },
  {
    text: "Your password will be expire in 3 days.",
  },
  {
    text: "Your password will be expire in 3 days.",
  },
];
</script>
