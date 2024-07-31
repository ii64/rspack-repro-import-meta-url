"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_web_audio_graph_visualizer_graph_visualizer_ts"],{

/***/ "./src/panels/web_audio/graph_visualizer/GraphManager.ts":
/*!***************************************************************!*\
  !*** ./src/panels/web_audio/graph_visualizer/GraphManager.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphManager: () => (/* binding */ GraphManager)
/* harmony export */ });
/* harmony import */ var _GraphView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphView.js */ "./src/panels/web_audio/graph_visualizer/GraphView.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A class that maps each context to its corresponding graph.
// It controls which graph to render when the context is switched or updated.
class GraphManager {
    constructor() {
        Object.defineProperty(this, "graphMapByContextId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
    }
    createContext(contextId) {
        const graph = new _GraphView_js__WEBPACK_IMPORTED_MODULE_0__.GraphView(contextId);
        this.graphMapByContextId.set(contextId, graph);
    }
    destroyContext(contextId) {
        if (!this.graphMapByContextId.has(contextId)) {
            return;
        }
        const graph = this.graphMapByContextId.get(contextId);
        if (!graph) {
            return;
        }
        this.graphMapByContextId.delete(contextId);
    }
    hasContext(contextId) {
        return this.graphMapByContextId.has(contextId);
    }
    clearGraphs() {
        this.graphMapByContextId.clear();
    }
    /**
     * Get graph by contextId.
     * If the user starts listening for WebAudio events after the page has been running a context for awhile,
     * the graph might be undefined.
     */
    getGraph(contextId) {
        return this.graphMapByContextId.get(contextId) || null;
    }
}


/***/ }),

/***/ "./src/panels/web_audio/graph_visualizer/graph_visualizer.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/web_audio/graph_visualizer/graph_visualizer.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EdgeView: () => (/* reexport module object */ _EdgeView_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   GraphManager: () => (/* reexport module object */ _GraphManager_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   GraphStyle: () => (/* reexport module object */ _GraphStyle_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   GraphView: () => (/* reexport module object */ _GraphView_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   NodeRendererUtility: () => (/* reexport module object */ _NodeRendererUtility_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   NodeView: () => (/* reexport module object */ _NodeView_js__WEBPACK_IMPORTED_MODULE_5__)
/* harmony export */ });
/* harmony import */ var _EdgeView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EdgeView.js */ "./src/panels/web_audio/graph_visualizer/EdgeView.ts");
/* harmony import */ var _GraphManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraphManager.js */ "./src/panels/web_audio/graph_visualizer/GraphManager.ts");
/* harmony import */ var _GraphStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GraphStyle.js */ "./src/panels/web_audio/graph_visualizer/GraphStyle.ts");
/* harmony import */ var _GraphView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GraphView.js */ "./src/panels/web_audio/graph_visualizer/GraphView.ts");
/* harmony import */ var _NodeRendererUtility_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NodeRendererUtility.js */ "./src/panels/web_audio/graph_visualizer/NodeRendererUtility.ts");
/* harmony import */ var _NodeView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NodeView.js */ "./src/panels/web_audio/graph_visualizer/NodeView.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









/***/ })

}]);