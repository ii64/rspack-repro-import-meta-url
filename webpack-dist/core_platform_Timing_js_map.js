(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_platform_Timing_js_map"],{

/***/ "./core/platform/Timing.js.map":
/*!*************************************!*\
  !*** ./core/platform/Timing.js.map ***!
  \*************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"Timing.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/platform/Timing.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAQ7B,MAAM,UAAU,qBAAqB,CAAC,CAAU;IAC9C,OAAO,CAAC,CAAC,GAAG,IAAI,CAAiB,CAAC;AACpC,CAAC;AAED,MAAM,UAAU,qBAAqB,CAAC,CAAe;IACnD,OAAO,CAAC,CAAC,GAAG,IAAI,CAAY,CAAC;AAC/B,CAAC;AAED,MAAM,UAAU,0BAA0B,CAAC,CAAe;IACxD,OAAO,CAAC,CAAC,GAAG,IAAI,CAAiB,CAAC;AACpC,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport {type Brand} from './Brand.js';\\n\\nexport type Seconds = Brand<number, 'Seconds'>;\\nexport type MilliSeconds = Brand<number, 'MilliSeconds'>;\\nexport type MicroSeconds = Brand<number, 'MicroSeconds'>;\\n\\nexport function secondsToMilliSeconds(x: Seconds): MilliSeconds {\\n  return (x * 1000) as MilliSeconds;\\n}\\n\\nexport function milliSecondsToSeconds(x: MilliSeconds): Seconds {\\n  return (x / 1000) as Seconds;\\n}\\n\\nexport function microSecondsToMilliSeconds(x: MicroSeconds): MilliSeconds {\\n  return (x / 1000) as MilliSeconds;\\n}\\n\"]}");

/***/ })

}]);