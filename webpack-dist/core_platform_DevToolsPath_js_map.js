(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_platform_DevToolsPath_js_map"],{

/***/ "./core/platform/DevToolsPath.js.map":
/*!*******************************************!*\
  !*** ./core/platform/DevToolsPath.js.map ***!
  \*******************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"DevToolsPath.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/platform/DevToolsPath.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAU7B,MAAM,CAAC,MAAM,cAAc,GAAG,EAAe,CAAC;AAS9C,MAAM,CAAC,MAAM,kBAAkB,GAAG,EAAmB,CAAC;AAQtD,MAAM,CAAC,MAAM,sBAAsB,GAAG,EAAuB,CAAC\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport {type Brand} from './Brand.js';\\n\\n/**\\n * File paths in DevTools that are represented as URLs\\n * @example\\n * “file:///Hello%20World/file/js”\\n */\\nexport type UrlString = Brand<string, 'UrlString'>;\\nexport const EmptyUrlString = '' as UrlString;\\n\\n/**\\n * File paths in DevTools that are represented as unencoded absolute\\n * or relative paths\\n * @example\\n * “/Hello World/file.js”\\n */\\nexport type RawPathString = Brand<string, 'RawPathString'>;\\nexport const EmptyRawPathString = '' as RawPathString;\\n\\n/**\\n * File paths in DevTools that are represented as encoded paths\\n * @example\\n * “/Hello%20World/file.js”\\n */\\nexport type EncodedPathString = Brand<string, 'EncodedPathString'>;\\nexport const EmptyEncodedPathString = '' as EncodedPathString;\\n\"]}");

/***/ })

}]);