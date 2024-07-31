"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_theme_colors_basic_ts"],{

/***/ "./src/ui/components/docs/theme_colors/basic.ts":
/*!******************************************************!*\
  !*** ./src/ui/components/docs/theme_colors/basic.ts ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ComponentServerSetup.setup();
const THEME_VARIABLES_NAMES = new Set([
    '--color-primary-old',
    '--color-primary-variant',
    '--color-background',
    '--color-background-inverted',
    '--color-background-opacity-50',
    '--color-background-opacity-80',
    '--color-background-elevation-0',
    '--color-background-elevation-1',
    '--color-background-elevation-2',
    '--color-background-elevation-dark-only',
    '--color-background-highlight',
    '--divider-line',
    '--color-background-hover-overlay',
    '--color-selection-highlight',
    '--color-selection-highlight-border',
    '--color-match-highlight',
    '--color-text-primary',
    '--color-text-secondary',
    '--color-text-secondary-selected',
    '--color-text-disabled',
    '--color-details-hairline',
    '--color-details-hairline-light',
    '--color-accent-red',
    '--color-red',
    '--color-accent-green',
    '--color-green',
    '--color-link',
    '--color-syntax-1',
    '--color-syntax-2',
    '--color-syntax-3',
    '--color-syntax-4',
    '--color-syntax-5',
    '--color-syntax-6',
    '--color-syntax-7',
    '--color-syntax-8',
    '--drop-shadow',
    '--drop-shadow-depth-1',
    '--drop-shadow-depth-2',
    '--drop-shadow-depth-3',
    '--drop-shadow-depth-4',
    '--drop-shadow-depth-5',
    '--box-shadow-outline-color',
    '--color-scrollbar-mac',
    '--color-scrollbar-mac-hover',
    '--color-scrollbar-other',
    '--color-scrollbar-other-hover',
    '--lighthouse-red',
    '--lighthouse-orange',
    '--lighthouse-green',
    '--issue-color-red',
    '--issue-color-yellow',
    '--issue-color-blue',
    '--input-outline',
]);
function appendStyles(mode) {
    const container = document.querySelector(`.${mode}-mode-container`);
    const listItems = Array.from(THEME_VARIABLES_NAMES).map(varName => {
        const value = getComputedStyle(container).getPropertyValue(varName);
        if (!value) {
            throw new Error(`Could not find value for CSS variable ${varName}.`);
        }
        let styles = {};
        if (varName.includes('--box-shadow')) {
            styles = { boxShadow: `0 0 0 1px var(${varName})`, borderBottomWidth: 0 };
        }
        else if (varName.includes('--drop-shadow')) {
            styles = { boxShadow: `var(${varName})`, borderBottomWidth: 0 };
        }
        else {
            styles = { borderBottomColor: `var(${varName})` };
        }
        const liStyles = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.styleMap(styles);
        return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `<li style=${liStyles}><code>${varName}: ${value}</code></li>`;
    });
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `${listItems}`, container);
}
appendStyles('light');
appendStyles('dark');

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);