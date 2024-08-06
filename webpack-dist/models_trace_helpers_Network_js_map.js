(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_helpers_Network_js_map"],{

/***/ "./models/trace/helpers/Network.js.map":
/*!*********************************************!*\
  !*** ./models/trace/helpers/Network.js.map ***!
  \*********************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"Network.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/models/trace/helpers/Network.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAI7B,MAAM,UAAU,4CAA4C,CAAC,cAAuC;IAClG,OAAO,cAAc,CAAC,IAAI,CAAC,IAAI,CAAC,cAAc,KAAK,cAAc,CAAC;AACpE,CAAC\",\"sourcesContent\":[\"// Copyright 2024 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport {type SyntheticNetworkRequest} from '../types/TraceEvents.js';\\n\\nexport function isSyntheticNetworkRequestEventRenderBlocking(traceEventData: SyntheticNetworkRequest): boolean {\\n  return traceEventData.args.data.renderBlocking !== 'non_blocking';\\n}\\n\"]}");

/***/ })

}]);