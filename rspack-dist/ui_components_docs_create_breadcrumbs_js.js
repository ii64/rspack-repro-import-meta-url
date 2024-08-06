"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_create_breadcrumbs_js"], {
"./ui/components/docs/create_breadcrumbs.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  init: function() { return init; }
});
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
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
        '\n\n  <style>\n    .docs-breadcrumbs {\n      display: flex;\n      list-style: none;\n      position: fixed;\n      background: rgb(255 255 255 / .8);\n      padding: 5px;\n      bottom: 0;\n      left: 10px;\n      width: 300px;\n    }\n\n    .docs-breadcrumbs li a {\n      display: block;\n      padding: 10px;\n      font-size: 16px;\n    }\n\n    .docs-breadcrumbs span {\n      font-size: 20px;\n    }\n  </style>\n\n  <ul class="docs-breadcrumbs component-docs-ui">\n    <li><a href="/">Index</a></li>\n    <li><a href=".">All component examples</a></li>\n  </ul>'
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}

function init() {
    var container = document.createElement('ul');
    // clang-format off
    // eslint-disable-next-line rulesdir/ban_a_tags_in_lit_html
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject()), container);
    // clang-format on
    document.body.appendChild(container);
} //# sourceMappingURL=create_breadcrumbs.js.map


}),

}]);