(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_sdk_PageLoad_js_map"],{

/***/ "./core/sdk/PageLoad.js.map":
/*!**********************************!*\
  !*** ./core/sdk/PageLoad.js.map ***!
  \**********************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"PageLoad.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/sdk/PageLoad.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAM7B,MAAM,OAAO,QAAQ;IACnB,EAAE,CAAS;IACX,GAAG,CAAkC;IACrC,SAAS,CAAS;IAClB,QAAQ,CAAU;IAClB,eAAe,CAAU;IACzB,WAAW,CAAiB;IAE5B,YAAY,WAA2B;QACrC,IAAI,CAAC,EAAE,GAAG,EAAE,QAAQ,CAAC,cAAc,CAAC;QACpC,IAAI,CAAC,GAAG,GAAG,WAAW,CAAC,GAAG,EAAE,CAAC;QAC7B,IAAI,CAAC,SAAS,GAAG,WAAW,CAAC,SAAS,CAAC;QACvC,IAAI,CAAC,WAAW,GAAG,WAAW,CAAC;IACjC,CAAC;IAED,MAAM,CAAC,UAAU,CAAC,OAAuB;QACvC,OAAO,kBAAkB,CAAC,GAAG,CAAC,OAAO,CAAC,IAAI,IAAI,CAAC;IACjD,CAAC;IAED,WAAW,CAAC,OAAuB;QACjC,kBAAkB,CAAC,GAAG,CAAC,OAAO,EAAE,IAAI,CAAC,CAAC;IACxC,CAAC;IAEO,MAAM,CAAC,cAAc,GAAG,CAAC,CAAC;;AAGpC,MAAM,kBAAkB,GAAG,IAAI,OAAO,EAA4B,CAAC\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as Platform from '../platform/platform.js';\\n\\nimport {type NetworkRequest} from './NetworkRequest.js';\\n\\nexport class PageLoad {\\n  id: number;\\n  url: Platform.DevToolsPath.UrlString;\\n  startTime: number;\\n  loadTime!: number;\\n  contentLoadTime!: number;\\n  mainRequest: NetworkRequest;\\n\\n  constructor(mainRequest: NetworkRequest) {\\n    this.id = ++PageLoad.lastIdentifier;\\n    this.url = mainRequest.url();\\n    this.startTime = mainRequest.startTime;\\n    this.mainRequest = mainRequest;\\n  }\\n\\n  static forRequest(request: NetworkRequest): PageLoad|null {\\n    return pageLoadForRequest.get(request) || null;\\n  }\\n\\n  bindRequest(request: NetworkRequest): void {\\n    pageLoadForRequest.set(request, this);\\n  }\\n\\n  private static lastIdentifier = 0;\\n}\\n\\nconst pageLoadForRequest = new WeakMap<NetworkRequest, PageLoad>();\\n\"]}");

/***/ })

}]);