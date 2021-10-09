<template>
  <Listbox
    v-model="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
  >
    <div class="relative mt-1">
      <ListboxLabel class="pl-2 py-2 block h-8 sm:text-sm z-0">{{
        label
      }}</ListboxLabel>
      <ListboxButton
        class="
          transition-all
          relative
          w-full
          py-2
          pl-3
          pr-10
          text-left
          bg-zinc-50
          dark:bg-black
          rounded-lg
          shadow-lg
          focus:outline-none
          focus:ring-2
          focus:ring-opacity-75
          focus:ring-teal-800
          dark:focus:ring-teal-500
          sm:text-sm
        "
      >
        <span class="block truncate h-6 sm:h-5">{{
          itemText ? modelValue?.[itemText] ?? "" : modelValue
        }}</span>
        <span
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            pointer-events-none
          "
        >
          <span
            class="iconify h-5 w-5 text-gray-400"
            aria-hidden="true"
            data-icon="heroicons-outline:selector"
          ></span>
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          ref="listBoxOptions"
          class="
            absolute
            w-full
            py-1
            mt-1
            overflow-auto
            text-base
            bg-white
            dark:bg-black
            rounded-md
            shadow-lg
            max-h-60
            ring-1 ring-black ring-opacity-5
            focus:outline-none
            sm:text-sm
            z-10
          "
        >
          <ListboxOption
            v-slot="{ active, selected }"
            v-for="item in items"
            :value="item"
            as="template"
          >
            <li
              :class="[
                active
                  ? 'text-teal-800 dark:text-teal-100 bg-teal-500 bg-opacity-30'
                  : 'text-zinc-900 dark:text-zinc-100',
                'cursor-pointer relative py-2 pl-4 pr-10',
              ]"
            >
              <span
                :class="[
                  selected ? 'font-medium' : 'font-normal',
                  'block truncate',
                ]"
                >{{ itemText ? item[itemText] : item }}</span
              >
              <span
                v-if="selected"
                class="
                  absolute
                  inset-y-0
                  right-0
                  flex
                  items-center
                  pr-3
                  text-teal-800
                  dark:text-teal-500
                "
              >
                <span
                  class="iconify w-5 h-5"
                  aria-hidden="true"
                  data-icon="heroicons-outline:check"
                ></span>
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup>
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

defineProps({
  items: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  modelValue: {
    required: true,
  },
  itemText: {
    type: String,
    required: false,
  },
});
</script>
