(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_platform_DateUtilities_js_map"],{

/***/ "./core/platform/DateUtilities.js.map":
/*!********************************************!*\
  !*** ./core/platform/DateUtilities.js.map ***!
  \********************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"DateUtilities.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/platform/DateUtilities.ts\"],\"names\":[],\"mappings\":\"AAAA,gEAAgE;AAChE,yEAAyE;AACzE,6BAA6B;AAE7B,MAAM,CAAC,MAAM,OAAO,GAAG,CAAC,IAAU,EAAW,EAAE;IAC7C,OAAO,CAAC,KAAK,CAAC,IAAI,CAAC,OAAO,EAAE,CAAC,CAAC;AAChC,CAAC,CAAC;AAEF,MAAM,CAAC,MAAM,gBAAgB,GAAG,CAAC,IAAU,EAAU,EAAE;IACrD,SAAS,QAAQ,CAAC,CAAS;QACzB,OAAO,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC;IAChC,CAAC;IACD,OAAO,IAAI,CAAC,WAAW,EAAE,GAAG,QAAQ,CAAC,IAAI,CAAC,QAAQ,EAAE,GAAG,CAAC,CAAC,GAAG,QAAQ,CAAC,IAAI,CAAC,OAAO,EAAE,CAAC,GAAG,GAAG;QACtF,QAAQ,CAAC,IAAI,CAAC,QAAQ,EAAE,CAAC,GAAG,QAAQ,CAAC,IAAI,CAAC,UAAU,EAAE,CAAC,GAAG,QAAQ,CAAC,IAAI,CAAC,UAAU,EAAE,CAAC,CAAC;AAC5F,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright (c) 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nexport const isValid = (date: Date): boolean => {\\n  return !isNaN(date.getTime());\\n};\\n\\nexport const toISO8601Compact = (date: Date): string => {\\n  function leadZero(x: number): string {\\n    return (x > 9 ? '' : '0') + x;\\n  }\\n  return date.getFullYear() + leadZero(date.getMonth() + 1) + leadZero(date.getDate()) + 'T' +\\n      leadZero(date.getHours()) + leadZero(date.getMinutes()) + leadZero(date.getSeconds());\\n};\\n\"]}");

/***/ })

}]);