"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_color_picker_Spectrum_js"],{

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

/***/ }),

/***/ "./ui/legacy/components/color_picker/ColorFormatSpec.js":
/*!**************************************************************!*\
  !*** ./ui/legacy/components/color_picker/ColorFormatSpec.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorFormatSpec: () => (/* binding */ colorFormatSpec)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const roundAndStringify = (arr) => arr.map(el => _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.stringifyWithPrecision(el, 2));
const functionParamsText = (values) => {
    return `${values[0]} ${values[1]} ${values[2]} / ${values[3]}`;
};
const colorFormatSpec = {
    ["rgb" /* Common.Color.Format.RGB */]: {
        label: 'RGBA',
        toValues: function (color) {
            return roundAndStringify(color.as("rgba" /* Common.Color.Format.RGBA */).canonicalRGBA());
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`rgb(${functionParamsText(values)})`);
        },
    },
    ["hsl" /* Common.Color.Format.HSL */]: {
        label: 'HSLA',
        toValues: function (color) {
            const canonicalHslParams = roundAndStringify(color.as("hsla" /* Common.Color.Format.HSLA */).canonicalHSLA());
            canonicalHslParams[1] = canonicalHslParams[1] + '%';
            canonicalHslParams[2] = canonicalHslParams[2] + '%';
            return canonicalHslParams;
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`hsl(${functionParamsText(values)})`);
        },
    },
    ["hwb" /* Common.Color.Format.HWB */]: {
        label: 'HWBA',
        toValues: function (color) {
            const canonicalHwbParams = roundAndStringify(color.as("hwba" /* Common.Color.Format.HWBA */).canonicalHWBA());
            canonicalHwbParams[1] = canonicalHwbParams[1] + '%';
            canonicalHwbParams[2] = canonicalHwbParams[2] + '%';
            return canonicalHwbParams;
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`hwb(${functionParamsText(values)})`);
        },
    },
    ["lch" /* Common.Color.Format.LCH */]: {
        label: 'lchA',
        toValues: function (color) {
            const lchColor = color.as("lch" /* Common.Color.Format.LCH */);
            return roundAndStringify([lchColor.l, lchColor.c, lchColor.h, lchColor.alpha ?? 1]);
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`lch(${functionParamsText(values)})`);
        },
    },
    ["oklch" /* Common.Color.Format.OKLCH */]: {
        label: 'lchA',
        toValues: function (color) {
            const lchColor = color.as("oklch" /* Common.Color.Format.OKLCH */);
            return roundAndStringify([lchColor.l, lchColor.c, lchColor.h, lchColor.alpha ?? 1]);
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`oklch(${functionParamsText(values)})`);
        },
    },
    ["lab" /* Common.Color.Format.LAB */]: {
        label: 'labA',
        toValues: function (color) {
            const labColor = color.as("lab" /* Common.Color.Format.LAB */);
            return roundAndStringify([labColor.l, labColor.a, labColor.b, labColor.alpha ?? 1]);
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`lab(${functionParamsText(values)})`);
        },
    },
    ["oklab" /* Common.Color.Format.OKLAB */]: {
        label: 'labA',
        toValues: function (color) {
            const labColor = color.as("oklab" /* Common.Color.Format.OKLAB */);
            return roundAndStringify([labColor.l, labColor.a, labColor.b, labColor.alpha ?? 1]);
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`oklab(${functionParamsText(values)})`);
        },
    },
    ["srgb" /* Common.Color.Format.SRGB */]: {
        label: 'RGBA',
        toValues: function (color) {
            const srgbColor = color.as("srgb" /* Common.Color.Format.SRGB */);
            return roundAndStringify([srgbColor.p0, srgbColor.p1, srgbColor.p2, srgbColor.alpha ?? 1]);
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`color(${"srgb" /* Common.Color.Format.SRGB */} ${functionParamsText(values)})`);
        },
    },
    ["srgb-linear" /* Common.Color.Format.SRGB_LINEAR */]: {
        label: 'RGBA',
        toValues: function (color) {
            const srgbLinearColor = color.as("srgb-linear" /* Common.Color.Format.SRGB_LINEAR */);
            return roundAndStringify([srgbLinearColor.p0, srgbLinearColor.p1, srgbLinearColor.p2, srgbLinearColor.alpha ?? 1]);
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`color(${"srgb-linear" /* Common.Color.Format.SRGB_LINEAR */} ${functionParamsText(values)})`);
        },
    },
    ["display-p3" /* Common.Color.Format.DISPLAY_P3 */]: {
        label: 'RGBA',
        toValues(color) {
            const displayP3Color = color.as("display-p3" /* Common.Color.Format.DISPLAY_P3 */);
            return roundAndStringify([displayP3Color.p0, displayP3Color.p1, displayP3Color.p2, 1]);
        },
        fromValues(values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`color(${"display-p3" /* Common.Color.Format.DISPLAY_P3 */} ${functionParamsText(values)})`);
        },
    },
    ["a98-rgb" /* Common.Color.Format.A98_RGB */]: {
        label: 'RGBA',
        toValues: function (color) {
            const a98Color = color.as("a98-rgb" /* Common.Color.Format.A98_RGB */);
            return roundAndStringify([a98Color.p0, a98Color.p1, a98Color.p2, a98Color.alpha ?? 1]);
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`color(${"a98-rgb" /* Common.Color.Format.A98_RGB */} ${functionParamsText(values)})`);
        },
    },
    ["prophoto-rgb" /* Common.Color.Format.PROPHOTO_RGB */]: {
        label: 'RGBA',
        toValues: function (color) {
            const proPhotoRGBColor = color.as("prophoto-rgb" /* Common.Color.Format.PROPHOTO_RGB */);
            return roundAndStringify([proPhotoRGBColor.p0, proPhotoRGBColor.p1, proPhotoRGBColor.p2, proPhotoRGBColor.alpha ?? 1]);
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`color(${"prophoto-rgb" /* Common.Color.Format.PROPHOTO_RGB */} ${functionParamsText(values)})`);
        },
    },
    ["rec2020" /* Common.Color.Format.REC_2020 */]: {
        label: 'RGBA',
        toValues: function (color) {
            const rec2020Color = color.as("rec2020" /* Common.Color.Format.REC_2020 */);
            return roundAndStringify([rec2020Color.p0, rec2020Color.p1, rec2020Color.p2, rec2020Color.alpha ?? 1]);
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`color(${"rec2020" /* Common.Color.Format.REC_2020 */} ${functionParamsText(values)})`);
        },
    },
    ["xyz" /* Common.Color.Format.XYZ */]: {
        label: 'xyzA',
        toValues: function (color) {
            const xyzColor = color.as("xyz" /* Common.Color.Format.XYZ */);
            return roundAndStringify([xyzColor.p0, xyzColor.p1, xyzColor.p2, xyzColor.alpha ?? 1]);
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`color(${"xyz" /* Common.Color.Format.XYZ */} ${functionParamsText(values)})`);
        },
    },
    ["xyz-d50" /* Common.Color.Format.XYZ_D50 */]: {
        label: 'xyzA',
        toValues: function (color) {
            const xyzColor = color.as("xyz-d50" /* Common.Color.Format.XYZ_D50 */);
            return roundAndStringify([xyzColor.p0, xyzColor.p1, xyzColor.p2, xyzColor.alpha ?? 1]);
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`color(${"xyz-d50" /* Common.Color.Format.XYZ_D50 */} ${functionParamsText(values)})`);
        },
    },
    ["xyz-d65" /* Common.Color.Format.XYZ_D65 */]: {
        label: 'xyzA',
        toValues: function (color) {
            const xyzColor = color.as("xyz-d65" /* Common.Color.Format.XYZ_D65 */);
            return roundAndStringify([xyzColor.p0, xyzColor.p1, xyzColor.p2, xyzColor.alpha ?? 1]);
        },
        fromValues: function (values) {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(`color(${"xyz-d65" /* Common.Color.Format.XYZ_D65 */} ${functionParamsText(values)})`);
        },
    },
};
//# sourceMappingURL=ColorFormatSpec.js.map

/***/ }),

/***/ "./ui/legacy/components/color_picker/ContrastOverlay.js":
/*!**************************************************************!*\
  !*** ./ui/legacy/components/color_picker/ContrastOverlay.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContrastOverlay: () => (/* binding */ ContrastOverlay),
/* harmony export */   ContrastRatioLineBuilder: () => (/* binding */ ContrastRatioLineBuilder)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



class ContrastOverlay {
    contrastInfo;
    visible;
    contrastRatioSVG;
    contrastRatioLines;
    width;
    height;
    contrastRatioLineBuilder;
    contrastRatioLinesThrottler;
    drawContrastRatioLinesBound;
    constructor(contrastInfo, colorElement) {
        this.contrastInfo = contrastInfo;
        this.visible = false;
        this.contrastRatioSVG = _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(colorElement, 'svg', 'spectrum-contrast-container fill');
        this.contrastRatioLines = new Map();
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.isEnabled('apca')) {
            this.contrastRatioLines.set('APCA', _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(this.contrastRatioSVG, 'path', 'spectrum-contrast-line'));
        }
        else {
            this.contrastRatioLines.set('aa', _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(this.contrastRatioSVG, 'path', 'spectrum-contrast-line'));
            this.contrastRatioLines.set('aaa', _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(this.contrastRatioSVG, 'path', 'spectrum-contrast-line'));
        }
        this.width = 0;
        this.height = 0;
        this.contrastRatioLineBuilder = new ContrastRatioLineBuilder(this.contrastInfo);
        this.contrastRatioLinesThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(0);
        this.drawContrastRatioLinesBound = this.drawContrastRatioLines.bind(this);
        this.contrastInfo.addEventListener("ContrastInfoUpdated" /* Events.ContrastInfoUpdated */, this.update.bind(this));
    }
    update() {
        if (!this.visible || this.contrastInfo.isNull()) {
            return;
        }
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.isEnabled('apca') && this.contrastInfo.contrastRatioAPCA() === null) {
            return;
        }
        if (!this.contrastInfo.contrastRatio()) {
            return;
        }
        void this.contrastRatioLinesThrottler.schedule(this.drawContrastRatioLinesBound);
    }
    setDimensions(width, height) {
        this.width = width;
        this.height = height;
        this.update();
    }
    setVisible(visible) {
        this.visible = visible;
        this.contrastRatioSVG.classList.toggle('hidden', !visible);
        this.update();
    }
    async drawContrastRatioLines() {
        for (const [level, element] of this.contrastRatioLines) {
            const path = this.contrastRatioLineBuilder.drawContrastRatioLine(this.width, this.height, level);
            if (path) {
                element.setAttribute('d', path);
            }
            else {
                element.removeAttribute('d');
            }
        }
    }
}
class ContrastRatioLineBuilder {
    contrastInfo;
    constructor(contrastInfo) {
        this.contrastInfo = contrastInfo;
    }
    drawContrastRatioLine(width, height, level) {
        const isAPCA = _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.isEnabled('apca');
        const requiredContrast = isAPCA ? this.contrastInfo.contrastRatioAPCAThreshold() : this.contrastInfo.contrastRatioThreshold(level);
        if (!width || !height || requiredContrast === null) {
            return null;
        }
        const dS = 0.02;
        const H = 0;
        const S = 1;
        const V = 2;
        const A = 3;
        const color = this.contrastInfo.color();
        const bgColor = this.contrastInfo.bgColor();
        if (!color || !bgColor) {
            return null;
        }
        const fgRGBA = color.rgba();
        const fgHSVA = color.as("hsl" /* Common.Color.Format.HSL */).hsva();
        const bgRGBA = bgColor.rgba();
        const bgLuminance = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.luminance(bgRGBA);
        let blendedRGBA = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.blendColors(fgRGBA, bgRGBA);
        const fgLuminance = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.luminance(blendedRGBA);
        const fgIsLighter = fgLuminance > bgLuminance;
        const desiredLuminance = isAPCA ?
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.desiredLuminanceAPCA(bgLuminance, requiredContrast, fgIsLighter) :
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.desiredLuminance(bgLuminance, requiredContrast, fgIsLighter);
        if (isAPCA &&
            Math.abs(Math.round(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.contrastRatioByLuminanceAPCA(desiredLuminance, bgLuminance))) <
                requiredContrast) {
            return null;
        }
        let lastV = fgHSVA[V];
        let currentSlope = 0;
        const candidateHSVA = [fgHSVA[H], 0, 0, fgHSVA[A]];
        let pathBuilder = [];
        const candidateRGBA = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.hsva2rgba(candidateHSVA);
        blendedRGBA = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.blendColors(candidateRGBA, bgRGBA);
        let candidateLuminance = (candidateHSVA) => {
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.luminance(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.blendColors(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy.fromHSVA(candidateHSVA).rgba(), bgRGBA));
        };
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.isEnabled('apca')) {
            candidateLuminance = (candidateHSVA) => {
                return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.luminanceAPCA(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.blendColors(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy.fromHSVA(candidateHSVA).rgba(), bgRGBA));
            };
        }
        // Plot V for values of S such that the computed luminance approximates
        // `desiredLuminance`, until no suitable value for V can be found, or the
        // current value of S goes of out bounds.
        let s;
        for (s = 0; s < 1 + dS; s += dS) {
            s = Math.min(1, s);
            candidateHSVA[S] = s;
            // Extrapolate the approximate next value for `v` using the approximate
            // gradient of the curve.
            candidateHSVA[V] = lastV + currentSlope * dS;
            const v = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.approachColorValue(candidateHSVA, bgRGBA, V, desiredLuminance, candidateLuminance);
            if (v === null) {
                break;
            }
            // Approximate the current gradient of the curve.
            currentSlope = s === 0 ? 0 : (v - lastV) / dS;
            lastV = v;
            pathBuilder.push(pathBuilder.length ? 'L' : 'M');
            pathBuilder.push((s * width).toFixed(2));
            pathBuilder.push(((1 - v) * height).toFixed(2));
        }
        // If no suitable V value for an in-bounds S value was found, find the value
        // of S such that V === 1 and add that to the path.
        if (s < 1 + dS) {
            s -= dS;
            candidateHSVA[V] = 1;
            s = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.approachColorValue(candidateHSVA, bgRGBA, S, desiredLuminance, candidateLuminance);
            if (s !== null) {
                pathBuilder = pathBuilder.concat(['L', (s * width).toFixed(2), '-0.1']);
            }
        }
        if (pathBuilder.length === 0) {
            return null;
        }
        return pathBuilder.join(' ');
    }
}
//# sourceMappingURL=ContrastOverlay.js.map

/***/ }),

/***/ "./ui/legacy/components/color_picker/FormatPickerContextMenu.js":
/*!**********************************************************************!*\
  !*** ./ui/legacy/components/color_picker/FormatPickerContextMenu.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormatPickerContextMenu: () => (/* binding */ FormatPickerContextMenu)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const UIStrings = {
    /**
     *@description Tooltip text describing that a color was clipped after conversion to match the target gamut
     *@example {rgb(255 255 255)} PH1
     */
    colorClippedTooltipText: 'This color was clipped to match the format\'s gamut. The actual result was {PH1}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('ui/legacy/components/color_picker/FormatPickerContextMenu.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class FormatPickerContextMenu {
    #color;
    constructor(color) {
        this.#color = color;
    }
    async show(e, onSelect) {
        let resolveShowPromise = undefined;
        const showPromise = new Promise(resolve => {
            resolveShowPromise = resolve;
        });
        const legacyFormats = [
            "hex" /* Common.Color.Format.HEX */,
            "hexa" /* Common.Color.Format.HEXA */,
            "rgb" /* Common.Color.Format.RGB */,
            "rgba" /* Common.Color.Format.RGBA */,
            "hsl" /* Common.Color.Format.HSL */,
            "hwb" /* Common.Color.Format.HWB */,
        ];
        const modernFormats = [
            "lch" /* Common.Color.Format.LCH */,
            "oklch" /* Common.Color.Format.OKLCH */,
            "lab" /* Common.Color.Format.LAB */,
            "oklab" /* Common.Color.Format.OKLAB */,
            "srgb" /* Common.Color.Format.SRGB */,
            "srgb-linear" /* Common.Color.Format.SRGB_LINEAR */,
            "display-p3" /* Common.Color.Format.DISPLAY_P3 */,
            "a98-rgb" /* Common.Color.Format.A98_RGB */,
            "prophoto-rgb" /* Common.Color.Format.PROPHOTO_RGB */,
            "rec2020" /* Common.Color.Format.REC_2020 */,
            "xyz" /* Common.Color.Format.XYZ */,
            "xyz-d50" /* Common.Color.Format.XYZ_D50 */,
            "xyz-d65" /* Common.Color.Format.XYZ_D65 */,
        ];
        const menu = new _legacy_js__WEBPACK_IMPORTED_MODULE_3__.ContextMenu.ContextMenu(e, { onSoftMenuClosed: () => resolveShowPromise?.() });
        const legacySection = menu.section('legacy');
        const wideSection = menu.section('wide');
        const colorFunctionSection = menu.section('color-function').appendSubMenuItem('color()', false, 'color').section();
        if (!(this.#color instanceof _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Nickname)) {
            const nickname = this.#color.asLegacyColor().nickname();
            if (nickname) {
                this.addColorToSection(nickname, legacySection, onSelect);
            }
        }
        if (!(this.#color instanceof _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.ShortHex)) {
            const shortHex = this.#color.as((this.#color.alpha ?? 1) === 1 ? "hex" /* Common.Color.Format.HEX */ : "hexa" /* Common.Color.Format.HEXA */)
                .shortHex();
            if (shortHex) {
                this.addColorToSection(shortHex, legacySection, onSelect);
            }
        }
        for (const format of [...legacyFormats, ...modernFormats]) {
            if (format === this.#color.format()) {
                continue;
            }
            const newColor = this.#color.as(format);
            const section = legacyFormats.includes(format) ? legacySection :
                newColor instanceof _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.ColorFunction ? colorFunctionSection :
                    wideSection;
            this.addColorToSection(newColor, section, onSelect);
        }
        await menu.show();
        await showPromise;
    }
    addColorToSection(newColor, section, onSelect) {
        if (newColor instanceof _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy) {
            const originalHasAlpha = (this.#color.alpha ?? 1) !== 1;
            const isAlphaFormat = newColor.alpha !== null;
            // When the original color has alpha, only print alpha legacy formats. Otherwise, only print non-alpha legacy
            // formats.
            if (isAlphaFormat !== originalHasAlpha) {
                return;
            }
        }
        const label = newColor.asString();
        if (!label) {
            return;
        }
        let icon = undefined;
        if (newColor.isGamutClipped()) {
            icon = new _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon();
            icon.data = {
                iconName: 'warning',
                color: 'var(--icon-default)',
                width: '16px',
                height: '16px',
            };
            icon.style.marginLeft = '1px';
            icon.style.marginTop = '-1px';
            icon.style.minWidth = '16px';
            icon.style.minHeight = '16px';
        }
        const tooltip = icon ? i18nString(UIStrings.colorClippedTooltipText, { PH1: newColor.getAsRawString() ?? 'none' }) : undefined;
        const handler = () => onSelect(newColor);
        section.appendItem(label, handler, { additionalElement: icon, tooltip, jslogContext: newColor.isGamutClipped() ? 'color' : 'clipped-color' });
    }
}
//# sourceMappingURL=FormatPickerContextMenu.js.map

/***/ }),

/***/ "./ui/legacy/components/color_picker/Spectrum.js":
/*!*******************************************************!*\
  !*** ./ui/legacy/components/color_picker/Spectrum.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangeSource: () => (/* binding */ ChangeSource),
/* harmony export */   MaterialPalette: () => (/* binding */ MaterialPalette),
/* harmony export */   PaletteGenerator: () => (/* binding */ PaletteGenerator),
/* harmony export */   Spectrum: () => (/* binding */ Spectrum),
/* harmony export */   Swatch: () => (/* binding */ Swatch)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _components_srgb_overlay_srgb_overlay_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/srgb_overlay/srgb_overlay.js */ "./ui/components/srgb_overlay/srgb_overlay.js");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ColorFormatSpec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ColorFormatSpec.js */ "./ui/legacy/components/color_picker/ColorFormatSpec.js");
/* harmony import */ var _ContrastDetails_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ContrastDetails.js */ "./ui/legacy/components/color_picker/ContrastDetails.js");
/* harmony import */ var _ContrastOverlay_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ContrastOverlay.js */ "./ui/legacy/components/color_picker/ContrastOverlay.js");
/* harmony import */ var _FormatPickerContextMenu_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FormatPickerContextMenu.js */ "./ui/legacy/components/color_picker/FormatPickerContextMenu.js");
/* harmony import */ var _spectrum_css_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./spectrum.css.js */ "./ui/legacy/components/color_picker/spectrum.css.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2011 Brian Grinstead All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1.  Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 * 2.  Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of
 *     its contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */














const UIStrings = {
    /**
     *@description Tooltip text that appears when hovering over largeicon eyedropper button in Spectrum of the Color Picker
     * @example {c} PH1
     */
    toggleColorPicker: 'Eye dropper [{PH1}]',
    /**
     *@description Aria label for hue slider in Color Picker
     */
    changeHue: 'Change hue',
    /**
     * @description Aria label for alpha slider in Color Picker. Alpha refers to the alpha channel of a
     * color, and this tool allows the user to change the alpha value.
     */
    changeAlpha: 'Change alpha',
    /**
     *@description Aria label for HEX color format input
     */
    hex: 'HEX',
    /**
     *@description Aria label for color format switcher button in Color Picker
     */
    changeColorFormat: 'Change color format',
    /**
     *@description Screen reader reads this text when palette switcher button receives focus
     */
    previewPalettes: 'Preview palettes',
    /**
     *@description Tooltip text that appears when hovering over the largeicon add button in the Spectrum of the Color Picker
     */
    addToPalette: 'Add to palette',
    /**
     *@description Title text content in Spectrum of the Color Picker
     */
    colorPalettes: 'Color Palettes',
    /**
     *@description Label for close button in Color Picker
     */
    returnToColorPicker: 'Return to color picker',
    /**
     *@description Aria label which declares hex value of a swatch in the Color Picker
     *@example {#969696} PH1
     */
    colorS: 'Color {PH1}',
    /**
     *@description Color element title in Spectrum of the Color Picker
     *@example {#9c1724} PH1
     */
    longclickOrLongpressSpaceToShow: 'Long-click or long-press space to show alternate shades of {PH1}',
    /**
     *@description A context menu item in the Color Picker to organize the user-defined color palette (removes the user-defined color to which this action is performed)"
     */
    removeColor: 'Remove color',
    /**
     *@description A context menu item in the Color Picker to organize the user-defined color palette (removes all user-defined colors to the right of the color to which this action is performed)"
     */
    removeAllToTheRight: 'Remove all to the right',
    /**
     *@description A context menu item in the Color Picker to organize the user-defined color palette (removes all user-defined colors)"
     */
    clearPalette: 'Clear palette',
    /**
     *@description Aria label for RGBA and HSLA color format inputs in Color Picker
     *@example {R} PH1
     *@example {RGBA} PH2
     */
    sInS: '{PH1} in {PH2}',
    /**
     *@description Swatch copy icon title in Spectrum of the Color Picker
     */
    copyColorToClipboard: 'Copy color to clipboard',
    /**
     *@description Aria text for the swatch position. Swatch is the color picker spectrum tool.
     */
    pressArrowKeysMessage: 'Press arrow keys with or without modifiers to move swatch position. Arrow key with Shift key moves position largely, with Ctrl key it is less and with Alt key it is even less',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('ui/legacy/components/color_picker/Spectrum.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
const colorElementToMutable = new WeakMap();
const colorElementToColor = new WeakMap();
const srgbGamutFormats = [
    "srgb" /* Common.Color.Format.SRGB */,
    "rgb" /* Common.Color.Format.RGB */,
    "hex" /* Common.Color.Format.HEX */,
    "hsl" /* Common.Color.Format.HSL */,
    "hwb" /* Common.Color.Format.HWB */,
];
const IS_NATIVE_EYE_DROPPER_AVAILABLE = 'EyeDropper' in window;
function doesFormatSupportDisplayP3(format) {
    return !srgbGamutFormats.includes(format);
}
function convertColorFormat(colorFormat) {
    if (colorFormat === "rgba" /* Common.Color.Format.RGBA */) {
        return "rgb" /* Common.Color.Format.RGB */;
    }
    if (colorFormat === "hsla" /* Common.Color.Format.HSLA */) {
        return "hsl" /* Common.Color.Format.HSL */;
    }
    if (colorFormat === "hwba" /* Common.Color.Format.HWBA */) {
        return "hwb" /* Common.Color.Format.HWB */;
    }
    if (colorFormat === "hexa" /* Common.Color.Format.HEXA */) {
        return "hex" /* Common.Color.Format.HEX */;
    }
    return colorFormat;
}
// HSV by itself, without a color space, doesn't map to a color and
// it is usually interpreted as an sRGB color. However, it can also
// represent colors in other color spaces since `HSV` -> `RGB` mapping
// is not color space dependent. For example, color(display-p3 1 1 1) and rgb(1 1 1)
// map to the same HSV values. The tricky thing is, `hsl()` syntax is interpreted
// as it is in sRGB in CSS. So, when you convert those two colors and use as `hsl()`, it will
// show an sRGB color. Though, if there was a function `color-hsl(<color-space> h s l)`
// it was going to show the color in the color-space represented with `hsl`.
// This function, gets the HSV values by interpreting them in the given gamut.
function getHsvFromColor(gamut, color) {
    switch (gamut) {
        case "display-p3" /* SpectrumGamut.DISPLAY_P3 */: {
            const displayP3color = color.as("display-p3" /* Common.Color.Format.DISPLAY_P3 */);
            return [
                ..._core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.rgb2hsv([displayP3color.p0, displayP3color.p1, displayP3color.p2]),
                displayP3color.alpha || 1,
            ];
        }
        case "srgb" /* SpectrumGamut.SRGB */: {
            return color.as("hsl" /* Common.Color.Format.HSL */).hsva();
        }
    }
}
// Interprets the given `hsva` values in the given gamut and returns the concrete `Color` object.
function getColorFromHsva(gamut, hsva) {
    const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy.fromHSVA(hsva);
    switch (gamut) {
        case "display-p3" /* SpectrumGamut.DISPLAY_P3 */: {
            const rgba = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.hsva2rgba(hsva);
            return new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.ColorFunction("display-p3" /* Common.Color.Format.DISPLAY_P3 */, rgba[0], rgba[1], rgba[2], rgba[3], undefined);
        }
        case "srgb" /* SpectrumGamut.SRGB */: {
            return color;
        }
    }
}
class Spectrum extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Widget.VBox) {
    colorInternal;
    gamut = "srgb" /* SpectrumGamut.SRGB */;
    colorElement;
    colorDragElement;
    dragX;
    dragY;
    colorPickerButton;
    swatch;
    hueElement;
    hueSlider;
    alphaElement;
    alphaElementBackground;
    alphaSlider;
    displayContainer;
    textValues;
    textLabels;
    hexContainer;
    hexValue;
    contrastInfo;
    srgbOverlay;
    contrastOverlay;
    contrastDetails;
    contrastDetailsBackgroundColorPickedToggledBound;
    palettes;
    palettePanel;
    palettePanelShowing;
    paletteSectionContainer;
    paletteContainer;
    shadesContainer;
    deleteIconToolbar;
    deleteButton;
    addColorToolbar;
    colorPickedBound;
    hsv;
    hueAlphaWidth;
    dragWidth;
    dragHeight;
    colorDragElementHeight;
    slideHelperWidth;
    numPaletteRowsShown;
    selectedColorPalette;
    customPaletteSetting;
    colorOffset;
    closeButton;
    paletteContainerMutable;
    shadesCloseHandler;
    dragElement;
    dragHotSpotX;
    dragHotSpotY;
    colorNameInternal;
    colorFormat = "rgb" /* Common.Color.Format.RGB */;
    eyeDropperAbortController = null;
    isFormatPickerShown = false;
    // Used to represent how the current color
    // should be stringified externally (emitted event etc.).
    // For example, this is used when a color variable
    // selected form the palettes. That time, we don't
    // want to return the value of the variable but the
    // actual variable string.
    colorStringInternal;
    constructor(contrastInfo) {
        super(true);
        this.contentElement.tabIndex = 0;
        this.contentElement.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.dialog('colorPicker').parent('mapped').track({ keydown: 'Enter|Escape' })}`);
        this.colorElement = this.contentElement.createChild('div', 'spectrum-color');
        this.colorElement.tabIndex = 0;
        this.colorElement.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.canvas('color').track({
            click: true,
            drag: true,
            keydown: 'ArrowLeft|ArrowRight|ArrowDown|ArrowUp',
        })}`);
        this.setDefaultFocusedElement(this.colorElement);
        this.colorElement.addEventListener('keydown', this.onSliderKeydown.bind(this, positionColor.bind(this)));
        const swatchAriaText = i18nString(UIStrings.pressArrowKeysMessage);
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(this.colorElement, swatchAriaText);
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.markAsApplication(this.colorElement);
        this.colorDragElement = this.colorElement.createChild('div', 'spectrum-sat fill')
            .createChild('div', 'spectrum-val fill')
            .createChild('div', 'spectrum-dragger');
        this.dragX = 0;
        this.dragY = 0;
        const toolsContainer = this.contentElement.createChild('div', 'spectrum-tools');
        const toolbar = new _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.Toolbar('spectrum-eye-dropper', toolsContainer);
        const toggleEyeDropperShortcut = _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ShortcutRegistry.ShortcutRegistry.instance().shortcutsForAction('elements.toggle-eye-dropper');
        const definedShortcutKey = toggleEyeDropperShortcut[0]?.descriptors.flatMap(descriptor => descriptor.name.split(' + '))[0];
        this.colorPickerButton = new _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarToggle(i18nString(UIStrings.toggleColorPicker, { PH1: definedShortcutKey || '' }), 'color-picker', 'color-picker-filled', 'color-eye-dropper');
        this.colorPickerButton.setToggled(true);
        this.colorPickerButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, this.toggleColorPicker.bind(this, undefined));
        toolbar.appendToolbarItem(this.colorPickerButton);
        this.colorPickerButton.element.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.colorEyeDropper().track({ click: true })}`);
        this.swatch = new Swatch(toolsContainer);
        this.hueElement = toolsContainer.createChild('div', 'spectrum-hue');
        this.hueElement.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.slider('hue').track({
            click: true,
            drag: true,
            keydown: 'ArrowLeft|ArrowRight|ArrowDown|ArrowUp',
        })}`);
        this.hueElement.tabIndex = 0;
        this.hueElement.addEventListener('keydown', this.onSliderKeydown.bind(this, positionHue.bind(this)));
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(this.hueElement, i18nString(UIStrings.changeHue));
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.markAsSlider(this.hueElement, 0, 360);
        this.hueSlider = this.hueElement.createChild('div', 'spectrum-slider');
        this.alphaElement = toolsContainer.createChild('div', 'spectrum-alpha');
        this.alphaElement.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.slider('alpha').track({
            click: true,
            drag: true,
            keydown: 'ArrowLeft|ArrowRight|ArrowDown|ArrowUp',
        })}`);
        this.alphaElement.tabIndex = 0;
        this.alphaElement.addEventListener('keydown', this.onSliderKeydown.bind(this, positionAlpha.bind(this)));
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(this.alphaElement, i18nString(UIStrings.changeAlpha));
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.markAsSlider(this.alphaElement, 0, 1);
        this.alphaElementBackground = this.alphaElement.createChild('div', 'spectrum-alpha-background');
        this.alphaSlider = this.alphaElement.createChild('div', 'spectrum-slider');
        // RGBA/HSLA/HWBA display.
        this.displayContainer = toolsContainer.createChild('div', 'spectrum-text source-code');
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.markAsPoliteLiveRegion(this.displayContainer, true);
        this.textValues = [];
        for (let i = 0; i < 4; ++i) {
            const inputValue = _legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createInput('spectrum-text-value');
            inputValue.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.value().track({ change: true, keydown: 'ArrowUp|ArrowDown' }).context(i)}`);
            this.displayContainer.appendChild(inputValue);
            inputValue.maxLength = 4;
            this.textValues.push(inputValue);
            inputValue.addEventListener('keydown', this.inputChanged.bind(this), false);
            inputValue.addEventListener('input', this.inputChanged.bind(this), false);
            inputValue.addEventListener('wheel', this.inputChanged.bind(this), false);
            inputValue.addEventListener('paste', this.pasted.bind(this), false);
        }
        this.textLabels = this.displayContainer.createChild('div', 'spectrum-text-label');
        // HEX display.
        this.hexContainer = toolsContainer.createChild('div', 'spectrum-text spectrum-text-hex source-code');
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.markAsPoliteLiveRegion(this.hexContainer, true);
        this.hexValue = _legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createInput('spectrum-text-value');
        this.hexValue.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.value('hex').track({ keydown: 'ArrowUp|ArrowDown', change: true })}`);
        this.hexContainer.appendChild(this.hexValue);
        this.hexValue.maxLength = 9;
        this.hexValue.addEventListener('keydown', this.inputChanged.bind(this), false);
        this.hexValue.addEventListener('input', this.inputChanged.bind(this), false);
        this.hexValue.addEventListener('wheel', this.inputChanged.bind(this), false);
        this.hexValue.addEventListener('paste', this.pasted.bind(this), false);
        const label = this.hexContainer.createChild('div', 'spectrum-text-label');
        label.textContent = i18nString(UIStrings.hex);
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(this.hexValue, label.textContent);
        const displaySwitcher = toolsContainer.createChild('button', 'spectrum-display-switcher spectrum-switcher');
        displaySwitcher.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.dropDown('color-format').track({ click: true })}`);
        appendSwitcherIcon(displaySwitcher);
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.setTitle(displaySwitcher, i18nString(UIStrings.changeColorFormat));
        displaySwitcher.tabIndex = 0;
        displaySwitcher.addEventListener('click', (ev) => {
            void this.showFormatPicker(ev);
        });
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.installDragHandle(this.hueElement, this.dragStart.bind(this, positionHue.bind(this)), positionHue.bind(this), null, 'ew-resize', 'crosshair');
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.installDragHandle(this.alphaElement, this.dragStart.bind(this, positionAlpha.bind(this)), positionAlpha.bind(this), null, 'ew-resize', 'crosshair');
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.installDragHandle(this.colorElement, this.dragStart.bind(this, positionColor.bind(this)), positionColor.bind(this), null, 'move', 'crosshair');
        // Color contrast business.
        if (contrastInfo) {
            this.contrastInfo = contrastInfo;
            this.contrastOverlay = new _ContrastOverlay_js__WEBPACK_IMPORTED_MODULE_11__.ContrastOverlay(this.contrastInfo, this.colorElement);
            this.contrastDetails = new _ContrastDetails_js__WEBPACK_IMPORTED_MODULE_10__.ContrastDetails(this.contrastInfo, this.contentElement, this.toggleColorPicker.bind(this), this.contrastPanelExpandedChanged.bind(this), this.colorSelected.bind(this));
            this.contrastDetailsBackgroundColorPickedToggledBound =
                this.contrastDetailsBackgroundColorPickedToggled.bind(this);
        }
        this.element.classList.add('flex-none');
        this.palettes = new Map();
        this.palettePanel = this.contentElement.createChild('div', 'palette-panel');
        this.palettePanel.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('palette-panel')}`);
        this.palettePanelShowing = false;
        this.paletteSectionContainer = this.contentElement.createChild('div', 'spectrum-palette-container');
        this.paletteContainer = this.paletteSectionContainer.createChild('div', 'spectrum-palette');
        this.paletteContainer.addEventListener('contextmenu', this.showPaletteColorContextMenu.bind(this, -1));
        this.shadesContainer = this.contentElement.createChild('div', 'palette-color-shades hidden');
        this.shadesContainer.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.paletteColorShades()}`);
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.installDragHandle(this.paletteContainer, this.paletteDragStart.bind(this), this.paletteDrag.bind(this), this.paletteDragEnd.bind(this), 'default');
        const paletteSwitcher = this.paletteSectionContainer.createChild('div', 'spectrum-palette-switcher spectrum-switcher');
        paletteSwitcher.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.dropDown('palette-switcher').track({ click: true })}`);
        appendSwitcherIcon(paletteSwitcher);
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.setTitle(paletteSwitcher, i18nString(UIStrings.previewPalettes));
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.markAsButton(paletteSwitcher);
        paletteSwitcher.tabIndex = 0;
        self.onInvokeElement(paletteSwitcher, event => {
            this.togglePalettePanel(true);
            event.consume(true);
        });
        this.deleteIconToolbar = new _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.Toolbar('delete-color-toolbar');
        this.deleteButton = new _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton('', 'bin');
        this.deleteIconToolbar.appendToolbarItem(this.deleteButton);
        const overlay = this.contentElement.createChild('div', 'spectrum-overlay fill');
        overlay.addEventListener('click', this.togglePalettePanel.bind(this, false));
        this.addColorToolbar = new _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.Toolbar('add-color-toolbar');
        const addColorButton = new _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton(i18nString(UIStrings.addToPalette), 'plus', undefined, 'add-color');
        addColorButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, this.onAddColorMousedown.bind(this));
        addColorButton.element.addEventListener('keydown', this.onAddColorKeydown.bind(this));
        this.addColorToolbar.appendToolbarItem(addColorButton);
        this.colorPickedBound = this.colorPicked.bind(this);
        this.numPaletteRowsShown = -1;
        this.contentElement.addEventListener('focusout', ev => {
            // Do not propagate 'focusout' event when the format picker
            // context menu is shown. The reason is, when it is shown,
            // 'focusout' event is emitted and SwatchPopoverHelper listens
            // to it and closes the color picker. However, we don't want
            // color picker to be closed when the focus is gone for the
            // format picker context menu. That's why we stop the propagation.
            if (this.isFormatPickerShown) {
                ev.stopImmediatePropagation();
            }
        });
        this.srgbOverlay = new _components_srgb_overlay_srgb_overlay_js__WEBPACK_IMPORTED_MODULE_6__.SrgbOverlay.SrgbOverlay();
        this.loadPalettes();
        new PaletteGenerator(palette => {
            if (palette.colors.length) {
                this.addPalette(palette);
            }
            else if (this.selectedColorPalette.get() === palette.title) {
                this.paletteSelected(MaterialPalette);
            }
        });
        function getUpdatedSliderPosition(element, event) {
            const keyboardEvent = event;
            const elementPosition = element.getBoundingClientRect();
            switch (keyboardEvent.key) {
                case 'ArrowLeft':
                case 'ArrowDown':
                    return elementPosition.left - 1;
                case 'ArrowRight':
                case 'ArrowUp':
                    return elementPosition.right + 1;
                default:
                    return event.x;
            }
        }
        function positionHue(event) {
            const hsva = this.hsv.slice();
            const sliderPosition = getUpdatedSliderPosition(this.hueSlider, event);
            const hueAlphaLeft = this.hueElement.getBoundingClientRect().left;
            const positionFraction = (sliderPosition - hueAlphaLeft) / this.hueAlphaWidth;
            const newHue = 1 - positionFraction;
            hsva[0] = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.clamp(newHue, 0, 1);
            this.innerSetColor(hsva, '', undefined /* colorName */, undefined, ChangeSource.Other);
            const color = getColorFromHsva(this.gamut, hsva);
            const colorValues = color.as("hsl" /* Common.Color.Format.HSL */).canonicalHSLA();
            _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setValueNow(this.hueElement, colorValues[0]);
        }
        function positionAlpha(event) {
            const hsva = this.hsv.slice();
            const sliderPosition = getUpdatedSliderPosition(this.alphaSlider, event);
            const hueAlphaLeft = this.hueElement.getBoundingClientRect().left;
            const positionFraction = (sliderPosition - hueAlphaLeft) / this.hueAlphaWidth;
            const newAlpha = Math.round(positionFraction * 100) / 100;
            hsva[3] = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.clamp(newAlpha, 0, 1);
            this.innerSetColor(hsva, '', undefined /* colorName */, undefined, ChangeSource.Other);
            const color = getColorFromHsva(this.gamut, hsva);
            const colorValues = color.as("hsl" /* Common.Color.Format.HSL */).canonicalHSLA();
            _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setValueText(this.alphaElement, colorValues[3]);
        }
        function positionColor(event) {
            const hsva = this.hsv.slice();
            const colorPosition = getUpdatedColorPosition(this.colorDragElement, event);
            this.colorOffset = this.colorElement.getBoundingClientRect();
            hsva[1] = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.clamp((colorPosition.x - this.colorOffset.left) / this.dragWidth, 0, 1);
            hsva[2] = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.clamp(1 - (colorPosition.y - this.colorOffset.top) / this.dragHeight, 0, 1);
            this.innerSetColor(hsva, '', undefined /* colorName */, undefined, ChangeSource.Other);
        }
        function getUpdatedColorPosition(dragElement, event) {
            const elementPosition = dragElement.getBoundingClientRect();
            const verticalX = elementPosition.x + elementPosition.width / 2;
            const horizontalY = elementPosition.y + elementPosition.width / 2;
            const defaultUnit = elementPosition.width / 4;
            const unit = getUnitToMove(defaultUnit, event);
            const keyboardEvent = event;
            switch (keyboardEvent.key) {
                case 'ArrowLeft':
                    return { x: elementPosition.left - unit, y: horizontalY };
                case 'ArrowRight':
                    return { x: elementPosition.right + unit, y: horizontalY };
                case 'ArrowDown':
                    return { x: verticalX, y: elementPosition.bottom + unit };
                case 'ArrowUp':
                    return { x: verticalX, y: elementPosition.top - unit };
                default:
                    return {
                        x: event.x,
                        y: event.y,
                    };
            }
        }
        function getUnitToMove(unit, event) {
            const keyboardEvent = event;
            if (keyboardEvent.altKey) {
                unit = 1;
            }
            else if (keyboardEvent.ctrlKey) {
                unit = 10;
            }
            else if (keyboardEvent.shiftKey) {
                unit = 20;
            }
            return unit;
        }
        function appendSwitcherIcon(parentElement) {
            const switcherIcon = new _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
            switcherIcon.data = { iconName: 'fold-more', color: 'var(--icon-default)', width: '16px', height: '16px' };
            parentElement.appendChild(switcherIcon);
        }
    }
    dragStart(callback, event) {
        this.colorOffset = this.colorElement.getBoundingClientRect();
        callback(event);
        return true;
    }
    contrastDetailsBackgroundColorPickedToggled(event) {
        if (event.data) {
            void this.toggleColorPicker(false);
        }
    }
    contrastPanelExpandedChanged() {
        if (!this.contrastOverlay || !this.contrastDetails) {
            return;
        }
        this.contrastOverlay.setVisible(this.contrastDetails.expanded());
        this.resizeForSelectedPalette(true);
        if (this.contrastDetails.expanded()) {
            this.hideSrgbOverlay();
        }
        else {
            this.showSrgbOverlay();
        }
    }
    updatePalettePanel() {
        this.palettePanel.removeChildren();
        const title = this.palettePanel.createChild('div', 'palette-title');
        title.textContent = i18nString(UIStrings.colorPalettes);
        const toolbar = new _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.Toolbar('', this.palettePanel);
        this.closeButton = new _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton(i18nString(UIStrings.returnToColorPicker), 'cross');
        this.closeButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, this.togglePalettePanel.bind(this, false));
        this.closeButton.element.addEventListener('keydown', this.onCloseBtnKeydown.bind(this));
        this.closeButton.element.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.close().track({ click: true })}`);
        toolbar.appendToolbarItem(this.closeButton);
        for (const palette of this.palettes.values()) {
            this.palettePanel.appendChild(this.createPreviewPaletteElement(palette));
        }
        this.contentElement.scrollIntoView({ block: 'end' });
    }
    togglePalettePanel(show) {
        if (this.palettePanelShowing === show) {
            return;
        }
        if (show) {
            this.updatePalettePanel();
        }
        this.palettePanelShowing = show;
        this.contentElement.classList.toggle('palette-panel-showing', show);
        this.focusInternal();
    }
    onCloseBtnKeydown(event) {
        if (_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardUtilities.isEscKey(event) || _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardUtilities.isEnterOrSpaceKey(event)) {
            this.togglePalettePanel(false);
            event.consume(true);
        }
    }
    onSliderKeydown(sliderNewPosition, event) {
        const keyboardEvent = event;
        switch (keyboardEvent.key) {
            case 'ArrowLeft':
            case 'ArrowRight':
            case 'ArrowDown':
            case 'ArrowUp':
                sliderNewPosition(event);
                event.consume(true);
        }
    }
    /**
     * (Suppress warning about preventScroll)
     */
    focusInternal() {
        if (!this.isShowing()) {
            return;
        }
        if (this.palettePanelShowing && this.closeButton) {
            this.closeButton.element.focus({ preventScroll: true });
        }
        else {
            this.contentElement.focus();
        }
    }
    createPaletteColor(colorText, colorName, animationDelay) {
        const element = document.createElement('div');
        element.classList.add('spectrum-palette-color');
        element.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.item().track({
            click: true,
            drag: true,
            keydown: 'ArrowUp|ArrowDown|ArrowLeft|ArrowRight|Escape|Tab',
        })}`);
        element.style.background =
            _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.sprintf('linear-gradient(%s, %s), var(--image-file-checker)', colorText, colorText);
        if (animationDelay) {
            element.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 100, delay: animationDelay, fill: 'backwards' });
        }
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Tooltip.Tooltip.install(element, colorName || colorText);
        return element;
    }
    showPalette(palette, animate, _event) {
        this.resizeForSelectedPalette();
        this.paletteContainer.removeChildren();
        for (let i = 0; i < palette.colors.length; i++) {
            const animationDelay = animate ? i * 100 / palette.colors.length : 0;
            const colorElement = this.createPaletteColor(palette.colors[i], palette.colorNames[i], animationDelay);
            _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.markAsButton(colorElement);
            _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(colorElement, i18nString(UIStrings.colorS, { PH1: palette.colors[i] }));
            colorElement.tabIndex = -1;
            colorElement.addEventListener('mousedown', this.paletteColorSelected.bind(this, palette.colors[i], palette.colorNames[i], Boolean(palette.matchUserFormat)));
            colorElement.addEventListener('focus', this.paletteColorSelected.bind(this, palette.colors[i], palette.colorNames[i], Boolean(palette.matchUserFormat)));
            colorElement.addEventListener('keydown', this.onPaletteColorKeydown.bind(this, i));
            if (palette.mutable) {
                colorElementToMutable.set(colorElement, true);
                colorElementToColor.set(colorElement, palette.colors[i]);
                colorElement.addEventListener('contextmenu', this.showPaletteColorContextMenu.bind(this, i));
            }
            else if (palette === MaterialPalette) {
                colorElement.classList.add('has-material-shades');
                let shadow = colorElement.createChild('div', 'spectrum-palette-color spectrum-palette-color-shadow');
                shadow.style.background = palette.colors[i];
                shadow = colorElement.createChild('div', 'spectrum-palette-color spectrum-palette-color-shadow');
                shadow.style.background = palette.colors[i];
                const tooltipText = i18nString(UIStrings.longclickOrLongpressSpaceToShow, { PH1: palette.colors[i] });
                _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Tooltip.Tooltip.install(colorElement, tooltipText);
                _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(colorElement, tooltipText);
                new _legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.LongClickController(colorElement, this.showLightnessShades.bind(this, colorElement, palette.colors[i]));
            }
            this.paletteContainer.appendChild(colorElement);
        }
        if (this.paletteContainer.childNodes.length > 0) {
            this.paletteContainer.childNodes[0].tabIndex = 0;
        }
        this.paletteContainerMutable = palette.mutable;
        if (palette.mutable) {
            this.paletteContainer.appendChild(this.addColorToolbar.element);
            this.paletteContainer.appendChild(this.deleteIconToolbar.element);
        }
        else {
            this.addColorToolbar.element.remove();
            this.deleteIconToolbar.element.remove();
        }
        this.togglePalettePanel(false);
        this.focusInternal();
    }
    showLightnessShades(colorElement, colorText, _event) {
        function closeLightnessShades(element) {
            this.shadesContainer.classList.add('hidden');
            element.classList.remove('spectrum-shades-shown');
            if (this.shadesCloseHandler) {
                this.shadesContainer.ownerDocument.removeEventListener('mousedown', this.shadesCloseHandler, true);
            }
            delete this.shadesCloseHandler;
        }
        if (this.shadesCloseHandler) {
            this.shadesCloseHandler();
        }
        this.shadesContainer.classList.remove('hidden');
        this.shadesContainer.removeChildren();
        this.shadesContainer.animate([{ transform: 'scaleY(0)', opacity: '0' }, { transform: 'scaleY(1)', opacity: '1' }], { duration: 200, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' });
        let shadesTop = this.paletteContainer.offsetTop + colorElement.offsetTop +
            (colorElement.parentElement ? colorElement.parentElement.offsetTop : 0);
        if (this.contrastDetails) {
            shadesTop += this.contrastDetails.element().offsetHeight;
        }
        this.shadesContainer.style.top = shadesTop + 'px';
        this.shadesContainer.style.left = colorElement.offsetLeft + 'px';
        colorElement.classList.add('spectrum-shades-shown');
        const shades = MaterialPaletteShades.get(colorText);
        if (shades !== undefined) {
            for (let i = shades.length - 1; i >= 0; i--) {
                const shadeElement = this.createPaletteColor(shades[i], undefined /* colorName */, i * 200 / shades.length + 100);
                _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.markAsButton(shadeElement);
                _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(shadeElement, i18nString(UIStrings.colorS, { PH1: shades[i] }));
                shadeElement.tabIndex = -1;
                shadeElement.addEventListener('mousedown', this.paletteColorSelected.bind(this, shades[i], shades[i], false));
                shadeElement.addEventListener('focus', this.paletteColorSelected.bind(this, shades[i], shades[i], false));
                shadeElement.addEventListener('keydown', this.onShadeColorKeydown.bind(this, colorElement));
                this.shadesContainer.appendChild(shadeElement);
            }
        }
        if (this.shadesContainer.childNodes.length > 0) {
            this.shadesContainer.childNodes[this.shadesContainer.childNodes.length - 1].focus();
        }
        this.shadesCloseHandler = closeLightnessShades.bind(this, colorElement);
        this.shadesContainer.ownerDocument.addEventListener('mousedown', this.shadesCloseHandler, true);
    }
    slotIndexForEvent(event) {
        const mouseEvent = event;
        const localX = mouseEvent.pageX - this.paletteContainer.getBoundingClientRect().left;
        const localY = mouseEvent.pageY - this.paletteContainer.getBoundingClientRect().top;
        const col = Math.min(localX / COLOR_CHIP_SIZE | 0, ITEMS_PER_PALETTE_ROW - 1);
        const row = (localY / COLOR_CHIP_SIZE) | 0;
        return Math.min(row * ITEMS_PER_PALETTE_ROW + col, this.customPaletteSetting.get().colors.length - 1);
    }
    isDraggingToBin(event) {
        const mouseEvent = event;
        return mouseEvent.pageX > this.deleteIconToolbar.element.getBoundingClientRect().left;
    }
    paletteDragStart(event) {
        const element = _legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.deepElementFromEvent(event);
        if (!element || !colorElementToMutable.get(element)) {
            return false;
        }
        const index = this.slotIndexForEvent(event);
        this.dragElement = element;
        const mouseEvent = event;
        this.dragHotSpotX = mouseEvent.pageX - (index % ITEMS_PER_PALETTE_ROW) * COLOR_CHIP_SIZE;
        this.dragHotSpotY = mouseEvent.pageY - (index / ITEMS_PER_PALETTE_ROW | 0) * COLOR_CHIP_SIZE;
        return true;
    }
    paletteDrag(event) {
        const mouseEvent = event;
        if (mouseEvent.pageX < this.paletteContainer.getBoundingClientRect().left ||
            mouseEvent.pageY < this.paletteContainer.getBoundingClientRect().top) {
            return;
        }
        if (!this.dragElement || this.dragHotSpotX === undefined || this.dragHotSpotY === undefined) {
            return;
        }
        const newIndex = this.slotIndexForEvent(event);
        const offsetX = mouseEvent.pageX - (newIndex % ITEMS_PER_PALETTE_ROW) * COLOR_CHIP_SIZE;
        const offsetY = mouseEvent.pageY - (newIndex / ITEMS_PER_PALETTE_ROW | 0) * COLOR_CHIP_SIZE;
        const isDeleting = this.isDraggingToBin(event);
        this.deleteIconToolbar.element.classList.add('dragging');
        this.deleteIconToolbar.element.classList.toggle('delete-color-toolbar-active', isDeleting);
        const dragElementTransform = 'translateX(' + (offsetX - this.dragHotSpotX) + 'px) translateY(' + (offsetY - this.dragHotSpotY) + 'px)';
        this.dragElement.style.transform = isDeleting ? dragElementTransform + ' scale(0.8)' : dragElementTransform;
        const children = [...this.paletteContainer.children];
        const index = children.indexOf(this.dragElement);
        const swatchOffsets = new Map();
        for (const swatch of children) {
            swatchOffsets.set(swatch, swatch.getBoundingClientRect());
        }
        if (index !== newIndex) {
            this.paletteContainer.insertBefore(this.dragElement, children[newIndex > index ? newIndex + 1 : newIndex]);
        }
        for (const swatch of children) {
            if (swatch === this.dragElement) {
                continue;
            }
            const before = swatchOffsets.get(swatch);
            const after = swatch.getBoundingClientRect();
            if (before && (before.left !== after.left || before.top !== after.top)) {
                swatch.animate([
                    {
                        transform: 'translateX(' + (before.left - after.left) + 'px) translateY(' + (before.top - after.top) + 'px)',
                    },
                    { transform: 'none' },
                ], { duration: 100, easing: 'cubic-bezier(0, 0, 0.2, 1)' });
            }
        }
    }
    paletteDragEnd(e) {
        if (!this.dragElement) {
            return;
        }
        if (this.isDraggingToBin(e)) {
            this.dragElement.remove();
        }
        this.dragElement.style.removeProperty('transform');
        const children = this.paletteContainer.children;
        const colors = [];
        for (let i = 0; i < children.length; ++i) {
            const color = colorElementToColor.get(children[i]);
            if (color) {
                colors.push(color);
            }
        }
        const palette = this.customPaletteSetting.get();
        palette.colors = colors;
        this.customPaletteSetting.set(palette);
        this.showPalette(palette, false);
        this.deleteIconToolbar.element.classList.remove('dragging');
        this.deleteIconToolbar.element.classList.remove('delete-color-toolbar-active');
    }
    loadPalettes() {
        this.palettes.set(MaterialPalette.title, MaterialPalette);
        const defaultCustomPalette = { title: 'Custom', colors: [], colorNames: [], mutable: true, matchUserFormat: undefined };
        this.customPaletteSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('custom-color-palette', defaultCustomPalette);
        const customPalette = this.customPaletteSetting.get();
        // Fallback case for custom palettes created pre-m67
        customPalette.colorNames = customPalette.colorNames || [];
        this.palettes.set(customPalette.title, customPalette);
        this.selectedColorPalette =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('selected-color-palette', GeneratedPaletteTitle);
        const palette = this.palettes.get(this.selectedColorPalette.get());
        if (palette) {
            this.showPalette(palette, true);
        }
    }
    addPalette(palette) {
        this.palettes.set(palette.title, palette);
        if (this.selectedColorPalette.get() === palette.title) {
            this.showPalette(palette, true);
        }
    }
    createPreviewPaletteElement(palette) {
        const colorsPerPreviewRow = 5;
        const previewElement = document.createElement('div');
        previewElement.classList.add('palette-preview');
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.markAsButton(previewElement);
        previewElement.tabIndex = 0;
        const titleElement = previewElement.createChild('div', 'palette-preview-title');
        titleElement.textContent = palette.title;
        let i;
        for (i = 0; i < colorsPerPreviewRow && i < palette.colors.length; i++) {
            previewElement.appendChild(this.createPaletteColor(palette.colors[i], palette.colorNames[i]));
        }
        for (; i < colorsPerPreviewRow; i++) {
            previewElement.createChild('div', 'spectrum-palette-color empty-color');
        }
        self.onInvokeElement(previewElement, event => {
            this.paletteSelected(palette);
            event.consume(true);
        });
        return previewElement;
    }
    paletteSelected(palette) {
        this.selectedColorPalette.set(palette.title);
        this.showPalette(palette, true);
    }
    resizeForSelectedPalette(force) {
        const palette = this.palettes.get(this.selectedColorPalette.get());
        if (!palette) {
            return;
        }
        let numColors = palette.colors.length;
        if (palette === this.customPaletteSetting.get()) {
            numColors++;
        }
        const rowsNeeded = Math.max(1, Math.ceil(numColors / ITEMS_PER_PALETTE_ROW));
        if (this.numPaletteRowsShown === rowsNeeded && !force) {
            return;
        }
        this.numPaletteRowsShown = rowsNeeded;
        const paletteColorHeight = 12;
        const paletteMargin = 12;
        let paletteTop = 236;
        if (this.contrastDetails) {
            if (this.contrastDetails.expanded()) {
                paletteTop += 78;
            }
            else {
                paletteTop += 36;
            }
        }
        this.element.style.height = (paletteTop + paletteMargin + (paletteColorHeight + paletteMargin) * rowsNeeded) + 'px';
        this.dispatchEventToListeners("SizeChanged" /* Events.SizeChanged */);
    }
    paletteColorSelected(colorText, colorName, matchUserFormat) {
        const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(colorText);
        if (!color) {
            return;
        }
        this.innerSetColor(color, colorText, colorName, matchUserFormat ? this.colorFormat : color.format(), ChangeSource.Other);
    }
    onPaletteColorKeydown(colorIndex, event) {
        const keyboardEvent = event;
        let nextColorIndex;
        switch (keyboardEvent.key) {
            case 'ArrowLeft':
                nextColorIndex = colorIndex - 1;
                break;
            case 'ArrowRight':
                nextColorIndex = colorIndex + 1;
                break;
            case 'ArrowUp':
                nextColorIndex = colorIndex - ITEMS_PER_PALETTE_ROW;
                break;
            case 'ArrowDown':
                nextColorIndex = colorIndex + ITEMS_PER_PALETTE_ROW;
                break;
        }
        if (nextColorIndex !== undefined && nextColorIndex > -1 &&
            nextColorIndex < this.paletteContainer.childNodes.length) {
            this.paletteContainer.childNodes[nextColorIndex].focus();
        }
    }
    onShadeColorKeydown(colorElement, event) {
        const target = event.target;
        if (_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardUtilities.isEscKey(event) || event.key === 'Tab') {
            colorElement.focus();
            if (this.shadesCloseHandler) {
                this.shadesCloseHandler();
            }
            event.consume(true);
        }
        else if (event.key === 'ArrowUp' && target.previousElementSibling) {
            target.previousElementSibling.focus();
            event.consume(true);
        }
        else if (event.key === 'ArrowDown' && target.nextElementSibling) {
            target.nextElementSibling.focus();
            event.consume(true);
        }
    }
    onAddColorMousedown() {
        this.addColorToCustomPalette();
    }
    onAddColorKeydown(event) {
        if (_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardUtilities.isEnterOrSpaceKey(event)) {
            this.addColorToCustomPalette();
            event.consume(true);
        }
    }
    addColorToCustomPalette() {
        const palette = this.customPaletteSetting.get();
        palette.colors.push(this.colorString());
        this.customPaletteSetting.set(palette);
        this.showPalette(palette, false);
        const colorElements = this.paletteContainer.querySelectorAll('.spectrum-palette-color');
        colorElements[colorElements.length - 1].focus();
    }
    showPaletteColorContextMenu(colorIndex, event) {
        if (!this.paletteContainerMutable) {
            return;
        }
        const contextMenu = new _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ContextMenu.ContextMenu(event);
        if (colorIndex !== -1) {
            contextMenu.defaultSection().appendItem(i18nString(UIStrings.removeColor), this.deletePaletteColors.bind(this, colorIndex, false), { jslogContext: 'remove-color' });
            contextMenu.defaultSection().appendItem(i18nString(UIStrings.removeAllToTheRight), this.deletePaletteColors.bind(this, colorIndex, true), { jslogContext: 'remove-all-to-the-right' });
        }
        contextMenu.defaultSection().appendItem(i18nString(UIStrings.clearPalette), this.deletePaletteColors.bind(this, -1, true), { jslogContext: 'clear-palette' });
        void contextMenu.show();
    }
    deletePaletteColors(colorIndex, toRight) {
        const palette = this.customPaletteSetting.get();
        if (toRight) {
            palette.colors.splice(colorIndex + 1, palette.colors.length - colorIndex - 1);
        }
        else {
            palette.colors.splice(colorIndex, 1);
        }
        this.customPaletteSetting.set(palette);
        this.showPalette(palette, false);
    }
    setColor(color) {
        this.innerSetColor(color, '', undefined /* colorName */, color.format(), ChangeSource.Model);
        const colorValues = color.as("hsl" /* Common.Color.Format.HSL */).canonicalHSLA();
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setValueNow(this.hueElement, colorValues[0]);
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setValueText(this.alphaElement, colorValues[3]);
    }
    colorSelected(color) {
        this.innerSetColor(color, '', undefined /* colorName */, undefined /* colorFormat */, ChangeSource.Other);
    }
    get color() {
        if (this.colorInternal) {
            return this.colorInternal;
        }
        return getColorFromHsva(this.gamut, this.hsv);
    }
    innerSetColor(colorOrHsv, colorString, colorName, colorFormat, changeSource) {
        // It is important to do `undefined` check here since we want to update the
        // `colorStringInternal` to be empty specifically. The difference is:
        // * If we give `undefined` as an argument to this function, it means
        // we don't want to change `colorStringInternal`
        // * If we give "" as an argument to this funciton, it means
        // we want to clear the `colorStringInternal`.
        if (colorString !== undefined) {
            this.colorStringInternal = colorString;
        }
        if (colorFormat !== undefined) {
            this.colorFormat = convertColorFormat(colorFormat);
            this.gamut = doesFormatSupportDisplayP3(this.colorFormat) ? "display-p3" /* SpectrumGamut.DISPLAY_P3 */ : "srgb" /* SpectrumGamut.SRGB */;
        }
        // For decreasing the conversion errors, if a color is given as is
        // we're storing it in `colorInternal` and using it properly.
        // Otherwise, if an `HSV` is given, we're discarding the `colorInternal`
        // and keeping HSV values as the source of truth.
        // This logic enables us to
        // * Keep color picker and the reflected color consistent (ex: lch(100 55.30 34.40) is
        //   shown with values 100, 55.30 and 34.40). If we were to get `HSV` from it
        //   and convert that HSV to `lch` color when needed, it might have resulted in rounding errors
        //   where color picker shows inconsistent values (i.e. inputs) with the selected color.
        // * Allow `HSV` values to be set independently from the color it represents.
        //   for example, lch(100 0 50) and lch(100 0 30) represents the same colors (both white)
        //   and hue component is powerless. This results in converted `h` in `hsv` to be
        //   0 as well. Meaning that, when the user comes to white, the hue will be reset to
        //   `0` which will change the state of the color picker unintentionally.
        if (Array.isArray(colorOrHsv)) {
            this.colorInternal = undefined;
            this.hsv = colorOrHsv;
        }
        else if (colorOrHsv !== undefined) {
            this.colorInternal = colorOrHsv;
            const oldHue = this.hsv ? this.hsv[0] : null;
            this.hsv = getHsvFromColor(this.gamut, colorOrHsv);
            // When the hue is powerless in lch color space
            // its `h` is directly set to 0 which results in
            // hue in hsv representation being 0 too.
            // For that case, we don't want to update the
            // hue slider of the color picker to keep its state consistent.
            // Otherwise, when the hue slider is set in the middle and the user
            // drags the cursor to the left most line (where c is 0)
            // it will reset hue slider of color picker to be 0 too and we don't want this.
            // The reason we convert to LCH instead of HSL to check hue's powerlessness is that
            // we don't want the color to be clipped for doing this check.
            if (oldHue !== null && colorOrHsv.as("lch" /* Common.Color.Format.LCH */).isHuePowerless()) {
                this.hsv[0] = oldHue;
            }
        }
        this.colorNameInternal = colorName;
        if (this.contrastInfo) {
            this.contrastInfo.setColor(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy.fromHSVA(this.hsv), this.colorFormat);
        }
        this.updateHelperLocations();
        this.updateUI();
        if (changeSource !== ChangeSource.Input) {
            this.updateInput();
        }
        if (changeSource !== ChangeSource.Model) {
            this.dispatchEventToListeners("ColorChanged" /* Events.ColorChanged */, this.colorString());
        }
    }
    colorName() {
        return this.colorNameInternal;
    }
    colorString() {
        // If the `colorStringInternal` exists and
        // if it is not an empty string, we will show that.
        // Empty string check is important here since we use
        // that to point that the colorStringInternal is cleared
        // and should not be used.
        if (this.colorStringInternal) {
            return this.colorStringInternal;
        }
        const color = this.color;
        let colorString = this.colorFormat && this.colorFormat !== color.format() ?
            color.asString(this.colorFormat) :
            (color.getAuthoredText() ?? color.asString());
        if (colorString) {
            return colorString;
        }
        if (this.colorFormat === "hex" /* Common.Color.Format.HEX */) {
            colorString = color.asString("hexa" /* Common.Color.Format.HEXA */);
        }
        else if (this.colorFormat === "hsl" /* Common.Color.Format.HSL */) {
            colorString = color.asString("hsla" /* Common.Color.Format.HSLA */);
        }
        else if (this.colorFormat === "hwb" /* Common.Color.Format.HWB */) {
            colorString = color.asString("hwba" /* Common.Color.Format.HWBA */);
        }
        else {
            colorString = color.asString("rgba" /* Common.Color.Format.RGBA */);
        }
        console.assert(Boolean(colorString));
        return colorString || '';
    }
    updateHelperLocations() {
        const h = this.hsv[0];
        const s = this.hsv[1];
        const v = this.hsv[2];
        const alpha = this.hsv[3];
        // Where to show the little circle that displays your current selected color.
        this.dragX = s * this.dragWidth;
        this.dragY = this.dragHeight - (v * this.dragHeight);
        const dragX = Math.max(-this.colorDragElementHeight, Math.min(this.dragWidth - this.colorDragElementHeight, this.dragX - this.colorDragElementHeight));
        const dragY = Math.max(-this.colorDragElementHeight, Math.min(this.dragHeight - this.colorDragElementHeight, this.dragY - this.colorDragElementHeight));
        this.colorDragElement.positionAt(dragX, dragY);
        // Where to show the bar that displays your current selected hue.
        const hueSlideX = (1 - h) * this.hueAlphaWidth - this.slideHelperWidth;
        this.hueSlider.style.left = hueSlideX + 'px';
        const alphaSlideX = alpha * this.hueAlphaWidth - this.slideHelperWidth;
        this.alphaSlider.style.left = alphaSlideX + 'px';
    }
    updateInput() {
        if (this.colorFormat === "hex" /* Common.Color.Format.HEX */) {
            this.hexContainer.hidden = false;
            this.displayContainer.hidden = true;
            this.hexValue.value =
                this.color.asString((this.color.alpha ?? 1) !== 1 ? "hexa" /* Common.Color.Format.HEXA */ : "hex" /* Common.Color.Format.HEX */);
        }
        else {
            // RGBA, HSLA, HWBA, color() display.
            this.hexContainer.hidden = true;
            this.displayContainer.hidden = false;
            const spec = _ColorFormatSpec_js__WEBPACK_IMPORTED_MODULE_9__.colorFormatSpec[this.colorFormat];
            const colorValues = spec.toValues(this.color);
            this.textLabels.textContent = spec.label;
            for (let i = 0; i < this.textValues.length; ++i) {
                _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(this.textValues[i], 
                /** R in RGBA */ i18nString(UIStrings.sInS, {
                    PH1: this.textLabels.textContent.charAt(i),
                    PH2: this.textLabels.textContent,
                }));
                this.textValues[i].value = String(colorValues[i]);
            }
        }
    }
    hideSrgbOverlay() {
        if (this.colorElement.contains(this.srgbOverlay)) {
            this.colorElement.removeChild(this.srgbOverlay);
        }
    }
    showSrgbOverlay() {
        if ((this.contrastDetails && this.contrastDetails.expanded()) || this.gamut !== "display-p3" /* SpectrumGamut.DISPLAY_P3 */) {
            return;
        }
        void this.srgbOverlay.render({
            hue: this.hsv[0],
            width: this.dragWidth,
            height: this.dragHeight,
        });
        if (!this.colorElement.contains(this.srgbOverlay)) {
            this.colorElement.appendChild(this.srgbOverlay);
        }
    }
    updateSrgbOverlay() {
        if (this.gamut === "display-p3" /* SpectrumGamut.DISPLAY_P3 */) {
            this.showSrgbOverlay();
        }
        else {
            this.hideSrgbOverlay();
        }
    }
    updateUI() {
        this.colorElement.style.backgroundColor = getColorFromHsva(this.gamut, [this.hsv[0], 1, 1, 1]).asString();
        if (this.contrastOverlay) {
            this.contrastOverlay.setDimensions(this.dragWidth, this.dragHeight);
        }
        this.updateSrgbOverlay();
        this.swatch.setColor(this.color, this.colorString());
        this.colorDragElement.style.backgroundColor = this.color.asString("lch" /* Common.Color.Format.LCH */);
        const noAlpha = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy.fromHSVA(this.hsv.slice(0, 3).concat(1));
        this.alphaElementBackground.style.backgroundImage = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.sprintf('linear-gradient(to right, rgba(0,0,0,0), %s)', noAlpha.asString("lch" /* Common.Color.Format.LCH */));
        this.hueElement.classList.toggle('display-p3', doesFormatSupportDisplayP3(this.colorFormat));
    }
    async showFormatPicker(event) {
        const contextMenu = new _FormatPickerContextMenu_js__WEBPACK_IMPORTED_MODULE_12__.FormatPickerContextMenu(this.color);
        this.isFormatPickerShown = true;
        await contextMenu.show(event, newColor => {
            this.innerSetColor(newColor, undefined, undefined, newColor.format(), ChangeSource.Other);
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.colorConvertedFrom(1 /* Host.UserMetrics.ColorConvertedFrom.ColorPicker */);
        });
        this.isFormatPickerShown = false;
    }
    /**
     * If the pasted input is parsable as a color, applies it converting to the current user format
     */
    pasted(event) {
        if (!event.clipboardData) {
            return;
        }
        const text = event.clipboardData.getData('text');
        const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(text);
        if (!color) {
            return;
        }
        this.innerSetColor(color, text, undefined /* colorName */, undefined /* colorFormat */, ChangeSource.Other);
        event.preventDefault();
    }
    inputChanged(event) {
        const inputElement = event.currentTarget;
        const newValue = _legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createReplacementString(inputElement.value, event);
        if (newValue) {
            inputElement.value = newValue;
            inputElement.selectionStart = 0;
            inputElement.selectionEnd = newValue.length;
            event.consume(true);
        }
        let color = null;
        let colorFormat;
        if (this.colorFormat === "hex" /* Common.Color.Format.HEX */) {
            color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(this.hexValue.value);
        }
        else {
            const spec = _ColorFormatSpec_js__WEBPACK_IMPORTED_MODULE_9__.colorFormatSpec[this.colorFormat];
            const colorTextValues = this.textValues.map(element => element.value);
            if (colorTextValues.length !== 4) {
                // Somehow the `textValues` array updated to contain more elements
                // This shouldn't happen.
                return;
            }
            // Since we know that `textValues` is an array with 4 elements we're safe
            // to assert that `colorTextValues` is an array with 4 strings.
            color = spec.fromValues(colorTextValues);
        }
        if (!color) {
            return;
        }
        this.innerSetColor(color, undefined, undefined /* colorName */, colorFormat, ChangeSource.Input);
    }
    wasShown() {
        this.registerCSSFiles([_spectrum_css_js__WEBPACK_IMPORTED_MODULE_13__["default"]]);
        this.hueAlphaWidth = this.hueElement.offsetWidth;
        this.slideHelperWidth = this.hueSlider.offsetWidth / 2;
        this.dragWidth = this.colorElement.offsetWidth;
        this.dragHeight = this.colorElement.offsetHeight;
        this.colorDragElementHeight = this.colorDragElement.offsetHeight / 2;
        this.innerSetColor(undefined, undefined, undefined /* colorName */, undefined, ChangeSource.Model);
        // When flag is turned on, eye dropper is not turned on by default.
        // This is because the global change of the cursor into a dropper will disturb the user.
        if (!IS_NATIVE_EYE_DROPPER_AVAILABLE) {
            void this.toggleColorPicker(true);
        }
        else {
            this.colorPickerButton.setToggled(false);
        }
        if (this.contrastDetails && this.contrastDetailsBackgroundColorPickedToggledBound) {
            this.contrastDetails.addEventListener("BackgroundColorPickerWillBeToggled" /* ContrastDetailsEvents.BackgroundColorPickerWillBeToggled */, this.contrastDetailsBackgroundColorPickedToggledBound);
        }
    }
    willHide() {
        void this.toggleColorPicker(false);
        if (this.contrastDetails && this.contrastDetailsBackgroundColorPickedToggledBound) {
            this.contrastDetails.removeEventListener("BackgroundColorPickerWillBeToggled" /* ContrastDetailsEvents.BackgroundColorPickerWillBeToggled */, this.contrastDetailsBackgroundColorPickedToggledBound);
        }
    }
    async toggleColorPicker(enabled) {
        if (enabled === undefined) {
            enabled = !this.colorPickerButton.isToggled();
        }
        this.colorPickerButton.setToggled(enabled);
        // This is to make sure that only one picker is open at a time
        // Also have a look at this.contrastDetailsBackgroundColorPickedToggled
        if (this.contrastDetails && enabled && this.contrastDetails.backgroundColorPickerEnabled()) {
            this.contrastDetails.toggleBackgroundColorPicker(false);
        }
        // With the old color picker, colors can only be picked up within the page.
        if (!IS_NATIVE_EYE_DROPPER_AVAILABLE) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.setEyeDropperActive(enabled);
            if (enabled) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.events.addEventListener(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.Events.EyeDropperPickedColor, this.colorPickedBound);
            }
            else {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.events.removeEventListener(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.Events.EyeDropperPickedColor, this.colorPickedBound);
            }
        }
        else if (IS_NATIVE_EYE_DROPPER_AVAILABLE && enabled) {
            // Use EyeDropper API, can pick up colors outside the browser window,
            // Note: The current EyeDropper API is not designed to pick up colors continuously.
            // Wait for TypeScript to support the definition of EyeDropper API:
            // https://github.com/microsoft/TypeScript/issues/48638
            /* eslint-disable  @typescript-eslint/no-explicit-any */
            const eyeDropper = new window.EyeDropper();
            this.eyeDropperAbortController = new AbortController();
            try {
                const hexColor = await eyeDropper.open({ signal: this.eyeDropperAbortController.signal });
                const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(hexColor.sRGBHex);
                this.innerSetColor(color ?? undefined, '', undefined /* colorName */, undefined, ChangeSource.Other);
            }
            catch (error) {
                if (error.name !== 'AbortError') {
                    console.error(error);
                }
            }
            this.colorPickerButton.setToggled(false);
        }
        else if (IS_NATIVE_EYE_DROPPER_AVAILABLE && !enabled) {
            this.eyeDropperAbortController?.abort();
            this.eyeDropperAbortController = null;
        }
    }
    colorPicked({ data: rgbColor, }) {
        const rgba = [rgbColor.r, rgbColor.g, rgbColor.b, (rgbColor.a / 2.55 | 0) / 100];
        const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy.fromRGBA(rgba);
        this.innerSetColor(color, '', undefined /* colorName */, undefined, ChangeSource.Other);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.bringToFront();
    }
}
const ChangeSource = {
    Input: 'Input',
    Model: 'Model',
    Other: 'Other',
};
const COLOR_CHIP_SIZE = 24;
const ITEMS_PER_PALETTE_ROW = 8;
const GeneratedPaletteTitle = 'Page colors';
class PaletteGenerator {
    callback;
    frequencyMap;
    constructor(callback) {
        this.callback = callback;
        this.frequencyMap = new Map();
        const stylesheetPromises = [];
        for (const cssModel of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.CSSModel.CSSModel)) {
            for (const stylesheet of cssModel.allStyleSheets()) {
                stylesheetPromises.push(this.processStylesheet(stylesheet));
            }
        }
        void Promise.all(stylesheetPromises)
            .catch(error => {
            console.error(error);
        })
            .then(this.finish.bind(this));
    }
    frequencyComparator(a, b) {
        return this.frequencyMap.get(b) - this.frequencyMap.get(a);
    }
    finish() {
        function hueComparator(a, b) {
            const hsva = paletteColors.get(a).as("hsl" /* Common.Color.Format.HSL */).hsva();
            const hsvb = paletteColors.get(b).as("hsl" /* Common.Color.Format.HSL */).hsva();
            // First trim the shades of gray
            if (hsvb[1] < 0.12 && hsva[1] < 0.12) {
                return hsvb[2] * hsvb[3] - hsva[2] * hsva[3];
            }
            if (hsvb[1] < 0.12) {
                return -1;
            }
            if (hsva[1] < 0.12) {
                return 1;
            }
            // Equal hue -> sort by sat
            if (hsvb[0] === hsva[0]) {
                return hsvb[1] * hsvb[3] - hsva[1] * hsva[3];
            }
            return (hsvb[0] + 0.94) % 1 - (hsva[0] + 0.94) % 1;
        }
        let colors = [...this.frequencyMap.keys()];
        colors = colors.sort(this.frequencyComparator.bind(this));
        const paletteColors = new Map();
        const colorsPerRow = 24;
        while (paletteColors.size < colorsPerRow && colors.length) {
            const colorText = colors.shift();
            const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(colorText);
            if (!color) {
                continue;
            }
            paletteColors.set(colorText, color);
        }
        this.callback({
            title: GeneratedPaletteTitle,
            colors: [...paletteColors.keys()].sort(hueComparator),
            colorNames: [],
            mutable: false,
            matchUserFormat: undefined,
        });
    }
    async processStylesheet(stylesheet) {
        let text = (await stylesheet.requestContent()).content || '';
        text = text.toLowerCase();
        const regexResult = text.matchAll(/((?:rgb|hsl|hwb)a?\([^)]+\)|#[0-9a-f]{6}|#[0-9a-f]{3})/g);
        for (const { 0: c, index } of regexResult) {
            // Check whether the match occured in a property value and not in a property name or a selector by verifying
            // that there's no colon after the match and before the next semicolon.
            if (text.indexOf(';', index) < 0 ||
                text.indexOf(':', index) > -1 && text.indexOf(':', index) < text.indexOf(';', index)) {
                continue;
            }
            const frequency = 1 + (this.frequencyMap.get(c) ?? 0);
            this.frequencyMap.set(c, frequency);
        }
    }
}
const MaterialPaletteShades = new Map([
    [
        '#F44336',
        ['#FFEBEE', '#FFCDD2', '#EF9A9A', '#E57373', '#EF5350', '#F44336', '#E53935', '#D32F2F', '#C62828', '#B71C1C'],
    ],
    [
        '#E91E63',
        ['#FCE4EC', '#F8BBD0', '#F48FB1', '#F06292', '#EC407A', '#E91E63', '#D81B60', '#C2185B', '#AD1457', '#880E4F'],
    ],
    [
        '#9C27B0',
        ['#F3E5F5', '#E1BEE7', '#CE93D8', '#BA68C8', '#AB47BC', '#9C27B0', '#8E24AA', '#7B1FA2', '#6A1B9A', '#4A148C'],
    ],
    [
        '#673AB7',
        ['#EDE7F6', '#D1C4E9', '#B39DDB', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92'],
    ],
    [
        '#3F51B5',
        ['#E8EAF6', '#C5CAE9', '#9FA8DA', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E'],
    ],
    [
        '#2196F3',
        ['#E3F2FD', '#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'],
    ],
    [
        '#03A9F4',
        ['#E1F5FE', '#B3E5FC', '#81D4FA', '#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B'],
    ],
    [
        '#00BCD4',
        ['#E0F7FA', '#B2EBF2', '#80DEEA', '#4DD0E1', '#26C6DA', '#00BCD4', '#00ACC1', '#0097A7', '#00838F', '#006064'],
    ],
    [
        '#009688',
        ['#E0F2F1', '#B2DFDB', '#80CBC4', '#4DB6AC', '#26A69A', '#009688', '#00897B', '#00796B', '#00695C', '#004D40'],
    ],
    [
        '#4CAF50',
        ['#E8F5E9', '#C8E6C9', '#A5D6A7', '#81C784', '#66BB6A', '#4CAF50', '#43A047', '#388E3C', '#2E7D32', '#1B5E20'],
    ],
    [
        '#8BC34A',
        ['#F1F8E9', '#DCEDC8', '#C5E1A5', '#AED581', '#9CCC65', '#8BC34A', '#7CB342', '#689F38', '#558B2F', '#33691E'],
    ],
    [
        '#CDDC39',
        ['#F9FBE7', '#F0F4C3', '#E6EE9C', '#DCE775', '#D4E157', '#CDDC39', '#C0CA33', '#AFB42B', '#9E9D24', '#827717'],
    ],
    [
        '#FFEB3B',
        ['#FFFDE7', '#FFF9C4', '#FFF59D', '#FFF176', '#FFEE58', '#FFEB3B', '#FDD835', '#FBC02D', '#F9A825', '#F57F17'],
    ],
    [
        '#FFC107',
        ['#FFF8E1', '#FFECB3', '#FFE082', '#FFD54F', '#FFCA28', '#FFC107', '#FFB300', '#FFA000', '#FF8F00', '#FF6F00'],
    ],
    [
        '#FF9800',
        ['#FFF3E0', '#FFE0B2', '#FFCC80', '#FFB74D', '#FFA726', '#FF9800', '#FB8C00', '#F57C00', '#EF6C00', '#E65100'],
    ],
    [
        '#FF5722',
        ['#FBE9E7', '#FFCCBC', '#FFAB91', '#FF8A65', '#FF7043', '#FF5722', '#F4511E', '#E64A19', '#D84315', '#BF360C'],
    ],
    [
        '#795548',
        ['#EFEBE9', '#D7CCC8', '#BCAAA4', '#A1887F', '#8D6E63', '#795548', '#6D4C41', '#5D4037', '#4E342E', '#3E2723'],
    ],
    [
        '#9E9E9E',
        ['#FAFAFA', '#F5F5F5', '#EEEEEE', '#E0E0E0', '#BDBDBD', '#9E9E9E', '#757575', '#616161', '#424242', '#212121'],
    ],
    [
        '#607D8B',
        ['#ECEFF1', '#CFD8DC', '#B0BEC5', '#90A4AE', '#78909C', '#607D8B', '#546E7A', '#455A64', '#37474F', '#263238'],
    ],
]);
const MaterialPalette = {
    title: 'Material',
    mutable: false,
    matchUserFormat: true,
    colors: [...MaterialPaletteShades.keys()],
    colorNames: [],
};
class Swatch {
    colorString;
    swatchInnerElement;
    swatchOverlayElement;
    swatchCopyIcon;
    constructor(parentElement) {
        const swatchElement = parentElement.createChild('span', 'swatch');
        swatchElement.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.action('copy-color').track({ click: true })}`);
        this.swatchInnerElement = swatchElement.createChild('span', 'swatch-inner');
        this.swatchOverlayElement = swatchElement.createChild('span', 'swatch-overlay');
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.markAsButton(this.swatchOverlayElement);
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setPressed(this.swatchOverlayElement, false);
        this.swatchOverlayElement.tabIndex = 0;
        self.onInvokeElement(this.swatchOverlayElement, this.onCopyText.bind(this));
        this.swatchOverlayElement.addEventListener('mouseout', this.onCopyIconMouseout.bind(this));
        this.swatchOverlayElement.addEventListener('blur', this.onCopyIconMouseout.bind(this));
        this.swatchCopyIcon = _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.create('copy', 'copy-color-icon');
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Tooltip.Tooltip.install(this.swatchCopyIcon, i18nString(UIStrings.copyColorToClipboard));
        this.swatchOverlayElement.appendChild(this.swatchCopyIcon);
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(this.swatchOverlayElement, this.swatchCopyIcon.title);
    }
    setColor(color, colorString) {
        const lchColor = color.as("lch" /* Common.Color.Format.LCH */);
        this.swatchInnerElement.style.backgroundColor = lchColor.asString();
        // Show border if the swatch is white.
        this.swatchInnerElement.classList.toggle('swatch-inner-white', lchColor.l > 90);
        this.colorString = colorString || null;
        if (colorString) {
            this.swatchOverlayElement.hidden = false;
        }
        else {
            this.swatchOverlayElement.hidden = true;
        }
    }
    onCopyText(event) {
        this.swatchCopyIcon.name = 'checkmark';
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(this.colorString);
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setPressed(this.swatchOverlayElement, true);
        event.consume();
    }
    onCopyIconMouseout() {
        this.swatchCopyIcon.name = 'copy';
        _legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setPressed(this.swatchOverlayElement, false);
    }
}
//# sourceMappingURL=Spectrum.js.map

/***/ })

}]);