F
<template>
  <AgGridVue
    :class="{ 'ag-theme-material': !isDark, 'ag-theme-material-dark': isDark }"
    class="ag-grid w-full h-full shadow-lg"
    v-bind="gridConfig"
    :rowData="rowData"
    :context="context"
    @firstDataRendered="onFirstDataRendered"
  ></AgGridVue>
</template>

<script setup>
import { AgGridVue } from "ag-grid-vue3";
import { gridConfig } from "@/components/table/gridConfig.js";
const isDark = inject("isDark");

const api = ref();
const columnApi = ref();
function onFirstDataRendered(params) {
  api.value = params.api;
  columnApi.value = params.columnApi;
}

const context = ref({});

let rowData = ref([]);
onMounted(() =>
  Promise.all([
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json").then(
      (response) => response.json()
    ),
    fetch("https://flagcdn.com/en/codes.json").then((response) =>
      response.json()
    ),
  ]).then(([athleteData, flagData]) => {
    rowData.value = athleteData;
    context.value.flags = flagData;
  })
);
</script>

<style lang="scss">
@import "../../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../../node_modules/ag-grid-community/dist/styles/ag-theme-material.min.css";
@import "../../node_modules/ag-grid-community/src/styles/ag-theme-material/sass/ag-theme-material-mixin.scss";

.ag-grid {
  @apply font-sans;
}

.ag-theme-material {
  --ag-material-primary-color: #0d9488;
}

// custom material dark theme
.ag-theme-material-dark {
  @include ag-theme-material(
    (
      material-primary-color: #0d9488,
      material-accent-color: #ff4081,
      foreground-color: #fff,
      secondary-foreground-color: ag-derived(foreground-color, $opacity: 0.54),
      disabled-foreground-color: ag-derived(foreground-color, $opacity: 0.38),
      background-color: #18181b,
      header-background-color: #18181b,
      subheader-background-color: #3f3f46,
      header-cell-hover-background-color:
        ag-derived(header-background-color, $darken: 5%),
      chip-background-color: #881c1c,
      range-selection-background-color: rgba(122, 134, 203, 0.1),
      range-selection-highlight-color: #4b4b4b,
      row-hover-color: #3f3f46,
      column-hover-color: #3f3f46,
      control-panel-background-color: #3f3f46,
      selected-row-background-color: #eee,
      range-selection-border-color: ag-derived(material-primary-color),
      checkbox-checked-color: ag-derived(material-accent-color),
      checkbox-unchecked-color: #333,
      value-change-value-highlight-background-color: #ff4081,
      borders: true,
      border-color: #71717a,
    )
  );
}
</style>
