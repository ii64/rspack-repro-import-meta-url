"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_report_view_ReportView_test_js"], {
"./ui/components/report_view/ReportView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _report_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report_view.js */ "./ui/components/report_view/report_view.js");
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
var _this = undefined;
function _templateObject() {
    var data = _tagged_template_literal([
        "\n        <",
        ">This is the key</",
        ">\n        <",
        ">This is the value</",
        ">\n      "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}



describe('ReportView', function() {
    describe('header', function() {
        it('shows the provided report title', function() {
            var report = new _report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.Report();
            report.data = {
                reportTitle: 'Title for test report'
            };
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(report);
            // TODO(szuend): Replace this with an aria selector once we can use them in unit tests.
            var header = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(report, 'div.report-title', HTMLElement);
            assert.strictEqual(header.textContent, 'Title for test report');
        });
    });
    describe('row', function() {
        it('renders the elements provided for the "key" and "value" slot', function() {
            var report = new _report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.Report();
            // clang-format off
            _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject(), _report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.ReportKey.litTagName, _report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.ReportKey.litTagName, _report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.ReportValue.litTagName, _report_view_js__WEBPACK_IMPORTED_MODULE_2__.ReportView.ReportValue.litTagName), report, {
                host: _this
            });
            // clang-format on
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(report);
            var slot = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(report, 'slot', HTMLSlotElement);
            var keyElement = report.querySelector('devtools-report-key');
            var valueElement = report.querySelector('devtools-report-value');
            assert.strictEqual(slot.assignedElements()[0], keyElement);
            assert.strictEqual(slot.assignedElements()[1], valueElement);
        });
    });
}); //# sourceMappingURL=ReportView.test.js.map


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