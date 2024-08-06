"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_components_RequestTrustTokensView_test_js-ui_components_report_view_report_view_js"], {
"./panels/network/components/RequestTrustTokensView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.js */ "./panels/network/components/components.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}



(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('RequestTrustTokensView', function() {
    var mockId = 'mockId';
    var makeRequest = function(params, result) {
        return {
            trustTokenParams: function() {
                return params;
            },
            trustTokenOperationDoneEvent: function() {
                return result;
            }
        };
    };
    var renderRequestTrustTokensView = function(request) {
        var component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.RequestTrustTokensView.RequestTrustTokensView(request);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        void component.render();
        return component;
    };
    it('renders the RefreshPolicy for redemptions', function() {
        var component = renderRequestTrustTokensView(makeRequest({
            operation: "Redemption" /* Protocol.Network.TrustTokenOperationType.Redemption */ ,
            refreshPolicy: "UseCached" /* Protocol.Network.TrustTokenParamsRefreshPolicy.UseCached */ 
        }));
        var _getElementsWithinComponent = _sliced_to_array((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, 'devtools-report-value.code', HTMLElement), 2), typeSpan = _getElementsWithinComponent[0], refreshPolicySpan = _getElementsWithinComponent[1];
        assert.strictEqual(typeSpan.textContent, 'Redemption');
        assert.strictEqual(refreshPolicySpan.textContent, 'UseCached');
    });
    it('renders all issuers as a list', function() {
        var expectedIssuers = [
            'example.org',
            'foo.dev',
            'bar.com'
        ];
        var component = renderRequestTrustTokensView(makeRequest({
            operation: "Signing" /* Protocol.Network.TrustTokenOperationType.Signing */ ,
            issuers: expectedIssuers
        }));
        var issuerElements = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, 'ul.issuers-list > li', HTMLElement);
        var actualIssuers = _to_consumable_array(issuerElements).map(function(e) {
            return e.textContent;
        });
        assert.deepStrictEqual(actualIssuers.sort(), expectedIssuers.sort());
    });
    it('renders a result section with success status for successful requests', function() {
        var component = renderRequestTrustTokensView(makeRequest(undefined, {
            status: "Ok" /* Protocol.Network.TrustTokenOperationDoneEventStatus.Ok */ ,
            type: "Issuance" /* Protocol.Network.TrustTokenOperationType.Issuance */ ,
            requestId: mockId
        }));
        var simpleText = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, 'span > strong', HTMLElement);
        assert.exists(simpleText);
        assert.strictEqual(simpleText.textContent, 'Success');
    });
    it('renders a result section with failure status for failed requests', function() {
        var component = renderRequestTrustTokensView(makeRequest(undefined, {
            status: "BadResponse" /* Protocol.Network.TrustTokenOperationDoneEventStatus.BadResponse */ ,
            type: "Issuance" /* Protocol.Network.TrustTokenOperationType.Issuance */ ,
            requestId: mockId
        }));
        var simpleText = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, 'span > strong', HTMLElement);
        assert.exists(simpleText);
        assert.strictEqual(simpleText.textContent, 'Failure');
    });
}); //# sourceMappingURL=RequestTrustTokensView.test.js.map


}),
"./panels/network/components/components.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EditableSpan: function() { return /* reexport module object */ _EditableSpan_js__WEBPACK_IMPORTED_MODULE_0__; },
  HeaderSectionRow: function() { return /* reexport module object */ _HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_1__; },
  RequestHeaderSection: function() { return /* reexport module object */ _RequestHeaderSection_js__WEBPACK_IMPORTED_MODULE_2__; },
  RequestHeadersView: function() { return /* reexport module object */ _RequestHeadersView_js__WEBPACK_IMPORTED_MODULE_3__; },
  RequestTrustTokensView: function() { return /* reexport module object */ _RequestTrustTokensView_js__WEBPACK_IMPORTED_MODULE_4__; },
  ResponseHeaderSection: function() { return /* reexport module object */ _ResponseHeaderSection_js__WEBPACK_IMPORTED_MODULE_5__; },
  WebBundleInfoView: function() { return /* reexport module object */ _WebBundleInfoView_js__WEBPACK_IMPORTED_MODULE_6__; }
});
/* harmony import */var _EditableSpan_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditableSpan.js */ "./panels/network/components/EditableSpan.js");
/* harmony import */var _HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderSectionRow.js */ "./panels/network/components/HeaderSectionRow.js");
/* harmony import */var _RequestHeaderSection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RequestHeaderSection.js */ "./panels/network/components/RequestHeaderSection.js");
/* harmony import */var _RequestHeadersView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RequestHeadersView.js */ "./panels/network/components/RequestHeadersView.js");
/* harmony import */var _RequestTrustTokensView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RequestTrustTokensView.js */ "./panels/network/components/RequestTrustTokensView.js");
/* harmony import */var _ResponseHeaderSection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ResponseHeaderSection.js */ "./panels/network/components/ResponseHeaderSection.js");
/* harmony import */var _WebBundleInfoView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WebBundleInfoView.js */ "./panels/network/components/WebBundleInfoView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







 //# sourceMappingURL=components.js.map


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