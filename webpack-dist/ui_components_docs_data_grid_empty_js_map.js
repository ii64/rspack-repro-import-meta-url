(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_data_grid_empty_js_map"],{

/***/ "./ui/components/docs/data_grid/empty.js.map":
/*!***************************************************!*\
  !*** ./ui/components/docs/data_grid/empty.js.map ***!
  \***************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"empty.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/data_grid/empty.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,QAAQ,MAAM,8BAA8B,CAAC;AACzD,OAAO,KAAK,gBAAgB,MAAM,0BAA0B,CAAC;AAE7D,MAAM,gBAAgB,CAAC,oBAAoB,CAAC,KAAK,EAAE,CAAC;AAEpD,MAAM,SAAS,GAAG,IAAI,QAAQ,CAAC,QAAQ,CAAC,QAAQ,EAAE,CAAC;AAEnD,SAAS,CAAC,IAAI,GAAG;IACf,OAAO,EAAE;QACP,EAAC,EAAE,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,cAAc,EAAE,CAAC,EAAE,OAAO,EAAE,IAAI,EAAE,QAAQ,EAAE,KAAK,EAAC;QAC5E,EAAC,EAAE,EAAE,OAAO,EAAE,KAAK,EAAE,OAAO,EAAE,cAAc,EAAE,CAAC,EAAE,OAAO,EAAE,IAAI,EAAE,QAAQ,EAAE,KAAK,EAAC;KACjF;IACD,IAAI,EAAE,EAAE;IACR,UAAU,EAAE,IAAI;CACjB,CAAC;AAEF,QAAQ,CAAC,cAAc,CAAC,WAAW,CAAC,EAAE,WAAW,CAAC,SAAS,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as DataGrid from '../../data_grid/data_grid.js';\\nimport * as ComponentHelpers from '../../helpers/helpers.js';\\n\\nawait ComponentHelpers.ComponentServerSetup.setup();\\n\\nconst component = new DataGrid.DataGrid.DataGrid();\\n\\ncomponent.data = {\\n  columns: [\\n    {id: 'key', title: 'Key', widthWeighting: 1, visible: true, hideable: false},\\n    {id: 'value', title: 'Value', widthWeighting: 1, visible: true, hideable: false},\\n  ],\\n  rows: [],\\n  activeSort: null,\\n};\\n\\ndocument.getElementById('container')?.appendChild(component);\\n\"]}");

/***/ })

}]);