"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_web_audio_graph_visualizer_NodeRendererUtility_ts"],{

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


/***/ })

}]);