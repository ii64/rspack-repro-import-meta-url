(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_inline_editor_AnimationTimingModel_js_map"],{

/***/ "./ui/legacy/components/inline_editor/AnimationTimingModel.js.map":
/*!************************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/AnimationTimingModel.js.map ***!
  \************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"AnimationTimingModel.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/legacy/components/inline_editor/AnimationTimingModel.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,EAAE,MAAM,iBAAiB,CAAC;AAEtC,OAAO,EAAC,oBAAoB,EAAC,MAAM,2BAA2B,CAAC;AAE/D,uEAAuE;AACvE,6DAA6D;AAC7D,MAAM,OAAgB,oBAAoB;IAGxC,MAAM,CAAC,KAAK,CAAC,IAAY;QACvB,gDAAgD;QAChD,mDAAmD;QACnD,kEAAkE;QAClE,4CAA4C;QAC5C,MAAM,oBAAoB,GAAG,oBAAoB,CAAC,KAAK,CAAC,IAAI,CAAC,CAAC;QAC9D,IAAI,oBAAoB,EAAE,CAAC;YACzB,OAAO,oBAAoB,CAAC;QAC9B,CAAC;QAED,OAAO,EAAE,CAAC,QAAQ,CAAC,WAAW,CAAC,KAAK,CAAC,IAAI,CAAC,IAAI,IAAI,CAAC;IACrD,CAAC;CACF;AAED,MAAM,CAAC,MAAM,aAAa,GAAG,EAAE,CAAC,QAAQ,CAAC,aAAa,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as UI from '../../legacy.js';\\n\\nimport {CSSLinearEasingModel} from './CSSLinearEasingModel.js';\\n\\n// Provides a unified interface for both linear easing and cubic bezier\\n// models and handles the parsing for animation-timing texts.\\nexport abstract class AnimationTimingModel {\\n  abstract asCSSText(): string;\\n\\n  static parse(text: string): AnimationTimingModel|null {\\n    // Try to parse as a CSSLinearEasingModel first.\\n    // The reason is: `linear` keyword is valid in both\\n    // models, however we want to treat it as a `CSSLinearEasingModel`\\n    // for visualizing in animation timing tool.\\n    const cssLinearEasingModel = CSSLinearEasingModel.parse(text);\\n    if (cssLinearEasingModel) {\\n      return cssLinearEasingModel;\\n    }\\n\\n    return UI.Geometry.CubicBezier.parse(text) || null;\\n  }\\n}\\n\\nexport const LINEAR_BEZIER = UI.Geometry.LINEAR_BEZIER;\\n\"]}");

/***/ })

}]);