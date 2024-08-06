(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_helpers_get-root-node_js_map"],{

/***/ "./ui/components/helpers/get-root-node.js.map":
/*!****************************************************!*\
  !*** ./ui/components/helpers/get-root-node.js.map ***!
  \****************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"get-root-node.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/ui/components/helpers/get-root-node.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B;;GAEG;AACH,MAAM,UAAU,WAAW,CAAC,IAAU;IACpC,MAAM,aAAa,GAAG,IAAI,CAAC,WAAW,EAAE,CAAC;IACzC,IAAI,CAAC,CAAC,aAAa,YAAY,QAAQ,IAAI,aAAa,YAAY,UAAU,CAAC,EAAE,CAAC;QAChF,MAAM,IAAI,KAAK,CAAC,oEAAoE,aAAa,CAAC,QAAQ,GAAG,CAAC,CAAC;IACjH,CAAC;IACD,OAAO,aAAa,CAAC;AACvB,CAAC\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\n/**\\n * Function to return the root node of a given node.\\n */\\nexport function getRootNode(node: Node): ShadowRoot|Document {\\n  const potentialRoot = node.getRootNode();\\n  if (!(potentialRoot instanceof Document || potentialRoot instanceof ShadowRoot)) {\\n    throw new Error(`Expected root of widget to be a document or shadowRoot, but was \\\"${potentialRoot.nodeName}\\\"`);\\n  }\\n  return potentialRoot;\\n}\\n\"]}");

/***/ })

}]);