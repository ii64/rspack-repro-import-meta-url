(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_timeline_BenchmarkEvents_js_map"],{

/***/ "./panels/timeline/BenchmarkEvents.js.map":
/*!************************************************!*\
  !*** ./panels/timeline/BenchmarkEvents.js.map ***!
  \************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"BenchmarkEvents.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/timeline/BenchmarkEvents.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAI7B,MAAM,OAAO,cAAe,SAAQ,KAAK;IAGpB;IAFnB,MAAM,CAAU,SAAS,GAAG,WAAW,CAAC;IAExC,YAAmB,QAA+C;QAChE,KAAK,CAAC,cAAc,CAAC,SAAS,EAAE,EAAC,OAAO,EAAE,IAAI,EAAE,QAAQ,EAAE,IAAI,EAAC,CAAC,CAAC;QADhD,aAAQ,GAAR,QAAQ,CAAuC;IAElE,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as TraceEngine from '../../models/trace/trace.js';\\n\\nexport class TraceLoadEvent extends Event {\\n  static readonly eventName = 'traceload';\\n\\n  constructor(public duration: TraceEngine.Types.Timing.MilliSeconds) {\\n    super(TraceLoadEvent.eventName, {bubbles: true, composed: true});\\n  }\\n}\\n\\ndeclare global {\\n  interface HTMLElementEventMap {\\n    [TraceLoadEvent.eventName]: TraceLoadEvent;\\n  }\\n}\\n\"]}");

/***/ })

}]);