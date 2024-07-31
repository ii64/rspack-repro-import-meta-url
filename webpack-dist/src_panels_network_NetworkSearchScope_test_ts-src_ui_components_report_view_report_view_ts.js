"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_network_NetworkSearchScope_test_ts-src_ui_components_report_view_report_view_ts"],{

/***/ "./src/panels/network/NetworkSearchScope.test.ts":
/*!*******************************************************!*\
  !*** ./src/panels/network/NetworkSearchScope.test.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./src/models/logs/logs.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _network_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./network.js */ "./src/panels/network/network.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__.describeWithLocale)('NetworkSearchScope', () => {
    let scope;
    beforeEach(() => {
        const fakeRequest1 = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.createWithoutBackendRequest('fakeId1', 'http://example.com/main.js', 'http://example.com/index.html', null);
        fakeRequest1.setRequestHeaders([{ name: 'fooRequestHeader', value: 'value1' }]);
        fakeRequest1.responseHeaders = [{ name: 'fooResponseHeader', value: 'foo value' }];
        fakeRequest1.setResourceType(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Script);
        fakeRequest1.mimeType = 'text/javascript';
        fakeRequest1.setContentDataProvider(async () => new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.ContentData.ContentData('This is the response body of request 1.\nAnd a second line.\n', false, fakeRequest1.mimeType));
        const fakeRequest2 = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.createWithoutBackendRequest('fakeId1', 'http://example.com/bundle.min.js', 'http://example.com/index.html', null);
        fakeRequest2.setRequestHeaders([{ name: 'barRequestHeader', value: 'value2' }]);
        fakeRequest2.responseHeaders = [{ name: 'barResponseHeader', value: 'bar value' }];
        fakeRequest2.setResourceType(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Script);
        fakeRequest2.mimeType = 'text/javascript';
        fakeRequest2.setContentDataProvider(async () => new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.ContentData.ContentData('This is the first line.\nAnd another line in the response body of request 2.\n', false, fakeRequest2.mimeType));
        const fakeLog = sinon.createStubInstance(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_2__.NetworkLog.NetworkLog, { requests: [fakeRequest1, fakeRequest2] });
        scope = new _network_js__WEBPACK_IMPORTED_MODULE_6__.NetworkSearchScope.NetworkSearchScope(fakeLog);
    });
    it('calls finished callback when done', async () => {
        const searchConfig = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.SearchConfig.SearchConfig('foo', false, false);
        const finishedStub = sinon.stub();
        await scope.performSearch(searchConfig, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.Progress(), () => { }, finishedStub);
        assert.isTrue(finishedStub.calledOnceWith(true));
    });
    it('finds requests by url', async () => {
        const searchConfig = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.SearchConfig.SearchConfig('main', false, false);
        const results = [];
        await scope.performSearch(searchConfig, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.Progress(), result => results.push(result), () => { });
        assert.lengthOf(results, 1);
        assert.strictEqual(results[0].label(), 'main.js');
        assert.strictEqual(results[0].matchesCount(), 1);
        assert.strictEqual(results[0].matchLabel(0), 'URL');
        assert.strictEqual(results[0].matchLineContent(0), 'http://example.com/main.js');
    });
    it('finds request header names', async () => {
        const searchConfig = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.SearchConfig.SearchConfig('fooRequest', false, false);
        const results = [];
        await scope.performSearch(searchConfig, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.Progress(), result => results.push(result), () => { });
        assert.lengthOf(results, 1);
        assert.strictEqual(results[0].label(), 'main.js');
        assert.strictEqual(results[0].matchesCount(), 1);
        assert.strictEqual(results[0].matchLabel(0), 'fooRequestHeader:');
        assert.strictEqual(results[0].matchLineContent(0), 'value1');
    });
    it('finds request header values', async () => {
        const searchConfig = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.SearchConfig.SearchConfig('value2', false, false);
        const results = [];
        await scope.performSearch(searchConfig, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.Progress(), result => results.push(result), () => { });
        assert.lengthOf(results, 1);
        assert.strictEqual(results[0].label(), 'bundle.min.js');
        assert.strictEqual(results[0].matchesCount(), 1);
        assert.strictEqual(results[0].matchLabel(0), 'barRequestHeader:');
        assert.strictEqual(results[0].matchLineContent(0), 'value2');
    });
    it('finds response header names', async () => {
        const searchConfig = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.SearchConfig.SearchConfig('barResponse', false, false);
        const results = [];
        await scope.performSearch(searchConfig, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.Progress(), result => results.push(result), () => { });
        assert.lengthOf(results, 1);
        assert.strictEqual(results[0].label(), 'bundle.min.js');
        assert.strictEqual(results[0].matchesCount(), 1);
        assert.strictEqual(results[0].matchLabel(0), 'barResponseHeader:');
        assert.strictEqual(results[0].matchLineContent(0), 'bar value');
    });
    it('finds response header values', async () => {
        const searchConfig = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.SearchConfig.SearchConfig('foo value', false, false);
        const results = [];
        await scope.performSearch(searchConfig, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.Progress(), result => results.push(result), () => { });
        assert.lengthOf(results, 1);
        assert.strictEqual(results[0].label(), 'main.js');
        assert.strictEqual(results[0].matchesCount(), 1);
        assert.strictEqual(results[0].matchLabel(0), 'fooResponseHeader:');
        assert.strictEqual(results[0].matchLineContent(0), 'foo value');
    });
    it('honors "file:" query prefixes to filter requests', async () => {
        const searchConfig = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.SearchConfig.SearchConfig('f:main.js value', false, false);
        const results = [];
        await scope.performSearch(searchConfig, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.Progress(), result => results.push(result), () => { });
        assert.lengthOf(results, 1);
        assert.strictEqual(results[0].label(), 'main.js');
        assert.strictEqual(results[0].matchesCount(), 2);
        assert.strictEqual(results[0].matchLabel(0), 'fooRequestHeader:');
        assert.strictEqual(results[0].matchLineContent(0), 'value1');
        assert.strictEqual(results[0].matchLabel(1), 'fooResponseHeader:');
        assert.strictEqual(results[0].matchLineContent(1), 'foo value');
    });
    it('finds matches in response bodies', async () => {
        const searchConfig = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.SearchConfig.SearchConfig('response body', false, false);
        const results = [];
        await scope.performSearch(searchConfig, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.Progress(), result => results.push(result), () => { });
        assert.lengthOf(results, 2);
        assert.strictEqual(results[0].label(), 'bundle.min.js');
        assert.strictEqual(results[0].matchesCount(), 1);
        assert.strictEqual(results[0].matchLabel(0), '2');
        assert.strictEqual(results[0].matchLineContent(0), 'And another line in the response body of request 2.');
        assert.strictEqual(results[1].label(), 'main.js');
        assert.strictEqual(results[1].matchesCount(), 1);
        assert.strictEqual(results[1].matchLabel(0), '1');
        assert.strictEqual(results[1].matchLineContent(0), 'This is the response body of request 1.');
    });
    it('handles "file:" prefix correctly for response body matches', async () => {
        const searchConfig = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.SearchConfig.SearchConfig('f:bundle.min.js response body', false, false);
        const results = [];
        await scope.performSearch(searchConfig, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.Progress(), result => results.push(result), () => { });
        assert.lengthOf(results, 1);
        assert.strictEqual(results[0].label(), 'bundle.min.js');
        assert.strictEqual(results[0].matchesCount(), 1);
        assert.strictEqual(results[0].matchLabel(0), '2');
        assert.strictEqual(results[0].matchLineContent(0), 'And another line in the response body of request 2.');
    });
    it('finds matches in response bodies only if all parts of a query match', async () => {
        const searchConfig = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.SearchConfig.SearchConfig('"response body""second line"', false, false);
        const results = [];
        await scope.performSearch(searchConfig, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.Progress(), result => results.push(result), () => { });
        assert.lengthOf(results, 1);
        assert.strictEqual(results[0].label(), 'main.js');
        assert.strictEqual(results[0].matchesCount(), 2);
        assert.strictEqual(results[0].matchLabel(0), '1');
        assert.strictEqual(results[0].matchLineContent(0), 'This is the response body of request 1.');
        assert.strictEqual(results[0].matchLabel(1), '2');
        assert.strictEqual(results[0].matchLineContent(1), 'And a second line.');
    });
});


/***/ }),

/***/ "./src/panels/network/network.ts":
/*!***************************************!*\
  !*** ./src/panels/network/network.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportView: () => (/* reexport module object */ _ReportView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ReportView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportView.js */ "./src/ui/components/report_view/ReportView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ })

}]);