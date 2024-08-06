"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_report_basic_js"], {
"./ui/components/docs/report/basic.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */var _report_view_report_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../report_view/report_view.js */ "./ui/components/report_view/report_view.js");
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
        "\n          <",
        ">",
        "</",
        ">\n          <",
        ">",
        "</",
        ">\n        "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n        <style>\n          .source-code {\n            font-family: monospace;\n          }\n        </style>\n\n        <",
        " .data=",
        ">\n          <",
        ">Section 1</",
        ">\n          <",
        ">Basic plain text field</",
        ">\n          <",
        ">And this is the value</",
        ">\n          <",
        ">A field with a code value</",
        ">\n          <",
        ' class="source-code">SomeCodeValue</',
        ">\n          <",
        "></",
        ">\n          <",
        ">Section 2</",
        ">\n          ",
        "\n          ",
        "\n          <",
        "></",
        ">\n        </",
        ">\n      "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}



await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ComponentServerSetup.setup();
var exampleRenderHelper = function(key, value) {
    return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject(), _report_view_report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.ReportKey.litTagName, key, _report_view_report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.ReportKey.litTagName, _report_view_report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.ReportValue.litTagName, value, _report_view_report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.ReportValue.litTagName);
};
var container = document.querySelector('#container');
if (!container) {
    throw new Error('Could not find container');
}
_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject1(), _report_view_report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.Report.litTagName, {
    reportTitle: 'Optional Title'
}, _report_view_report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.ReportSectionHeader.litTagName, _report_view_report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.ReportSectionHeader.litTagName, _report_view_report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.ReportKey.litTagName, _report_view_report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.ReportKey.litTagName, _report_view_report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.ReportValue.litTagName, _report_view_report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.ReportValue.litTagName, _report_view_report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.ReportKey.litTagName, _report_view_report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.ReportKey.litTagName, _report_view_report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.ReportValue.litTagName, _report_view_report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.ReportValue.litTagName, _report_view_report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.ReportSectionDivider.litTagName, _report_view_report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.ReportSectionDivider.litTagName, _report_view_report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.ReportSectionHeader.litTagName, _report_view_report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.ReportSectionHeader.litTagName, exampleRenderHelper('Using a small helper', 'to render report rows'), exampleRenderHelper('This wide column defines the column width', 'for all rows'), _report_view_report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.ReportSectionDivider.litTagName, _report_view_report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.ReportSectionDivider.litTagName, _report_view_report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.Report.litTagName), container); //# sourceMappingURL=basic.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

}),
"./ui/components/report_view/report_view.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ReportView: function() { return /* reexport module object */ _ReportView_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _ReportView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportView.js */ "./ui/components/report_view/ReportView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=report_view.js.map


}),

}]);