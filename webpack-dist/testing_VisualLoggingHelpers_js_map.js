(self["webpackChunk"] = self["webpackChunk"] || []).push([["testing_VisualLoggingHelpers_js_map"],{

/***/ "./testing/VisualLoggingHelpers.js.map":
/*!*********************************************!*\
  !*** ./testing/VisualLoggingHelpers.js.map ***!
  \*********************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"VisualLoggingHelpers.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../front_end/testing/VisualLoggingHelpers.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAC7B,OAAO,KAAK,aAAa,MAAM,gDAAgD,CAAC;AAEhF,MAAM,UAAU,OAAO,CAAC,QAAgD;IACtE,IAAI,OAAO,QAAQ,KAAK,QAAQ,EAAE,CAAC;QACjC,QAAQ,GAAG,QAAQ,CAAC,aAAa,CAAC,QAAQ,CAAE,CAAC;IAC/C,CAAC;IACD,OAAO,aAAa,CAAC,YAAY,CAAC,eAAe,CAAC,QAAQ,CAAE,CAAC,IAAI,CAAC;AACpE,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\nimport * as VisualLogging from '../ui/visual_logging/visual_logging-testing.js';\\n\\nexport function getVeId(loggable: VisualLogging.Loggable.Loggable|string): number {\\n  if (typeof loggable === 'string') {\\n    loggable = document.querySelector(loggable)!;\\n  }\\n  return VisualLogging.LoggingState.getLoggingState(loggable)!.veid;\\n}\\n\"]}");

/***/ })

}]);