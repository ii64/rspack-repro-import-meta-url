(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_injected_MonotonicArray_js_map"],{

/***/ "./panels/recorder/injected/MonotonicArray.js.map":
/*!********************************************************!*\
  !*** ./panels/recorder/injected/MonotonicArray.js.map ***!
  \********************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"MonotonicArray.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/recorder/injected/MonotonicArray.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,MAAM,OAAO,cAAc;IACzB,OAAO,GAAG,IAAI,OAAO,EAAa,CAAC;IACnC,OAAO,GAAG,CAAC,CAAC;IAEZ,WAAW,GAAG,CAAC,IAAO,EAAU,EAAE;QAChC,MAAM,KAAK,GAAG,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;QACrC,IAAI,KAAK,KAAK,SAAS,EAAE,CAAC;YACxB,OAAO,KAAK,CAAC;QACf,CAAC;QACD,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,IAAI,EAAE,IAAI,CAAC,OAAO,CAAC,CAAC;QACrC,IAAI,CAAC,OAAO,EAAE,CAAC;QACf,OAAO,IAAI,CAAC,OAAO,GAAG,CAAC,CAAC;IAC1B,CAAC,CAAC;CACH\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nexport class MonotonicArray<T extends object> {\\n  #values = new WeakMap<T, number>();\\n  #nextId = 1;\\n\\n  getOrInsert = (node: T): number => {\\n    const value = this.#values.get(node);\\n    if (value !== undefined) {\\n      return value;\\n    }\\n    this.#values.set(node, this.#nextId);\\n    this.#nextId++;\\n    return this.#nextId - 1;\\n  };\\n}\\n\"]}");

/***/ })

}]);