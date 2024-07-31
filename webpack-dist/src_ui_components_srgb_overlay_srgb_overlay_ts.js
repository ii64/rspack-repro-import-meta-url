"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_srgb_overlay_srgb_overlay_ts"],{

/***/ "./src/ui/components/srgb_overlay/SrgbOverlay.ts":
/*!*******************************************************!*\
  !*** ./src/ui/components/srgb_overlay/SrgbOverlay.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SrgbOverlay: () => (/* binding */ SrgbOverlay)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './srgbOverlay.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SrgbOverlay_instances, _SrgbOverlay_shadow, _SrgbOverlay_getLinePoints, _SrgbOverlay_closestPointAtHeight;




const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__.RenderCoordinator.RenderCoordinator.instance();
const SRGB_LABEL_HEIGHT = 10;
const SRGB_LABEL_BOTTOM = 3;
const SRGB_TEXT_UPPER_POINT_FROM_BOTTOM = SRGB_LABEL_HEIGHT + SRGB_LABEL_BOTTOM;
const EPSILON = 0.001;
// TODO(crbug.com/1409892): Use `Color` class here for a better code (and not duplicate isInGamut logic here)
function isColorInSrgbGamut(hsv) {
    const rgba = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.hsva2rgba([...hsv, 1]);
    const xyzd50 = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.displayP3ToXyzd50(rgba[0], rgba[1], rgba[2]);
    const srgb = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorConverter.ColorConverter.xyzd50ToSrgb(xyzd50[0], xyzd50[1], xyzd50[2]);
    return srgb.every(val => val + EPSILON >= 0 && val - EPSILON <= 1);
}
class SrgbOverlay extends HTMLElement {
    constructor() {
        super();
        _SrgbOverlay_instances.add(this);
        _SrgbOverlay_shadow.set(this, this.attachShadow({ mode: 'open' }));
        __classPrivateFieldGet(this, _SrgbOverlay_shadow, "f").adoptedStyleSheets = [
            Object(function webpackMissingModule() { var e = new Error("Cannot find module './srgbOverlay.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        ];
    }
    render({ hue, width, height }) {
        return coordinator.write('Srgb Overlay render', () => {
            const points = __classPrivateFieldGet(this, _SrgbOverlay_instances, "m", _SrgbOverlay_getLinePoints).call(this, { hue, width, height });
            if (!points || points.length === 0) {
                return;
            }
            const closestPoint = __classPrivateFieldGet(this, _SrgbOverlay_instances, "m", _SrgbOverlay_closestPointAtHeight).call(this, points, height - SRGB_TEXT_UPPER_POINT_FROM_BOTTOM);
            if (!closestPoint) {
                return;
            }
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html `
          <span class="label" style="right: ${width - closestPoint.x}px">sRGB</span>
          <svg>
            <polyline points=${points.map(point => `${point.x.toFixed(2)},${point.y.toFixed(2)}`).join(' ')} class="gamut-line" />
          </svg>
        `, __classPrivateFieldGet(this, _SrgbOverlay_shadow, "f"), { host: this });
        });
    }
}
_SrgbOverlay_shadow = new WeakMap(), _SrgbOverlay_instances = new WeakSet(), _SrgbOverlay_getLinePoints = function _SrgbOverlay_getLinePoints({ hue, width, height }) {
    if (width === 0 || height === 0) {
        return null;
    }
    const step = 1 / window.devicePixelRatio;
    const linePoints = [];
    let x = 0;
    for (let y = 0; y < height; y += step) {
        const value = 1 - (y / height);
        for (; x < width; x += step) {
            const saturation = x / width;
            if (!isColorInSrgbGamut([hue, saturation, value])) {
                linePoints.push({ x, y });
                break;
            }
        }
    }
    if (linePoints.length === 0) {
        return null;
    }
    const lastPoint = linePoints[linePoints.length - 1];
    if (lastPoint.x < width) {
        linePoints.push({
            y: lastPoint.y,
            x: width,
        });
    }
    return linePoints;
}, _SrgbOverlay_closestPointAtHeight = function _SrgbOverlay_closestPointAtHeight(points, atHeight) {
    let min = Infinity;
    let closestPoint = null;
    for (const point of points) {
        if (Math.abs(atHeight - point.y) <= min) {
            min = Math.abs(atHeight - point.y);
            closestPoint = point;
        }
    }
    return closestPoint;
};
Object.defineProperty(SrgbOverlay, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `devtools-spectrum-srgb-overlay`
});
customElements.define('devtools-spectrum-srgb-overlay', SrgbOverlay);


/***/ }),

/***/ "./src/ui/components/srgb_overlay/srgb_overlay.ts":
/*!********************************************************!*\
  !*** ./src/ui/components/srgb_overlay/srgb_overlay.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SrgbOverlay: () => (/* reexport module object */ _SrgbOverlay_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _SrgbOverlay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SrgbOverlay.js */ "./src/ui/components/srgb_overlay/SrgbOverlay.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ })

}]);