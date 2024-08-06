"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_web_audio_graph_visualizer_GraphView_js"], {
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
"./panels/web_audio/graph_visualizer/GraphView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  GraphView: function() { return GraphView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _EdgeView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EdgeView.js */ "./panels/web_audio/graph_visualizer/EdgeView.js");
/* harmony import */var _NodeView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NodeView.js */ "./panels/web_audio/graph_visualizer/NodeView.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}




// A class that tracks all the nodes and edges of an audio graph.
var GraphView = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(GraphView, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(GraphView);
    function GraphView(contextId) {
        _class_call_check(this, GraphView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "contextId", void 0);
        _define_property(_assert_this_initialized(_this), "nodes", void 0);
        _define_property(_assert_this_initialized(_this), "edges", void 0);
        _define_property(_assert_this_initialized(_this), "outboundEdgeMap", void 0);
        _define_property(_assert_this_initialized(_this), "inboundEdgeMap", void 0);
        _define_property(_assert_this_initialized(_this), "nodeLabelGenerator", void 0);
        _define_property(_assert_this_initialized(_this), "paramIdToNodeIdMap", void 0);
        _this.contextId = contextId;
        _this.nodes = new Map();
        _this.edges = new Map();
        /**
         * For each node ID, keep a set of all out-bound edge IDs.
         */ _this.outboundEdgeMap = new _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.MapUtilities.Multimap();
        /**
         * For each node ID, keep a set of all in-bound edge IDs.
         */ _this.inboundEdgeMap = new _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.MapUtilities.Multimap();
        // Use concise node label to replace the long UUID.
        // Each graph has its own label generator so that the label starts from 0.
        _this.nodeLabelGenerator = new _NodeView_js__WEBPACK_IMPORTED_MODULE_3__.NodeLabelGenerator();
        /**
         * For each param ID, save its corresponding node Id.
         */ _this.paramIdToNodeIdMap = new Map();
        return _this;
    }
    _create_class(GraphView, [
        {
            /**
     * Add a node to the graph.
     */ key: "addNode",
            value: function addNode(data) {
                var label = this.nodeLabelGenerator.generateLabel(data.nodeType);
                var node = new _NodeView_js__WEBPACK_IMPORTED_MODULE_3__.NodeView(data, label);
                this.nodes.set(data.nodeId, node);
                this.notifyShouldRedraw();
            }
        },
        {
            /**
     * Remove a node by id and all related edges.
     */ key: "removeNode",
            value: function removeNode(nodeId) {
                var _this = this;
                this.outboundEdgeMap.get(nodeId).forEach(function(edgeId) {
                    return _this.removeEdge(edgeId);
                });
                this.inboundEdgeMap.get(nodeId).forEach(function(edgeId) {
                    return _this.removeEdge(edgeId);
                });
                this.nodes.delete(nodeId);
                this.notifyShouldRedraw();
            }
        },
        {
            /**
     * Add a param to the node.
     */ key: "addParam",
            value: function addParam(data) {
                var node = this.getNodeById(data.nodeId);
                if (!node) {
                    console.error('AudioNode should be added before AudioParam');
                    return;
                }
                node.addParamPort(data.paramId, data.paramType);
                this.paramIdToNodeIdMap.set(data.paramId, data.nodeId);
                this.notifyShouldRedraw();
            }
        },
        {
            /**
     * Remove a param.
     */ key: "removeParam",
            value: function removeParam(paramId) {
                // Only need to delete the entry from the param id to node id map.
                this.paramIdToNodeIdMap.delete(paramId);
            // No need to remove the param port from the node because removeParam will always happen with
            // removeNode(). Since the whole Node will be gone, there is no need to remove port individually.
            }
        },
        {
            /**
     * Add a Node-to-Node connection to the graph.
     */ key: "addNodeToNodeConnection",
            value: function addNodeToNodeConnection(edgeData) {
                var edge = new _EdgeView_js__WEBPACK_IMPORTED_MODULE_2__.EdgeView(edgeData, "NodeToNode" /* EdgeTypes.NodeToNode */ );
                this.addEdge(edge);
            }
        },
        {
            /**
     * Remove a Node-to-Node connection from the graph.
     */ key: "removeNodeToNodeConnection",
            value: function removeNodeToNodeConnection(edgeData) {
                var _this = this;
                if (edgeData.destinationId) {
                    // Remove a single edge if destinationId is specified.
                    var edgePortIds = (0,_EdgeView_js__WEBPACK_IMPORTED_MODULE_2__.generateEdgePortIdsByData)(edgeData, "NodeToNode" /* EdgeTypes.NodeToNode */ );
                    if (!edgePortIds) {
                        throw new Error('Unable to generate edge port IDs');
                    }
                    var edgeId = edgePortIds.edgeId;
                    this.removeEdge(edgeId);
                } else {
                    // Otherwise, remove all outgoing edges from source node.
                    this.outboundEdgeMap.get(edgeData.sourceId).forEach(function(edgeId) {
                        return _this.removeEdge(edgeId);
                    });
                }
            }
        },
        {
            /**
     * Add a Node-to-Param connection to the graph.
     */ key: "addNodeToParamConnection",
            value: function addNodeToParamConnection(edgeData) {
                var edge = new _EdgeView_js__WEBPACK_IMPORTED_MODULE_2__.EdgeView(edgeData, "NodeToParam" /* EdgeTypes.NodeToParam */ );
                this.addEdge(edge);
            }
        },
        {
            /**
     * Remove a Node-to-Param connection from the graph.
     */ key: "removeNodeToParamConnection",
            value: function removeNodeToParamConnection(edgeData) {
                var edgePortIds = (0,_EdgeView_js__WEBPACK_IMPORTED_MODULE_2__.generateEdgePortIdsByData)(edgeData, "NodeToParam" /* EdgeTypes.NodeToParam */ );
                if (!edgePortIds) {
                    throw new Error('Unable to generate edge port IDs');
                }
                var edgeId = edgePortIds.edgeId;
                this.removeEdge(edgeId);
            }
        },
        {
            key: "getNodeById",
            value: function getNodeById(nodeId) {
                return this.nodes.get(nodeId) || null;
            }
        },
        {
            key: "getNodes",
            value: function getNodes() {
                return this.nodes;
            }
        },
        {
            key: "getEdges",
            value: function getEdges() {
                return this.edges;
            }
        },
        {
            key: "getNodeIdByParamId",
            value: function getNodeIdByParamId(paramId) {
                return this.paramIdToNodeIdMap.get(paramId) || null;
            }
        },
        {
            /**
     * Add an edge to the graph.
     */ key: "addEdge",
            value: function addEdge(edge) {
                var sourceId = edge.sourceId;
                // Do nothing if the edge already exists.
                if (this.outboundEdgeMap.hasValue(sourceId, edge.id)) {
                    return;
                }
                this.edges.set(edge.id, edge);
                this.outboundEdgeMap.set(sourceId, edge.id);
                this.inboundEdgeMap.set(edge.destinationId, edge.id);
                this.notifyShouldRedraw();
            }
        },
        {
            /**
     * Given an edge id, remove the edge from the graph.
     * Also remove the edge from inbound and outbound edge maps.
     */ key: "removeEdge",
            value: function removeEdge(edgeId) {
                var edge = this.edges.get(edgeId);
                if (!edge) {
                    return;
                }
                this.outboundEdgeMap.delete(edge.sourceId, edgeId);
                this.inboundEdgeMap.delete(edge.destinationId, edgeId);
                this.edges.delete(edgeId);
                this.notifyShouldRedraw();
            }
        },
        {
            key: "notifyShouldRedraw",
            value: function notifyShouldRedraw() {
                this.dispatchEventToListeners("ShouldRedraw" /* Events.ShouldRedraw */ , this);
            }
        }
    ]);
    return GraphView;
} //# sourceMappingURL=GraphView.js.map
(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);


}),

}]);