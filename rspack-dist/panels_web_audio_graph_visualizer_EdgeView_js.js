"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_web_audio_graph_visualizer_EdgeView_js"], {
"./panels/web_audio/graph_visualizer/EdgeView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EdgeView: function() { return EdgeView; },
  generateEdgePortIdsByData: function() { return generateEdgePortIdsByData; }
});
/* harmony import */var _NodeView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeView.js */ "./panels/web_audio/graph_visualizer/NodeView.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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

// A class that represents an edge of a graph, including node-to-node connection,
// and node-to-param connection.
var EdgeView = function EdgeView(data, type) {
    "use strict";
    _class_call_check(this, EdgeView);
    _define_property(this, "id", void 0);
    _define_property(this, "type", void 0);
    _define_property(this, "sourceId", void 0);
    _define_property(this, "destinationId", void 0);
    _define_property(this, "sourcePortId", void 0);
    _define_property(this, "destinationPortId", void 0);
    var edgePortsIds = generateEdgePortIdsByData(data, type);
    if (!edgePortsIds) {
        throw new Error('Unable to generate edge port IDs');
    }
    var edgeId = edgePortsIds.edgeId, sourcePortId = edgePortsIds.sourcePortId, destinationPortId = edgePortsIds.destinationPortId;
    this.id = edgeId;
    this.type = type;
    this.sourceId = data.sourceId;
    this.destinationId = data.destinationId;
    this.sourcePortId = sourcePortId;
    this.destinationPortId = destinationPortId;
};
/**
 * Generates the edge id and source/destination portId using edge data and type.
 */ var generateEdgePortIdsByData = function(data, type) {
    var getDestinationPortId = /**
     * Get the destination portId based on connection type.
     */ function getDestinationPortId(data, type) {
        if (type === "NodeToNode" /* EdgeTypes.NodeToNode */ ) {
            var portData = data;
            return (0,_NodeView_js__WEBPACK_IMPORTED_MODULE_0__.generateInputPortId)(data.destinationId, portData.destinationInputIndex);
        }
        if (type === "NodeToParam" /* EdgeTypes.NodeToParam */ ) {
            var portData1 = data;
            return (0,_NodeView_js__WEBPACK_IMPORTED_MODULE_0__.generateParamPortId)(data.destinationId, portData1.destinationParamId);
        }
        console.error("Unknown edge type: ".concat(type));
        return '';
    };
    if (!data.sourceId || !data.destinationId) {
        console.error("Undefined node message: ".concat(JSON.stringify(data)));
        return null;
    }
    var sourcePortId = (0,_NodeView_js__WEBPACK_IMPORTED_MODULE_0__.generateOutputPortId)(data.sourceId, data.sourceOutputIndex);
    var destinationPortId = getDestinationPortId(data, type);
    return {
        edgeId: "".concat(sourcePortId, "->").concat(destinationPortId),
        sourcePortId: sourcePortId,
        destinationPortId: destinationPortId
    };
}; //# sourceMappingURL=EdgeView.js.map


}),

}]);