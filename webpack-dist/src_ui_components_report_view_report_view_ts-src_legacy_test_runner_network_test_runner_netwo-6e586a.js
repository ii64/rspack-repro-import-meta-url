(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_report_view_report_view_ts-src_legacy_test_runner_network_test_runner_netwo-6e586a"],{

/***/ "./src/panels/network/network.ts":
/*!***************************************!*\
  !*** ./src/panels/network/network.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BinaryResourceView: () => (/* reexport module object */ _BinaryResourceView_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   BlockedURLsPane: () => (/* reexport module object */ _BlockedURLsPane_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   EventSourceMessagesView: () => (/* reexport module object */ _EventSourceMessagesView_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   NetworkConfigView: () => (/* reexport module object */ _NetworkConfigView_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   NetworkDataGridNode: () => (/* reexport module object */ _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   NetworkFrameGrouper: () => (/* reexport module object */ _NetworkFrameGrouper_js__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   NetworkItemView: () => (/* reexport module object */ _NetworkItemView_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   NetworkLogView: () => (/* reexport module object */ _NetworkLogView_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   NetworkLogViewColumns: () => (/* reexport module object */ _NetworkLogViewColumns_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   NetworkManageCustomHeadersView: () => (/* reexport module object */ _NetworkManageCustomHeadersView_js__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   NetworkOverview: () => (/* reexport module object */ _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_21__),
/* harmony export */   NetworkPanel: () => (/* reexport module object */ _NetworkPanel_js__WEBPACK_IMPORTED_MODULE_22__),
/* harmony export */   NetworkSearchScope: () => (/* reexport module object */ _NetworkSearchScope_js__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   NetworkTimeCalculator: () => (/* reexport module object */ _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   NetworkWaterfallColumn: () => (/* reexport module object */ _NetworkWaterfallColumn_js__WEBPACK_IMPORTED_MODULE_12__),
/* harmony export */   RequestCookiesView: () => (/* reexport module object */ _RequestCookiesView_js__WEBPACK_IMPORTED_MODULE_13__),
/* harmony export */   RequestHTMLView: () => (/* reexport module object */ _RequestHTMLView_js__WEBPACK_IMPORTED_MODULE_14__),
/* harmony export */   RequestInitiatorView: () => (/* reexport module object */ _RequestInitiatorView_js__WEBPACK_IMPORTED_MODULE_15__),
/* harmony export */   RequestPayloadView: () => (/* reexport module object */ _RequestPayloadView_js__WEBPACK_IMPORTED_MODULE_23__),
/* harmony export */   RequestPreviewView: () => (/* reexport module object */ _RequestPreviewView_js__WEBPACK_IMPORTED_MODULE_17__),
/* harmony export */   RequestResponseView: () => (/* reexport module object */ _RequestResponseView_js__WEBPACK_IMPORTED_MODULE_16__),
/* harmony export */   RequestTimingView: () => (/* reexport module object */ _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_18__),
/* harmony export */   ResourceWebSocketFrameView: () => (/* reexport module object */ _ResourceWebSocketFrameView_js__WEBPACK_IMPORTED_MODULE_19__),
/* harmony export */   SignedExchangeInfoView: () => (/* reexport module object */ _SignedExchangeInfoView_js__WEBPACK_IMPORTED_MODULE_20__)
/* harmony export */ });
/* harmony import */ var _BinaryResourceView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BinaryResourceView.js */ "./src/panels/network/BinaryResourceView.ts");
/* harmony import */ var _BlockedURLsPane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockedURLsPane.js */ "./src/panels/network/BlockedURLsPane.ts");
/* harmony import */ var _EventSourceMessagesView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventSourceMessagesView.js */ "./src/panels/network/EventSourceMessagesView.ts");
/* harmony import */ var _NetworkConfigView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NetworkConfigView.js */ "./src/panels/network/NetworkConfigView.ts");
/* harmony import */ var _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NetworkDataGridNode.js */ "./src/panels/network/NetworkDataGridNode.ts");
/* harmony import */ var _NetworkItemView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NetworkItemView.js */ "./src/panels/network/NetworkItemView.ts");
/* harmony import */ var _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NetworkTimeCalculator.js */ "./src/panels/network/NetworkTimeCalculator.ts");
/* harmony import */ var _NetworkLogView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NetworkLogView.js */ "./src/panels/network/NetworkLogView.ts");
/* harmony import */ var _NetworkLogViewColumns_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NetworkLogViewColumns.js */ "./src/panels/network/NetworkLogViewColumns.ts");
/* harmony import */ var _NetworkFrameGrouper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NetworkFrameGrouper.js */ "./src/panels/network/NetworkFrameGrouper.ts");
/* harmony import */ var _NetworkManageCustomHeadersView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NetworkManageCustomHeadersView.js */ "./src/panels/network/NetworkManageCustomHeadersView.ts");
/* harmony import */ var _NetworkSearchScope_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NetworkSearchScope.js */ "./src/panels/network/NetworkSearchScope.ts");
/* harmony import */ var _NetworkWaterfallColumn_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NetworkWaterfallColumn.js */ "./src/panels/network/NetworkWaterfallColumn.ts");
/* harmony import */ var _RequestCookiesView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RequestCookiesView.js */ "./src/panels/network/RequestCookiesView.ts");
/* harmony import */ var _RequestHTMLView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./RequestHTMLView.js */ "./src/panels/network/RequestHTMLView.ts");
/* harmony import */ var _RequestInitiatorView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./RequestInitiatorView.js */ "./src/panels/network/RequestInitiatorView.ts");
/* harmony import */ var _RequestResponseView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./RequestResponseView.js */ "./src/panels/network/RequestResponseView.ts");
/* harmony import */ var _RequestPreviewView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./RequestPreviewView.js */ "./src/panels/network/RequestPreviewView.ts");
/* harmony import */ var _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./RequestTimingView.js */ "./src/panels/network/RequestTimingView.ts");
/* harmony import */ var _ResourceWebSocketFrameView_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ResourceWebSocketFrameView.js */ "./src/panels/network/ResourceWebSocketFrameView.ts");
/* harmony import */ var _SignedExchangeInfoView_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SignedExchangeInfoView.js */ "./src/panels/network/SignedExchangeInfoView.ts");
/* harmony import */ var _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./NetworkOverview.js */ "./src/panels/network/NetworkOverview.ts");
/* harmony import */ var _NetworkPanel_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./NetworkPanel.js */ "./src/panels/network/NetworkPanel.ts");
/* harmony import */ var _RequestPayloadView_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./RequestPayloadView.js */ "./src/panels/network/RequestPayloadView.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


















































/***/ }),

/***/ "./src/ui/components/report_view/ReportView.ts":
/*!*****************************************************!*\
  !*** ./src/ui/components/report_view/ReportView.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Report: () => (/* binding */ Report),
/* harmony export */   ReportKey: () => (/* binding */ ReportKey),
/* harmony export */   ReportSection: () => (/* binding */ ReportSection),
/* harmony export */   ReportSectionDivider: () => (/* binding */ ReportSectionDivider),
/* harmony export */   ReportSectionHeader: () => (/* binding */ ReportSectionHeader),
/* harmony export */   ReportValue: () => (/* binding */ ReportValue)
/* harmony export */ });
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './report.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportKey.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSectionDivider.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSectionHeader.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportValue.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Report_instances, _Report_shadow, _Report_reportTitle, _Report_render, _ReportSection_instances, _ReportSection_shadow, _ReportSection_render, _ReportSectionHeader_instances, _ReportSectionHeader_shadow, _ReportSectionHeader_render, _ReportSectionDivider_instances, _ReportSectionDivider_shadow, _ReportSectionDivider_render, _ReportKey_instances, _ReportKey_shadow, _ReportKey_render, _ReportValue_instances, _ReportValue_shadow, _ReportValue_render;







class Report extends HTMLElement {
    constructor() {
        super(...arguments);
        _Report_instances.add(this);
        _Report_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _Report_reportTitle.set(this, '');
    }
    set data({ reportTitle }) {
        __classPrivateFieldSet(this, _Report_reportTitle, reportTitle, "f");
        __classPrivateFieldGet(this, _Report_instances, "m", _Report_render).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _Report_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './report.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _Report_instances, "m", _Report_render).call(this);
    }
}
_Report_shadow = new WeakMap(), _Report_reportTitle = new WeakMap(), _Report_instances = new WeakSet(), _Report_render = function _Report_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="content">
        ${__classPrivateFieldGet(this, _Report_reportTitle, "f") ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `<div class="report-title">${__classPrivateFieldGet(this, _Report_reportTitle, "f")}</div>` : _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing}
        <slot></slot>
      </div>
    `, __classPrivateFieldGet(this, _Report_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(Report, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report`
});
class ReportSection extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportSection_instances.add(this);
        _ReportSection_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportSection_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportSection_instances, "m", _ReportSection_render).call(this);
    }
}
_ReportSection_shadow = new WeakMap(), _ReportSection_instances = new WeakSet(), _ReportSection_render = function _ReportSection_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section">
        <slot></slot>
      </div>
    `, __classPrivateFieldGet(this, _ReportSection_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportSection, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-section`
});
class ReportSectionHeader extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportSectionHeader_instances.add(this);
        _ReportSectionHeader_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportSectionHeader_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSectionHeader.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportSectionHeader_instances, "m", _ReportSectionHeader_render).call(this);
    }
}
_ReportSectionHeader_shadow = new WeakMap(), _ReportSectionHeader_instances = new WeakSet(), _ReportSectionHeader_render = function _ReportSectionHeader_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section-header">
        <slot></slot>
      </div>
    `, __classPrivateFieldGet(this, _ReportSectionHeader_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportSectionHeader, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-section-header`
});
class ReportSectionDivider extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportSectionDivider_instances.add(this);
        _ReportSectionDivider_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportSectionDivider_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportSectionDivider.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportSectionDivider_instances, "m", _ReportSectionDivider_render).call(this);
    }
}
_ReportSectionDivider_shadow = new WeakMap(), _ReportSectionDivider_instances = new WeakSet(), _ReportSectionDivider_render = function _ReportSectionDivider_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="section-divider">
      </div>
    `, __classPrivateFieldGet(this, _ReportSectionDivider_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportSectionDivider, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-divider`
});
class ReportKey extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportKey_instances.add(this);
        _ReportKey_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportKey_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportKey.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportKey_instances, "m", _ReportKey_render).call(this);
    }
}
_ReportKey_shadow = new WeakMap(), _ReportKey_instances = new WeakSet(), _ReportKey_render = function _ReportKey_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="key"><slot></slot></div>
    `, __classPrivateFieldGet(this, _ReportKey_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportKey, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-key`
});
class ReportValue extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReportValue_instances.add(this);
        _ReportValue_shadow.set(this, this.attachShadow({ mode: 'open' }));
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ReportValue_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './reportValue.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ReportValue_instances, "m", _ReportValue_render).call(this);
    }
}
_ReportValue_shadow = new WeakMap(), _ReportValue_instances = new WeakSet(), _ReportValue_render = function _ReportValue_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class="value"><slot></slot></div>
    `, __classPrivateFieldGet(this, _ReportValue_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReportValue, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-report-value`
});
customElements.define('devtools-report', Report);
customElements.define('devtools-report-section', ReportSection);
customElements.define('devtools-report-section-header', ReportSectionHeader);
customElements.define('devtools-report-key', ReportKey);
customElements.define('devtools-report-value', ReportValue);
customElements.define('devtools-report-divider', ReportSectionDivider);


/***/ }),

/***/ "./src/ui/components/report_view/report_view.ts":
/*!******************************************************!*\
  !*** ./src/ui/components/report_view/report_view.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportView: () => (/* reexport module object */ _ReportView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ReportView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportView.js */ "./src/ui/components/report_view/ReportView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ }),

/***/ "./src/legacy_test_runner/network_test_runner/network_test_runner.js":
/*!***************************************************************************!*\
  !*** ./src/legacy_test_runner/network_test_runner/network_test_runner.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NetworkTestRunner: () => (/* binding */ NetworkTestRunner)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_har_har_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/har/har.js */ "./src/models/har/har.ts");
/* harmony import */ var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./src/models/logs/logs.ts");
/* harmony import */ var _panels_network_network_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panels/network/network.js */ "./src/panels/network/network.ts");
/* harmony import */ var _console_test_runner_console_test_runner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../console_test_runner/console_test_runner.js */ "./src/legacy_test_runner/console_test_runner/console_test_runner.js");
/* harmony import */ var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./src/legacy_test_runner/test_runner/test_runner.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */
const NetworkTestRunner = {};

NetworkTestRunner.waitForRequestResponse = function(request) {
  if (request.responseReceivedTime !== -1) {
    return Promise.resolve(request);
  }

  return _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.waitForEvent(
      _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.Events.RequestUpdated, _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.networkManager,
      updateRequest => updateRequest === request && request.responseReceivedTime !== -1);
};

NetworkTestRunner.waitForNetworkLogViewNodeForRequest = function(request) {
  const networkLogView = _panels_network_network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkPanel.NetworkPanel.instance().networkLogView;
  const node = networkLogView.nodeForRequest(request);

  if (node) {
    return Promise.resolve(node);
  }

  console.assert(networkLogView.staleRequests.has(request));

  return _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addSnifferPromise(networkLogView, 'didRefreshForTest').then(() => {
    const node = networkLogView.nodeForRequest(request);
    console.assert(node);
    return node;
  });
};

NetworkTestRunner.waitForWebsocketFrameReceived = function(wsRequest, message) {
  for (const frame of wsRequest.frames()) {
    if (checkFrame(frame)) {
      return Promise.resolve(frame);
    }
  }

  return _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.waitForEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkRequest.Events.WebsocketFrameAdded, wsRequest, checkFrame);

  function checkFrame(frame) {
    return frame.type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkRequest.WebSocketFrameType.Receive && frame.text === message;
  }
};

NetworkTestRunner.recordNetwork = function() {
  _panels_network_network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkPanel.NetworkPanel.instance().networkLogView.setRecording(true);
};

NetworkTestRunner.networkWaterfallColumn = function() {
  return _panels_network_network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkPanel.NetworkPanel.instance().networkLogView.columns().waterfallColumn;
};

NetworkTestRunner.networkRequests = function() {
  return Array.from(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_2__.NetworkLog.NetworkLog.instance().requests());
};

NetworkTestRunner.dumpNetworkRequests = function() {
  const requests = NetworkTestRunner.networkRequests();

  requests.sort(function(a, b) {
    return a.url().localeCompare(b.url());
  });

  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult('resources count = ' + requests.length);

  for (i = 0; i < requests.length; i++) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult(requests[i].url());
  }
};

NetworkTestRunner.dumpNetworkRequestsWithSignedExchangeInfo = function() {
  for (const request of _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_2__.NetworkLog.NetworkLog.instance().requests()) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult(`* ${request.url()}`);
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult(`  failed: ${Boolean(request.failed)}`);
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult(`  statusCode: ${request.statusCode}`);
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult(`  resourceType: ${request.resourceType().name()}`);
    if (request.signedExchangeInfo()) {
      _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult('  SignedExchangeInfo');
      const header = request.signedExchangeInfo()?.header;
      if (header) {
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult(`    Request URL: ${header.requestUrl}`);
        for (const signature of header.signatures) {
          _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult(`    Certificate URL: ${signature.certUrl}`);
        }
      }
      const securityDetails = request.signedExchangeInfo()?.securityDetails;
      if (securityDetails) {
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult(`    Certificate Subject: ${securityDetails.subjectName}`);
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult(`    Certificate Issuer: ${securityDetails.issuer}`);
      }
      const errors = request.signedExchangeInfo()?.errors;
      if (errors) {
        for (const errorMessage of errors) {
          _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.addResult(`    Error: ${JSON.stringify(errorMessage)}`);
        }
      }
    }
  }
};

NetworkTestRunner.findRequestsByURLPattern = function(urlPattern) {
  return NetworkTestRunner.networkRequests().filter(function(value) {
    return urlPattern.test(value.url());
  });
};

NetworkTestRunner.makeSimpleXHR = function(method, url, async, callback) {
  NetworkTestRunner.makeXHR(method, url, async, undefined, undefined, [], false, undefined, undefined, callback);
};

NetworkTestRunner.makeSimpleXHRWithPayload = function(method, url, async, payload, callback) {
  NetworkTestRunner.makeXHR(method, url, async, undefined, undefined, [], false, payload, undefined, callback);
};

NetworkTestRunner.makeXHRWithTypedArrayPayload = function(method, url, async, payload, callback) {
  const args = {};
  args.typedArrayPayload = new TextDecoder('utf-8').decode(payload);
  NetworkTestRunner.makeXHRImpl(method, url, async, args, callback);
};

NetworkTestRunner.makeXHR = function(
    method, url, async, user, password, headers, withCredentials, payload, type, callback) {
  const args = {};
  args.user = user;
  args.password = password;
  args.headers = headers;
  args.withCredentials = withCredentials;
  args.payload = payload;
  args.type = type;
  NetworkTestRunner.makeXHRImpl(method, url, async, args, callback);
};

NetworkTestRunner.makeXHRImpl = function(method, url, async, args, callback) {
  args.method = method;
  args.url = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.url(url);
  args.async = async;

  const jsonArgs = JSON.stringify(args).replace(/\"/g, '\\"');

  function innerCallback(msg) {
    if (msg.messageText.indexOf('XHR loaded') !== -1) {
      if (callback) {
        callback();
      }
    } else {
      _console_test_runner_console_test_runner_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleTestRunner.addConsoleSniffer(innerCallback);
    }
  }

  _console_test_runner_console_test_runner_js__WEBPACK_IMPORTED_MODULE_4__.ConsoleTestRunner.addConsoleSniffer(innerCallback);
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.evaluateInPageAnonymously('makeXHRForJSONArguments("' + jsonArgs + '")');
};

NetworkTestRunner.makeFetch = function(url, requestInitializer, callback) {
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.callFunctionInPageAsync('makeFetch', [url, requestInitializer]).then(callback);
};

NetworkTestRunner.makeFetchInWorker = function(url, requestInitializer, callback) {
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.callFunctionInPageAsync('makeFetchInWorker', [url, requestInitializer]).then(callback);
};

NetworkTestRunner.clearNetworkCache = function() {
  // This turns cache off and then on, effectively clearning the memory cache.
  return Promise.all([
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.NetworkAgent.clearBrowserCache(),
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.NetworkAgent.setCacheDisabled(true).then(() => _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.NetworkAgent.setCacheDisabled(false))
  ]);
};

NetworkTestRunner.HARPropertyFormatters = {
  bodySize: 'formatAsTypeName',
  compression: 'formatAsTypeName',
  connection: 'formatAsTypeName',
  headers: 'formatAsTypeName',
  headersSize: 'formatAsTypeName',
  id: 'formatAsTypeName',
  onContentLoad: 'formatAsTypeName',
  onLoad: 'formatAsTypeName',
  receive: 'formatAsTypeName',
  startedDateTime: 'formatAsRecentTime',
  time: 'formatAsTypeName',
  timings: 'formatAsTypeName',
  version: 'formatAsTypeName',
  wait: 'formatAsTypeName',
  _transferSize: 'formatAsTypeName',
  _error: 'skip',
  _initiator: 'formatAsTypeName',
  _priority: 'formatAsTypeName'
};

NetworkTestRunner.HARPropertyFormattersWithSize = JSON.parse(JSON.stringify(NetworkTestRunner.HARPropertyFormatters));
NetworkTestRunner.HARPropertyFormattersWithSize.size = 'formatAsTypeName';

NetworkTestRunner.buildHARLog = _models_har_har_js__WEBPACK_IMPORTED_MODULE_1__.Log.Log.build;
NetworkTestRunner.buildHARLogEntry = _models_har_har_js__WEBPACK_IMPORTED_MODULE_1__.Log.Entry.build;
NetworkTestRunner.writeHARLog = _models_har_har_js__WEBPACK_IMPORTED_MODULE_1__.Writer.Writer.write;
NetworkTestRunner.networkLog = () => _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_2__.NetworkLog.NetworkLog.instance();
NetworkTestRunner.NetworkLogEvents = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_2__.NetworkLog.Events;

_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_5__.TestRunner.deprecatedInitAsync(`
  let lastXHRIndex = 0;

  function xhrLoadedCallback() {
    console.log('XHR loaded: ' + ++lastXHRIndex);
  }

  function makeSimpleXHR(method, url, async, callback) {
    makeSimpleXHRWithPayload(method, url, async, null, callback);
  }

  function makeSimpleXHRWithPayload(method, url, async, payload, callback) {
    makeXHR(method, url, async, undefined, undefined, [], false, payload, undefined, callback);
  }

  function makeXHR(method, url, async, user, password, headers, withCredentials, payload, type, callback) {
    let xhr = new XMLHttpRequest();

    if (type == undefined)
      xhr.responseType = '';
    else
      xhr.responseType = type;

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (typeof callback === 'function')
          callback();
      }
    };

    xhr.open(method, url, async, user, password);
    xhr.withCredentials = withCredentials;

    for (let i = 0; i < headers.length; ++i)
      xhr.setRequestHeader(headers[i][0], headers[i][1]);

    try { xhr.send(payload); } catch (e) {}
  }

  function makeXHRForJSONArguments(jsonArgs) {
    let args = JSON.parse(jsonArgs);
    let payload = args.payload;

    if (args.typedArrayPayload)
      payload = new TextEncoder('utf-8').encode(args.typedArrayPayload);

    makeXHR(
      args.method,
      args.url,
      args.async,
      args.user,
      args.password,
      args.headers || [],
      args.withCredentials,
      payload,
      args.type,
      xhrLoadedCallback
    );
  }

  function makeFetch(url, requestInitializer) {
    return fetch(url, requestInitializer).then(res => {
      res.text();
      return res;
    }).catch(e => e);
  }

  function makeFetchInWorker(url, requestInitializer) {
    return new Promise(resolve => {
      let worker = new Worker('/devtools/network/resources/fetch-worker.js');

      worker.onmessage = event => {
        resolve(event.data);
      };

      worker.postMessage({
        url: url,
        init: requestInitializer
      });
    });
  }
`);


/***/ }),

/***/ "./src/legacy_test_runner/test_runner/test_runner.js":
/*!***********************************************************!*\
  !*** ./src/legacy_test_runner/test_runner/test_runner.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestRunner: () => (/* binding */ globalTestRunner),
/* harmony export */   _TestObserver: () => (/* binding */ _TestObserver),
/* harmony export */   _executeTestScript: () => (/* binding */ _executeTestScript)
/* harmony export */ });
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./src/models/trace/trace.ts");
/* harmony import */ var _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TestRunner.js */ "./src/legacy_test_runner/test_runner/TestRunner.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// @ts-nocheck This file is not checked by TypeScript as it has a lot of legacy code.






/**
 * @param {!SDK.Target.Target} target
 */
function _setupTestHelpers(target) {
  self.TestRunner.BrowserAgent = target.browserAgent();
  self.TestRunner.CSSAgent = target.cssAgent();
  self.TestRunner.DeviceOrientationAgent = target.deviceOrientationAgent();
  self.TestRunner.DOMAgent = target.domAgent();
  self.TestRunner.DOMDebuggerAgent = target.domdebuggerAgent();
  self.TestRunner.DebuggerAgent = target.debuggerAgent();
  self.TestRunner.EmulationAgent = target.emulationAgent();
  self.TestRunner.HeapProfilerAgent = target.heapProfilerAgent();
  self.TestRunner.InputAgent = target.inputAgent();
  self.TestRunner.InspectorAgent = target.inspectorAgent();
  self.TestRunner.NetworkAgent = target.networkAgent();
  self.TestRunner.OverlayAgent = target.overlayAgent();
  self.TestRunner.PageAgent = target.pageAgent();
  self.TestRunner.ProfilerAgent = target.profilerAgent();
  self.TestRunner.RuntimeAgent = target.runtimeAgent();
  self.TestRunner.TargetAgent = target.targetAgent();

  self.TestRunner.networkManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkManager.NetworkManager);
  self.TestRunner.securityOriginManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SecurityOriginManager.SecurityOriginManager);
  self.TestRunner.storageKeyManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageKeyManager.StorageKeyManager);
  self.TestRunner.resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
  self.TestRunner.debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
  self.TestRunner.runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
  self.TestRunner.domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
  self.TestRunner.domDebuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerModel);
  self.TestRunner.cssModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
  self.TestRunner.cpuProfilerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CPUProfilerModel.CPUProfilerModel);
  self.TestRunner.overlayModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.OverlayModel.OverlayModel);
  self.TestRunner.serviceWorkerManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorkerManager.ServiceWorkerManager);
  self.TestRunner.tracingManager = target.model(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.TracingManager.TracingManager);
  self.TestRunner.mainTarget = target;
}

async function _executeTestScript() {
  const testScriptURL = /** @type {string} */ (_core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.Runtime.queryParam('test'));
  if (_TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.isDebugTest()) {
    /* eslint-disable no-console */
    _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.setInnerResult(console.log);
    _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.setInnerCompleteTest(() => console.log('Test completed'));
    /* eslint-enable no-console */

    // Auto-start unit tests
    self.test = async function() {
      await __webpack_require__("./src/legacy_test_runner/test_runner lazy recursive")(testScriptURL);
    };
    return;
  }

  try {
    await __webpack_require__("./src/legacy_test_runner/test_runner lazy recursive")(testScriptURL);
  } catch (err) {
    _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.addResult('TEST ENDED EARLY DUE TO UNCAUGHT ERROR:');
    _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.addResult(err && err.stack || err);
    _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.addResult('=== DO NOT COMMIT THIS INTO -expected.txt ===');
    _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.completeTest();
  }
}

/** @type {boolean} */
let _startedTest = false;

/**
 * @implements {SDK.TargetManager.Observer}
 */
class _TestObserver {
  /**
   * @param {!SDK.Target.Target} target
   * @override
   */
  targetAdded(target) {
    if (target.id() === 'main' && target.type() === 'frame' ||
        target.parentTarget()?.type() === 'tab' && target.type() === 'frame' && !target.targetInfo()?.subtype?.length) {
      _setupTestHelpers(target);
      if (_startedTest) {
        return;
      }
      _startedTest = true;
      _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.loadHTML(`
        <head>
          <base href="${_TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.url()}">
        </head>
        <body>
        </body>
      `).then(() => _executeTestScript());
    }
  }

  /**
   * @param {!SDK.Target.Target} target
   * @override
   */
  targetRemoved(target) {
  }
}

_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().observeTargets(new _TestObserver());

const globalTestRunner = self.TestRunner;



/***/ }),

/***/ "./src/legacy_test_runner/test_runner lazy recursive":
/*!*******************************************************************!*\
  !*** ./src/legacy_test_runner/test_runner/ lazy namespace object ***!
  \*******************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/legacy_test_runner/test_runner lazy recursive";
module.exports = webpackEmptyAsyncContext;

/***/ })

}]);