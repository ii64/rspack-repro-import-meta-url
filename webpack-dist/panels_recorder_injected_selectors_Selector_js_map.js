(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_injected_selectors_Selector_js_map"],{

/***/ "./panels/recorder/injected/selectors/Selector.js.map":
/*!************************************************************!*\
  !*** ./panels/recorder/injected/selectors/Selector.js.map ***!
  \************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"Selector.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/panels/recorder/injected/selectors/Selector.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAa7B,MAAM,OAAO,YAAY;IACvB,KAAK,CAAS;IACd,SAAS,CAAU;IACnB,YAAY,KAAa,EAAE,SAAkB;QAC3C,IAAI,CAAC,KAAK,GAAG,KAAK,CAAC;QACnB,IAAI,CAAC,SAAS,GAAG,SAAS,IAAI,KAAK,CAAC;IACtC,CAAC;IAED,QAAQ;QACN,OAAO,IAAI,CAAC,KAAK,CAAC;IACpB,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\n/**\\n * Represents a selector that pierces shadow roots. Each selector before the\\n * last one is matches a shadow root for which we pierce through.\\n */\\nexport type DeepSelector = string[];\\n\\n/**\\n * Represents a selector.\\n */\\nexport type Selector = string|DeepSelector;\\n\\nexport class SelectorPart {\\n  value: string;\\n  optimized: boolean;\\n  constructor(value: string, optimized: boolean) {\\n    this.value = value;\\n    this.optimized = optimized || false;\\n  }\\n\\n  toString(): string {\\n    return this.value;\\n  }\\n}\\n\"]}");

/***/ })

}]);