(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_platform_PromiseUtilities_js_map"],{

/***/ "./core/platform/PromiseUtilities.js.map":
/*!***********************************************!*\
  !*** ./core/platform/PromiseUtilities.js.map ***!
  \***********************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"PromiseUtilities.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/platform/PromiseUtilities.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B;;;;GAIG;AACH,MAAM,UAAU,oBAAoB;IAKlC,IAAI,OAA2C,CAAC;IAChD,IAAI,MAAgC,CAAC;IACrC,MAAM,OAAO,GAAG,IAAI,OAAO,CAAI,CAAC,GAAG,EAAE,GAAG,EAAE,EAAE;QAC1C,OAAO,GAAG,GAAG,CAAC;QACd,MAAM,GAAG,GAAG,CAAC;IACf,CAAC,CAAC,CAAC;IACH,OAAO,EAAC,OAAO,EAAE,OAAO,EAAE,MAAM,EAAC,CAAC;AACpC,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\n/**\\n * Returns a new pending promise together with it's resolve and reject functions.\\n *\\n * Polyfill for https://github.com/tc39/proposal-promise-with-resolvers.\\n */\\nexport function promiseWithResolvers<T = unknown>(): {\\n  promise: Promise<T>,\\n  resolve: (value: T|PromiseLike<T>) => void,\\n  reject: (error?: Error) => void,\\n} {\\n  let resolve!: (value: T|PromiseLike<T>) => void;\\n  let reject!: (error?: Error) => void;\\n  const promise = new Promise<T>((res, rej) => {\\n    resolve = res;\\n    reject = rej;\\n  });\\n  return {promise, resolve, reject};\\n}\\n\"]}");

/***/ })

}]);