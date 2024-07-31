"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_web_audio_graph_visualizer_NodeView_ts"],{

/***/ "./src/panels/web_audio/graph_visualizer/GraphStyle.ts":
/*!*************************************************************!*\
  !*** ./src/panels/web_audio/graph_visualizer/GraphStyle.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrowHeadSize: () => (/* binding */ ArrowHeadSize),
/* harmony export */   AudioParamRadius: () => (/* binding */ AudioParamRadius),
/* harmony export */   BottomPaddingWithParam: () => (/* binding */ BottomPaddingWithParam),
/* harmony export */   BottomPaddingWithoutParam: () => (/* binding */ BottomPaddingWithoutParam),
/* harmony export */   GraphMargin: () => (/* binding */ GraphMargin),
/* harmony export */   GraphPadding: () => (/* binding */ GraphPadding),
/* harmony export */   InputPortRadius: () => (/* binding */ InputPortRadius),
/* harmony export */   LeftMarginOfText: () => (/* binding */ LeftMarginOfText),
/* harmony export */   LeftSideTopPadding: () => (/* binding */ LeftSideTopPadding),
/* harmony export */   NodeLabelFontStyle: () => (/* binding */ NodeLabelFontStyle),
/* harmony export */   ParamLabelFontStyle: () => (/* binding */ ParamLabelFontStyle),
/* harmony export */   PortPadding: () => (/* binding */ PortPadding),
/* harmony export */   PortTypes: () => (/* binding */ PortTypes),
/* harmony export */   RightMarginOfText: () => (/* binding */ RightMarginOfText),
/* harmony export */   TotalInputPortHeight: () => (/* binding */ TotalInputPortHeight),
/* harmony export */   TotalOutputPortHeight: () => (/* binding */ TotalOutputPortHeight),
/* harmony export */   TotalParamPortHeight: () => (/* binding */ TotalParamPortHeight)
/* harmony export */ });
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PortPadding = 4;
const InputPortRadius = 10;
const AudioParamRadius = 5;
const LeftMarginOfText = 12;
const RightMarginOfText = 30;
const LeftSideTopPadding = 5;
const BottomPaddingWithoutParam = 6;
const BottomPaddingWithParam = 8;
const ArrowHeadSize = 12;
// GraphPadding is used to add extra space for the graph layout.
const GraphPadding = 20;
const GraphMargin = 20;
const TotalInputPortHeight = InputPortRadius * 2 + PortPadding;
const TotalOutputPortHeight = TotalInputPortHeight;
const TotalParamPortHeight = AudioParamRadius * 2 + PortPadding;
const NodeLabelFontStyle = '14px Segoe UI, Arial';
const ParamLabelFontStyle = '12px Segoe UI, Arial';
/**
 * Supported port types.
 */
var PortTypes;
(function (PortTypes) {
    PortTypes["In"] = "In";
    PortTypes["Out"] = "Out";
    PortTypes["Param"] = "Param";
})(PortTypes || (PortTypes = {}));


/***/ }),

/***/ "./src/panels/web_audio/graph_visualizer/NodeRendererUtility.ts":
/*!**********************************************************************!*\
  !*** ./src/panels/web_audio/graph_visualizer/NodeRendererUtility.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateInputPortXY: () => (/* binding */ calculateInputPortXY),
/* harmony export */   calculateOutputPortXY: () => (/* binding */ calculateOutputPortXY),
/* harmony export */   calculateParamPortXY: () => (/* binding */ calculateParamPortXY)
/* harmony export */ });
/* harmony import */ var _GraphStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphStyle.js */ "./src/panels/web_audio/graph_visualizer/GraphStyle.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Calculate the x, y value of input port.
 * Input ports are placed near the top of the left-side border.
 */
const calculateInputPortXY = (portIndex) => {
    const y = _GraphStyle_js__WEBPACK_IMPORTED_MODULE_0__.InputPortRadius + _GraphStyle_js__WEBPACK_IMPORTED_MODULE_0__.LeftSideTopPadding + portIndex * _GraphStyle_js__WEBPACK_IMPORTED_MODULE_0__.TotalInputPortHeight;
    return { x: 0, y: y };
};
/**
 * Calculate the x, y value of output port.
 * Output ports are placed near the center of the right-side border.
 */
const calculateOutputPortXY = (portIndex, nodeSize, numberOfOutputs) => {
    const { width, height } = nodeSize;
    const outputPortY = (height / 2) + (2 * portIndex - numberOfOutputs + 1) * _GraphStyle_js__WEBPACK_IMPORTED_MODULE_0__.TotalOutputPortHeight / 2;
    return { x: width, y: outputPortY };
};
/**
 * Calculate the x, y value of param port.
 * Param ports are placed near the bottom of the left-side border.
 */
const calculateParamPortXY = (portIndex, offsetY) => {
    const paramPortY = offsetY + _GraphStyle_js__WEBPACK_IMPORTED_MODULE_0__.TotalParamPortHeight * (portIndex + 1) - _GraphStyle_js__WEBPACK_IMPORTED_MODULE_0__.AudioParamRadius;
    return { x: 0, y: paramPortY };
};


/***/ }),

/***/ "./src/panels/web_audio/graph_visualizer/NodeView.ts":
/*!***********************************************************!*\
  !*** ./src/panels/web_audio/graph_visualizer/NodeView.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeLabelGenerator: () => (/* binding */ NodeLabelGenerator),
/* harmony export */   NodeView: () => (/* binding */ NodeView),
/* harmony export */   generateInputPortId: () => (/* binding */ generateInputPortId),
/* harmony export */   generateOutputPortId: () => (/* binding */ generateOutputPortId),
/* harmony export */   generateParamPortId: () => (/* binding */ generateParamPortId),
/* harmony export */   measureTextWidth: () => (/* binding */ measureTextWidth)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraphStyle.js */ "./src/panels/web_audio/graph_visualizer/GraphStyle.ts");
/* harmony import */ var _NodeRendererUtility_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NodeRendererUtility.js */ "./src/panels/web_audio/graph_visualizer/NodeRendererUtility.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



// A class that represents a node of a graph, consisting of the information needed to layout the
// node and display the node. Each node has zero or more ports, including input, output, and param ports.
class NodeView {
    constructor(data, label) {
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
        Object.defineProperty(this, "numberOfInputs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "numberOfOutputs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "label", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "position", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "layout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ports", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = data.nodeId;
        this.type = data.nodeType;
        this.numberOfInputs = data.numberOfInputs;
        this.numberOfOutputs = data.numberOfOutputs;
        this.label = label;
        this.size = { width: 0, height: 0 };
        // Position of the center. If null, it means the graph layout has not been computed
        // and this node should not be rendered. It will be set after layouting.
        this.position = null;
        this.layout = {
            inputPortSectionHeight: 0,
            outputPortSectionHeight: 0,
            maxTextLength: 0,
            totalHeight: 0,
        };
        this.ports = new Map();
        this.initialize(data);
    }
    initialize(data) {
        this.updateNodeLayoutAfterAddingNode(data);
        this.setupInputPorts();
        this.setupOutputPorts();
    }
    /**
     * Add an AudioParam to this node.
     * Note for @method removeParamPort: removeParamPort is not necessary because it will only happen
     * when the parent NodeView is destroyed. So there is no need to remove port individually
     * when the whole NodeView will be gone.
     */
    addParamPort(paramId, paramType) {
        const paramPorts = this.getPortsByType(_GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__.PortTypes.Param);
        const numberOfParams = paramPorts.length;
        const { x, y } = (0,_NodeRendererUtility_js__WEBPACK_IMPORTED_MODULE_2__.calculateParamPortXY)(numberOfParams, this.layout.inputPortSectionHeight);
        this.addPort({
            id: generateParamPortId(this.id, paramId),
            type: _GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__.PortTypes.Param,
            label: paramType,
            x,
            y,
        });
        this.updateNodeLayoutAfterAddingParam(numberOfParams + 1, paramType);
        // The position of output ports may be changed if adding a param increases the total height.
        this.setupOutputPorts();
    }
    getPortsByType(type) {
        const result = [];
        this.ports.forEach(port => {
            if (port.type === type) {
                result.push(port);
            }
        });
        return result;
    }
    /**
     * Use number of inputs and outputs to compute the layout
     * for text and ports.
     * Credit: This function is mostly borrowed from Audion/
     *      `audion.entryPoints.handleNodeCreated_()`.
     *      https://github.com/google/audion/blob/master/js/entry-points/panel.js
     */
    updateNodeLayoutAfterAddingNode(data) {
        // Even if there are no input ports, leave room for the node label.
        const inputPortSectionHeight = _GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__.TotalInputPortHeight * Math.max(1, data.numberOfInputs) + _GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__.LeftSideTopPadding;
        this.layout.inputPortSectionHeight = inputPortSectionHeight;
        this.layout.outputPortSectionHeight = _GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__.TotalOutputPortHeight * data.numberOfOutputs;
        // Use the max of the left and right side heights as the total height.
        // Include a little padding on the left.
        this.layout.totalHeight =
            Math.max(inputPortSectionHeight + _GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__.BottomPaddingWithoutParam, this.layout.outputPortSectionHeight);
        // Update max length with node label.
        const nodeLabelLength = measureTextWidth(this.label, _GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__.NodeLabelFontStyle);
        this.layout.maxTextLength = Math.max(this.layout.maxTextLength, nodeLabelLength);
        this.updateNodeSize();
    }
    /**
     * After adding a param port, update the node layout based on the y value
     * and label length.
     */
    updateNodeLayoutAfterAddingParam(numberOfParams, paramType) {
        // The height after adding param ports and input ports.
        // Include a little padding on the left.
        const leftSideMaxHeight = this.layout.inputPortSectionHeight + numberOfParams * _GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__.TotalParamPortHeight + _GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__.BottomPaddingWithParam;
        // Use the max of the left and right side heights as the total height.
        this.layout.totalHeight = Math.max(leftSideMaxHeight, this.layout.outputPortSectionHeight);
        // Update max length with param label.
        const paramLabelLength = measureTextWidth(paramType, _GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__.ParamLabelFontStyle);
        this.layout.maxTextLength = Math.max(this.layout.maxTextLength, paramLabelLength);
        this.updateNodeSize();
    }
    updateNodeSize() {
        this.size = {
            width: Math.ceil(_GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__.LeftMarginOfText + this.layout.maxTextLength + _GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__.RightMarginOfText),
            height: this.layout.totalHeight,
        };
    }
    // Setup the properties of each input port.
    setupInputPorts() {
        for (let i = 0; i < this.numberOfInputs; i++) {
            const { x, y } = (0,_NodeRendererUtility_js__WEBPACK_IMPORTED_MODULE_2__.calculateInputPortXY)(i);
            this.addPort({ id: generateInputPortId(this.id, i), type: _GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__.PortTypes.In, x, y, label: undefined });
        }
    }
    // Setup the properties of each output port.
    setupOutputPorts() {
        for (let i = 0; i < this.numberOfOutputs; i++) {
            const portId = generateOutputPortId(this.id, i);
            const { x, y } = (0,_NodeRendererUtility_js__WEBPACK_IMPORTED_MODULE_2__.calculateOutputPortXY)(i, this.size, this.numberOfOutputs);
            if (this.ports.has(portId)) {
                // Update y value of an existing output port.
                const port = this.ports.get(portId);
                if (!port) {
                    throw new Error(`Unable to find port with id ${portId}`);
                }
                port.x = x;
                port.y = y;
            }
            else {
                this.addPort({ id: portId, type: _GraphStyle_js__WEBPACK_IMPORTED_MODULE_1__.PortTypes.Out, x, y, label: undefined });
            }
        }
    }
    addPort(port) {
        this.ports.set(port.id, port);
    }
}
/**
 * Generates the port id for the input of node.
 */
const generateInputPortId = (nodeId, inputIndex) => {
    return `${nodeId}-input-${inputIndex || 0}`;
};
/**
 * Generates the port id for the output of node.
 */
const generateOutputPortId = (nodeId, outputIndex) => {
    return `${nodeId}-output-${outputIndex || 0}`;
};
/**
 * Generates the port id for the param of node.
 */
const generateParamPortId = (nodeId, paramId) => {
    return `${nodeId}-param-${paramId}`;
};
// A label generator to convert UUID of node to shorter label to display.
// Each graph should have its own generator since the node count starts from 0.
class NodeLabelGenerator {
    constructor() {
        Object.defineProperty(this, "totalNumberOfNodes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.totalNumberOfNodes = 0;
    }
    /**
     * Generates the label for a node of a graph.
     */
    generateLabel(nodeType) {
        // To make the label concise, remove the suffix "Node" from the nodeType.
        if (nodeType.endsWith('Node')) {
            nodeType = nodeType.slice(0, nodeType.length - 4);
        }
        // Also, use an integer to replace the long UUID.
        this.totalNumberOfNodes += 1;
        const label = `${nodeType} ${this.totalNumberOfNodes}`;
        return label;
    }
}
let contextForFontTextMeasuring;
/**
 * Get the text width using given font style.
 */
const measureTextWidth = (text, fontStyle) => {
    if (!contextForFontTextMeasuring) {
        const context = document.createElement('canvas').getContext('2d');
        if (!context) {
            throw new Error('Unable to create canvas context.');
        }
        contextForFontTextMeasuring = context;
    }
    const context = contextForFontTextMeasuring;
    context.save();
    if (fontStyle) {
        context.font = fontStyle;
    }
    const width = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.UIUtils.measureTextWidth(context, text);
    context.restore();
    return width;
};


/***/ })

}]);