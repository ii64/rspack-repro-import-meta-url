(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_inline_editor_AnimationTimingModel_test_js_map"],{

/***/ "./ui/legacy/components/inline_editor/AnimationTimingModel.test.js.map":
/*!*****************************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/AnimationTimingModel.test.js.map ***!
  \*****************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"AnimationTimingModel.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/legacy/components/inline_editor/AnimationTimingModel.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,YAAY,MAAM,oBAAoB,CAAC;AAEnD,QAAQ,CAAC,sBAAsB,EAAE,GAAG,EAAE;IACpC,EAAE,CAAC,iDAAiD,EAAE,GAAG,EAAE;QACzD,MAAM,KAAK,GAAG,YAAY,CAAC,oBAAoB,CAAC,oBAAoB,CAAC,KAAK,CAAC,QAAQ,CAAC,CAAC;QACrF,MAAM,CAAC,UAAU,CAAC,KAAK,EAAE,YAAY,CAAC,oBAAoB,CAAC,oBAAoB,CAAC,CAAC;QACjF,MAAM,CAAC,WAAW,CAAC,KAAM,CAAC,SAAS,EAAE,EAAE,QAAQ,CAAC,CAAC;IACnD,CAAC,CAAC,CAAC;IAEH,EAAE,CAAC,yCAAyC,EAAE,GAAG,EAAE;QACjD,MAAM,KAAK,GAAG,YAAY,CAAC,oBAAoB,CAAC,oBAAoB,CAAC,KAAK,CAAC,4BAA4B,CAAC,CAAC;QACzG,MAAM,CAAC,WAAW,CAAC,KAAM,CAAC,SAAS,EAAE,EAAE,4BAA4B,CAAC,CAAC;IACvE,CAAC,CAAC,CAAC;IAEH,EAAE,CAAC,6CAA6C,EAAE,GAAG,EAAE;QACrD,MAAM,KAAK,GAAG,YAAY,CAAC,oBAAoB,CAAC,oBAAoB,CAAC,KAAK,CAAC,cAAc,CAAC,CAAC;QAC3F,MAAM,CAAC,WAAW,CAAC,KAAM,CAAC,SAAS,EAAE,EAAE,QAAQ,CAAC,CAAC;IACnD,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as InlineEditor from './inline_editor.js';\\n\\ndescribe('AnimationTimingModel', () => {\\n  it('should parse `linear` as linear easing function', () => {\\n    const model = InlineEditor.AnimationTimingModel.AnimationTimingModel.parse('linear');\\n    assert.instanceOf(model, InlineEditor.CSSLinearEasingModel.CSSLinearEasingModel);\\n    assert.strictEqual(model!.asCSSText(), 'linear');\\n  });\\n\\n  it('should parse a valid cubic bezier curve', () => {\\n    const model = InlineEditor.AnimationTimingModel.AnimationTimingModel.parse('cubic-bezier(0, 0.5, 1, 1)');\\n    assert.strictEqual(model!.asCSSText(), 'cubic-bezier(0, 0.5, 1, 1)');\\n  });\\n\\n  it('should parse a valid linear easing function', () => {\\n    const model = InlineEditor.AnimationTimingModel.AnimationTimingModel.parse('linear(0, 1)');\\n    assert.strictEqual(model!.asCSSText(), 'linear');\\n  });\\n});\\n\"]}");

/***/ })

}]);