"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_web_audio_graph_visualizer_NodeView_js"], {
"./panels/web_audio/graph_visualizer/GraphStyle.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ArrowHeadSize: function() { return ArrowHeadSize; },
  AudioParamRadius: function() { return AudioParamRadius; },
  BottomPaddingWithParam: function() { return BottomPaddingWithParam; },
  BottomPaddingWithoutParam: function() { return BottomPaddingWithoutParam; },
  GraphMargin: function() { return GraphMargin; },
  GraphPadding: function() { return GraphPadding; },
  InputPortRadius: function() { return InputPortRadius; },
  LeftMarginOfText: function() { return LeftMarginOfText; },
  LeftSideTopPadding: function() { return LeftSideTopPadding; },
  NodeLabelFontStyle: function() { return NodeLabelFontStyle; },
  ParamLabelFontStyle: function() { return ParamLabelFontStyle; },
  PortPadding: function() { return PortPadding; },
  RightMarginOfText: function() { return RightMarginOfText; },
  TotalInputPortHeight: function() { return TotalInputPortHeight; },
  TotalOutputPortHeight: function() { return TotalOutputPortHeight; },
  TotalParamPortHeight: function() { return TotalParamPortHeight; }
});
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var PortPadding = 4;
var InputPortRadius = 10;
var AudioParamRadius = 5;
var LeftMarginOfText = 12;
var RightMarginOfText = 30;
var LeftSideTopPadding = 5;
var BottomPaddingWithoutParam = 6;
var BottomPaddingWithParam = 8;
var ArrowHeadSize = 12;
// GraphPadding is used to add extra space for the graph layout.
var GraphPadding = 20;
var GraphMargin = 20;
var TotalInputPortHeight = InputPortRadius * 2 + PortPadding;
var TotalOutputPortHeight = TotalInputPortHeight;
var TotalParamPortHeight = AudioParamRadius * 2 + PortPadding;
var NodeLabelFontStyle = '14px Segoe UI, Arial';
var ParamLabelFontStyle = '12px Segoe UI, Arial'; //# sourceMappingURL=GraphStyle.js.map


}),
"./panels/web_audio/graph_visualizer/NodeRendererUtility.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  calculateInputPortXY: function() { return calculateInputPortXY; },
  calculateOutputPortXY: function() { return calculateOutputPortXY; },
  calculateParamPortXY: function() { return calculateParamPortXY; }
});
/* harmony import */var _GraphStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphStyle.js */ "./panels/web_audio/graph_visualizer/GraphStyle.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Calculate the x, y value of input port.
 * Input ports are placed near the top of the left-side border.
 */ var calculateInputPortXY = function(portIndex) {
    var y = _GraphStyle_js__WEBPACK_IMPORTED_MODULE_0__.InputPortRadius + _GraphStyle_js__WEBPACK_IMPORTED_MODULE_0__.LeftSideTopPadding + portIndex * _GraphStyle_js__WEBPACK_IMPORTED_MODULE_0__.TotalInputPortHeight;
    return {
        x: 0,
        y: y
    };
};
/**
 * Calculate the x, y value of output port.
 * Output ports are placed near the center of the right-side border.
 */ var calculateOutputPortXY = function(portIndex, nodeSize, numberOfOutputs) {
    var width = nodeSize.width, height = nodeSize.height;
    var outputPortY = height / 2 + (2 * portIndex - numberOfOutputs + 1) * _GraphStyle_js__WEBPACK_IMPORTED_MODULE_0__.TotalOutputPortHeight / 2;
    return {
        x: width,
        y: outputPortY
    };
};
/**
 * Calculate the x, y value of param port.
 * Param ports are placed near the bottom of the left-side border.
 */ var calculateParamPortXY = function(portIndex, offsetY) {
    var paramPortY = offsetY + _GraphStyle_js__WEBPACK_IMPORTED_MODULE_0__.TotalParamPortHeight * (portIndex + 1) - _GraphStyle_js__WEBPACK_IMPORTED_MODULE_0__.AudioParamRadius;
    return {
        x: 0,
        y: paramPortY
    };
}; //# sourceMappingURL=NodeRendererUtility.js.map


}),
"./panels/web_audio/graph_visualizer/NodeView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NodeLabelGenerator: function() { return NodeLabelGenerator; },
  NodeView: function() { return NodeView; },
  generateInputPortId: function() { return generateInputPortId; },
  generateOutputPortId: function() { return generateOutputPortId; },
  generateParamPortId: function() { return generateParamPortId; },
  measureTextWidth: function() { return measureTextWidth; }
});
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraphStyle.js */ "./panels/web_audio/graph_visualizer/GraphStyle.js");
/* harmony import */var _NodeRendererUtility_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NodeRendererUtility.js */ "./panels/web_audio/graph_visualizer/NodeRendererUtility.js");
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



// A class that represents a node of a graph, consisting of the information needed to layout the
// node and display the node. Each node has zero or more ports, including input, output, and param ports.
var NodeView = /*#__PURE__*/ function() {
    "use strict";
    function NodeView(data, label) {
        _class_call_check(this, NodeView);
        _define_property(this, "id", void 0);
        _define_property(this, "type", void 0);
        _define_property(this, "numberOfInputs", void 0);
        _define_property(this, "numberOfOutputs", void 0);
        _define_property(this, "label", void 0);
        _define_property(this, "size", void 0);
        _define_property(this, "position", void 0);
        _define_property(this, "layout", void 0);
        _define_property(this, "ports", void 0);
        this.id = data.nodeId;
        this.type = data.nodeType;
        this.numberOfInputs = data.numberOfInputs;
        this.numberOfOutputs = data.numberOfOutputs;
        this.label = label;
        this.size = {
            width: 0,
            height: 0
        };
        // Position of the center. If null, it means the graph layout has not been computed
        // and this node should not be rendered. It will be set after layouting.
        this.position = null;
        this.layout = {
            inputPortSectionHeight: 0,
            outputPortSectionHeight: 0,
            maxTextLength: 0,
            totalHeight: 0
        };
        this.ports = new Map();
        this.initialize(data);
    }
    _create_class(NodeView, [
        {
            key: "initialize",
            value: function initialize(data) {
                this.updateNodeLayoutAfterAddingNode(data);
                this.setupInputPorts();
                this.setupOutputPorts();
            }
        },
        {
            /**
     * Add an AudioParam to this node.
     * Note for @method removeParamPort: removeParamPort is not necessary because it will only happen
     * when the parent NodeView is destroyed. So there is no need to remove port individually
     * when the whole NodeView will be gone.
     */ key: "addParamPort",
            value: function addParamPort(paramId, paramType) {
                var paramPorts = this.getPortsByType("Param" /* PortTypes.Param */ );
                var numberOfParams = paramPorts.length;
                var _calculateParamPortXY = (0,_NodeRendererUtility_js__WEBPACK_IMPORTED_MODULE_2__.calculateParamPortXY)(numberOfParams, this.layout.inputPortSectionHeight), x = _calculateParamPortXY.x, y = _calculateParamPortXY.y;
                this.addPort({
                    id: generateParamPortId(this.id, paramId),
                    type: "Param" /* PortTypes.Param */ ,
                    label: paramType,
                    x: x,
                    y: y
                });
                this.updateNodeLayoutAfterAddingParam(numberOfParams + 1, paramType);
                // The position of output ports may be changed if adding a param increases the total height.
                this.setupOutputPorts();
            }
        },
        {
            key: "getPortsByType",
            value: function getPortsByType(type) {
                var result = [];
                this.ports.forEach(function(port) {
                    if (port.type === type) {
                        result.push(port);
                    }
                });
                return result;
            }
        },
        {
            /**
     * Use number of inputs and outputs to compute the layout
     * for text and ports.
     * Credit: This function is mostly borrowed from Audion/
     *      `audion.entryPoints.handleNodeCreated_()`.
     *      https://github.com/google/audion/blob/master/js/entry-points/panel.js
     */ key: "updateNodeLayoutAfterAddingNode",
            value: function updateNodeLayoutAfterAddingNode(data) {
                // Even if there are no input ports, leave room for the node label.
                var inputPortSectionHeight = _GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__.TotalInputPortHeight * Math.max(1, data.numberOfInputs) + _GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__.LeftSideTopPadding;
                this.layout.inputPortSectionHeight = inputPortSectionHeight;
                this.layout.outputPortSectionHeight = _GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__.TotalOutputPortHeight * data.numberOfOutputs;
                // Use the max of the left and right side heights as the total height.
                // Include a little padding on the left.
                this.layout.totalHeight = Math.max(inputPortSectionHeight + _GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__.BottomPaddingWithoutParam, this.layout.outputPortSectionHeight);
                // Update max length with node label.
                var nodeLabelLength = measureTextWidth(this.label, _GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__.NodeLabelFontStyle);
                this.layout.maxTextLength = Math.max(this.layout.maxTextLength, nodeLabelLength);
                this.updateNodeSize();
            }
        },
        {
            /**
     * After adding a param port, update the node layout based on the y value
     * and label length.
     */ key: "updateNodeLayoutAfterAddingParam",
            value: function updateNodeLayoutAfterAddingParam(numberOfParams, paramType) {
                // The height after adding param ports and input ports.
                // Include a little padding on the left.
                var leftSideMaxHeight = this.layout.inputPortSectionHeight + numberOfParams * _GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__.TotalParamPortHeight + _GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__.BottomPaddingWithParam;
                // Use the max of the left and right side heights as the total height.
                this.layout.totalHeight = Math.max(leftSideMaxHeight, this.layout.outputPortSectionHeight);
                // Update max length with param label.
                var paramLabelLength = measureTextWidth(paramType, _GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__.ParamLabelFontStyle);
                this.layout.maxTextLength = Math.max(this.layout.maxTextLength, paramLabelLength);
                this.updateNodeSize();
            }
        },
        {
            key: "updateNodeSize",
            value: function updateNodeSize() {
                this.size = {
                    width: Math.ceil(_GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__.LeftMarginOfText + this.layout.maxTextLength + _GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__.RightMarginOfText),
                    height: this.layout.totalHeight
                };
            }
        },
        {
            // Setup the properties of each input port.
            key: "setupInputPorts",
            value: function setupInputPorts() {
                for(var i = 0; i < this.numberOfInputs; i++){
                    var _calculateInputPortXY = (0,_NodeRendererUtility_js__WEBPACK_IMPORTED_MODULE_2__.calculateInputPortXY)(i), x = _calculateInputPortXY.x, y = _calculateInputPortXY.y;
                    this.addPort({
                        id: generateInputPortId(this.id, i),
                        type: "In" /* PortTypes.In */ ,
                        x: x,
                        y: y,
                        label: undefined
                    });
                }
            }
        },
        {
            // Setup the properties of each output port.
            key: "setupOutputPorts",
            value: function setupOutputPorts() {
                for(var i = 0; i < this.numberOfOutputs; i++){
                    var portId = generateOutputPortId(this.id, i);
                    var _calculateOutputPortXY = (0,_NodeRendererUtility_js__WEBPACK_IMPORTED_MODULE_2__.calculateOutputPortXY)(i, this.size, this.numberOfOutputs), x = _calculateOutputPortXY.x, y = _calculateOutputPortXY.y;
                    if (this.ports.has(portId)) {
                        // Update y value of an existing output port.
                        var port = this.ports.get(portId);
                        if (!port) {
                            throw new Error("Unable to find port with id ".concat(portId));
                        }
                        port.x = x;
                        port.y = y;
                    } else {
                        this.addPort({
                            id: portId,
                            type: "Out" /* PortTypes.Out */ ,
                            x: x,
                            y: y,
                            label: undefined
                        });
                    }
                }
            }
        },
        {
            key: "addPort",
            value: function addPort(port) {
                this.ports.set(port.id, port);
            }
        }
    ]);
    return NodeView;
}();
/**
 * Generates the port id for the input of node.
 */ var generateInputPortId = function(nodeId, inputIndex) {
    return "".concat(nodeId, "-input-").concat(inputIndex || 0);
};
/**
 * Generates the port id for the output of node.
 */ var generateOutputPortId = function(nodeId, outputIndex) {
    return "".concat(nodeId, "-output-").concat(outputIndex || 0);
};
/**
 * Generates the port id for the param of node.
 */ var generateParamPortId = function(nodeId, paramId) {
    return "".concat(nodeId, "-param-").concat(paramId);
};
// A label generator to convert UUID of node to shorter label to display.
// Each graph should have its own generator since the node count starts from 0.
var NodeLabelGenerator = /*#__PURE__*/ function() {
    "use strict";
    function NodeLabelGenerator() {
        _class_call_check(this, NodeLabelGenerator);
        _define_property(this, "totalNumberOfNodes", void 0);
        this.totalNumberOfNodes = 0;
    }
    _create_class(NodeLabelGenerator, [
        {
            /**
     * Generates the label for a node of a graph.
     */ key: "generateLabel",
            value: function generateLabel(nodeType) {
                // To make the label concise, remove the suffix "Node" from the nodeType.
                if (nodeType.endsWith('Node')) {
                    nodeType = nodeType.slice(0, nodeType.length - 4);
                }
                // Also, use an integer to replace the long UUID.
                this.totalNumberOfNodes += 1;
                var label = "".concat(nodeType, " ").concat(this.totalNumberOfNodes);
                return label;
            }
        }
    ]);
    return NodeLabelGenerator;
}();
var contextForFontTextMeasuring;
/**
 * Get the text width using given font style.
 */ var measureTextWidth = function(text, fontStyle) {
    if (!contextForFontTextMeasuring) {
        var context = document.createElement('canvas').getContext('2d');
        if (!context) {
            throw new Error('Unable to create canvas context.');
        }
        contextForFontTextMeasuring = context;
    }
    var context1 = contextForFontTextMeasuring;
    context1.save();
    if (fontStyle) {
        context1.font = fontStyle;
    }
    var width = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.UIUtils.measureTextWidth(context1, text);
    context1.restore();
    return width;
}; //# sourceMappingURL=NodeView.js.map


}),

}]);