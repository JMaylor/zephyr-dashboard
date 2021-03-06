<template>
  <section class="flex h-full justify-center items-center">
    <v-calendar
      class="mx-auto"
      :attributes="attributes"
      :is-dark="isDark"
      :columns="$screens({ default: 1, sm: 2, lg: 3 })"
      :rows="$screens({ default: 2 })"
      :is-expanded="$screens({ default: true, lg: false })"
    />
  </section>
</template>

<script setup>
const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

const isDark = inject("isDark");

const meetings = [
  {
    description: "Bi-weekly staff meeting.",
    // Every other Monday morning :(
    dates: {
      weeklyInterval: 2,
      weekdays: 2,
    },
    color: "blue",
  },
  {
    description: "Meeting to discuss the new project.",
    dates: {
      start: new Date(year, month, 9),
      span: 3,
    },
    color: "red",
  },
  {
    description: "Out of town on business.",
    dates: {
      start: new Date(year, month, 25),
      span: 2,
    },
    color: "green",
  },
];

const todos = [
  {
    description: "Take Noah to basketball practice.",
    isComplete: false,
    dates: { weekdays: 6 }, // Every Friday
    color: "orange",
  },
  {
    description: "Get some milks.",
    isComplete: false,
    dates: [new Date(year, month, 19), new Date(year, month, 23)],
    color: "purple",
  },
];

const attributes = computed(() => {
  return [
    // Today attribute
    {
      highlight: {
        fillMode: "outline",
        color: "purple",
        class: "rounded-none bg-transparent",
      },
      content: {
        class: "italic",
      },
      dates: new Date(),
      order: 100,
    },
    // Attributes for meetings
    ...meetings.map(({ description, dates, color }) => ({
      dates,
      highlight: color,
      popover: {
        label: description,
      },
    })),
    // Attributes for todos
    ...todos.map((todo) => ({
      dates: todo.dates,
      dot: {
        color: todo.color,
        class: todo.isComplete ? "opacity-25" : "",
      },
      popover: {
        label: todo.description,
      },
    })),
  ];
});
</script>

<style>
.vc-container {
  @apply shadow-lg rounded-md border-0;
}

.vc-container.vc-is-dark {
  @apply bg-white dark:bg-zinc-800;
}
</style>
