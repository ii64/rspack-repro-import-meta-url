"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_web_audio_graph_visualizer_EdgeView_ts"],{

/***/ "./src/panels/web_audio/graph_visualizer/EdgeView.ts":
/*!***********************************************************!*\
  !*** ./src/panels/web_audio/graph_visualizer/EdgeView.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EdgeTypes: () => (/* binding */ EdgeTypes),
/* harmony export */   EdgeView: () => (/* binding */ EdgeView),
/* harmony export */   generateEdgePortIdsByData: () => (/* binding */ generateEdgePortIdsByData)
/* harmony export */ });
/* harmony import */ var _NodeView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeView.js */ "./src/panels/web_audio/graph_visualizer/NodeView.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A class that represents an edge of a graph, including node-to-node connection,
// and node-to-param connection.
class EdgeView {
    constructor(data, type) {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sourceId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "destinationId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sourcePortId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "destinationPortId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        const edgePortsIds = generateEdgePortIdsByData(data, type);
        if (!edgePortsIds) {
            throw new Error('Unable to generate edge port IDs');
        }
        const { edgeId, sourcePortId, destinationPortId } = edgePortsIds;
        this.id = edgeId;
        this.type = type;
        this.sourceId = data.sourceId;
        this.destinationId = data.destinationId;
        this.sourcePortId = sourcePortId;
        this.destinationPortId = destinationPortId;
    }
}
/**
 * Generates the edge id and source/destination portId using edge data and type.
 */
const generateEdgePortIdsByData = (data, type) => {
    if (!data.sourceId || !data.destinationId) {
        console.error(`Undefined node message: ${JSON.stringify(data)}`);
        return null;
    }
    const sourcePortId = (0,_NodeView_js__WEBPACK_IMPORTED_MODULE_0__.generateOutputPortId)(data.sourceId, data.sourceOutputIndex);
    const destinationPortId = getDestinationPortId(data, type);
    return {
        edgeId: `${sourcePortId}->${destinationPortId}`,
        sourcePortId: sourcePortId,
        destinationPortId: destinationPortId,
    };
    /**
     * Get the destination portId based on connection type.
     */
    function getDestinationPortId(data, type) {
        if (type === EdgeTypes.NodeToNode) {
            const portData = data;
            return (0,_NodeView_js__WEBPACK_IMPORTED_MODULE_0__.generateInputPortId)(data.destinationId, portData.destinationInputIndex);
        }
        if (type === EdgeTypes.NodeToParam) {
            const portData = data;
            return (0,_NodeView_js__WEBPACK_IMPORTED_MODULE_0__.generateParamPortId)(data.destinationId, portData.destinationParamId);
        }
        console.error(`Unknown edge type: ${type}`);
        return '';
    }
};
/**
 * Supported edge types.
 */
var EdgeTypes;
(function (EdgeTypes) {
    EdgeTypes["NodeToNode"] = "NodeToNode";
    EdgeTypes["NodeToParam"] = "NodeToParam";
})(EdgeTypes || (EdgeTypes = {}));


/***/ })

}]);