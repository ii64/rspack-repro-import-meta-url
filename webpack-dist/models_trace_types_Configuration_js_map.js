(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_types_Configuration_js_map"],{

/***/ "./models/trace/types/Configuration.js.map":
/*!*************************************************!*\
  !*** ./models/trace/types/Configuration.js.map ***!
  \*************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"Configuration.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/models/trace/types/Configuration.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAiB7B,MAAM,CAAC,MAAM,QAAQ,GAAG,GAAkB,EAAE,CAAC,CAAC;IAC5C,uBAAuB,EAAE,KAAK;IAC9B,aAAa,EAAE,KAAK;IACpB,SAAS,EAAE,KAAK;CACjB,CAAC,CAAC;AAEH;;;;GAIG;AACH,MAAM,UAAU,gBAAgB,CAAC,MAAqB;IACpD,OAAO,IAAI,CAAC,SAAS,CAAC,MAAM,CAAC,CAAC;AAChC,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nexport type Configuration = {\\n  /**\\n   * Include V8 RCS functions in the JS stacks\\n   */\\n  includeRuntimeCallStats: boolean,\\n  /**\\n   * Show all events: disable the default filtering which hides and excludes some events.\\n   */\\n  showAllEvents: boolean,\\n  /**\\n   * Extra detail for RPP developers (eg Trace Event json in Summary, and individual JS Sample events)\\n   */\\n  debugMode: boolean,\\n};\\n\\nexport const defaults = (): Configuration => ({\\n  includeRuntimeCallStats: false,\\n  showAllEvents: false,\\n  debugMode: false,\\n});\\n\\n/**\\n * Generates a key that can be used to represent this config in a cache. This is\\n * used mainly in tests, where we want to avoid re-parsing a file if we have\\n * already processed it with the same configuration.\\n */\\nexport function configToCacheKey(config: Configuration): string {\\n  return JSON.stringify(config);\\n}\\n\"]}");

/***/ })

}]);