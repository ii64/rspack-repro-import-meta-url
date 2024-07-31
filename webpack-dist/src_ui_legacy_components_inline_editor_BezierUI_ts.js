"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_inline_editor_BezierUI_ts"],{

/***/ "./src/ui/legacy/components/inline_editor/BezierUI.ts":
/*!************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/BezierUI.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BezierUI: () => (/* binding */ BezierUI),
/* harmony export */   Height: () => (/* binding */ Height)
/* harmony export */ });
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class BezierUI {
    constructor({ width, height, marginTop, controlPointRadius, shouldDrawLine }) {
        Object.defineProperty(this, "width", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "height", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "marginTop", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "radius", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shouldDrawLine", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.width = width;
        this.height = height;
        this.marginTop = marginTop;
        this.radius = controlPointRadius;
        this.shouldDrawLine = shouldDrawLine;
    }
    static drawVelocityChart(bezier, path, width) {
        const height = Height;
        let pathBuilder = ['M', 0, height];
        /** @const */ const sampleSize = 1 / 40;
        let prev = bezier.evaluateAt(0);
        for (let t = sampleSize; t < 1 + sampleSize; t += sampleSize) {
            const current = bezier.evaluateAt(t);
            let slope = (current.y - prev.y) / (current.x - prev.x);
            const weightedX = prev.x * (1 - t) + current.x * t;
            slope = Math.tanh(slope / 1.5); // Normalise slope
            pathBuilder = pathBuilder.concat(['L', (weightedX * width).toFixed(2), (height - slope * height).toFixed(2)]);
            prev = current;
        }
        pathBuilder = pathBuilder.concat(['L', width.toFixed(2), height, 'Z']);
        path.setAttribute('d', pathBuilder.join(' '));
    }
    curveWidth() {
        return this.width - this.radius * 2;
    }
    curveHeight() {
        return this.height - this.radius * 2 - this.marginTop * 2;
    }
    drawLine(parentElement, className, x1, y1, x2, y2) {
        const line = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createSVGChild(parentElement, 'line', className);
        line.setAttribute('x1', String(x1 + this.radius));
        line.setAttribute('y1', String(y1 + this.radius + this.marginTop));
        line.setAttribute('x2', String(x2 + this.radius));
        line.setAttribute('y2', String(y2 + this.radius + this.marginTop));
    }
    drawControlPoints(parentElement, startX, startY, controlX, controlY) {
        this.drawLine(parentElement, 'bezier-control-line', startX, startY, controlX, controlY);
        const circle = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createSVGChild(parentElement, 'circle', 'bezier-control-circle');
        circle.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_0__.controlPoint('bezier.control-circle').track({ drag: true })}`);
        circle.setAttribute('cx', String(controlX + this.radius));
        circle.setAttribute('cy', String(controlY + this.radius + this.marginTop));
        circle.setAttribute('r', String(this.radius));
    }
    drawCurve(bezier, svg) {
        if (!bezier) {
            return;
        }
        const width = this.curveWidth();
        const height = this.curveHeight();
        svg.setAttribute('width', String(this.width));
        svg.setAttribute('height', String(this.height));
        svg.removeChildren();
        const group = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createSVGChild(svg, 'g');
        if (this.shouldDrawLine) {
            this.drawLine(group, 'linear-line', 0, height, width, 0);
        }
        const curve = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createSVGChild(group, 'path', 'bezier-path');
        const curvePoints = [
            new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.Point(bezier.controlPoints[0].x * width + this.radius, (1 - bezier.controlPoints[0].y) * height + this.radius + this.marginTop),
            new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.Point(bezier.controlPoints[1].x * width + this.radius, (1 - bezier.controlPoints[1].y) * height + this.radius + this.marginTop),
            new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.Point(width + this.radius, this.marginTop + this.radius),
        ];
        curve.setAttribute('d', 'M' + this.radius + ',' + (height + this.radius + this.marginTop) + ' C' + curvePoints.join(' '));
        this.drawControlPoints(group, 0, height, bezier.controlPoints[0].x * width, (1 - bezier.controlPoints[0].y) * height);
        this.drawControlPoints(group, width, 0, bezier.controlPoints[1].x * width, (1 - bezier.controlPoints[1].y) * height);
    }
}
const Height = 26;


/***/ })

}]);