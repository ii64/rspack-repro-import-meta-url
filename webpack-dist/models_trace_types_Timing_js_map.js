(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_types_Timing_js_map"],{

/***/ "./models/trace/types/Timing.js.map":
/*!******************************************!*\
  !*** ./models/trace/types/Timing.js.map ***!
  \******************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"Timing.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/models/trace/types/Timing.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAK7B,MAAM,UAAU,YAAY,CAAC,KAAa;IACxC,OAAO,KAAqB,CAAC;AAC/B,CAAC;AAGD,MAAM,UAAU,YAAY,CAAC,KAAa;IACxC,OAAO,KAAqB,CAAC;AAC/B,CAAC;AAED,MAAM,UAAU,OAAO,CAAC,KAAa;IACnC,OAAO,KAAgB,CAAC;AAC1B,CAAC\",\"sourcesContent\":[\"// Copyright 2022 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\n/* eslint-disable no-unused-private-class-members, @typescript-eslint/naming-convention */\\n\\nexport type MicroSeconds = number&{_tag: 'MicroSeconds'};\\nexport function MicroSeconds(value: number): MicroSeconds {\\n  return value as MicroSeconds;\\n}\\n\\nexport type MilliSeconds = number&{_tag: 'MilliSeconds'};\\nexport function MilliSeconds(value: number): MilliSeconds {\\n  return value as MilliSeconds;\\n}\\nexport type Seconds = number&{_tag: 'Seconds'};\\nexport function Seconds(value: number): Seconds {\\n  return value as Seconds;\\n}\\n\\nexport const enum TimeUnit {\\n  MICROSECONDS = 0,\\n  MILLISECONDS = 1,\\n  SECONDS = 2,\\n  MINUTES = 3,\\n}\\n\\n// Other types.\\n\\nexport interface TraceWindow<TimeFormat extends MicroSeconds|MilliSeconds> {\\n  min: TimeFormat;\\n  max: TimeFormat;\\n  range: TimeFormat;\\n}\\n\\nexport type TraceWindowMicroSeconds = TraceWindow<MicroSeconds>;\\nexport type TraceWindowMilliSeconds = TraceWindow<MilliSeconds>;\\n\"]}");

/***/ })

}]);