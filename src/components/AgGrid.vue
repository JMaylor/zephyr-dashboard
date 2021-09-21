<template>
  <AgGridVue :class="{ 'ag-theme-alpine': !isDark, 'ag-theme-alpine-dark': isDark }"></AgGridVue>
</template>
<script setup>
import { AgGridVue } from 'ag-grid-vue3'
const isDark = inject('isDark')
</script>


<style>
@import "../../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../../node_modules/ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
@import "../../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
</style>