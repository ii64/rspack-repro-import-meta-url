"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_web_audio_graph_visualizer_GraphView_ts"],{

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


/***/ }),

/***/ "./src/panels/web_audio/graph_visualizer/GraphView.ts":
/*!************************************************************!*\
  !*** ./src/panels/web_audio/graph_visualizer/GraphView.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   GraphView: () => (/* binding */ GraphView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _EdgeView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EdgeView.js */ "./src/panels/web_audio/graph_visualizer/EdgeView.ts");
/* harmony import */ var _NodeView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NodeView.js */ "./src/panels/web_audio/graph_visualizer/NodeView.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




// A class that tracks all the nodes and edges of an audio graph.
class GraphView extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    constructor(contextId) {
        super();
        Object.defineProperty(this, "contextId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "nodes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "edges", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "outboundEdgeMap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "inboundEdgeMap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "nodeLabelGenerator", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "paramIdToNodeIdMap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.contextId = contextId;
        this.nodes = new Map();
        this.edges = new Map();
        /**
         * For each node ID, keep a set of all out-bound edge IDs.
         */
        this.outboundEdgeMap = new _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.MapUtilities.Multimap();
        /**
         * For each node ID, keep a set of all in-bound edge IDs.
         */
        this.inboundEdgeMap = new _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.MapUtilities.Multimap();
        // Use concise node label to replace the long UUID.
        // Each graph has its own label generator so that the label starts from 0.
        this.nodeLabelGenerator = new _NodeView_js__WEBPACK_IMPORTED_MODULE_3__.NodeLabelGenerator();
        /**
         * For each param ID, save its corresponding node Id.
         */
        this.paramIdToNodeIdMap = new Map();
    }
    /**
     * Add a node to the graph.
     */
    addNode(data) {
        const label = this.nodeLabelGenerator.generateLabel(data.nodeType);
        const node = new _NodeView_js__WEBPACK_IMPORTED_MODULE_3__.NodeView(data, label);
        this.nodes.set(data.nodeId, node);
        this.notifyShouldRedraw();
    }
    /**
     * Remove a node by id and all related edges.
     */
    removeNode(nodeId) {
        this.outboundEdgeMap.get(nodeId).forEach(edgeId => this.removeEdge(edgeId));
        this.inboundEdgeMap.get(nodeId).forEach(edgeId => this.removeEdge(edgeId));
        this.nodes.delete(nodeId);
        this.notifyShouldRedraw();
    }
    /**
     * Add a param to the node.
     */
    addParam(data) {
        const node = this.getNodeById(data.nodeId);
        if (!node) {
            console.error('AudioNode should be added before AudioParam');
            return;
        }
        node.addParamPort(data.paramId, data.paramType);
        this.paramIdToNodeIdMap.set(data.paramId, data.nodeId);
        this.notifyShouldRedraw();
    }
    /**
     * Remove a param.
     */
    removeParam(paramId) {
        // Only need to delete the entry from the param id to node id map.
        this.paramIdToNodeIdMap.delete(paramId);
        // No need to remove the param port from the node because removeParam will always happen with
        // removeNode(). Since the whole Node will be gone, there is no need to remove port individually.
    }
    /**
     * Add a Node-to-Node connection to the graph.
     */
    addNodeToNodeConnection(edgeData) {
        const edge = new _EdgeView_js__WEBPACK_IMPORTED_MODULE_2__.EdgeView(edgeData, _EdgeView_js__WEBPACK_IMPORTED_MODULE_2__.EdgeTypes.NodeToNode);
        this.addEdge(edge);
    }
    /**
     * Remove a Node-to-Node connection from the graph.
     */
    removeNodeToNodeConnection(edgeData) {
        if (edgeData.destinationId) {
            // Remove a single edge if destinationId is specified.
            const edgePortIds = (0,_EdgeView_js__WEBPACK_IMPORTED_MODULE_2__.generateEdgePortIdsByData)(edgeData, _EdgeView_js__WEBPACK_IMPORTED_MODULE_2__.EdgeTypes.NodeToNode);
            if (!edgePortIds) {
                throw new Error('Unable to generate edge port IDs');
            }
            const { edgeId } = edgePortIds;
            this.removeEdge(edgeId);
        }
        else {
            // Otherwise, remove all outgoing edges from source node.
            this.outboundEdgeMap.get(edgeData.sourceId).forEach(edgeId => this.removeEdge(edgeId));
        }
    }
    /**
     * Add a Node-to-Param connection to the graph.
     */
    addNodeToParamConnection(edgeData) {
        const edge = new _EdgeView_js__WEBPACK_IMPORTED_MODULE_2__.EdgeView(edgeData, _EdgeView_js__WEBPACK_IMPORTED_MODULE_2__.EdgeTypes.NodeToParam);
        this.addEdge(edge);
    }
    /**
     * Remove a Node-to-Param connection from the graph.
     */
    removeNodeToParamConnection(edgeData) {
        const edgePortIds = (0,_EdgeView_js__WEBPACK_IMPORTED_MODULE_2__.generateEdgePortIdsByData)(edgeData, _EdgeView_js__WEBPACK_IMPORTED_MODULE_2__.EdgeTypes.NodeToParam);
        if (!edgePortIds) {
            throw new Error('Unable to generate edge port IDs');
        }
        const { edgeId } = edgePortIds;
        this.removeEdge(edgeId);
    }
    getNodeById(nodeId) {
        return this.nodes.get(nodeId) || null;
    }
    getNodes() {
        return this.nodes;
    }
    getEdges() {
        return this.edges;
    }
    getNodeIdByParamId(paramId) {
        return this.paramIdToNodeIdMap.get(paramId) || null;
    }
    /**
     * Add an edge to the graph.
     */
    addEdge(edge) {
        const sourceId = edge.sourceId;
        // Do nothing if the edge already exists.
        if (this.outboundEdgeMap.hasValue(sourceId, edge.id)) {
            return;
        }
        this.edges.set(edge.id, edge);
        this.outboundEdgeMap.set(sourceId, edge.id);
        this.inboundEdgeMap.set(edge.destinationId, edge.id);
        this.notifyShouldRedraw();
    }
    /**
     * Given an edge id, remove the edge from the graph.
     * Also remove the edge from inbound and outbound edge maps.
     */
    removeEdge(edgeId) {
        const edge = this.edges.get(edgeId);
        if (!edge) {
            return;
        }
        this.outboundEdgeMap.delete(edge.sourceId, edgeId);
        this.inboundEdgeMap.delete(edge.destinationId, edgeId);
        this.edges.delete(edgeId);
        this.notifyShouldRedraw();
    }
    notifyShouldRedraw() {
        this.dispatchEventToListeners(Events.ShouldRedraw, this);
    }
}
var Events;
(function (Events) {
    Events["ShouldRedraw"] = "ShouldRedraw";
})(Events || (Events = {}));


/***/ })

}]);