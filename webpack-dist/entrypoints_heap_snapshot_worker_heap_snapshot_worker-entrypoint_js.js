"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_heap_snapshot_worker_heap_snapshot_worker-entrypoint_js"],{

/***/ "./entrypoints/heap_snapshot_worker/heap_snapshot_worker-entrypoint.js?c124":
/*!*****************************************************************************!*\
  !*** ./entrypoints/heap_snapshot_worker/heap_snapshot_worker-entrypoint.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _heap_snapshot_worker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heap_snapshot_worker.js */ "./entrypoints/heap_snapshot_worker/heap_snapshot_worker.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const dispatcher = new _heap_snapshot_worker_js__WEBPACK_IMPORTED_MODULE_0__.HeapSnapshotWorkerDispatcher.HeapSnapshotWorkerDispatcher(self.postMessage.bind(self));
self.addEventListener('message', dispatcher.dispatchMessage.bind(dispatcher), false);
self.postMessage('workerReady');
//# sourceMappingURL=heap_snapshot_worker-entrypoint.js.map

/***/ }),

/***/ "./entrypoints/heap_snapshot_worker/heap_snapshot_worker.js":
/*!******************************************************************!*\
  !*** ./entrypoints/heap_snapshot_worker/heap_snapshot_worker.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllocationProfile: () => (/* reexport module object */ _AllocationProfile_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   HeapSnapshot: () => (/* reexport module object */ _HeapSnapshot_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   HeapSnapshotLoader: () => (/* reexport module object */ _HeapSnapshotLoader_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   HeapSnapshotWorkerDispatcher: () => (/* reexport module object */ _HeapSnapshotWorkerDispatcher_js__WEBPACK_IMPORTED_MODULE_3__)
/* harmony export */ });
/* harmony import */ var _AllocationProfile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllocationProfile.js */ "./entrypoints/heap_snapshot_worker/AllocationProfile.js");
/* harmony import */ var _HeapSnapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeapSnapshot.js */ "./entrypoints/heap_snapshot_worker/HeapSnapshot.js");
/* harmony import */ var _HeapSnapshotLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeapSnapshotLoader.js */ "./entrypoints/heap_snapshot_worker/HeapSnapshotLoader.js");
/* harmony import */ var _HeapSnapshotWorkerDispatcher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeapSnapshotWorkerDispatcher.js */ "./entrypoints/heap_snapshot_worker/HeapSnapshotWorkerDispatcher.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





//# sourceMappingURL=heap_snapshot_worker.js.map

/***/ })

}]);