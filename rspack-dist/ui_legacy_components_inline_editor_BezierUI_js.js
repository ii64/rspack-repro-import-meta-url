"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_inline_editor_BezierUI_js"], {
"./ui/legacy/components/inline_editor/BezierUI.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BezierUI: function() { return BezierUI; },
  Height: function() { return Height; }
});
/* harmony import */var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
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


var BezierUI = /*#__PURE__*/ function() {
    "use strict";
    function BezierUI(param) {
        var width = param.width, height = param.height, marginTop = param.marginTop, controlPointRadius = param.controlPointRadius, shouldDrawLine = param.shouldDrawLine;
        _class_call_check(this, BezierUI);
        _define_property(this, "width", void 0);
        _define_property(this, "height", void 0);
        _define_property(this, "marginTop", void 0);
        _define_property(this, "radius", void 0);
        _define_property(this, "shouldDrawLine", void 0);
        this.width = width;
        this.height = height;
        this.marginTop = marginTop;
        this.radius = controlPointRadius;
        this.shouldDrawLine = shouldDrawLine;
    }
    _create_class(BezierUI, [
        {
            key: "curveWidth",
            value: function curveWidth() {
                return this.width - this.radius * 2;
            }
        },
        {
            key: "curveHeight",
            value: function curveHeight() {
                return this.height - this.radius * 2 - this.marginTop * 2;
            }
        },
        {
            key: "drawLine",
            value: function drawLine(parentElement, className, x1, y1, x2, y2) {
                var line = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createSVGChild(parentElement, 'line', className);
                line.setAttribute('x1', String(x1 + this.radius));
                line.setAttribute('y1', String(y1 + this.radius + this.marginTop));
                line.setAttribute('x2', String(x2 + this.radius));
                line.setAttribute('y2', String(y2 + this.radius + this.marginTop));
            }
        },
        {
            key: "drawControlPoints",
            value: function drawControlPoints(parentElement, startX, startY, controlX, controlY) {
                this.drawLine(parentElement, 'bezier-control-line', startX, startY, controlX, controlY);
                var circle = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createSVGChild(parentElement, 'circle', 'bezier-control-circle');
                circle.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_0__.controlPoint('bezier.control-circle').track({
                    drag: true
                })));
                circle.setAttribute('cx', String(controlX + this.radius));
                circle.setAttribute('cy', String(controlY + this.radius + this.marginTop));
                circle.setAttribute('r', String(this.radius));
            }
        },
        {
            key: "drawCurve",
            value: function drawCurve(bezier, svg) {
                if (!bezier) {
                    return;
                }
                var width = this.curveWidth();
                var height = this.curveHeight();
                svg.setAttribute('width', String(this.width));
                svg.setAttribute('height', String(this.height));
                svg.removeChildren();
                var group = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createSVGChild(svg, 'g');
                if (this.shouldDrawLine) {
                    this.drawLine(group, 'linear-line', 0, height, width, 0);
                }
                var curve = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createSVGChild(group, 'path', 'bezier-path');
                var curvePoints = [
                    new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.Point(bezier.controlPoints[0].x * width + this.radius, (1 - bezier.controlPoints[0].y) * height + this.radius + this.marginTop),
                    new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.Point(bezier.controlPoints[1].x * width + this.radius, (1 - bezier.controlPoints[1].y) * height + this.radius + this.marginTop),
                    new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.Point(width + this.radius, this.marginTop + this.radius)
                ];
                curve.setAttribute('d', 'M' + this.radius + ',' + (height + this.radius + this.marginTop) + ' C' + curvePoints.join(' '));
                this.drawControlPoints(group, 0, height, bezier.controlPoints[0].x * width, (1 - bezier.controlPoints[0].y) * height);
                this.drawControlPoints(group, width, 0, bezier.controlPoints[1].x * width, (1 - bezier.controlPoints[1].y) * height);
            }
        }
    ], [
        {
            key: "drawVelocityChart",
            value: function drawVelocityChart(bezier, path, width) {
                var height = Height;
                var pathBuilder = [
                    'M',
                    0,
                    height
                ];
                /** @const */ var sampleSize = 1 / 40;
                var prev = bezier.evaluateAt(0);
                for(var t = sampleSize; t < 1 + sampleSize; t += sampleSize){
                    var current = bezier.evaluateAt(t);
                    var slope = (current.y - prev.y) / (current.x - prev.x);
                    var weightedX = prev.x * (1 - t) + current.x * t;
                    slope = Math.tanh(slope / 1.5); // Normalise slope
                    pathBuilder = pathBuilder.concat([
                        'L',
                        (weightedX * width).toFixed(2),
                        (height - slope * height).toFixed(2)
                    ]);
                    prev = current;
                }
                pathBuilder = pathBuilder.concat([
                    'L',
                    width.toFixed(2),
                    height,
                    'Z'
                ]);
                path.setAttribute('d', pathBuilder.join(' '));
            }
        }
    ]);
    return BezierUI;
}();
var Height = 26; //# sourceMappingURL=BezierUI.js.map


}),

}]);