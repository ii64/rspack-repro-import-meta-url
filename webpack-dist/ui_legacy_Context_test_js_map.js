(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_Context_test_js_map"],{

/***/ "./ui/legacy/Context.test.js.map":
/*!***************************************!*\
  !*** ./ui/legacy/Context.test.js.map ***!
  \***************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"Context.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/ui/legacy/Context.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,EAAE,MAAM,aAAa,CAAC;AAElC,QAAQ,CAAC,SAAS,EAAE,GAAG,EAAE;IACvB,EAAE,CAAC,oCAAoC,EAAE,GAAG,EAAE;QAC5C,MAAM,OAAO,GAAG,EAAE,CAAC,OAAO,CAAC,OAAO,CAAC,QAAQ,CAAC,EAAC,QAAQ,EAAE,IAAI,EAAC,CAAC,CAAC;QAC9D,MAAM,CAAC,WAAW,CAAC,OAAO,CAAC,OAAO,EAAE,CAAC,IAAI,EAAE,CAAC,EAAE,wDAAwD,CAAC,CAAC;IAC1G,CAAC,CAAC,CAAC;IAEH,iEAAiE;AACnE,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2019 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as UI from './legacy.js';\\n\\ndescribe('Context', () => {\\n  it('can be instantiated without issues', () => {\\n    const context = UI.Context.Context.instance({forceNew: true});\\n    assert.strictEqual(context.flavors().size, 0, 'context should not have any flavors upon instantiation');\\n  });\\n\\n  // TODO continue writing tests here or use another describe block\\n});\\n\"]}");

/***/ })

}]);