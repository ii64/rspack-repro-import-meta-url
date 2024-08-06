"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_legacy_color_invert_basic_js"],{

/***/ "./ui/components/docs/legacy_color_invert/basic.js":
/*!*********************************************************!*\
  !*** ./ui/components/docs/legacy_color_invert/basic.js ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.initializeGlobalVars();
const form = document.querySelector('form');
if (!form) {
    throw new Error('could not find form');
}
form.addEventListener('submit', event => {
    event.preventDefault();
    const property = form.querySelector('#css-property')?.value;
    const value = form.querySelector('#css-value')?.value;
    if (!property || !value) {
        return;
    }
    const output = legacyInvertVariableForDarkMode(property, value);
    const outputElem = document.querySelector('#output');
    if (outputElem) {
        outputElem.innerText = output;
    }
});
function patchHSLA(hsla, colorUsage) {
    const hue = hsla[0];
    const sat = hsla[1];
    let lit = hsla[2];
    const alpha = hsla[3];
    const minCap = colorUsage === 'background' ? 0.14 : 0;
    const maxCap = colorUsage === 'foreground' ? 0.9 : 1;
    lit = 1 - lit;
    if (lit < minCap * 2) {
        lit = minCap + lit / 2;
    }
    else if (lit > 2 * maxCap - 1) {
        lit = maxCap - 1 / 2 + lit / 2;
    }
    hsla[0] = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.NumberUtilities.clamp(hue, 0, 1);
    hsla[1] = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.NumberUtilities.clamp(sat, 0, 1);
    hsla[2] = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.NumberUtilities.clamp(lit, 0, 1);
    hsla[3] = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.NumberUtilities.clamp(alpha, 0, 1);
}
function patchColor(colorAsText, colorUsage) {
    const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(colorAsText)?.as("hsl" /* Common.Color.Format.HSL */);
    if (!color) {
        return colorAsText;
    }
    const hsla = [color.h, color.s, color.l, color.alpha ?? 1];
    patchHSLA(hsla, colorUsage);
    const rgba = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.hsl2rgb(hsla);
    const outColor = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy(rgba, "rgba" /* Common.Color.Format.RGBA */);
    let outText = outColor.asString();
    if (!outText) {
        outText = outColor.asString(outColor.hasAlpha() ? "rgba" /* Common.Color.Format.RGBA */ : "rgb" /* Common.Color.Format.RGB */);
    }
    return outText || colorAsText;
}
function legacyInvertVariableForDarkMode(cssProperty, cssValue) {
    let colorUsage = 'unknown';
    if (cssProperty.indexOf('background') === 0 || cssProperty.indexOf('border') === 0) {
        colorUsage = 'background';
    }
    if (cssProperty.indexOf('background') === -1) {
        colorUsage = 'foreground';
    }
    const items = cssValue.replace(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Regex, '\0$1\0').split('\0');
    const output = [];
    for (const item of items) {
        if (!item) {
            continue;
        }
        const newColor = patchColor(item, colorUsage);
        output.push(newColor);
    }
    return output.join(' ');
}
//# sourceMappingURL=basic.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);