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
    minWidth: 200,
  },
  {
    field: "athlete",
    flex: 1,
    minWidth: 200,
  },
  {
    field: "sport",
    flex: 1,
    minWidth: 200,
  },
  {
    field: "year",
    filter: "agNumberColumnFilter",
  },
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
  {
    field: "total",
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
