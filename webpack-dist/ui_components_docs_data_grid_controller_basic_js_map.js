(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_data_grid_controller_basic_js_map"],{

/***/ "./ui/components/docs/data_grid_controller/basic.js.map":
/*!**************************************************************!*\
  !*** ./ui/components/docs/data_grid_controller/basic.js.map ***!
  \**************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"basic.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/data_grid_controller/basic.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,kBAAkB,MAAM,2CAA2C,CAAC;AAChF,OAAO,KAAK,QAAQ,MAAM,8BAA8B,CAAC;AACzD,OAAO,KAAK,gBAAgB,MAAM,0BAA0B,CAAC;AAE7D,MAAM,kBAAkB,CAAC,oBAAoB,EAAE,CAAC;AAChD,MAAM,gBAAgB,CAAC,oBAAoB,CAAC,KAAK,EAAE,CAAC;AAEpD,MAAM,SAAS,GAAG,IAAI,QAAQ,CAAC,kBAAkB,CAAC,kBAAkB,EAAE,CAAC;AAEvE,SAAS,CAAC,IAAI,GAAG;IACf,OAAO,EAAE;QACP,EAAC,EAAE,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,QAAQ,EAAE,IAAI,EAAE,cAAc,EAAE,CAAC,EAAE,OAAO,EAAE,IAAI,EAAE,QAAQ,EAAE,KAAK,EAAC;QAC5F,EAAC,EAAE,EAAE,OAAO,EAAE,KAAK,EAAE,OAAO,EAAE,QAAQ,EAAE,IAAI,EAAE,cAAc,EAAE,CAAC,EAAE,OAAO,EAAE,IAAI,EAAE,QAAQ,EAAE,IAAI,EAAC;KAChG;IACD,IAAI,EAAE;QACJ,6EAA6E;QAC7E,EAAC,KAAK,EAAE,CAAC,EAAC,QAAQ,EAAE,KAAK,EAAE,KAAK,EAAE,OAAO,EAAE,KAAK,EAAE,OAAO,EAAC,EAAE,EAAC,QAAQ,EAAE,OAAO,EAAE,KAAK,EAAE,UAAU,EAAC,CAAC,EAAC;QACpG,EAAC,KAAK,EAAE,CAAC,EAAC,QAAQ,EAAE,KAAK,EAAE,KAAK,EAAE,OAAO,EAAE,KAAK,EAAE,OAAO,EAAC,EAAE,EAAC,QAAQ,EAAE,OAAO,EAAE,KAAK,EAAE,UAAU,EAAC,CAAC,EAAC;QACpG,EAAC,KAAK,EAAE,CAAC,EAAC,QAAQ,EAAE,KAAK,EAAE,KAAK,EAAE,SAAS,EAAE,KAAK,EAAE,SAAS,EAAC,EAAE,EAAC,QAAQ,EAAE,OAAO,EAAE,KAAK,EAAE,UAAU,EAAC,CAAC,EAAC;KACzG;CACF,CAAC;AAEF,QAAQ,CAAC,cAAc,CAAC,WAAW,CAAC,EAAE,WAAW,CAAC,SAAS,CAAC,CAAC;AAE7D,SAAS,kBAAkB;IACzB,IAAI,GAAG,GAAG,EAAE,CAAC;IACb,KAAK,IAAI,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,EAAE,EAAE,CAAC,EAAE,EAAE,CAAC;QAC5B,MAAM,MAAM,GAAG,MAAM,CAAC,YAAY,CAAC,IAAI,CAAC,KAAK,CAAC,EAAE,GAAG,IAAI,CAAC,MAAM,EAAE,GAAG,EAAE,CAAC,CAAC,CAAC;QACxE,GAAG,IAAI,MAAM,CAAC;IAChB,CAAC;IACD,OAAO,GAAG,CAAC;AACb,CAAC;AACD,QAAQ,CAAC,cAAc,CAAC,KAAK,CAAC,EAAE,gBAAgB,CAAC,OAAO,EAAE,GAAG,EAAE;IAC7D,MAAM,MAAM,GAAG;QACb,KAAK,EAAE,CAAC,EAAC,QAAQ,EAAE,KAAK,EAAE,KAAK,EAAE,kBAAkB,EAAE,EAAC,EAAE,EAAC,QAAQ,EAAE,OAAO,EAAE,KAAK,EAAE,kBAAkB,EAAE,EAAC,CAAC;KAC1G,CAAC;IACF,SAAS,CAAC,IAAI,GAAG;QACf,GAAG,SAAS,CAAC,IAAI;QACjB,IAAI,EAAE,CAAC,GAAG,SAAS,CAAC,IAAI,CAAC,IAAI,EAAE,MAAM,CAAC;KACvC,CAAC;AACJ,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as EnvironmentHelpers from '../../../../testing/EnvironmentHelpers.js';\\nimport * as DataGrid from '../../data_grid/data_grid.js';\\nimport * as ComponentHelpers from '../../helpers/helpers.js';\\n\\nawait EnvironmentHelpers.initializeGlobalVars();\\nawait ComponentHelpers.ComponentServerSetup.setup();\\n\\nconst component = new DataGrid.DataGridController.DataGridController();\\n\\ncomponent.data = {\\n  columns: [\\n    {id: 'key', title: 'Key', sortable: true, widthWeighting: 1, visible: true, hideable: false},\\n    {id: 'value', title: 'Value', sortable: true, widthWeighting: 1, visible: true, hideable: true},\\n  ],\\n  rows: [\\n    // Each key is the ID of a column, and the value is the value for that column\\n    {cells: [{columnId: 'key', value: 'Bravo', title: 'Bravo'}, {columnId: 'value', value: 'Letter B'}]},\\n    {cells: [{columnId: 'key', value: 'Alpha', title: 'Alpha'}, {columnId: 'value', value: 'Letter A'}]},\\n    {cells: [{columnId: 'key', value: 'Charlie', title: 'Charlie'}, {columnId: 'value', value: 'Letter C'}]},\\n  ],\\n};\\n\\ndocument.getElementById('container')?.appendChild(component);\\n\\nfunction createRandomString(): string {\\n  let ret = '';\\n  for (let i = 0; i < 16; i++) {\\n    const letter = String.fromCharCode(Math.floor(65 + Math.random() * 26));\\n    ret += letter;\\n  }\\n  return ret;\\n}\\ndocument.getElementById('add')?.addEventListener('click', () => {\\n  const newRow = {\\n    cells: [{columnId: 'key', value: createRandomString()}, {columnId: 'value', value: createRandomString()}],\\n  };\\n  component.data = {\\n    ...component.data,\\n    rows: [...component.data.rows, newRow],\\n  };\\n});\\n\"]}");

/***/ })

}]);