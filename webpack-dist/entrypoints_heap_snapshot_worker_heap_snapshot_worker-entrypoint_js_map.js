(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_heap_snapshot_worker_heap_snapshot_worker-entrypoint_js_map"],{

/***/ "./entrypoints/heap_snapshot_worker/heap_snapshot_worker-entrypoint.js.map":
/*!*********************************************************************************!*\
  !*** ./entrypoints/heap_snapshot_worker/heap_snapshot_worker-entrypoint.js.map ***!
  \*********************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"heap_snapshot_worker-entrypoint.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/entrypoints/heap_snapshot_worker/heap_snapshot_worker-entrypoint.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,kBAAkB,MAAM,2BAA2B,CAAC;AAEhE,MAAM,UAAU,GACZ,IAAI,kBAAkB,CAAC,4BAA4B,CAAC,4BAA4B,CAAC,IAAI,CAAC,WAAW,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC,CAAC;AAClH,IAAI,CAAC,gBAAgB,CAAC,SAAS,EAAE,UAAU,CAAC,eAAe,CAAC,IAAI,CAAC,UAAU,CAAC,EAAE,KAAK,CAAC,CAAC;AACrF,IAAI,CAAC,WAAW,CAAC,aAAa,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as HeapSnapshotWorker from './heap_snapshot_worker.js';\\n\\nconst dispatcher =\\n    new HeapSnapshotWorker.HeapSnapshotWorkerDispatcher.HeapSnapshotWorkerDispatcher(self.postMessage.bind(self));\\nself.addEventListener('message', dispatcher.dispatchMessage.bind(dispatcher), false);\\nself.postMessage('workerReady');\\n\"]}");

/***/ })

}]);