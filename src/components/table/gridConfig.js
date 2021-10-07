import FlagCellRenderer from "./FlagCellRenderer.vue";

const defaultColDef = {
  filter: true,
  floatingFilter: true,
  sortable: true,
  minWidth: 120,
  resizable: true,
  editable: true,
};

const columnDefs = [
  { field: "country" },
  {
    headerName: "Flag",
    field: "country",
    cellRendererFramework: FlagCellRenderer,
    editable: false,
  },
  { field: "athlete", flex: 1 },
  { field: "sport", flex: 1 },
  {
    field: "age",
    filter: "agNumberColumnFilter",
    type: "numericColumn",
    width: 120,
  },
  {
    field: "bronze",
    filter: "agNumberColumnFilter",
    type: "numericColumn",
    width: 120,
  },
  {
    field: "silver",
    filter: "agNumberColumnFilter",
    type: "numericColumn",
    width: 120,
  },
  {
    field: "gold",
    filter: "agNumberColumnFilter",
    type: "numericColumn",
    width: 120,
  },
];

export const gridConfig = {
  gridOptions: {
    pagination: true,
  },
  columnDefs,
  defaultColDef,
};
