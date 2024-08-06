(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_sdk_AccessibilityModel_test_js_map"],{

/***/ "./core/sdk/AccessibilityModel.test.js.map":
/*!*************************************************!*\
  !*** ./core/sdk/AccessibilityModel.test.js.map ***!
  \*************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"AccessibilityModel.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/sdk/AccessibilityModel.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,EAAC,YAAY,EAAC,MAAM,qCAAqC,CAAC;AACjE,OAAO,EAAC,0BAA0B,EAAC,MAAM,iCAAiC,CAAC;AAE3E,OAAO,KAAK,GAAG,MAAM,UAAU,CAAC;AAEhC,0BAA0B,CAAC,oBAAoB,EAAE,GAAG,EAAE;IACpD,EAAE,CAAC,qBAAqB,EAAE,GAAG,EAAE;QAC7B,MAAM,CAAC,YAAY,CAAC,GAAG,EAAE;YACvB,MAAM,MAAM,GAAG,YAAY,EAAE,CAAC;YAC9B,IAAI,GAAG,CAAC,kBAAkB,CAAC,kBAAkB,CAAC,MAAM,CAAC,CAAC;QACxD,CAAC,CAAC,CAAC;IACL,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport {createTarget} from '../../testing/EnvironmentHelpers.js';\\nimport {describeWithMockConnection} from '../../testing/MockConnection.js';\\n\\nimport * as SDK from './sdk.js';\\n\\ndescribeWithMockConnection('AccessibilityModel', () => {\\n  it('can be instantiated', () => {\\n    assert.doesNotThrow(() => {\\n      const target = createTarget();\\n      new SDK.AccessibilityModel.AccessibilityModel(target);\\n    });\\n  });\\n});\\n\"]}");

/***/ })

}]);