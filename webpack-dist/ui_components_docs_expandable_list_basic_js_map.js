(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_expandable_list_basic_js_map"],{

/***/ "./ui/components/docs/expandable_list/basic.js.map":
/*!*********************************************************!*\
  !*** ./ui/components/docs/expandable_list/basic.js.map ***!
  \*********************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"basic.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/expandable_list/basic.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,eAAe,MAAM,2CAA2C,CAAC;AAC7E,OAAO,KAAK,OAAO,MAAM,+BAA+B,CAAC;AACzD,OAAO,KAAK,cAAc,MAAM,0CAA0C,CAAC;AAE3E,MAAM,eAAe,CAAC,oBAAoB,EAAE,CAAC;AAE7C,MAAM,SAAS,GAAG,IAAI,cAAc,CAAC,cAAc,CAAC,cAAc,EAAE,CAAC;AAErE,MAAM,IAAI,GAAG,EAAE,CAAC;AAChB,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,IAAI,CAAA;;CAErB,CAAC,CAAC;AAEH,KAAK,IAAI,SAAS,GAAG,CAAC,EAAE,SAAS,GAAG,EAAE,EAAE,SAAS,EAAE,EAAE,CAAC;IACpD,IAAI,CAAC,IAAI,CAAC,OAAO,CAAC,IAAI,CAAA;uBACD,SAAS;GAC7B,CAAC,CAAC;AACL,CAAC;AAED,SAAS,CAAC,IAAI,GAAG;IACf,IAAI;CACL,CAAC;AAEF,QAAQ,CAAC,cAAc,CAAC,WAAW,CAAC,EAAE,WAAW,CAAC,SAAS,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as FrontendHelpers from '../../../../testing/EnvironmentHelpers.js';\\nimport * as LitHtml from '../../../lit-html/lit-html.js';\\nimport * as ExpandableList from '../../expandable_list/expandable_list.js';\\n\\nawait FrontendHelpers.initializeGlobalVars();\\n\\nconst component = new ExpandableList.ExpandableList.ExpandableList();\\n\\nconst rows = [];\\nrows.push(LitHtml.html`\\n  <div>This is row 1. Click on the triangle icon to expand.</div>\\n`);\\n\\nfor (let rowNumber = 2; rowNumber < 11; rowNumber++) {\\n  rows.push(LitHtml.html`\\n    <div>This is row ${rowNumber}.</div>\\n  `);\\n}\\n\\ncomponent.data = {\\n  rows,\\n};\\n\\ndocument.getElementById('container')?.appendChild(component);\\n\"]}");

/***/ })

}]);