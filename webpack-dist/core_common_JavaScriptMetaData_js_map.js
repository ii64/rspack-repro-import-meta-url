(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_common_JavaScriptMetaData_js_map"],{

/***/ "./core/common/JavaScriptMetaData.js.map":
/*!***********************************************!*\
  !*** ./core/common/JavaScriptMetaData.js.map ***!
  \***********************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"JavaScriptMetaData.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/common/JavaScriptMetaData.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B\",\"sourcesContent\":[\"// Copyright 2019 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nexport interface DOMPinnedWebIDLProp {\\n  global?: boolean;\\n  specs?: number;\\n  rules?: Array<DOMPinnedWebIDLRule>;\\n}\\n\\nexport interface DOMPinnedWebIDLType {\\n  inheritance?: string;\\n  includes?: Array<string>;\\n  props?: {\\n    [PropName: string]: DOMPinnedWebIDLProp,\\n  };\\n  rules?: Array<DOMPinnedWebIDLRule>;\\n}\\n\\nexport interface DOMPinnedWebIDLRule {\\n  when: string;\\n  is: string;\\n}\\n\\nexport interface JavaScriptMetaData {\\n  signaturesForNativeFunction(name: string): string[][]|null;\\n\\n  signaturesForInstanceMethod(name: string, receiverClassName: string): string[][]|null;\\n\\n  signaturesForStaticMethod(name: string, receiverConstructorName: string): string[][]|null;\\n}\\n\"]}");

/***/ })

}]);