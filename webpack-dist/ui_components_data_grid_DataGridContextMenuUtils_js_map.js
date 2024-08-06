(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_data_grid_DataGridContextMenuUtils_js_map"],{

/***/ "./ui/components/data_grid/DataGridContextMenuUtils.js.map":
/*!*****************************************************************!*\
  !*** ./ui/components/data_grid/DataGridContextMenuUtils.js.map ***!
  \*****************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"DataGridContextMenuUtils.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/ui/components/data_grid/DataGridContextMenuUtils.ts\"],\"names\":[],\"mappings\":\"AAMA,OAAO,EAAC,+BAA+B,EAAC,MAAM,qBAAqB,CAAC;AAGpE,SAAS,sBAAsB,CAAC,QAAkB,EAAE,MAAc;IAChE,MAAM,aAAa,GAAG,CAAC,MAAM,CAAC,OAAO,CAAC;IACtC,MAAM,UAAU,GAAG,QAAQ,CAAC,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,GAAG,CAAC,EAAE;QACjD,IAAI,GAAG,KAAK,MAAM,EAAE,CAAC;YACnB,GAAG,CAAC,OAAO,GAAG,aAAa,CAAC;QAC9B,CAAC;QACD,OAAO,GAAG,CAAC;IACb,CAAC,CAAC,CAAC;IACH,QAAQ,CAAC,IAAI,GAAG;QACd,GAAG,QAAQ,CAAC,IAAI;QAChB,OAAO,EAAE,UAAU;KACpB,CAAC;AACJ,CAAC;AAED;;;;;GAKG;AACH,MAAM,UAAU,6BAA6B,CACzC,QAAkB,EAAE,WAA8D;IACpF,MAAM,EAAC,OAAO,EAAC,GAAG,QAAQ,CAAC,IAAI,CAAC;IAEhC,KAAK,MAAM,MAAM,IAAI,OAAO,EAAE,CAAC;QAC7B,IAAI,CAAC,MAAM,CAAC,QAAQ,EAAE,CAAC;YACrB,SAAS;QACX,CAAC;QACD;;;;WAIG;QACH,WAAW,CAAC,cAAc,EAAE,CAAC,kBAAkB,CAAC,MAAM,CAAC,KAAK,EAAE,GAAG,EAAE;YACjE,sBAAsB,CAAC,QAAQ,EAAE,MAAM,CAAC,CAAC;QAC3C,CAAC,EAAE,EAAC,OAAO,EAAE,MAAM,CAAC,OAAO,EAAE,YAAY,EAAE,MAAM,CAAC,EAAE,EAAC,CAAC,CAAC;IACzD,CAAC;AACH,CAAC;AAED;;;;;;;GAOG;AACH,MAAM,UAAU,sBAAsB,CAClC,QAAkB,EAAE,WAA8D;IACpF,MAAM,eAAe,GAAG,QAAQ,CAAC,IAAI,CAAC,OAAO,CAAC,MAAM,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,CAAC,QAAQ,KAAK,IAAI,CAAC,CAAC;IACnF,IAAI,eAAe,CAAC,MAAM,GAAG,CAAC,EAAE,CAAC;QAC/B,KAAK,MAAM,MAAM,IAAI,eAAe,EAAE,CAAC;YACrC,WAAW,CAAC,cAAc,EAAE,CAAC,UAAU,CAAC,MAAM,CAAC,KAAK,EAAE,GAAG,EAAE;gBACzD,QAAQ,CAAC,aAAa,CAAC,IAAI,+BAA+B,CAAC,MAAM,CAAC,CAAC,CAAC;YACtE,CAAC,EAAE,EAAC,YAAY,EAAE,MAAM,CAAC,EAAE,EAAC,CAAC,CAAC;QAChC,CAAC;IACH,CAAC;AACH,CAAC\",\"sourcesContent\":[\"// Copyright (c) 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\nimport type * as UI from '../../legacy/legacy.js';\\n\\nimport {type DataGrid} from './DataGrid.js';\\nimport {ContextMenuColumnSortClickEvent} from './DataGridEvents.js';\\nimport {type Column} from './DataGridUtils.js';\\n\\nfunction toggleColumnVisibility(dataGrid: DataGrid, column: Column): void {\\n  const newVisibility = !column.visible;\\n  const newColumns = dataGrid.data.columns.map(col => {\\n    if (col === column) {\\n      col.visible = newVisibility;\\n    }\\n    return col;\\n  });\\n  dataGrid.data = {\\n    ...dataGrid.data,\\n    columns: newColumns,\\n  };\\n}\\n\\n/**\\n * This adds a checkbox to the context menu for each column in the datagrid that\\n * is hideable. Columns that are visible will have a tick next to them, and\\n * hidden ones will not. Upon clicking by the user the selected column's\\n * visibility will be toggled.\\n */\\nexport function addColumnVisibilityCheckboxes(\\n    dataGrid: DataGrid, contextMenu: UI.ContextMenu.ContextMenu|UI.ContextMenu.SubMenu): void {\\n  const {columns} = dataGrid.data;\\n\\n  for (const column of columns) {\\n    if (!column.hideable) {\\n      continue;\\n    }\\n    /**\\n     * Append checkboxes for each column that is hideable; these will show\\n     * with checkboxes if the column is visible and allow the user to click in\\n     * the context menu to toggle an individual column's visibility.\\n     */\\n    contextMenu.defaultSection().appendCheckboxItem(column.title, () => {\\n      toggleColumnVisibility(dataGrid, column);\\n    }, {checked: column.visible, jslogContext: column.id});\\n  }\\n}\\n\\n/**\\n * This adds an entry to the context menu for each column in the data grid that\\n * is considered sortable, so the user can click on the context menu item to\\n * change the data grid's sorting.\\n *\\n * This is also achieved by clicking on the column headers in the grid directly,\\n * but we also support doing so via the context menu items.\\n */\\nexport function addSortableColumnItems(\\n    dataGrid: DataGrid, contextMenu: UI.ContextMenu.ContextMenu|UI.ContextMenu.SubMenu): void {\\n  const sortableColumns = dataGrid.data.columns.filter(col => col.sortable === true);\\n  if (sortableColumns.length > 0) {\\n    for (const column of sortableColumns) {\\n      contextMenu.defaultSection().appendItem(column.title, () => {\\n        dataGrid.dispatchEvent(new ContextMenuColumnSortClickEvent(column));\\n      }, {jslogContext: column.id});\\n    }\\n  }\\n}\\n\"]}");

/***/ })

}]);