(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_wasmparser_worker_wasmparser_worker-entrypoint_js_map"],{

/***/ "./entrypoints/wasmparser_worker/wasmparser_worker-entrypoint.js.map":
/*!***************************************************************************!*\
  !*** ./entrypoints/wasmparser_worker/wasmparser_worker-entrypoint.js.map ***!
  \***************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"wasmparser_worker-entrypoint.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/entrypoints/wasmparser_worker/wasmparser_worker-entrypoint.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,gBAAgB,MAAM,wBAAwB,CAAC;AAE3D,IAAI,CAAC,SAAS,GAAG,CAAC,KAA0D,EAAE,EAAE;IAC9E,MAAM,MAAM,GAAG,KAAK,CAAC,IAAI,CAAC,MAAM,CAAC;IAEjC,IAAI,MAAM,KAAK,aAAa,EAAE,CAAC;QAC7B,OAAO;IACT,CAAC;IAED,IAAI,CAAC,WAAW,CAAC,gBAAgB,CAAC,gBAAgB,CAAC,aAAa,CAAC,KAAK,CAAC,IAAI,CAAC,MAAM,EAAE,CAAC,OAAgB,EAAE,EAAE;QACvG,IAAI,CAAC,WAAW,CAAC,OAAO,CAAC,CAAC;IAC5B,CAAC,CAAC,CAAC,CAAC;AACN,CAAC,CAAC;AAEF,IAAI,CAAC,WAAW,CAAC,aAAa,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as WasmParserWorker from './wasmparser_worker.js';\\n\\nself.onmessage = (event: {data: {method: string, params: {content: string}}}) => {\\n  const method = event.data.method;\\n\\n  if (method !== 'disassemble') {\\n    return;\\n  }\\n\\n  self.postMessage(WasmParserWorker.WasmParserWorker.dissambleWASM(event.data.params, (message: unknown) => {\\n    self.postMessage(message);\\n  }));\\n};\\n\\nself.postMessage('workerReady');\\n\"]}");

/***/ })

}]);