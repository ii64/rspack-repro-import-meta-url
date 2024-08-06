"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_web_audio_graph_visualizer_GraphManager_js"],{

/***/ "./panels/web_audio/graph_visualizer/EdgeView.js":
/*!*******************************************************!*\
  !*** ./panels/web_audio/graph_visualizer/EdgeView.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EdgeView: () => (/* binding */ EdgeView),
/* harmony export */   generateEdgePortIdsByData: () => (/* binding */ generateEdgePortIdsByData)
/* harmony export */ });
/* harmony import */ var _NodeView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeView.js */ "./panels/web_audio/graph_visualizer/NodeView.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A class that represents an edge of a graph, including node-to-node connection,
// and node-to-param connection.
class EdgeView {
    id;
    type;
    sourceId;
    destinationId;
    sourcePortId;
    destinationPortId;
    constructor(data, type) {
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
        if (type === "NodeToNode" /* EdgeTypes.NodeToNode */) {
            const portData = data;
            return (0,_NodeView_js__WEBPACK_IMPORTED_MODULE_0__.generateInputPortId)(data.destinationId, portData.destinationInputIndex);
        }
        if (type === "NodeToParam" /* EdgeTypes.NodeToParam */) {
            const portData = data;
            return (0,_NodeView_js__WEBPACK_IMPORTED_MODULE_0__.generateParamPortId)(data.destinationId, portData.destinationParamId);
        }
        console.error(`Unknown edge type: ${type}`);
        return '';
    }
};
//# sourceMappingURL=EdgeView.js.map

/***/ }),

/***/ "./panels/web_audio/graph_visualizer/GraphManager.js":
/*!***********************************************************!*\
  !*** ./panels/web_audio/graph_visualizer/GraphManager.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphManager: () => (/* binding */ GraphManager)
/* harmony export */ });
/* harmony import */ var _GraphView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphView.js */ "./panels/web_audio/graph_visualizer/GraphView.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A class that maps each context to its corresponding graph.
// It controls which graph to render when the context is switched or updated.
class GraphManager {
    graphMapByContextId = new Map();
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
//# sourceMappingURL=GraphManager.js.map

/***/ }),

/***/ "./panels/web_audio/graph_visualizer/GraphView.js":
/*!********************************************************!*\
  !*** ./panels/web_audio/graph_visualizer/GraphView.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphView: () => (/* binding */ GraphView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _EdgeView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EdgeView.js */ "./panels/web_audio/graph_visualizer/EdgeView.js");
/* harmony import */ var _NodeView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NodeView.js */ "./panels/web_audio/graph_visualizer/NodeView.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




// A class that tracks all the nodes and edges of an audio graph.
class GraphView extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    contextId;
    nodes;
    edges;
    outboundEdgeMap;
    inboundEdgeMap;
    nodeLabelGenerator;
    paramIdToNodeIdMap;
    constructor(contextId) {
        super();
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
        const edge = new _EdgeView_js__WEBPACK_IMPORTED_MODULE_2__.EdgeView(edgeData, "NodeToNode" /* EdgeTypes.NodeToNode */);
        this.addEdge(edge);
    }
    /**
     * Remove a Node-to-Node connection from the graph.
     */
    removeNodeToNodeConnection(edgeData) {
        if (edgeData.destinationId) {
            // Remove a single edge if destinationId is specified.
            const edgePortIds = (0,_EdgeView_js__WEBPACK_IMPORTED_MODULE_2__.generateEdgePortIdsByData)(edgeData, "NodeToNode" /* EdgeTypes.NodeToNode */);
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
        const edge = new _EdgeView_js__WEBPACK_IMPORTED_MODULE_2__.EdgeView(edgeData, "NodeToParam" /* EdgeTypes.NodeToParam */);
        this.addEdge(edge);
    }
    /**
     * Remove a Node-to-Param connection from the graph.
     */
    removeNodeToParamConnection(edgeData) {
        const edgePortIds = (0,_EdgeView_js__WEBPACK_IMPORTED_MODULE_2__.generateEdgePortIdsByData)(edgeData, "NodeToParam" /* EdgeTypes.NodeToParam */);
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
        this.dispatchEventToListeners("ShouldRedraw" /* Events.ShouldRedraw */, this);
    }
}
//# sourceMappingURL=GraphView.js.map

/***/ })

}]);