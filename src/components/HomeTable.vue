<template>
  <AgGrid
    class="w-full h-72"
    :columnDefs="columnDefs"
    :rowData="rowData"
  ></AgGrid>
</template>

<script setup>
const columnDefs = [
  { field: 'make', flex: 1 },
  { field: 'model', flex: 1 },
  { field: 'price', flex: 1 }
];

const rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxter', price: 72000 }
];
</script>