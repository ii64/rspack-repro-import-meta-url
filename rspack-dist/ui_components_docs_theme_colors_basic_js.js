"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_theme_colors_basic_js"], {
"./ui/components/docs/theme_colors/basic.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _templateObject() {
    var data = _tagged_template_literal([
        "<li style=",
        "><code>",
        ": ",
        "</code></li>"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}


await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ComponentServerSetup.setup();
var THEME_VARIABLES_NAMES = new Set([
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
    '--input-outline'
]);
function appendStyles(mode) {
    var container = document.querySelector(".".concat(mode, "-mode-container"));
    var listItems = Array.from(THEME_VARIABLES_NAMES).map(function(varName) {
        var value = getComputedStyle(container).getPropertyValue(varName);
        if (!value) {
            throw new Error("Could not find value for CSS variable ".concat(varName, "."));
        }
        var styles = {};
        if (varName.includes('--box-shadow')) {
            styles = {
                boxShadow: "0 0 0 1px var(".concat(varName, ")"),
                borderBottomWidth: 0
            };
        } else if (varName.includes('--drop-shadow')) {
            styles = {
                boxShadow: "var(".concat(varName, ")"),
                borderBottomWidth: 0
            };
        } else {
            styles = {
                borderBottomColor: "var(".concat(varName, ")")
            };
        }
        var liStyles = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.styleMap(styles);
        return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject(), liStyles, varName, value);
    });
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject1(), listItems), container);
}
appendStyles('light');
appendStyles('dark'); //# sourceMappingURL=basic.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

}),

}]);