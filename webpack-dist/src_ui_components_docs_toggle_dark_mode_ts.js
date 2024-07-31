"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_toggle_dark_mode_ts"],{

/***/ "./src/ui/components/docs/toggle_dark_mode.ts":
/*!****************************************************!*\
  !*** ./src/ui/components/docs/toggle_dark_mode.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const DARK_THEME_CLASS = 'theme-with-dark-background';
function toggleDarkMode(force) {
    // Only use the second arg if its not undefined. The spec treats `undefined` as falsy. :/
    document.body.classList.toggle(...[DARK_THEME_CLASS, ...force !== undefined ? [force] : []]);
}
function init() {
    // To keep consistent test results, we don't auto-initialize darkmode. This'd do it, though:
    //    toggleDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    window.addEventListener('load', () => {
        const button = document.createElement('button');
        button.innerText = 'Toggle light/dark mode';
        button.className = 'component-docs-ui';
        button.style.position = 'fixed';
        button.style.bottom = '10px';
        button.style.right = '10px';
        button.style.width = '200px';
        button.style.fontSize = '16px';
        button.style.padding = '5px';
        button.style.cursor = 'pointer';
        button.addEventListener('click', event => {
            event.preventDefault();
            toggleDarkMode();
        });
        document.body.appendChild(button);
    });
}


/***/ })

}]);