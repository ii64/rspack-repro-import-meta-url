(self["webpackChunk"] = self["webpackChunk"] || []).push([["testing_UserMetricsHelpers_js_map"],{

/***/ "./testing/UserMetricsHelpers.js.map":
/*!*******************************************!*\
  !*** ./testing/UserMetricsHelpers.js.map ***!
  \*******************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"UserMetricsHelpers.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../front_end/testing/UserMetricsHelpers.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,IAAI,MAAM,sBAAsB,CAAC;AAE7C;;GAEG;AACH,MAAM,UAAU,sBAAsB,CAAC,UAAkB,EAAE,UAAkB;IAC3E,OAAO,IAAI,CAAC,qBAAqB,CAAC,6BAA6B,CAAC,4BAA4B,CAAC,IAAI,CAC7F,KAAK,CAAC,EAAE,CAAC,KAAK,CAAC,UAAU,KAAK,UAAU,IAAI,KAAK,CAAC,UAAU,KAAK,UAAU,CAAC,CAAC;AACnF,CAAC;AAED,MAAM,UAAU,oBAAoB;IAClC,IAAI,CAAC,qBAAqB,CAAC,6BAA6B,CAAC,4BAA4B,GAAG,EAAE,CAAC;AAC7F,CAAC\",\"sourcesContent\":[\"// Copyright 2022 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Host from '../core/host/host.js';\\n\\n/**\\n * @returns True, iff a metric event with the provided name and code was recorded. False otherwise.\\n */\\nexport function recordedMetricsContain(actionName: string, actionCode: number): boolean {\\n  return Host.InspectorFrontendHost.InspectorFrontendHostInstance.recordedEnumeratedHistograms.some(\\n      event => event.actionName === actionName && event.actionCode === actionCode);\\n}\\n\\nexport function resetRecordedMetrics(): void {\\n  Host.InspectorFrontendHost.InspectorFrontendHostInstance.recordedEnumeratedHistograms = [];\\n}\\n\"]}");

/***/ })

}]);