(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_inline_editor_FontEditorUtils_test_js_map"],{

/***/ "./ui/legacy/components/inline_editor/FontEditorUtils.test.js.map":
/*!************************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/FontEditorUtils.test.js.map ***!
  \************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"FontEditorUtils.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/legacy/components/inline_editor/FontEditorUtils.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,YAAY,MAAM,oBAAoB,CAAC;AAEnD,QAAQ,CAAC,iBAAiB,EAAE,GAAG,EAAE;IAC/B,EAAE,CAAC,+CAA+C,EAAE,GAAG,EAAE;QACvD,IAAI,sBAAsB,GAAG,YAAY,CAAC,eAAe,CAAC,oBAAoB,CAAC,CAAC,CAAC,CAAC;QAClF,MAAM,CAAC,WAAW,CAAC,sBAAsB,EAAE,CAAC,EAAE,+DAA+D,CAAC,CAAC;QAE/G,sBAAsB,GAAG,YAAY,CAAC,eAAe,CAAC,oBAAoB,CAAC,EAAE,CAAC,CAAC;QAC/E,MAAM,CAAC,WAAW,CAAC,sBAAsB,EAAE,CAAC,EAAE,gEAAgE,CAAC,CAAC;QAEhH,sBAAsB,GAAG,YAAY,CAAC,eAAe,CAAC,oBAAoB,CAAC,GAAG,CAAC,CAAC;QAChF,MAAM,CAAC,WAAW,CAAC,sBAAsB,EAAE,CAAC,EAAE,iEAAiE,CAAC,CAAC;QAEjH,sBAAsB,GAAG,YAAY,CAAC,eAAe,CAAC,oBAAoB,CAAC,IAAI,CAAC,CAAC;QACjF,MAAM,CAAC,WAAW,CAAC,sBAAsB,EAAE,CAAC,EAAE,kEAAkE,CAAC,CAAC;QAElH,sBAAsB,GAAG,YAAY,CAAC,eAAe,CAAC,oBAAoB,CAAC,GAAG,CAAC,CAAC;QAChF,MAAM,CAAC,WAAW,CAAC,sBAAsB,EAAE,CAAC,EAAE,iEAAiE,CAAC,CAAC;QAEjH,sBAAsB,GAAG,YAAY,CAAC,eAAe,CAAC,oBAAoB,CAAC,CAAC,GAAG,CAAC,CAAC;QACjF,MAAM,CAAC,WAAW,CAAC,sBAAsB,EAAE,CAAC,EAAE,kEAAkE,CAAC,CAAC;IACpH,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as InlineEditor from './inline_editor.js';\\n\\ndescribe('FontEditorUtils', () => {\\n  it('getRoundingPrecision rounds units as expected', () => {\\n    let roundingPrecisionValue = InlineEditor.FontEditorUtils.getRoundingPrecision(1);\\n    assert.strictEqual(roundingPrecisionValue, 0, 'getRoundingPrecision returned unexpected results for value: 1');\\n\\n    roundingPrecisionValue = InlineEditor.FontEditorUtils.getRoundingPrecision(.1);\\n    assert.strictEqual(roundingPrecisionValue, 1, 'getRoundingPrecision returned unexpected results for value: .1');\\n\\n    roundingPrecisionValue = InlineEditor.FontEditorUtils.getRoundingPrecision(.01);\\n    assert.strictEqual(roundingPrecisionValue, 2, 'getRoundingPrecision returned unexpected results for value: .01');\\n\\n    roundingPrecisionValue = InlineEditor.FontEditorUtils.getRoundingPrecision(.001);\\n    assert.strictEqual(roundingPrecisionValue, 3, 'getRoundingPrecision returned unexpected results for value: .001');\\n\\n    roundingPrecisionValue = InlineEditor.FontEditorUtils.getRoundingPrecision(500);\\n    assert.strictEqual(roundingPrecisionValue, 0, 'getRoundingPrecision returned unexpected results for value: 500');\\n\\n    roundingPrecisionValue = InlineEditor.FontEditorUtils.getRoundingPrecision(-500);\\n    assert.strictEqual(roundingPrecisionValue, 0, 'getRoundingPrecision returned unexpected results for value: -500');\\n  });\\n});\\n\"]}");

/***/ })

}]);