(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_network_forward_NetworkRequestId_js_map"],{

/***/ "./panels/network/forward/NetworkRequestId.js.map":
/*!********************************************************!*\
  !*** ./panels/network/forward/NetworkRequestId.js.map ***!
  \********************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"NetworkRequestId.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/network/forward/NetworkRequestId.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAI7B,MAAM,OAAO,gBAAgB;IAC3B,SAAS,CAAS;IAClB,OAAO,CAAoC;IAE3C,YAAY,SAAiB,EAAE,OAA0C;QACvE,IAAI,CAAC,SAAS,GAAG,SAAS,CAAC;QAC3B,IAAI,CAAC,OAAO,GAAG,OAAO,CAAC;IACzB,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as SDK from '../../../core/sdk/sdk.js';\\n\\nexport class NetworkRequestId {\\n  requestId: string;\\n  manager: SDK.NetworkManager.NetworkManager;\\n\\n  constructor(requestId: string, manager: SDK.NetworkManager.NetworkManager) {\\n    this.requestId = requestId;\\n    this.manager = manager;\\n  }\\n}\\n\"]}");

/***/ })

}]);