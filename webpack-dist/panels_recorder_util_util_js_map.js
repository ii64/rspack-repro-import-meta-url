(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_util_util_js_map"],{

/***/ "./panels/recorder/util/util.js.map":
/*!******************************************!*\
  !*** ./panels/recorder/util/util.js.map ***!
  \******************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"util.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/recorder/util/util.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,YAAY,MAAM,mBAAmB,CAAC;AAElD,yEAAyE;AACzE,MAAM,YAAY,GAAG,KAAK,CAAC;AAE3B,MAAM,4BAA4B,GAAG,mBAAmB,CAAC;AAEzD,MAAM,cAAc;IAClB,MAAM,CAAC,eAAe,CAAmB;IACzC,MAAM,CAAC,KAAK,CAAC,GAAG;QACd,IAAI,CAAC,IAAI,CAAC,eAAe,EAAE,CAAC;YAC1B,IAAI,CAAC,eAAe,GAAG,CAAC,MAAM,KAAK,CACP,IAAI,GAAG,CAAC,mCAAmC,EAAE,MAAM,CAAC,IAAI,CAAC,GAAG,CAAC,CAC5D,CAAC;iBACF,IAAI,EAAE,CAAC;QACrC,CAAC;QACD,OAAO,IAAI,CAAC,eAAe,CAAC;IAC9B,CAAC;CACF;AAED,OAAO,EAAC,4BAA4B,EAAE,cAAc,EAAE,YAAY,EAAE,YAAY,EAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as SharedObject from './SharedObject.js';\\n\\n// Setting this to `true` enables extra logging for the injected scripts.\\nconst isDebugBuild = false;\\n\\nconst DEVTOOLS_RECORDER_WORLD_NAME = 'devtools_recorder';\\n\\nclass InjectedScript {\\n  static #injectedScript?: Promise<string>;\\n  static async get(): Promise<string> {\\n    if (!this.#injectedScript) {\\n      this.#injectedScript = (await fetch(\\n                                  new URL('../injected/injected.generated.js', import.meta.url),\\n                                  ))\\n                                 .text();\\n    }\\n    return this.#injectedScript;\\n  }\\n}\\n\\nexport {DEVTOOLS_RECORDER_WORLD_NAME, InjectedScript, SharedObject, isDebugBuild};\\n\"]}");

/***/ })

}]);