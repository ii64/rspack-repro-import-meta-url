(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_sdk_OverlayColorGenerator_test_js_map"],{

/***/ "./core/sdk/OverlayColorGenerator.test.js.map":
/*!****************************************************!*\
  !*** ./core/sdk/OverlayColorGenerator.test.js.map ***!
  \****************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"OverlayColorGenerator.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/sdk/OverlayColorGenerator.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAI7B,OAAO,KAAK,GAAG,MAAM,UAAU,CAAC;AAEhC,QAAQ,CAAC,uBAAuB,EAAE,GAAG,EAAE;IACrC,EAAE,CAAC,8CAA8C,EAAE,GAAG,EAAE;QACtD,MAAM,SAAS,GAAG,IAAI,GAAG,CAAC,qBAAqB,CAAC,qBAAqB,EAAE,CAAC;QACxE,IAAI,SAAuC,CAAC;QAC5C,KAAK,IAAI,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,GAAG,EAAE,CAAC,EAAE,EAAE,CAAC;YAC7B,MAAM,KAAK,GAAG,SAAS,CAAC,IAAI,EAAE,CAAC;YAC/B,IAAI,SAAS,EAAE,CAAC;gBACd,MAAM,CAAC,YAAY,CAAC,KAAK,CAAC,QAAQ,EAAE,EAAE,SAAS,CAAC,QAAQ,EAAE,CAAC,CAAC;YAC9D,CAAC;YACD,SAAS,GAAG,KAAK,CAAC;QACpB,CAAC;IACH,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as Common from '../common/common.js';\\n\\nimport * as SDK from './sdk.js';\\n\\ndescribe('OverlayColorGenerator', () => {\\n  it('generates colors for at least 100 iterations', () => {\\n    const generator = new SDK.OverlayColorGenerator.OverlayColorGenerator();\\n    let prevColor: Common.Color.Color|undefined;\\n    for (let i = 0; i < 100; i++) {\\n      const color = generator.next();\\n      if (prevColor) {\\n        assert.notDeepEqual(color.asString(), prevColor.asString());\\n      }\\n      prevColor = color;\\n    }\\n  });\\n});\\n\"]}");

/***/ })

}]);