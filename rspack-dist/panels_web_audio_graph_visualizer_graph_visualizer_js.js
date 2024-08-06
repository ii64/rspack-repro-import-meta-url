"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_web_audio_graph_visualizer_graph_visualizer_js"], {
"./panels/web_audio/graph_visualizer/GraphManager.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  GraphManager: function() { return GraphManager; }
});
/* harmony import */var _GraphView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphView.js */ "./panels/web_audio/graph_visualizer/GraphView.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

// A class that maps each context to its corresponding graph.
// It controls which graph to render when the context is switched or updated.
var GraphManager = /*#__PURE__*/ function() {
    "use strict";
    function GraphManager() {
        _class_call_check(this, GraphManager);
        _define_property(this, "graphMapByContextId", new Map());
    }
    _create_class(GraphManager, [
        {
            key: "createContext",
            value: function createContext(contextId) {
                var graph = new _GraphView_js__WEBPACK_IMPORTED_MODULE_0__.GraphView(contextId);
                this.graphMapByContextId.set(contextId, graph);
            }
        },
        {
            key: "destroyContext",
            value: function destroyContext(contextId) {
                if (!this.graphMapByContextId.has(contextId)) {
                    return;
                }
                var graph = this.graphMapByContextId.get(contextId);
                if (!graph) {
                    return;
                }
                this.graphMapByContextId.delete(contextId);
            }
        },
        {
            key: "hasContext",
            value: function hasContext(contextId) {
                return this.graphMapByContextId.has(contextId);
            }
        },
        {
            key: "clearGraphs",
            value: function clearGraphs() {
                this.graphMapByContextId.clear();
            }
        },
        {
            /**
     * Get graph by contextId.
     * If the user starts listening for WebAudio events after the page has been running a context for awhile,
     * the graph might be undefined.
     */ key: "getGraph",
            value: function getGraph(contextId) {
                return this.graphMapByContextId.get(contextId) || null;
            }
        }
    ]);
    return GraphManager;
} //# sourceMappingURL=GraphManager.js.map
();


}),
"./panels/web_audio/graph_visualizer/graph_visualizer.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EdgeView: function() { return /* reexport module object */ _EdgeView_js__WEBPACK_IMPORTED_MODULE_0__; },
  GraphManager: function() { return /* reexport module object */ _GraphManager_js__WEBPACK_IMPORTED_MODULE_1__; },
  GraphStyle: function() { return /* reexport module object */ _GraphStyle_js__WEBPACK_IMPORTED_MODULE_2__; },
  GraphView: function() { return /* reexport module object */ _GraphView_js__WEBPACK_IMPORTED_MODULE_3__; },
  NodeRendererUtility: function() { return /* reexport module object */ _NodeRendererUtility_js__WEBPACK_IMPORTED_MODULE_4__; },
  NodeView: function() { return /* reexport module object */ _NodeView_js__WEBPACK_IMPORTED_MODULE_5__; }
});
/* harmony import */var _EdgeView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EdgeView.js */ "./panels/web_audio/graph_visualizer/EdgeView.js");
/* harmony import */var _GraphManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraphManager.js */ "./panels/web_audio/graph_visualizer/GraphManager.js");
/* harmony import */var _GraphStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GraphStyle.js */ "./panels/web_audio/graph_visualizer/GraphStyle.js");
/* harmony import */var _GraphView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GraphView.js */ "./panels/web_audio/graph_visualizer/GraphView.js");
/* harmony import */var _NodeRendererUtility_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NodeRendererUtility.js */ "./panels/web_audio/graph_visualizer/NodeRendererUtility.js");
/* harmony import */var _NodeView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NodeView.js */ "./panels/web_audio/graph_visualizer/NodeView.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






 //# sourceMappingURL=graph_visualizer.js.map


}),

}]);