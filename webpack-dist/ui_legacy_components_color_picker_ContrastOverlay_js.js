"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_color_picker_ContrastOverlay_js"],{

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

/***/ })

}]);