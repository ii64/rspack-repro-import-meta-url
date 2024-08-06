"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_srgb_overlay_srgb_overlay_js"],{

/***/ "./ui/components/srgb_overlay/SrgbOverlay.js":
/*!***************************************************!*\
  !*** ./ui/components/srgb_overlay/SrgbOverlay.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SrgbOverlay: () => (/* binding */ SrgbOverlay)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _srgbOverlay_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./srgbOverlay.css.js */ "./ui/components/srgb_overlay/srgbOverlay.css.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




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
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `devtools-spectrum-srgb-overlay`;
    #shadow = this.attachShadow({ mode: 'open' });
    constructor() {
        super();
        this.#shadow.adoptedStyleSheets = [
            _srgbOverlay_css_js__WEBPACK_IMPORTED_MODULE_3__["default"],
        ];
    }
    #getLinePoints({ hue, width, height }) {
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
    }
    #closestPointAtHeight(points, atHeight) {
        let min = Infinity;
        let closestPoint = null;
        for (const point of points) {
            if (Math.abs(atHeight - point.y) <= min) {
                min = Math.abs(atHeight - point.y);
                closestPoint = point;
            }
        }
        return closestPoint;
    }
    render({ hue, width, height }) {
        return coordinator.write('Srgb Overlay render', () => {
            const points = this.#getLinePoints({ hue, width, height });
            if (!points || points.length === 0) {
                return;
            }
            const closestPoint = this.#closestPointAtHeight(points, height - SRGB_TEXT_UPPER_POINT_FROM_BOTTOM);
            if (!closestPoint) {
                return;
            }
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html `
          <span class="label" style="right: ${width - closestPoint.x}px">sRGB</span>
          <svg>
            <polyline points=${points.map(point => `${point.x.toFixed(2)},${point.y.toFixed(2)}`).join(' ')} class="gamut-line" />
          </svg>
        `, this.#shadow, { host: this });
        });
    }
}
customElements.define('devtools-spectrum-srgb-overlay', SrgbOverlay);
//# sourceMappingURL=SrgbOverlay.js.map

/***/ }),

/***/ "./ui/components/srgb_overlay/srgbOverlay.css.js":
/*!*******************************************************!*\
  !*** ./ui/components/srgb_overlay/srgbOverlay.css.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.gamut-line {
  /* We want to show 50% white color in all themes since this is drawn over a color rectangle */
  stroke: color-mix(in sRGB, var(--ref-palette-neutral100) 50%, transparent); /* stylelint-disable-line plugin/use_theme_colors */
  fill: none;
}

.label {
  position: absolute;
  bottom: 3px;
  margin-right: 5px;
  /* We want to show 50% white color in all themes since this is drawn over a color rectangle */
  color: color-mix(in sRGB, var(--ref-palette-neutral100) 50%, transparent); /* stylelint-disable-line plugin/use_theme_colors */
}

/*# sourceURL=srgbOverlay.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/srgb_overlay/srgb_overlay.js":
/*!****************************************************!*\
  !*** ./ui/components/srgb_overlay/srgb_overlay.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SrgbOverlay: () => (/* reexport module object */ _SrgbOverlay_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _SrgbOverlay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SrgbOverlay.js */ "./ui/components/srgb_overlay/SrgbOverlay.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=srgb_overlay.js.map

/***/ })

}]);