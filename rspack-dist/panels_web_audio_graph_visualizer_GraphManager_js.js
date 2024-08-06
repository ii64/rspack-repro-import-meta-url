"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_web_audio_graph_visualizer_GraphManager_js"], {
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

}]);