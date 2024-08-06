"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_expandable_list_basic_js"], {
"./ui/components/docs/expandable_list/basic.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../expandable_list/expandable_list.js */ "./ui/components/expandable_list/expandable_list.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
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
        "\n  <div>This is row 1. Click on the triangle icon to expand.</div>\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n    <div>This is row ",
        ".</div>\n  "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
var _document_getElementById;



await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
var component = new _expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_2__.ExpandableList.ExpandableList();
var rows = [];
rows.push(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject()));
for(var rowNumber = 2; rowNumber < 11; rowNumber++){
    rows.push(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject1(), rowNumber));
}
component.data = {
    rows: rows
};
(_document_getElementById = document.getElementById('container')) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.appendChild(component); //# sourceMappingURL=basic.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

}),
"./ui/components/expandable_list/expandable_list.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ExpandableList: function() { return /* reexport module object */ _ExpandableList_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _ExpandableList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpandableList.js */ "./ui/components/expandable_list/ExpandableList.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=expandable_list.js.map


}),

}]);