"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_component_docs_ts"],{

/***/ "./src/ui/components/docs/component_docs.ts":
/*!**************************************************!*\
  !*** ./src/ui/components/docs/component_docs.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Images_Images_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Images/Images.js */ "./src/Images/Images.js");
/* harmony import */ var _Images_Images_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Images_Images_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _create_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_breadcrumbs.js */ "./src/ui/components/docs/create_breadcrumbs.ts");
/* harmony import */ var _toggle_dark_mode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle_dark_mode.js */ "./src/ui/components/docs/toggle_dark_mode.ts");
/* harmony import */ var _toggle_fonts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggle_fonts.js */ "./src/ui/components/docs/toggle_fonts.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Ensure all image variables are defined in the component docs.




_toggle_dark_mode_js__WEBPACK_IMPORTED_MODULE_2__.init();
_create_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_1__.init();
_toggle_fonts_js__WEBPACK_IMPORTED_MODULE_3__.init();
// This can be used by tests to hide the UI elements that are part of the component docs interface.
// E.g., this is useful for screenshot tests.
window.addEventListener('hidecomponentdocsui', () => {
    for (const node of document.querySelectorAll('.component-docs-ui')) {
        node.style.display = 'none';
    }
});
window.addEventListener('showcomponentdocsui', () => {
    for (const node of document.querySelectorAll('.component-docs-ui')) {
        node.style.display = '';
    }
});


/***/ }),

/***/ "./src/ui/components/docs/create_breadcrumbs.ts":
/*!******************************************************!*\
  !*** ./src/ui/components/docs/create_breadcrumbs.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function init() {
    const container = document.createElement('ul');
    // clang-format off
    // eslint-disable-next-line rulesdir/ban_a_tags_in_lit_html
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `

  <style>
    .docs-breadcrumbs {
      display: flex;
      list-style: none;
      position: fixed;
      background: rgb(255 255 255 / .8);
      padding: 5px;
      bottom: 0;
      left: 10px;
      width: 300px;
    }

    .docs-breadcrumbs li a {
      display: block;
      padding: 10px;
      font-size: 16px;
    }

    .docs-breadcrumbs span {
      font-size: 20px;
    }
  </style>

  <ul class="docs-breadcrumbs component-docs-ui">
    <li><a href="/">Index</a></li>
    <li><a href=".">All component examples</a></li>
  </ul>`, container);
    // clang-format on
    document.body.appendChild(container);
}


/***/ }),

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


/***/ }),

/***/ "./src/ui/components/docs/toggle_fonts.ts":
/*!************************************************!*\
  !*** ./src/ui/components/docs/toggle_fonts.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PLATFORM_MAC_CLASS = 'platform-mac';
const PLATFORM_LINUX_CLASS = 'platform-linux';
const PLATFORM_WINDOWS_CLASS = 'platform-windows';
const urlParams = new URLSearchParams(window.location.search);
function init() {
    // fontFamily is provided by the interaction tests.
    // While platform-specific class names define multiple font-families,
    // we want a single font-family to be used by the tests.
    if (urlParams.has('fontFamily')) {
        const div = document.createElement('div');
        div.className = 'component-docs-ui';
        div.style.position = 'fixed';
        div.style.bottom = '10px';
        div.style.right = '230px';
        div.style.width = '250px';
        div.style.fontSize = '16px';
        div.style.padding = '5px';
        div.innerText = `font-family: ${urlParams.get('fontFamily')}`;
        window.addEventListener('load', () => {
            document.body.appendChild(div);
        });
        document.body.style.fontFamily = `${urlParams.get('fontFamily')}`;
        return;
    }
    document.documentElement.classList.add(PLATFORM_LINUX_CLASS);
    const button = document.createElement('button');
    button.className = 'component-docs-ui';
    const loop = [
        PLATFORM_LINUX_CLASS,
        PLATFORM_MAC_CLASS,
        PLATFORM_WINDOWS_CLASS,
    ];
    function toggleFonts() {
        for (const className of loop) {
            if (className === loop[0]) {
                document.documentElement.classList.add(className);
            }
            else {
                document.documentElement.classList.remove(className);
            }
        }
        loop.push(loop.shift());
        button.innerText = 'Turn on ' + loop[0] + ' fonts';
    }
    window.addEventListener('load', () => {
        toggleFonts();
        button.style.position = 'fixed';
        button.style.bottom = '10px';
        button.style.right = '230px';
        button.style.width = '250px';
        button.style.fontSize = '16px';
        button.style.padding = '5px';
        button.style.cursor = 'pointer';
        button.addEventListener('click', event => {
            event.preventDefault();
            toggleFonts();
        });
        document.body.appendChild(button);
    });
}


/***/ })

}]);