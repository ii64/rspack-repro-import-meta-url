"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_web_audio_graph_visualizer_NodeRendererUtility_js"], {
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

}]);